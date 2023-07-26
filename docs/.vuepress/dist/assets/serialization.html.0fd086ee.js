const e={key:"v-17384ba2",path:"/ja/guides/serialization.html",title:"\u30C7\u30FC\u30BF\u306E\u30B7\u30EA\u30A2\u30E9\u30A4\u30BC\u30FC\u30B7\u30E7\u30F3",lang:"ja-JP",frontmatter:{title:"\u30C7\u30FC\u30BF\u306E\u30B7\u30EA\u30A2\u30E9\u30A4\u30BC\u30FC\u30B7\u30E7\u30F3",head:[["meta",{name:"title",content:"Solana Cookbook | Serializing Data"}],["meta",{name:"og:title",content:"Solana Cookbook | Serializing Data"}],["meta",{name:"description",content:"Learn how to serialize and deserialize data on Solana"}],["meta",{name:"og:description",content:"Learn how to serialize and deserialize data on Solana"}],["meta",{name:"og:image",content:"https://solanacookbook.com/cookbook-sharing-card.png"}],["meta",{name:"og:image:alt",content:"Solana splash card"}],["meta",{name:"twitter:card",content:"summary"}],["meta",{name:"twitter:site",content:"@solanacookbook"}],["meta",{name:"twitter:image",content:"https://solanacookbook.com/cookbook-sharing-card.png"}],["meta",{name:"robots",content:"index,follow,noodp"}],["meta",{name:"googlebot",content:"index,follow"}]],footer:"MIT Licensed"},excerpt:"",headers:[{level:2,title:"Setting up for Borsh Serialization",slug:"setting-up-for-borsh-serialization",children:[]},{level:2,title:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u547D\u4EE4\u30C7\u30FC\u30BF\u3092\u30B7\u30EA\u30A2\u30EB\u5316\u3059\u308B\u65B9\u6CD5",slug:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3066\u3099\u547D\u4EE4\u30C6\u3099\u30FC\u30BF\u3092\u30B7\u30EA\u30A2\u30EB\u5316\u3059\u308B\u65B9\u6CD5",children:[]},{level:2,title:"\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u547D\u4EE4\u30C7\u30FC\u30BF\u3092\u30C7\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u3059\u308B\u65B9\u6CD5",slug:"\u30D5\u309A\u30ED\u30AF\u3099\u30E9\u30E0\u306E\u547D\u4EE4\u30C6\u3099\u30FC\u30BF\u3092\u30C6\u3099\u30B7\u30EA\u30A2\u30E9\u30A4\u30B9\u3099\u3059\u308B\u65B9\u6CD5",children:[]},{level:2,title:"\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u547D\u4EE4\u30C7\u30FC\u30BF\u3092\u30C7\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u3059\u308B\u65B9\u6CD5",slug:"\u30D5\u309A\u30ED\u30AF\u3099\u30E9\u30E0\u306E\u547D\u4EE4\u30C6\u3099\u30FC\u30BF\u3092\u30C6\u3099\u30B7\u30EA\u30A2\u30E9\u30A4\u30B9\u3099\u3059\u308B\u65B9\u6CD5-1",children:[{level:3,title:"Pack",slug:"pack",children:[]},{level:3,title:"\u30B7\u30EA\u30A2\u30E9\u30A4\u30BC\u30FC\u30B7\u30E7\u30F3/\u30C7\u30B7\u30EA\u30A2\u30E9\u30A4\u30BC\u30FC\u30B7\u30E7\u30F3",slug:"\u30B7\u30EA\u30A2\u30E9\u30A4\u30BB\u3099\u30FC\u30B7\u30E7\u30F3-\u30C6\u3099\u30B7\u30EA\u30A2\u30E9\u30A4\u30BB\u3099\u30FC\u30B7\u30E7\u30F3",children:[]},{level:3,title:"\u4F7F\u7528\u65B9\u6CD5",slug:"\u4F7F\u7528\u65B9\u6CD5",children:[]}]},{level:2,title:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3067\u30A2\u30AB\u30A6\u30F3\u30C8 \u30C7\u30FC\u30BF\u3092\u30C7\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u3059\u308B\u65B9\u6CD5",slug:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3066\u3099\u30A2\u30AB\u30A6\u30F3\u30C8-\u30C6\u3099\u30FC\u30BF\u3092\u30C6\u3099\u30B7\u30EA\u30A2\u30E9\u30A4\u30B9\u3099\u3059\u308B\u65B9\u6CD5",children:[]},{level:2,title:"\u4E00\u822C\u7684\u306A Solana TS/JS \u30DE\u30C3\u30D4\u30F3\u30B0",slug:"\u4E00\u822C\u7684\u306A-solana-ts-js-\u30DE\u30C3\u30D2\u309A\u30F3\u30AF\u3099",children:[]},{level:2,title:"\u3088\u308A\u9AD8\u5EA6\u306A\u69CB\u9020",slug:"\u3088\u308A\u9AD8\u5EA6\u306A\u69CB\u9020",children:[{level:3,title:"COption",slug:"coption",children:[]}]},{level:2,title:"\u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599",slug:"\u305D\u306E\u4ED6\u53C2\u8003\u8CC7\u6599",children:[]}],git:{updatedTime:1682188031e3,contributors:[{name:"PokoPoko2ry",email:"40916036+PokoPoko2ry@users.noreply.github.com",commits:1}]},filePathRelative:"ja/guides/serialization.md"};export{e as data};