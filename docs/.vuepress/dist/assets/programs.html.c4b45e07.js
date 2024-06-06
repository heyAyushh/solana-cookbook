import{_ as i,r as n,o as s,c as d,a as e,b as a,w as c,F as h,d as r,e as o}from"./app.07ce7a66.js";const m={},_=e("h1",{id:"programs-programlar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#programs-programlar","aria-hidden":"true"},"#"),r(" Programs (Programlar)")],-1),p=e("h2",{id:"facts-ozet-bilgiler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#facts-ozet-bilgiler","aria-hidden":"true"},"#"),r(" Facts (\xD6zet Bilgiler)")],-1),g=e("p",null,[e("strong",null,"Bilgi Tablosu")],-1),u=e("li",null,[r("Programlar, hem son kullan\u0131c\u0131lardan hem de di\u011Fer programlardan gelen "),e("a",{href:"./transactions"},"talimatlar\u0131"),r(" i\u015Fler.")],-1),k=r("T\xFCm programlar stateless\u2019d\u0131r(durumsuzdur): etkile\u015Fime girdikleri t\xFCm veriler, talimatlar yoluyla iletilen ayr\u0131 "),b=r("account'larda"),y=r(" saklan\u0131r."),f=e("li",null,[r("Programlar "),e("code",null,"executable (y\xFCr\xFCt\xFClebilir)"),r(" olarak i\u015Faretlenmi\u015F account'larda saklan\u0131r.")],-1),v=r("T\xFCm programlar "),P={href:"https://docs.solana.com/developing/runtime-facilities/programs#bpf-loader",target:"_blank",rel:"noopener noreferrer"},L=r("BPF Loader"),z=r("'a aittir ve "),S={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},B=r("Solana Runtime"),x=r(" taraf\u0131ndan y\xFCr\xFCt\xFCl\xFCr."),R=r("Geli\u015Ftiriciler en yayg\u0131n olarak Rust veya C++'da programlar yazarlar, ancak "),F={href:"https://llvm.org/",target:"_blank",rel:"noopener noreferrer"},D=r("LLVM"),w=r("'nin "),A={href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter",target:"_blank",rel:"noopener noreferrer"},C=r("BPF"),T=r(" arka ucunu hedefleyen herhangi bir dili se\xE7ebilirler."),N=o("<li>T\xFCm programlar\u0131n, talimat i\u015Flemenin ger\xE7ekle\u015Fti\u011Fi tek bir giri\u015F noktas\u0131 vard\u0131r. (<code>process_instruction</code>); parametreler her zaman \u015Funlar\u0131 i\xE7erir: <ul><li><code>program_id</code>: <code>pubkey</code></li><li><code>accounts</code>: <code>array</code>,</li><li><code>instruction_data</code>: <code>byte array</code></li></ul></li>",1),E=e("h2",{id:"deep-dive-derinlemesine-bak\u0131s",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deep-dive-derinlemesine-bak\u0131s","aria-hidden":"true"},"#"),r(" Deep Dive (Derinlemesine Bak\u0131\u015F)")],-1),I=e("p",null,"Di\u011Fer bir\xE7ok blockchainden farkl\u0131 olarak Solana, kodu verilerden tamamen ay\u0131r\u0131r. Programlar\u0131n etkile\u015Fimde bulundu\u011Fu t\xFCm veriler ayr\u0131 account'larda saklan\u0131r ve talimatlar arac\u0131l\u0131\u011F\u0131yla referans olarak iletilir. Bu model, tek bir genel program\u0131n ek da\u011F\u0131t\u0131mlar gerektirmeden \xE7e\u015Fitli account'larda \xE7al\u0131\u015Fmas\u0131na izin verir. Bu kal\u0131b\u0131n yayg\u0131n \xF6rnekleri, Native(yerel) ve SPL Programlar\u0131nda g\xF6r\xFCl\xFCr.",-1),M=e("h3",{id:"native-program-lar-solana-program-library-spl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#native-program-lar-solana-program-library-spl","aria-hidden":"true"},"#"),r(" Native Program\u2019lar & Solana Program Library (SPL)")],-1),V=e("p",null,"Solana, on-chain etkile\u015Fimler i\xE7in temel yap\u0131 ta\u015Flar\u0131 olarak hizmet eden bir dizi programla donat\u0131lm\u0131\u015F olarak gelir. Bu programlar Native Programlar ve Solana Program Library (SPL) Programlar\u0131 olarak ikiye ayr\u0131l\u0131r.",-1),O=e("p",null,"Native Program\u2019lar, validator\u2019leri \xE7al\u0131\u015Ft\u0131rmak i\xE7in gereken temel i\u015Flevleri sa\u011Flar. Bu programlar aras\u0131nda en \xE7ok bilineni, yeni account\u2019lar\u0131n y\xF6netilmesinden ve iki taraf aras\u0131nda SOL transferinden sorumlu olan Sistem Program\u0131d\u0131r.",-1),j=r("SPL Programlar\u0131, token olu\u015Fturma, takas etme ve \xF6d\xFCn\xE7 vermenin yan\u0131 s\u0131ra stake pool (hisse havuzu) olu\u015Fturma ve on-chain name service dahil olmak \xFCzere bir dizi on-chain etkinli\u011Fi destekler. SPL Token Program\u0131 do\u011Frudan CLI arac\u0131l\u0131\u011F\u0131yla \xE7a\u011Fr\u0131labilirken, "),G={href:"https://spl.solana.com/associated-token-account",target:"_blank",rel:"noopener noreferrer"},H=r("Associated Token Account Program"),K=r(" gibi di\u011Ferleri genellikle \xF6zel programlardan olu\u015Fur."),U=e("h3",{id:"writing-programs-program-yazma",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#writing-programs-program-yazma","aria-hidden":"true"},"#"),r(" Writing Programs (Program Yazma)")],-1),J=r("Programlar en yayg\u0131n olarak Rust veya C++ ile geli\u015Ftirilir, ancak LLVM'nin BPF arka ucunu hedefleyen herhangi bir dille geli\u015Ftirilebilir. "),W={href:"https://neon-labs.org/",target:"_blank",rel:"noopener noreferrer"},Y=r("Neon Labs"),q=r(" ve "),Q={href:"https://solang.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},X=r("Solang"),Z=r("'\u0131n son giri\u015Fimleri, "),$={href:"https://ethereum.org/en/developers/docs/evm/",target:"_blank",rel:"noopener noreferrer"},ee=r("EVM"),re=r(" uyumlulu\u011Funu m\xFCmk\xFCn k\u0131lar ve geli\u015Ftiricilerin Solidity'de programlar yazmas\u0131na olanak tan\u0131r."),ae=o("<p>Rust tabanl\u0131 programlar\u0131n \xE7o\u011Fu a\u015Fa\u011F\u0131daki mimariye uyar:</p><table><thead><tr><th>Dosya</th><th>A\xE7\u0131klama</th></tr></thead><tbody><tr><td>lib.rs</td><td>Mod\xFCllerin kaydedilmesi</td></tr><tr><td>entrypoint.rs</td><td>Programa ba\u015Flang\u0131\xE7</td></tr><tr><td>instruction.rs</td><td>Program API&#39;si, komut verilerini (de)serialize etme</td></tr><tr><td>processor.rs</td><td>Program mant\u0131\u011F\u0131n\u0131n bulundu\u011Fu b\xF6l\xFCm</td></tr><tr><td>state.rs</td><td>Program nesneleri, durumu (de) serialize etme</td></tr><tr><td>error.rs</td><td>Programa \xF6zg\xFC hatalar</td></tr></tbody></table>",2),te=r("Son zamanlarda, "),oe={href:"https://github.com/coral-xyz/anchor",target:"_blank",rel:"noopener noreferrer"},ne=r("Anchor"),le=r(" program geli\u015Ftirmek i\xE7in pop\xFCler bir framework olarak ortaya \xE7\u0131km\u0131\u015Ft\u0131r. Anchor, Ruby on Rails'e benzeyen, Rust tabanl\u0131 geli\u015Ftirme i\xE7in (de)serialization s\xFCrecini kolayla\u015Ft\u0131ran, \xFCzerinde d\xFC\u015F\xFCn\xFClm\xFC\u015F bir frameworkt\xFCr."),ie=o("<p>Programlar genellikle <em>Testnet</em> veya <em>Mainnet</em>&#39;e da\u011F\u0131t\u0131lmadan \xF6nce <em>Localhost</em> ve <em>Devnet</em> geli\u015Ftirilir ve test edilir. Solana a\u015Fa\u011F\u0131daki ortamlar\u0131 destekler:</p><table><thead><tr><th>Cluster Environmen</th><th>RPC Connection URL</th></tr></thead><tbody><tr><td>Mainnet-beta</td><td>https://api.mainnet-beta.solana.com</td></tr><tr><td>Testnet</td><td>https://api.testnet.solana.com</td></tr><tr><td>Devnet</td><td>https://api.devnet.solana.com</td></tr><tr><td>Localhost</td><td>Default port: 8899 (e.g. http://localhost:8899, http://192.168.1.88:8899)</td></tr></tbody></table>",2),se=r("Bir ortamda deploy edildikten sonra Client\u2019lar ilgili cluster'la olan "),de={href:"https://docs.solana.com/developing/clients/jsonrpc-api",target:"_blank",rel:"noopener noreferrer"},ce=r("RPC ba\u011Flant\u0131lar\u0131"),he=r(" arac\u0131l\u0131\u011F\u0131yla on-chain programlarla etkile\u015Fime girebilir."),me=e("h3",{id:"deploying-programs-programlar\u0131-cal\u0131st\u0131rma",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deploying-programs-programlar\u0131-cal\u0131st\u0131rma","aria-hidden":"true"},"#"),r(" Deploying Programs (Programlar\u0131 \xC7al\u0131\u015Ft\u0131rma)")],-1),_e=r("Geli\u015Ftiriciler programlar\u0131n\u0131 "),pe={href:"https://docs.solana.com/cli/deploy-a-program",target:"_blank",rel:"noopener noreferrer"},ge=r("CLI"),ue=r(" arac\u0131l\u0131\u011F\u0131yla \xE7al\u0131\u015Ft\u0131rabilir:"),ke=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>solana program deploy <span class="token operator">&lt;</span>PROGRAM_FILEPATH<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),be=r("Bir program \xE7al\u0131\u015Ft\u0131\u011F\u0131nda, bir "),ye={href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format",target:"_blank",rel:"noopener noreferrer"},fe=r("ELF"),ve=r(" shared object\u2019e (BPF bayt kodu i\xE7eren) derlenir ve Solana cluster\u2019a y\xFCklenir. Programlar account\u2019larda ya\u015Far (Solana'daki di\u011Fer her \u015Fey gibi), ancak bu account'lar "),Pe=e("code",null,"executable",-1),Le=r(" olarak i\u015Faretlenir ve BPF Loader\u2019a atan\u0131r. Bu account\u2019\u0131n adresi "),ze=e("code",null,"program_id",-1),Se=r(" olarak adland\u0131r\u0131l\u0131r ve gelecekteki t\xFCm i\u015Flemlerde programa ba\u015Fvurmak i\xE7in kullan\u0131l\u0131r."),Be=o('<p>Solana, Upgradable BPF Loader da dahil olmak \xFCzere birden fazla BPF Loader\u2019\u0131 destekler. BPF Loader, program\u0131n account\u2019\u0131n\u0131 y\xF6netmekten ve <code>program_id</code> arac\u0131l\u0131\u011F\u0131yla client\u2019lara (client\u2019lara) sunmaktan sorumludur. T\xFCm programlarda instruction i\u015Flemenin ger\xE7ekle\u015Fti\u011Fi tek bir giri\u015F noktas\u0131 vard\u0131r (<code>proses_instruction</code>) ve parametreler her zaman \u015Funlar\u0131 i\xE7erir:</p><ul><li><code>program_id</code>: <code>pubkey</code></li><li><code>accounts</code>: <code>array</code>,</li><li><code>instruction_data</code>: <code>byte array</code></li></ul><p>\xC7a\u011Fr\u0131ld\u0131klar\u0131nda programlar Solana Runtime taraf\u0131ndan y\xFCr\xFCt\xFCl\xFCr.</p><h2 id="other-resources-diger-kaynaklar" tabindex="-1"><a class="header-anchor" href="#other-resources-diger-kaynaklar" aria-hidden="true">#</a> Other Resources (Di\u011Fer Kaynaklar)</h2>',4),xe={href:"https://docs.solana.com/developing/on-chain-programs/overview",target:"_blank",rel:"noopener noreferrer"},Re=r("Official Documentation"),Fe={href:"https://spl.solana.com/",target:"_blank",rel:"noopener noreferrer"},De=r("SPL Documentation"),we={href:"https://jstarry.notion.site/Program-deploys-29780c48794c47308d5f138074dd9838",target:"_blank",rel:"noopener noreferrer"},Ae=r("Program Deploys by Justin Starry"),Ce={href:"https://book.solmeet.dev/notes/solana-starter-kit",target:"_blank",rel:"noopener noreferrer"},Te=r("Solana Starter Kit by Iron Addicted Dog"),Ne={href:"https://paulx.dev/blog/2021/01/14/programming-on-solana-an-introduction/",target:"_blank",rel:"noopener noreferrer"},Ee=r("Programming on Solana by Paulx"),Ie={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},Me=r("An Introduction to the Solana Blockchain by Hana"),Ve={href:"https://github.com/coral-xyz/anchor",target:"_blank",rel:"noopener noreferrer"},Oe=r("Anchor");function je(Ge,He){const l=n("RouterLink"),t=n("ExternalLinkIcon");return s(),d(h,null,[_,p,g,e("ul",null,[u,e("li",null,[k,a(l,{to:"/tr/core-concepts/accounts.html"},{default:c(()=>[b]),_:1}),y]),f,e("li",null,[v,e("a",P,[L,a(t)]),z,e("a",S,[B,a(t)]),x]),e("li",null,[R,e("a",F,[D,a(t)]),w,e("a",A,[C,a(t)]),T]),N]),E,I,M,V,O,e("p",null,[j,e("a",G,[H,a(t)]),K]),U,e("p",null,[J,e("a",W,[Y,a(t)]),q,e("a",Q,[X,a(t)]),Z,e("a",$,[ee,a(t)]),re]),ae,e("p",null,[te,e("a",oe,[ne,a(t)]),le]),ie,e("p",null,[se,e("a",de,[ce,a(t)]),he]),me,e("p",null,[_e,e("a",pe,[ge,a(t)]),ue]),ke,e("p",null,[be,e("a",ye,[fe,a(t)]),ve,Pe,Le,ze,Se]),Be,e("ul",null,[e("li",null,[e("a",xe,[Re,a(t)])]),e("li",null,[e("a",Fe,[De,a(t)])]),e("li",null,[e("a",we,[Ae,a(t)])]),e("li",null,[e("a",Ce,[Te,a(t)])]),e("li",null,[e("a",Ne,[Ee,a(t)])]),e("li",null,[e("a",Ie,[Me,a(t)])]),e("li",null,[e("a",Ve,[Oe,a(t)])])])],64)}var Ue=i(m,[["render",je]]);export{Ue as default};