<template>
    <div class="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Breadcrumbs -->
        <div class="text-sm breadcrumbs mb-6 animate-fade-in-down">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/blog">博客</router-link></li>
                <li>Clash全局扩展脚本分享</li>
            </ul>
        </div>

        <!-- Header -->
        <div class="mb-8 text-center animate-fade-in-down">
            <h1
                class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Clash全局扩展脚本分享
            </h1>
            <div class="flex flex-wrap justify-center items-center gap-4 text-base-content/70 text-sm mb-8">
                <div class="flex items-center gap-2">
                    <span class="font-medium">Mr. Zeng</span>
                </div>
                <span class="hidden md:inline">•</span>
                <span>2025年12月4日</span>
                <span class="hidden md:inline">•</span>
                <div class="flex gap-2">
                    <span class="badge badge-primary badge-outline">Clash</span>
                    <span class="badge badge-secondary badge-outline">JavaScript</span>
                    <span class="badge badge-accent badge-outline">Proxy</span>
                </div>
            </div>

            <figure
                class="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-base-200 mb-8">
                <img src="@/assets/blogs/202512/ClashGlobalExtension/cover.jpg" alt="Clash Global Extension Script"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </figure>
        </div>

        <article
            class="prose lg:prose-xl mx-auto bg-base-100 p-8 rounded-box shadow-lg animate-fade-in-up animation-delay-300">
            <!-- Introduction -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-primary">#</span> 脚本介绍
                </h2>

                <!-- Comic Strip -->
                <div class="mb-8 text-center">
                    <img :src="comicImg" alt="Clash Script Comic"
                        class="rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto cursor-zoom-in hover:shadow-xl transition-shadow duration-300"
                        @click="showComicPreview = true" />
                    <p class="text-sm text-base-content/60 mt-2">点击查看大图</p>
                </div>
                <div class="bg-base-200 p-6 rounded-lg border-l-4 border-primary">
                    <p class="mb-4">
                        Clash 是一款非常强大的代理工具，而它的全局扩展脚本（Global Extension Script）功能更是让配置的灵活性上了一个台阶。
                    </p>
                    <p class="mb-4">
                        这个脚本会自动根据代理节点名称中的关键字，将其归类到对应的国家/地区分组中。对于每个国家，脚本会生成两种策略组：
                    </p>
                    <ul class="list-none space-y-2 mb-4">
                        <li class="flex items-start gap-2">
                            <span class="text-lg">⚡</span>
                            <span><strong>URL Test 模式</strong> — 自动测速并选择延迟最低的节点，适合追求速度的场景。</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-lg">⚖️</span>
                            <span><strong>Load Balance 模式</strong> — 采用轮询策略分散流量到多个节点，适合需要负载均衡或规避单节点限制的场景。</span>
                        </li>
                    </ul>
                    <p>
                        无论你的机场节点如何变化，只要名称中包含特定的关键字，就能自动分流，无需手动维护繁琐的配置。
                    </p>
                </div>

                <!-- Mode Comparison Table -->
                <div class="overflow-x-auto mt-6">
                    <table class="table table-zebra w-full">
                        <thead>
                            <tr class="bg-base-300">
                                <th class="text-center">对比项</th>
                                <th class="text-center">⚡ URL Test</th>
                                <th class="text-center">⚖️ Load Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="font-semibold">工作原理</td>
                                <td>定期测速，自动切换到延迟最低的节点</td>
                                <td>轮询分配，将请求均匀分散到多个节点</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">适用场景</td>
                                <td>日常浏览、视频观看、对延迟敏感的应用</td>
                                <td>大流量下载、多线程任务、规避单节点限速</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">优点</td>
                                <td>
                                    <ul class="list-disc list-inside text-sm">
                                        <li>始终保持最优延迟</li>
                                        <li>自动故障转移</li>
                                        <li>单一出口 IP，稳定性高</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="list-disc list-inside text-sm">
                                        <li>充分利用多节点带宽</li>
                                        <li>分散流量，降低被限速风险</li>
                                        <li>提升整体吞吐量</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold">缺点</td>
                                <td>
                                    <ul class="list-disc list-inside text-sm">
                                        <li>流量集中于单节点</li>
                                        <li>可能触发单节点限速</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="list-disc list-inside text-sm">
                                        <li>出口 IP 变化频繁</li>
                                        <li>可能影响需要固定 IP 的服务</li>
                                        <li>不保证每次选中低延迟节点</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold">推荐使用</td>
                                <td class="text-success">🎮 游戏 / 📹 视频会议 / 🌐 日常浏览 / 🛠AI对话 </td>
                                <td class="text-info">📥 下载 / 🎬 4K 流媒体 / 🔄 多线程任务</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Script Share -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-secondary">#</span> 脚本分享
                </h2>
                <div class="mockup-code bg-[#282c34] text-[#abb2bf] shadow-xl relative group">
                    <button @click="copyCode"
                        class="absolute top-4 right-4 btn btn-sm btn-ghost text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        :class="{ 'text-success': copied }">
                        <span v-if="!copied">📋 复制</span>
                        <span v-else>✅ 已复制</span>
                    </button>
                    <pre v-for="(line, index) in scriptLines" :key="index"
                        :data-prefix="index + 1"><code>{{ line }}</code></pre>
                </div>
            </section>

            <!-- Effect Display -->
            <section>
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-accent">#</span> 效果展示
                </h2>
                <div class="overflow-hidden rounded-xl shadow-lg border border-base-300">
                    <img src="@/assets/blogs/202512/ClashGlobalExtension/effect.png" alt="Clash Global Extension Effect"
                        class="w-full h-auto hover:scale-[1.02] transition-transform duration-300" />
                </div>
            </section>
        </article>

        <!-- Navigation -->
        <div
            class="flex justify-between items-center mt-12 pt-8 border-t border-base-200 animate-fade-in-up animation-delay-500">
            <router-link to="/blogs/202512/ai-prompt-tool" class="btn btn-outline gap-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <div class="text-left">
                    <div class="text-xs opacity-50 font-normal">上一篇</div>
                    <div class="font-bold">AI 提示词工具</div>
                </div>
            </router-link>

            <button class="btn btn-outline gap-2 group" disabled>
                <div class="text-right">
                    <div class="text-xs opacity-50 font-normal">下一篇</div>
                    <div class="font-bold">没有了</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
        <!-- Image Preview Modal -->
        <div v-if="showComicPreview"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out transition-all duration-300"
            @click="showComicPreview = false">
            <img :src="comicImg" alt="Clash Script Comic Full"
                class="max-w-full max-h-full rounded-lg shadow-2xl animate-scale-up" @click.stop />
            <button class="absolute top-4 right-4 btn btn-circle btn-ghost text-white"
                @click="showComicPreview = false">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import comicImg from '@/assets/blogs/202512/ClashGlobalExtension/comic.jpg'

onMounted(() => {
    window.scrollTo(0, 0)
})

const copied = ref(false)
const showComicPreview = ref(false)

const scriptContent = `const main = (config) => {
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
        { name: "🇬🇧 英国", keywords: ["英国", "United Kingdom", "UK", "GB", "🇬🇧"] },
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
`

const scriptLines = computed(() => scriptContent.split('\n'))

const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(scriptContent)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy:', err)
    }
}
</script>

<style scoped>
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translate3d(0, -20px, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out both;
}

.animation-delay-300 {
    animation-delay: 0.3s;
}

.animation-delay-500 {
    animation-delay: 0.5s;
}

@keyframes scaleUp {
    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-scale-up {
    animation: scaleUp 0.3s ease-out both;
}
</style>
