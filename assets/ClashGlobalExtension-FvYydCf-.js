import{_ as v,i as k,f as u,m as h,c as a,a as t,b as f,p as C,j as d,w as c,k as _,d as o,u as b,h as M,F as T,r as E,l as G,o as s,t as N}from"./index-Ck-CB5hu.js";import{_ as S}from"./cover-BeDOmVc6.js";const B="/Blog/assets/effect-B9IaFXaw.png",x="/Blog/assets/comic-BEJZgRBX.jpg",R={class:"container mx-auto px-4 py-8 max-w-4xl"},A={class:"text-sm breadcrumbs mb-6 animate-fade-in-down"},P={class:"prose lg:prose-xl mx-auto bg-base-100 p-8 rounded-box shadow-lg animate-fade-in-up animation-delay-300"},K={class:"mb-12"},U={class:"mb-8 text-center"},j=["src"],I={class:"mb-12"},V={class:"mockup-code bg-[#282c34] text-[#abb2bf] shadow-xl relative group"},F={key:0},L={key:1},z=["data-prefix"],H={class:"flex justify-between items-center mt-12 pt-8 border-t border-base-200 animate-fade-in-up animation-delay-500"},D=["src"],w=`function main(config, profileName) {
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
}`,J={__name:"ClashGlobalExtension",setup(Z){k(()=>{window.scrollTo(0,0)});const n=u(!1),r=u(!1),g=h(()=>w.split(`
`)),y=async()=>{try{await navigator.clipboard.writeText(w),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(p){console.error("Failed to copy:",p)}};return(p,e)=>{const l=_("router-link");return s(),a("div",R,[t("div",A,[t("ul",null,[t("li",null,[d(l,{to:"/"},{default:c(()=>[...e[4]||(e[4]=[o("首页",-1)])]),_:1})]),t("li",null,[d(l,{to:"/blog"},{default:c(()=>[...e[5]||(e[5]=[o("博客",-1)])]),_:1})]),e[6]||(e[6]=t("li",null,"Clash全局扩展脚本分享",-1))])]),e[15]||(e[15]=f('<div class="mb-8 text-center animate-fade-in-down" data-v-37b7f666><h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-v-37b7f666> Clash全局扩展脚本分享 </h1><div class="flex flex-wrap justify-center items-center gap-4 text-base-content/70 text-sm mb-8" data-v-37b7f666><div class="flex items-center gap-2" data-v-37b7f666><span class="font-medium" data-v-37b7f666>Mr. Zeng</span></div><span class="hidden md:inline" data-v-37b7f666>•</span><span data-v-37b7f666>2025年12月4日</span><span class="hidden md:inline" data-v-37b7f666>•</span><div class="flex gap-2" data-v-37b7f666><span class="badge badge-primary badge-outline" data-v-37b7f666>Clash</span><span class="badge badge-secondary badge-outline" data-v-37b7f666>JavaScript</span><span class="badge badge-accent badge-outline" data-v-37b7f666>Proxy</span></div></div><figure class="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-base-200 mb-8" data-v-37b7f666><img src="'+S+'" alt="Clash Global Extension Script" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-v-37b7f666></figure></div>',1)),t("article",P,[t("section",K,[e[8]||(e[8]=t("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[t("span",{class:"text-primary"},"#"),o(" 脚本介绍 ")],-1)),t("div",U,[t("img",{src:b(x),alt:"Clash Script Comic",class:"rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto cursor-zoom-in hover:shadow-xl transition-shadow duration-300",onClick:e[0]||(e[0]=i=>r.value=!0)},null,8,j),e[7]||(e[7]=t("p",{class:"text-sm text-base-content/60 mt-2"},"点击查看大图",-1))]),e[9]||(e[9]=t("div",{class:"bg-base-200 p-6 rounded-lg border-l-4 border-primary"},[t("p",{class:"mb-4"}," Clash 是一款非常强大的代理工具，而它的全局扩展脚本（Global Extension Script）功能更是让配置的灵活性上了一个台阶。 "),t("p",null," 这个脚本的主要用途是自动根据代理节点的名称，将其归类到对应的国家/地区分组中，并生成相应的策略组。 这样，无论你的机场节点如何变化，只要名称中包含特定的关键字，就能自动分流，无需手动维护繁琐的配置。 ")],-1))]),t("section",I,[e[10]||(e[10]=t("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[t("span",{class:"text-secondary"},"#"),o(" 脚本分享 ")],-1)),t("div",V,[t("button",{onClick:y,class:M(["absolute top-4 right-4 btn btn-sm btn-ghost text-white opacity-0 group-hover:opacity-100 transition-opacity",{"text-success":n.value}])},[n.value?(s(),a("span",L,"✅ 已复制")):(s(),a("span",F,"📋 复制"))],2),(s(!0),a(T,null,E(g.value,(i,m)=>(s(),a("pre",{key:m,"data-prefix":m+1},[t("code",null,N(i),1)],8,z))),128))])]),e[11]||(e[11]=t("section",null,[t("h2",{class:"text-2xl font-bold mb-4 flex items-center gap-2"},[t("span",{class:"text-accent"},"#"),o(" 效果展示 ")]),t("div",{class:"overflow-hidden rounded-xl shadow-lg border border-base-300"},[t("img",{src:B,alt:"Clash Global Extension Effect",class:"w-full h-auto hover:scale-[1.02] transition-transform duration-300"})])],-1))]),t("div",H,[d(l,{to:"/blogs/202512/ai-prompt-tool",class:"btn btn-outline gap-2 group"},{default:c(()=>[...e[12]||(e[12]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:-translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),t("div",{class:"text-left"},[t("div",{class:"text-xs opacity-50 font-normal"},"上一篇"),t("div",{class:"font-bold"},"AI 提示词工具")],-1)])]),_:1}),e[13]||(e[13]=f('<button class="btn btn-outline gap-2 group" disabled data-v-37b7f666><div class="text-right" data-v-37b7f666><div class="text-xs opacity-50 font-normal" data-v-37b7f666>下一篇</div><div class="font-bold" data-v-37b7f666>没有了</div></div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-37b7f666><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-37b7f666></path></svg></button>',1))]),r.value?(s(),a("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out transition-all duration-300",onClick:e[3]||(e[3]=i=>r.value=!1)},[t("img",{src:b(x),alt:"Clash Script Comic Full",class:"max-w-full max-h-full rounded-lg shadow-2xl animate-scale-up",onClick:e[1]||(e[1]=G(()=>{},["stop"]))},null,8,D),t("button",{class:"absolute top-4 right-4 btn btn-circle btn-ghost text-white",onClick:e[2]||(e[2]=i=>r.value=!1)},[...e[14]||(e[14]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])])):C("",!0)])}}},X=v(J,[["__scopeId","data-v-37b7f666"]]);export{X as default};
