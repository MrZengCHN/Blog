import{_ as E,i as G,f as p,m as N,c as d,a as s,b as n,p as b,j as v,w as m,k as I,d as l,u as a,h as j,F as R,r as A,l as x,o as r,t as L}from"./index-BJYPJtzb.js";import{_ as P}from"./cover-BeDOmVc6.js";const z="/Blog/assets/effect-CF4Gyiyo.png",w="/Blog/assets/comic-BEJZgRBX.jpg",h="/Blog/assets/step1-CkoXWHoT.jpg",y="/Blog/assets/step2-BMQzje3T.jpg",k="/Blog/assets/step3-DRq4-nq_.jpg",C="/Blog/assets/mobile_effect-BsxZePSh.jpg",_="/Blog/assets/desktop_step1-C7zWTV3w.png",T="/Blog/assets/desktop_step2-Bo52yXSS.png",U={class:"container mx-auto px-4 py-8 max-w-4xl"},V={class:"text-sm breadcrumbs mb-6 animate-fade-in-down"},$={class:"prose lg:prose-xl mx-auto bg-base-100 p-8 rounded-box shadow-lg animate-fade-in-up animation-delay-300"},K={class:"mb-12"},F={class:"mb-8 text-center"},D=["src"],H={class:"mb-12"},q={class:"mockup-code bg-[#282c34] text-[#abb2bf] shadow-xl relative group"},W={key:0},J={key:1},Z=["data-prefix"],X={class:"mb-12"},Q={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},O={class:"card bg-base-100 border border-base-300 shadow-sm"},Y={class:"px-4 pt-4"},tt=["src"],st={class:"card bg-base-100 border border-base-300 shadow-sm"},at={class:"px-4 pt-4"},et=["src"],ot={class:"mb-12"},nt={class:"mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"},lt={class:"card bg-base-100 border border-base-300 shadow-sm"},dt={class:"px-4 pt-4"},rt=["src"],ft={class:"card bg-base-100 border border-base-300 shadow-sm"},it={class:"px-4 pt-4"},ct=["src"],pt={class:"card bg-base-100 border border-base-300 shadow-sm"},vt={class:"px-4 pt-4"},mt=["src"],ut={class:"mt-6"},gt={class:"flex justify-center"},bt={class:"w-full max-w-xs overflow-hidden rounded-2xl shadow-xl border border-base-300"},xt=["src"],wt={class:"flex justify-between items-center mt-12 pt-8 border-t border-base-200 animate-fade-in-up animation-delay-500"},ht=["src"],yt=["src"],B=`const main = (config) => {
    const rules = config.rules;
    const lastRule = rules[rules.length - 1];
    const profileName = lastRule.split(",").pop();

    // 1. 配置常量
    const TEST_URL = "http://www.gstatic.com/generate_204";
    const TEST_INTERVAL = 600;

    // 2. 国家配置
    const countriesConfig = [
        { name: "🇺🇸 美国", keywords: ["美国", "United States", "US", "🇺🇸"] },
        { name: "🇯🇵 日本", keywords: ["日本", "Japan", "JP", "🇯🇵"] },
        { name: "🇸🇬 新加坡", keywords: ["新加坡", "Singapore", "SG", "🇸🇬"] },
        { name: "🇹🇼 台湾", keywords: ["台湾", "Taiwan", "TW", "CN_TW", "🇹🇼"] },
        { name: "🇭🇰 香港", keywords: ["香港", "Hong Kong", "HK", "CN_HK", "🇭🇰"] },
        { name: "🇩🇪 德国", keywords: ["德国", "Germany", "DE", "🇩🇪"] },
        { name: "🇬🇧 英国", keywords: ["英国", "United Kingdom", "UK", "🇬🇧"] },
        { name: "🇫🇷 法国", keywords: ["法国", "France", "FR", "🇫🇷"] },
        { name: "🇨🇦 加拿大", keywords: ["加拿大", "Canada", "CA", "🇨🇦"] },
        { name: "🇰🇷 韩国", keywords: ["韩国", "Korea", "KR", "🇰🇷"] },
        { name: "🇦🇺 澳大利亚", keywords: ["澳大利亚", "Australia", "AU", "🇦🇺"] },
        { name: "🇦🇪 阿联酋", keywords: ["阿联酋", "UAE", "Dubai", "🇦🇪"] },
        { name: "🇲🇴 澳门", keywords: ["澳门", "Macau", "MO", "🇲🇴"] },
        { name: "🇮🇳 印度", keywords: ["印度", "India", "IN", "🇮🇳"] },
        { name: "🇧🇷 巴西", keywords: ["巴西", "Brazil", "BR", "🇧🇷"] },
        { name: "🇷🇺 俄罗斯", keywords: ["俄罗斯", "Russia", "RU", "🇷🇺"] },
        { name: "🇹🇷 土耳其", keywords: ["土耳其", "Turkey", "TR", "🇹🇷"] },
        { name: "🇹🇭 泰国", keywords: ["泰国", "Thailand", "TH", "🇹🇭"] },
        { name: "🇲🇾 马来西亚", keywords: ["马来西亚", "Malaysia", "MY", "🇲🇾"] },
        { name: "🇻🇳 越南", keywords: ["越南", "Vietnam", "VN", "🇻🇳"] },
        { name: "🇵🇭 菲律宾", keywords: ["菲律宾", "Philippines", "PH", "🇵🇭"] },
        { name: "🇦🇷 阿根廷", keywords: ["阿根廷", "Argentina", "AR", "🇦🇷"] },
        { name: "🇰🇿 哈萨克斯坦", keywords: ["哈萨克斯坦", "Kazakhstan", "KZ", "🇰🇿"] },
        { name: "🇪🇬 埃及", keywords: ["埃及", "Egypt", "EG", "🇪🇬"] },
        { name: "🇵🇰 巴基斯坦", keywords: ["巴基斯坦", "Pakistan", "PK", "🇵🇰"] },
        { name: "🇳🇬 尼日利亚", keywords: ["尼日利亚", "Nigeria", "NG", "🇳🇬"] },
        { name: "🇺🇦 乌克兰", keywords: ["乌克兰", "Ukraine", "UA", "🇺🇦"] },
        { name: "🇰🇭 柬埔寨", keywords: ["柬埔寨", "Cambodia", "KH", "🇰🇭"] },
        { name: "🇲🇲 缅甸", keywords: ["缅甸", "Myanmar", "MM", "🇲🇲"] },
        { name: "🇦🇶 南极洲", keywords: ["南极洲", "Antarctica", "AQ", "🇦🇶"] }
    ];

    // 3. 初始化 Map
    const countryMap = new Map();
    countriesConfig.forEach(c => countryMap.set(c.name, {
        proxies: [],
        keywords: c.keywords
    }));

    const proxies = config.proxies || [];

    // 4. 分类节点
    proxies.forEach(proxy => {
        const matchedCountry = countriesConfig.find(c =>
            c.keywords.some(keyword => proxy.name.includes(keyword))
        );

        if (matchedCountry) {
            countryMap.get(matchedCountry.name).proxies.push(proxy.name);
        }
    });

    // 5. 组装策略组
    const countryGroups = [];
    const mainGroupProxies = [];

    for (const [name, data] of countryMap) {
        if (data.proxies.length > 0) {
            const urlTestName = \`⚡ \${name}\`;
            const loadBalanceName = \`⚖️ \${name}\`;

            // 主选择组中添加两种模式
            mainGroupProxies.push(urlTestName);
            mainGroupProxies.push(loadBalanceName);

            // url-test 组（自动选择最快）
            countryGroups.push({
                name: urlTestName,
                type: "url-test",
                url: TEST_URL,
                interval: TEST_INTERVAL,
                tolerance: 50,
                proxies: data.proxies
            });

            // load-balance 组（负载均衡）
            countryGroups.push({
                name: loadBalanceName,
                type: "load-balance",
                url: TEST_URL,
                interval: TEST_INTERVAL,
                strategy: "round-robin",
                proxies: data.proxies
            });
        }
    }

    // 6. 主选择组
    const mainGroup = {
        name: profileName,
        type: "select",
        proxies: mainGroupProxies.length > 0 ? [...mainGroupProxies, "DIRECT"] : ["DIRECT"]
    };

    // 7. 覆盖 proxy-groups
    config["proxy-groups"] = [mainGroup, ...countryGroups];

    return config;
};
`,kt={__name:"ClashGlobalExtension",setup(Ct){G(()=>{window.scrollTo(0,0)});const f=p(!1),i=p(!1),o=p(null),M=N(()=>B.split(`
`)),S=async()=>{try{await navigator.clipboard.writeText(B),f.value=!0,setTimeout(()=>{f.value=!1},2e3)}catch(u){console.error("Failed to copy:",u)}};return(u,t)=>{const c=I("router-link");return r(),d("div",U,[s("div",V,[s("ul",null,[s("li",null,[v(c,{to:"/"},{default:m(()=>[...t[13]||(t[13]=[l("首页",-1)])]),_:1})]),s("li",null,[v(c,{to:"/blog"},{default:m(()=>[...t[14]||(t[14]=[l("博客",-1)])]),_:1})]),t[15]||(t[15]=s("li",null,"Clash全局扩展脚本分享",-1))])]),t[35]||(t[35]=n('<div class="mb-8 text-center animate-fade-in-down" data-v-634f5f6f><h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-v-634f5f6f> Clash全局扩展脚本分享 </h1><div class="flex flex-wrap justify-center items-center gap-4 text-base-content/70 text-sm mb-8" data-v-634f5f6f><div class="flex items-center gap-2" data-v-634f5f6f><span class="font-medium" data-v-634f5f6f>Mr. Zeng</span></div><span class="hidden md:inline" data-v-634f5f6f>•</span><span data-v-634f5f6f>2025年12月4日</span><span class="hidden md:inline" data-v-634f5f6f>•</span><div class="flex gap-2" data-v-634f5f6f><span class="badge badge-primary badge-outline" data-v-634f5f6f>Clash</span><span class="badge badge-secondary badge-outline" data-v-634f5f6f>JavaScript</span><span class="badge badge-accent badge-outline" data-v-634f5f6f>Proxy</span></div></div><figure class="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-base-200 mb-8" data-v-634f5f6f><img src="'+P+'" alt="Clash Global Extension Script" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-v-634f5f6f></figure></div>',1)),s("article",$,[s("section",K,[t[17]||(t[17]=s("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[s("span",{class:"text-primary"},"#"),l(" 脚本介绍 ")],-1)),s("div",F,[s("img",{src:a(w),alt:"Clash Script Comic",class:"rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto cursor-zoom-in hover:shadow-xl transition-shadow duration-300",onClick:t[0]||(t[0]=e=>i.value=!0)},null,8,D),t[16]||(t[16]=s("p",{class:"text-sm text-base-content/60 mt-2"},"点击查看大图",-1))]),t[18]||(t[18]=n('<div class="bg-base-200 p-6 rounded-lg border-l-4 border-primary" data-v-634f5f6f><p class="mb-4" data-v-634f5f6f> Clash 是一款非常强大的代理工具，而它的全局扩展脚本（Global Extension Script）功能更是让配置的灵活性上了一个台阶。 </p><p class="mb-4" data-v-634f5f6f> 这个脚本会自动根据代理节点名称中的关键字，将其归类到对应的国家/地区分组中。对于每个国家，脚本会生成两种策略组： </p><ul class="list-none space-y-2 mb-4" data-v-634f5f6f><li class="flex items-start gap-2" data-v-634f5f6f><span class="text-lg" data-v-634f5f6f>⚡</span><span data-v-634f5f6f><strong data-v-634f5f6f>URL Test 模式</strong> — 自动测速并选择延迟最低的节点，适合追求速度的场景。</span></li><li class="flex items-start gap-2" data-v-634f5f6f><span class="text-lg" data-v-634f5f6f>⚖️</span><span data-v-634f5f6f><strong data-v-634f5f6f>Load Balance 模式</strong> — 采用轮询策略分散流量到多个节点，适合需要负载均衡或规避单节点限制的场景。</span></li></ul><p data-v-634f5f6f> 无论你的机场节点如何变化，只要名称中包含特定的关键字，就能自动分流，无需手动维护繁琐的配置。 </p></div><div class="overflow-x-auto mt-6" data-v-634f5f6f><table class="table table-zebra w-full" data-v-634f5f6f><thead data-v-634f5f6f><tr class="bg-base-300" data-v-634f5f6f><th class="text-center" data-v-634f5f6f>对比项</th><th class="text-center" data-v-634f5f6f>⚡ URL Test</th><th class="text-center" data-v-634f5f6f>⚖️ Load Balance</th></tr></thead><tbody data-v-634f5f6f><tr data-v-634f5f6f><td class="font-semibold" data-v-634f5f6f>工作原理</td><td data-v-634f5f6f>定期测速，自动切换到延迟最低的节点</td><td data-v-634f5f6f>轮询分配，将请求均匀分散到多个节点</td></tr><tr data-v-634f5f6f><td class="font-semibold" data-v-634f5f6f>适用场景</td><td data-v-634f5f6f>日常浏览、视频观看、对延迟敏感的应用</td><td data-v-634f5f6f>大流量下载、多线程任务、规避单节点限速</td></tr><tr data-v-634f5f6f><td class="font-semibold" data-v-634f5f6f>优点</td><td data-v-634f5f6f><ul class="list-disc list-inside text-sm" data-v-634f5f6f><li data-v-634f5f6f>始终保持最优延迟</li><li data-v-634f5f6f>自动故障转移</li><li data-v-634f5f6f>单一出口 IP，稳定性高</li></ul></td><td data-v-634f5f6f><ul class="list-disc list-inside text-sm" data-v-634f5f6f><li data-v-634f5f6f>充分利用多节点带宽</li><li data-v-634f5f6f>分散流量，降低被限速风险</li><li data-v-634f5f6f>提升整体吞吐量</li></ul></td></tr><tr data-v-634f5f6f><td class="font-semibold" data-v-634f5f6f>缺点</td><td data-v-634f5f6f><ul class="list-disc list-inside text-sm" data-v-634f5f6f><li data-v-634f5f6f>流量集中于单节点</li><li data-v-634f5f6f>可能触发单节点限速</li></ul></td><td data-v-634f5f6f><ul class="list-disc list-inside text-sm" data-v-634f5f6f><li data-v-634f5f6f>出口 IP 变化频繁</li><li data-v-634f5f6f>可能影响需要固定 IP 的服务</li><li data-v-634f5f6f>不保证每次选中低延迟节点</li></ul></td></tr><tr data-v-634f5f6f><td class="font-semibold" data-v-634f5f6f>推荐使用</td><td class="text-success" data-v-634f5f6f>🎮 游戏 / 📹 视频会议 / 🌐 日常浏览 / 🛠AI对话 </td><td class="text-info" data-v-634f5f6f>📥 下载 / 🎬 4K 流媒体 / 🔄 多线程任务</td></tr></tbody></table></div>',2))]),s("section",H,[t[19]||(t[19]=s("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[s("span",{class:"text-secondary"},"#"),l(" 脚本分享 ")],-1)),s("div",q,[s("button",{onClick:S,class:j(["absolute top-4 right-4 btn btn-sm btn-ghost text-white opacity-0 group-hover:opacity-100 transition-opacity",{"text-success":f.value}])},[f.value?(r(),d("span",J,"✅ 已复制")):(r(),d("span",W,"📋 复制"))],2),(r(!0),d(R,null,A(M.value,(e,g)=>(r(),d("pre",{key:g,"data-prefix":g+1},[s("code",null,L(e),1)],8,Z))),128))])]),s("section",X,[t[22]||(t[22]=s("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[s("span",{class:"text-secondary"},"#"),l(" 电脑端使用教程 ")],-1)),t[23]||(t[23]=s("div",{class:"bg-base-200 p-6 rounded-lg border-l-4 border-secondary mb-6"},[s("p",null,[l(" 电脑端推荐使用 "),s("strong",{class:"text-secondary"},"Clash Verge"),l('，在订阅页面找到"全局扩展脚本"区域，按以下步骤操作： ')])],-1)),s("div",Q,[s("div",O,[s("figure",Y,[s("img",{src:a(_),alt:"Desktop Step 1",class:"rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition-transform",onClick:t[1]||(t[1]=e=>o.value=a(_))},null,8,tt)]),t[20]||(t[20]=n('<div class="card-body pt-4" data-v-634f5f6f><div class="flex items-center gap-3 mb-2" data-v-634f5f6f><span class="badge badge-secondary badge-lg" data-v-634f5f6f>1</span><h3 class="font-bold" data-v-634f5f6f>打开编辑器</h3></div><p class="text-sm text-base-content/70" data-v-634f5f6f>在&quot;全局扩展脚本&quot;区域，点击右键选择&quot;编辑文件&quot;</p></div>',1))]),s("div",st,[s("figure",at,[s("img",{src:a(T),alt:"Desktop Step 2",class:"rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition-transform",onClick:t[2]||(t[2]=e=>o.value=a(T))},null,8,et)]),t[21]||(t[21]=n('<div class="card-body pt-4" data-v-634f5f6f><div class="flex items-center gap-3 mb-2" data-v-634f5f6f><span class="badge badge-secondary badge-lg" data-v-634f5f6f>2</span><h3 class="font-bold" data-v-634f5f6f>粘贴保存</h3></div><p class="text-sm text-base-content/70" data-v-634f5f6f>将上方脚本粘贴到编辑器中，点击&quot;保存&quot;按钮</p></div>',1))])])]),t[30]||(t[30]=n('<section class="mb-12" data-v-634f5f6f><h2 class="text-2xl font-bold mb-4 flex items-center gap-2" data-v-634f5f6f><span class="text-accent" data-v-634f5f6f>#</span> 效果展示 </h2><div class="overflow-hidden rounded-xl shadow-lg border border-base-300" data-v-634f5f6f><img src="'+z+'" alt="Clash Global Extension Effect" class="w-full h-auto hover:scale-[1.02] transition-transform duration-300" data-v-634f5f6f></div></section><section class="mb-12" data-v-634f5f6f><h2 class="text-2xl font-bold mb-4 flex items-center gap-2" data-v-634f5f6f><span class="text-warning" data-v-634f5f6f>#</span> 推荐机场 </h2><p class="mb-6 text-base-content/70" data-v-634f5f6f>如果你还没有好用的梯子，可以尝试以下几家（点击注册）：</p><div class="max-w-md" data-v-634f5f6f><a href="https://web1.bby004.com/#/register?code=tD5NWGkz" target="_blank" class="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-200 relative" data-v-634f5f6f><div class="absolute -top-2 -right-2 badge badge-warning gap-1 shadow-md" data-v-634f5f6f><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-634f5f6f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" data-v-634f5f6f></path></svg> AI 推荐 </div><div class="card-body items-center text-center" data-v-634f5f6f><div class="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4" data-v-634f5f6f><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-634f5f6f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" data-v-634f5f6f></path></svg></div><h3 class="card-title text-secondary" data-v-634f5f6f>宝贝云</h3><p class="text-sm opacity-70" data-v-634f5f6f>多节点覆盖，畅游无阻</p><p class="text-xs text-warning font-medium mt-1" data-v-634f5f6f>🤖 使用AI编程工具的用户强烈推荐</p></div></a></div></section>',2)),s("section",ot,[t[29]||(t[29]=n('<h2 class="text-2xl font-bold mb-4 flex items-center gap-2" data-v-634f5f6f><span class="text-info" data-v-634f5f6f>#</span> 手机端使用教程 </h2><div class="bg-base-200 p-6 rounded-lg border-l-4 border-info" data-v-634f5f6f><p class="mb-4" data-v-634f5f6f> 手机用户推荐使用 <strong class="text-info" data-v-634f5f6f>FlClash</strong>，这是一款开源的 Clash 客户端，支持 Android 平台，界面简洁易用。 </p><div class="flex flex-wrap gap-4 items-center" data-v-634f5f6f><a href="https://github.com/chen08209/FlClash" target="_blank" class="btn btn-info gap-2 hover:scale-105 transition-transform" data-v-634f5f6f><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" data-v-634f5f6f><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-634f5f6f></path></svg> GitHub 仓库 </a><div class="flex items-center gap-2 text-base-content/70" data-v-634f5f6f><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-634f5f6f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-v-634f5f6f></path></svg><span class="text-sm" data-v-634f5f6f>支持 Android</span></div></div></div>',2)),s("div",nt,[s("div",lt,[s("figure",dt,[s("img",{src:a(h),alt:"Step 1",class:"rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition-transform",onClick:t[3]||(t[3]=e=>o.value=a(h))},null,8,rt)]),t[24]||(t[24]=n('<div class="card-body pt-4" data-v-634f5f6f><div class="flex items-center gap-3 mb-2" data-v-634f5f6f><span class="badge badge-info badge-lg" data-v-634f5f6f>1</span><h3 class="font-bold" data-v-634f5f6f>点击脚本按钮</h3></div><p class="text-sm text-base-content/70" data-v-634f5f6f>在配置页面点击顶部的 Σ 图标进入脚本管理</p></div>',1))]),s("div",ft,[s("figure",it,[s("img",{src:a(y),alt:"Step 2",class:"rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition-transform",onClick:t[4]||(t[4]=e=>o.value=a(y))},null,8,ct)]),t[25]||(t[25]=n('<div class="card-body pt-4" data-v-634f5f6f><div class="flex items-center gap-3 mb-2" data-v-634f5f6f><span class="badge badge-info badge-lg" data-v-634f5f6f>2</span><h3 class="font-bold" data-v-634f5f6f>添加扩展脚本</h3></div><p class="text-sm text-base-content/70" data-v-634f5f6f>点击右下角 + 号</p></div>',1))]),s("div",pt,[s("figure",vt,[s("img",{src:a(k),alt:"Step 3",class:"rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition-transform",onClick:t[5]||(t[5]=e=>o.value=a(k))},null,8,mt)]),t[26]||(t[26]=n('<div class="card-body pt-4" data-v-634f5f6f><div class="flex items-center gap-3 mb-2" data-v-634f5f6f><span class="badge badge-info badge-lg" data-v-634f5f6f>3</span><h3 class="font-bold" data-v-634f5f6f>粘贴脚本</h3></div><p class="text-sm text-base-content/70" data-v-634f5f6f>将上方脚本粘贴到编辑器中并保存</p></div>',1))])]),s("div",ut,[t[27]||(t[27]=s("h3",{class:"text-lg font-bold mb-3 flex items-center gap-2"},[s("span",{class:"text-success"},"✨"),l(" 手机端效果展示 ")],-1)),s("div",gt,[s("div",bt,[s("img",{src:a(C),alt:"FlClash Mobile Effect",class:"w-full h-auto cursor-pointer hover:scale-[1.02] transition-transform",onClick:t[6]||(t[6]=e=>o.value=a(C))},null,8,xt)])]),t[28]||(t[28]=s("p",{class:"text-center text-sm text-base-content/60 mt-3"},"点击图片查看大图",-1))])])]),s("div",wt,[v(c,{to:"/blogs/202511/antigravity-login-tips",class:"btn btn-outline gap-2 group"},{default:m(()=>[...t[31]||(t[31]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),s("div",{class:"text-left"},[s("div",{class:"text-xs opacity-50 font-normal"},"上一篇"),s("div",{class:"font-bold"},"Antigravity 登录技巧")],-1)])]),_:1}),t[32]||(t[32]=n('<button class="btn btn-outline gap-2 group" disabled data-v-634f5f6f><div class="text-right" data-v-634f5f6f><div class="text-xs opacity-50 font-normal" data-v-634f5f6f>下一篇</div><div class="font-bold" data-v-634f5f6f>没有了</div></div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-634f5f6f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-634f5f6f></path></svg></button>',1))]),i.value?(r(),d("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out transition-all duration-300",onClick:t[9]||(t[9]=e=>i.value=!1)},[s("img",{src:a(w),alt:"Clash Script Comic Full",class:"max-w-full max-h-full rounded-lg shadow-2xl animate-scale-up",onClick:t[7]||(t[7]=x(()=>{},["stop"]))},null,8,ht),s("button",{class:"absolute top-4 right-4 btn btn-circle btn-ghost text-white",onClick:t[8]||(t[8]=e=>i.value=!1)},[...t[33]||(t[33]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])])):b("",!0),o.value?(r(),d("div",{key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out transition-all duration-300",onClick:t[12]||(t[12]=e=>o.value=null)},[s("img",{src:o.value,alt:"Step Preview",class:"max-w-full max-h-full rounded-lg shadow-2xl animate-scale-up",onClick:t[10]||(t[10]=x(()=>{},["stop"]))},null,8,yt),s("button",{class:"absolute top-4 right-4 btn btn-circle btn-ghost text-white",onClick:t[11]||(t[11]=e=>o.value=null)},[...t[34]||(t[34]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])])):b("",!0)])}}},Bt=E(kt,[["__scopeId","data-v-634f5f6f"]]);export{Bt as default};
