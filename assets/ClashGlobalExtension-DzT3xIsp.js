import{_ as h,i as y,f as m,m as k,c as t,a as e,b as l,p as C,j as c,w as f,k as T,d,u,h as _,F as M,r as E,l as N,o as s,t as B}from"./index-Bm37KfUl.js";import{_ as G}from"./cover-BeDOmVc6.js";const R="/Blog/assets/effect-CHldwhEF.png",x="/Blog/assets/comic-BEJZgRBX.jpg",j={class:"container mx-auto px-4 py-8 max-w-4xl"},A={class:"text-sm breadcrumbs mb-6 animate-fade-in-down"},L={class:"prose lg:prose-xl mx-auto bg-base-100 p-8 rounded-box shadow-lg animate-fade-in-up animation-delay-300"},S={class:"mb-12"},I={class:"mb-8 text-center"},P=["src"],U={class:"mb-12"},z={class:"mockup-code bg-[#282c34] text-[#abb2bf] shadow-xl relative group"},K={key:0},V={key:1},D=["data-prefix"],F={class:"flex justify-between items-center mt-12 pt-8 border-t border-base-200 animate-fade-in-up animation-delay-500"},H=["src"],g=`const main = (config) => {
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
`,J={__name:"ClashGlobalExtension",setup($){y(()=>{window.scrollTo(0,0)});const o=m(!1),n=m(!1),b=k(()=>g.split(`
`)),w=async()=>{try{await navigator.clipboard.writeText(g),o.value=!0,setTimeout(()=>{o.value=!1},2e3)}catch(v){console.error("Failed to copy:",v)}};return(v,a)=>{const i=T("router-link");return s(),t("div",j,[e("div",A,[e("ul",null,[e("li",null,[c(i,{to:"/"},{default:f(()=>[...a[4]||(a[4]=[d("首页",-1)])]),_:1})]),e("li",null,[c(i,{to:"/blog"},{default:f(()=>[...a[5]||(a[5]=[d("博客",-1)])]),_:1})]),a[6]||(a[6]=e("li",null,"Clash全局扩展脚本分享",-1))])]),a[15]||(a[15]=l('<div class="mb-8 text-center animate-fade-in-down" data-v-feae8229><h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-v-feae8229> Clash全局扩展脚本分享 </h1><div class="flex flex-wrap justify-center items-center gap-4 text-base-content/70 text-sm mb-8" data-v-feae8229><div class="flex items-center gap-2" data-v-feae8229><span class="font-medium" data-v-feae8229>Mr. Zeng</span></div><span class="hidden md:inline" data-v-feae8229>•</span><span data-v-feae8229>2025年12月4日</span><span class="hidden md:inline" data-v-feae8229>•</span><div class="flex gap-2" data-v-feae8229><span class="badge badge-primary badge-outline" data-v-feae8229>Clash</span><span class="badge badge-secondary badge-outline" data-v-feae8229>JavaScript</span><span class="badge badge-accent badge-outline" data-v-feae8229>Proxy</span></div></div><figure class="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-base-200 mb-8" data-v-feae8229><img src="'+G+'" alt="Clash Global Extension Script" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-v-feae8229></figure></div>',1)),e("article",L,[e("section",S,[a[8]||(a[8]=e("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[e("span",{class:"text-primary"},"#"),d(" 脚本介绍 ")],-1)),e("div",I,[e("img",{src:u(x),alt:"Clash Script Comic",class:"rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto cursor-zoom-in hover:shadow-xl transition-shadow duration-300",onClick:a[0]||(a[0]=r=>n.value=!0)},null,8,P),a[7]||(a[7]=e("p",{class:"text-sm text-base-content/60 mt-2"},"点击查看大图",-1))]),a[9]||(a[9]=l('<div class="bg-base-200 p-6 rounded-lg border-l-4 border-primary" data-v-feae8229><p class="mb-4" data-v-feae8229> Clash 是一款非常强大的代理工具，而它的全局扩展脚本（Global Extension Script）功能更是让配置的灵活性上了一个台阶。 </p><p class="mb-4" data-v-feae8229> 这个脚本会自动根据代理节点名称中的关键字，将其归类到对应的国家/地区分组中。对于每个国家，脚本会生成两种策略组： </p><ul class="list-none space-y-2 mb-4" data-v-feae8229><li class="flex items-start gap-2" data-v-feae8229><span class="text-lg" data-v-feae8229>⚡</span><span data-v-feae8229><strong data-v-feae8229>URL Test 模式</strong> — 自动测速并选择延迟最低的节点，适合追求速度的场景。</span></li><li class="flex items-start gap-2" data-v-feae8229><span class="text-lg" data-v-feae8229>⚖️</span><span data-v-feae8229><strong data-v-feae8229>Load Balance 模式</strong> — 采用轮询策略分散流量到多个节点，适合需要负载均衡或规避单节点限制的场景。</span></li></ul><p data-v-feae8229> 无论你的机场节点如何变化，只要名称中包含特定的关键字，就能自动分流，无需手动维护繁琐的配置。 </p></div><div class="overflow-x-auto mt-6" data-v-feae8229><table class="table table-zebra w-full" data-v-feae8229><thead data-v-feae8229><tr class="bg-base-300" data-v-feae8229><th class="text-center" data-v-feae8229>对比项</th><th class="text-center" data-v-feae8229>⚡ URL Test</th><th class="text-center" data-v-feae8229>⚖️ Load Balance</th></tr></thead><tbody data-v-feae8229><tr data-v-feae8229><td class="font-semibold" data-v-feae8229>工作原理</td><td data-v-feae8229>定期测速，自动切换到延迟最低的节点</td><td data-v-feae8229>轮询分配，将请求均匀分散到多个节点</td></tr><tr data-v-feae8229><td class="font-semibold" data-v-feae8229>适用场景</td><td data-v-feae8229>日常浏览、视频观看、对延迟敏感的应用</td><td data-v-feae8229>大流量下载、多线程任务、规避单节点限速</td></tr><tr data-v-feae8229><td class="font-semibold" data-v-feae8229>优点</td><td data-v-feae8229><ul class="list-disc list-inside text-sm" data-v-feae8229><li data-v-feae8229>始终保持最优延迟</li><li data-v-feae8229>自动故障转移</li><li data-v-feae8229>单一出口 IP，稳定性高</li></ul></td><td data-v-feae8229><ul class="list-disc list-inside text-sm" data-v-feae8229><li data-v-feae8229>充分利用多节点带宽</li><li data-v-feae8229>分散流量，降低被限速风险</li><li data-v-feae8229>提升整体吞吐量</li></ul></td></tr><tr data-v-feae8229><td class="font-semibold" data-v-feae8229>缺点</td><td data-v-feae8229><ul class="list-disc list-inside text-sm" data-v-feae8229><li data-v-feae8229>流量集中于单节点</li><li data-v-feae8229>可能触发单节点限速</li></ul></td><td data-v-feae8229><ul class="list-disc list-inside text-sm" data-v-feae8229><li data-v-feae8229>出口 IP 变化频繁</li><li data-v-feae8229>可能影响需要固定 IP 的服务</li><li data-v-feae8229>不保证每次选中低延迟节点</li></ul></td></tr><tr data-v-feae8229><td class="font-semibold" data-v-feae8229>推荐使用</td><td class="text-success" data-v-feae8229>🎮 游戏 / 📹 视频会议 / 🌐 日常浏览 / 🛠AI对话 </td><td class="text-info" data-v-feae8229>📥 下载 / 🎬 4K 流媒体 / 🔄 多线程任务</td></tr></tbody></table></div>',2))]),e("section",U,[a[10]||(a[10]=e("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[e("span",{class:"text-secondary"},"#"),d(" 脚本分享 ")],-1)),e("div",z,[e("button",{onClick:w,class:_(["absolute top-4 right-4 btn btn-sm btn-ghost text-white opacity-0 group-hover:opacity-100 transition-opacity",{"text-success":o.value}])},[o.value?(s(),t("span",V,"✅ 已复制")):(s(),t("span",K,"📋 复制"))],2),(s(!0),t(M,null,E(b.value,(r,p)=>(s(),t("pre",{key:p,"data-prefix":p+1},[e("code",null,B(r),1)],8,D))),128))])]),a[11]||(a[11]=l('<section class="mb-12" data-v-feae8229><h2 class="text-2xl font-bold mb-4 flex items-center gap-2" data-v-feae8229><span class="text-accent" data-v-feae8229>#</span> 效果展示 </h2><div class="overflow-hidden rounded-xl shadow-lg border border-base-300" data-v-feae8229><img src="'+R+'" alt="Clash Global Extension Effect" class="w-full h-auto hover:scale-[1.02] transition-transform duration-300" data-v-feae8229></div></section><section class="mb-12" data-v-feae8229><h2 class="text-2xl font-bold mb-4 flex items-center gap-2" data-v-feae8229><span class="text-warning" data-v-feae8229>#</span> 推荐机场 </h2><p class="mb-6 text-base-content/70" data-v-feae8229>如果你还没有好用的梯子，可以尝试以下几家（点击注册）：</p><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-feae8229><a href="https://llgjc1.com/#/register?code=7ijNhTZR" target="_blank" class="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-200" data-v-feae8229><div class="card-body items-center text-center" data-v-feae8229><div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4" data-v-feae8229><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-feae8229><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-feae8229></path></svg></div><h3 class="card-title text-primary" data-v-feae8229>流量光机场</h3><p class="text-sm opacity-70" data-v-feae8229>高速稳定，性价比之选</p></div></a><a href="https://web1.bby004.com/#/register?code=tD5NWGkz" target="_blank" class="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-200 relative" data-v-feae8229><div class="absolute -top-2 -right-2 badge badge-warning gap-1 shadow-md" data-v-feae8229><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-feae8229><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" data-v-feae8229></path></svg> AI 推荐 </div><div class="card-body items-center text-center" data-v-feae8229><div class="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4" data-v-feae8229><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-feae8229><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" data-v-feae8229></path></svg></div><h3 class="card-title text-secondary" data-v-feae8229>宝贝云</h3><p class="text-sm opacity-70" data-v-feae8229>多节点覆盖，畅游无阻</p><p class="text-xs text-warning font-medium mt-1" data-v-feae8229>🤖 使用AI编程工具的用户强烈推荐</p></div></a><a href="https://xn--mes358aby2apfg.com/register?code=NiJSsAPD" target="_blank" class="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-200" data-v-feae8229><div class="card-body items-center text-center" data-v-feae8229><div class="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4" data-v-feae8229><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-feae8229><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-feae8229></path></svg></div><h3 class="card-title text-accent" data-v-feae8229>赔钱机场</h3><p class="text-sm opacity-70" data-v-feae8229>实惠价格，优质服务</p><p class="text-xs text-accent font-medium mt-1" data-v-feae8229>🎬 流量便宜，适合看电影、日常刷剧、下载大文件</p></div></a></div></section>',2))]),e("div",F,[c(i,{to:"/blogs/202512/ai-prompt-tool",class:"btn btn-outline gap-2 group"},{default:f(()=>[...a[12]||(a[12]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),e("div",{class:"text-left"},[e("div",{class:"text-xs opacity-50 font-normal"},"上一篇"),e("div",{class:"font-bold"},"AI 提示词工具")],-1)])]),_:1}),a[13]||(a[13]=l('<button class="btn btn-outline gap-2 group" disabled data-v-feae8229><div class="text-right" data-v-feae8229><div class="text-xs opacity-50 font-normal" data-v-feae8229>下一篇</div><div class="font-bold" data-v-feae8229>没有了</div></div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-feae8229><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-feae8229></path></svg></button>',1))]),n.value?(s(),t("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out transition-all duration-300",onClick:a[3]||(a[3]=r=>n.value=!1)},[e("img",{src:u(x),alt:"Clash Script Comic Full",class:"max-w-full max-h-full rounded-lg shadow-2xl animate-scale-up",onClick:a[1]||(a[1]=N(()=>{},["stop"]))},null,8,H),e("button",{class:"absolute top-4 right-4 btn btn-circle btn-ghost text-white",onClick:a[2]||(a[2]=r=>n.value=!1)},[...a[14]||(a[14]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])])):C("",!0)])}}},O=h(J,[["__scopeId","data-v-feae8229"]]);export{O as default};
