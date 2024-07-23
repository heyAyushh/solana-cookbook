import * as fs from 'node:fs';
import * as path from 'node:path';
import { execa, ExecaError } from 'execa';

// Function to read the exclude files list and return an array of regex patterns and plain strings
function getExcludePatterns(filePath: string): (string | RegExp)[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '' && !line.startsWith('#'))
    .map(line => {
      try {
        return new RegExp(line);
      } catch {
        return line;
      }
    });
}

// Function to check if a file is excluded by any pattern in the exclude list
function isExcluded(
  filePath: string,
  excludeList: (string | RegExp)[]
): boolean {
  return excludeList.some(pattern => {
    if (typeof pattern === 'string') {
      return filePath.includes(pattern);
    }
    return pattern.test(filePath);
  });
}

// Pure function to recursively find all .ts and .js files
function findFiles(dir: string, excludeList: (string | RegExp)[]): string[] {
  const files = fs.readdirSync(dir);

  return files
    .map(file => path.join(dir, file))
    .flatMap(filePath => {
      const fileStat = fs.statSync(filePath);

      // Ignore directories and recursively search within them
      if (fileStat.isDirectory()) {
        return findFiles(filePath, excludeList);
      }

      // Ignore files with `.preview.` in their names and excluded files
      if (filePath.includes('.preview.') || isExcluded(filePath, excludeList)) {
        return [];
      }

      // Include .ts and .js files
      if (filePath.endsWith('.ts') || filePath.endsWith('.js')) {
        return [filePath];
      }

      return [];
    });
}

async function main() {
  const excludeFilePath = path.join(__dirname, '.exclude_files');
  const excludeList = getExcludePatterns(excludeFilePath);
  const files = findFiles(`${process.cwd()}/code`, excludeList);

  console.log('Found files:', files);

  const subcommand = execa('solana-test-validator', [], {
    detached: true, // Run the process in a new session
    stdio: 'ignore', // Ignore stdio to allow the parent to exit independently
  });

  subcommand.unref(); // Allow the parent process to exit independently of the child
  console.log('solana-test-validator started.');
  // wait for a short period to ensure the solana validator has started
  await new Promise(resolve => setTimeout(resolve, 10000));
  try {
    for (const file of files) {
      console.log('*** Executing File: ', file);
      const { stdio } = await execa`pnpx tsx ${file}`;
      console.log('*** File execution completed.', stdio.join('\n'));
    }
  } catch (error) {
    if (error instanceof ExecaError) {
      console.error('Error occurred:', error.shortMessage, error.stderr); // true
    }
    // console.error('Error occurred:', error);
  } finally {
    if (subcommand?.pid) {
      try {
        process.kill(-subcommand.pid, 'SIGTERM');
        console.log('solana-test-validator killed.');
      } catch (killError) {
        console.error('Failed to kill solana-test-validator:', killError);
      }
    }
  }
}
// Execute the main function
main();
