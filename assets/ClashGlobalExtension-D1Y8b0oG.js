import{_ as g}from"./cover-BeDOmVc6.js";import{_ as v,i as f,f as w,m as b,c as t,a as e,b as d,j as i,w as l,k,d as n,h,F as _,r as C,o as s,t as T}from"./index-lTx3Q69e.js";const E="/Blog/assets/effect-B9IaFXaw.png",M={class:"container mx-auto px-4 py-8 max-w-4xl"},G={class:"text-sm breadcrumbs mb-6 animate-fade-in-down"},N={class:"prose lg:prose-xl mx-auto bg-base-100 p-8 rounded-box shadow-lg animate-fade-in-up animation-delay-300"},S={class:"mb-12"},A={class:"mockup-code bg-[#282c34] text-[#abb2bf] shadow-xl relative group"},R={key:0},K={key:1},P=["data-prefix"],U={class:"flex justify-between items-center mt-12 pt-8 border-t border-base-200 animate-fade-in-up animation-delay-500"},m=`function main(config, profileName) {
    // 1. 配置常量
    const TEST_URL = "http://www.gstatic.com/generate_204";
    const TEST_INTERVAL = 6000;

    // 2. 定义国家规则（提取出来以保持 main 函数整洁）
    const countriesConfig = [
        { name: "🇺🇸 美国", keywords: ["美国", "United States", "US"] },
        { name: "🇯🇵 日本", keywords: ["日本", "Japan", "JP"] },
        { name: "🇸🇬 新加坡", keywords: ["新加坡", "Singapore", "SG"] },
        { name: "🇹🇼 台湾", keywords: ["台湾", "Taiwan", "TW", "CN_TW"] },
        { name: "🇭🇰 香港", keywords: ["香港", "Hong Kong", "HK", "CN_HK"] },
        { name: "🇩🇪 德国", keywords: ["德国", "Germany", "DE"] },
        { name: "🇬🇧 英国", keywords: ["英国", "United Kingdom", "UK", "GB"] },
        { name: "🇫🇷 法国", keywords: ["法国", "France", "FR"] },
        { name: "🇨🇦 加拿大", keywords: ["加拿大", "Canada", "CA"] },
        { name: "🇰🇷 韩国", keywords: ["韩国", "Korea", "KR"] },
        { name: "🇦🇺 澳大利亚", keywords: ["澳大利亚", "Australia", "AU"] },
        { name: "🇦🇪 阿联酋", keywords: ["阿联酋", "UAE", "Dubai"] },
        { name: "🇲🇴 澳门", keywords: ["澳门", "Macau", "MO"] },
        { name: "🇮🇳 印度", keywords: ["印度", "India", "IN"] },
        { name: "🇧🇷 巴西", keywords: ["巴西", "Brazil", "BR"] },
        { name: "🇷🇺 俄罗斯", keywords: ["俄罗斯", "Russia", "RU"] },
        { name: "🇹🇷 土耳其", keywords: ["土耳其", "Turkey", "TR"] },
        { name: "🇹🇭 泰国", keywords: ["泰国", "Thailand", "TH"] },
        { name: "🇲🇾 马来西亚", keywords: ["马来西亚", "Malaysia", "MY"] },
        { name: "🇻🇳 越南", keywords: ["越南", "Vietnam", "VN"] },
        { name: "🇵🇭 菲律宾", keywords: ["菲律宾", "Philippines", "PH"] },
        { name: "🇦🇷 阿根廷", keywords: ["阿根廷", "Argentina", "AR"] },
        { name: "🇰🇿 哈萨克斯坦", keywords: ["哈萨克斯坦", "Kazakhstan", "KZ"] },
        { name: "🇪🇬 埃及", keywords: ["埃及", "Egypt", "EG"] },
        { name: "🇵🇰 巴基斯坦", keywords: ["巴基斯坦", "Pakistan", "PK"] },
        { name: "🇳🇬 尼日利亚", keywords: ["尼日利亚", "Nigeria", "NG"] },
        { name: "🇺🇦 乌克兰", keywords: ["乌克兰", "Ukraine", "UA"] },
        { name: "🇰🇭 柬埔寨", keywords: ["柬埔寨", "Cambodia", "KH"] },
        { name: "🇲🇲 缅甸", keywords: ["缅甸", "Myanmar", "MM"] },
        { name: "🇦🇶 南极洲", keywords: ["南极洲", "Antarctica", "AQ"] }
    ];

    // 3. 初始化 Map 容器，保持插入顺序
    // 结构: Map { "美国" => [], "日本" => [], ... }
    const countryMap = new Map();
    countriesConfig.forEach(c => countryMap.set(c.name, {
        proxies: [],
        keywords: c.keywords
    }));

    const proxies = config.proxies || [];

    // 4. 高效遍历：只遍历一次代理列表 (Performance Fix)
    // 原始逻辑是：国家 -> 遍历所有代理 (N * M)
    // 优化逻辑是：代理 -> 找到匹配的第一个国家 (N * 1)
    proxies.forEach(proxy => {
        // 查找该代理符合哪个国家（找到第一个即停止，避免重复归类）
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

    // 遍历 Map 生成最终配置
    for (const [name, data] of countryMap) {
        // 只有当该国家有节点时，才创建分组
        if (data.proxies.length > 0) {
            // 添加到主选择组的列表中
            mainGroupProxies.push(name);

            // 创建该国家的 url-test 组
            countryGroups.push({
                "name": name,
                "type": "url-test",
                "url": TEST_URL,
                "interval": TEST_INTERVAL,
                "tolerance": 50, // 建议加上容差，避免频繁切换
                "proxies": data.proxies
            });
        }
    }

    // 主手动选择组
    const mainGroup = {
        "name": profileName,
        "type": "select",
        "proxies": mainGroupProxies.length > 0 ? mainGroupProxies : ["DIRECT"] // 防止为空报错
    };

    // 6. 覆盖配置
    // 注意：这里会将原有的 proxy-groups 完全覆盖。如果想保留原有的（如自动选择等），需要改为 push
    config["proxy-groups"] = [mainGroup, ...countryGroups];

    return config;
}`,B={__name:"ClashGlobalExtension",setup(I){f(()=>{window.scrollTo(0,0)});const o=w(!1),u=b(()=>m.split(`
`)),x=async()=>{try{await navigator.clipboard.writeText(m),o.value=!0,setTimeout(()=>{o.value=!1},2e3)}catch(c){console.error("Failed to copy:",c)}};return(c,a)=>{const r=k("router-link");return s(),t("div",M,[e("div",G,[e("ul",null,[e("li",null,[i(r,{to:"/"},{default:l(()=>[...a[0]||(a[0]=[n("首页",-1)])]),_:1})]),e("li",null,[i(r,{to:"/blog"},{default:l(()=>[...a[1]||(a[1]=[n("博客",-1)])]),_:1})]),a[2]||(a[2]=e("li",null,"Clash全局扩展脚本分享",-1))])]),a[8]||(a[8]=d('<div class="mb-8 text-center animate-fade-in-down" data-v-5e661cd8><h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-v-5e661cd8> Clash全局扩展脚本分享 </h1><div class="flex flex-wrap justify-center items-center gap-4 text-base-content/70 text-sm mb-8" data-v-5e661cd8><div class="flex items-center gap-2" data-v-5e661cd8><span class="font-medium" data-v-5e661cd8>Mr. Zeng</span></div><span class="hidden md:inline" data-v-5e661cd8>•</span><span data-v-5e661cd8>2025年12月4日</span><span class="hidden md:inline" data-v-5e661cd8>•</span><div class="flex gap-2" data-v-5e661cd8><span class="badge badge-primary badge-outline" data-v-5e661cd8>Clash</span><span class="badge badge-secondary badge-outline" data-v-5e661cd8>JavaScript</span><span class="badge badge-accent badge-outline" data-v-5e661cd8>Proxy</span></div></div><figure class="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-base-200 mb-8" data-v-5e661cd8><img src="'+g+'" alt="Clash Global Extension Script" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-v-5e661cd8></figure></div>',1)),e("article",N,[a[4]||(a[4]=d('<section class="mb-12" data-v-5e661cd8><h2 class="text-2xl font-bold mb-4 flex items-center gap-2" data-v-5e661cd8><span class="text-primary" data-v-5e661cd8>#</span> 脚本介绍 </h2><div class="bg-base-200 p-6 rounded-lg border-l-4 border-primary" data-v-5e661cd8><p class="mb-4" data-v-5e661cd8> Clash 是一款非常强大的代理工具，而它的全局扩展脚本（Global Extension Script）功能更是让配置的灵活性上了一个台阶。 </p><p data-v-5e661cd8> 这个脚本的主要用途是自动根据代理节点的名称，将其归类到对应的国家/地区分组中，并生成相应的策略组。 这样，无论你的机场节点如何变化，只要名称中包含特定的关键字，就能自动分流，无需手动维护繁琐的配置。 </p></div></section>',1)),e("section",S,[a[3]||(a[3]=e("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[e("span",{class:"text-secondary"},"#"),n(" 脚本分享 ")],-1)),e("div",A,[e("button",{onClick:x,class:h(["absolute top-4 right-4 btn btn-sm btn-ghost text-white opacity-0 group-hover:opacity-100 transition-opacity",{"text-success":o.value}])},[o.value?(s(),t("span",K,"✅ 已复制")):(s(),t("span",R,"📋 复制"))],2),(s(!0),t(_,null,C(u.value,(y,p)=>(s(),t("pre",{key:p,"data-prefix":p+1},[e("code",null,T(y),1)],8,P))),128))])]),a[5]||(a[5]=e("section",null,[e("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[e("span",{class:"text-accent"},"#"),n(" 效果展示 ")]),e("div",{class:"overflow-hidden rounded-xl shadow-lg border border-base-300"},[e("img",{src:E,alt:"Clash Global Extension Effect",class:"w-full h-auto hover:scale-[1.02] transition-transform duration-300"})])],-1))]),e("div",U,[i(r,{to:"/blogs/202512/ai-prompt-tool",class:"btn btn-outline gap-2 group"},{default:l(()=>[...a[6]||(a[6]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),e("div",{class:"text-left"},[e("div",{class:"text-xs opacity-50 font-normal"},"上一篇"),e("div",{class:"font-bold"},"AI 提示词工具")],-1)])]),_:1}),a[7]||(a[7]=d('<button class="btn btn-outline gap-2 group" disabled data-v-5e661cd8><div class="text-right" data-v-5e661cd8><div class="text-xs opacity-50 font-normal" data-v-5e661cd8>下一篇</div><div class="font-bold" data-v-5e661cd8>没有了</div></div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-5e661cd8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-5e661cd8></path></svg></button>',1))])])}}},j=v(B,[["__scopeId","data-v-5e661cd8"]]);export{j as default};
