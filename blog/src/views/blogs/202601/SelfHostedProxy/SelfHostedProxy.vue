<template>
    <div class="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Breadcrumbs -->
        <div class="text-sm breadcrumbs mb-6 animate-fade-in-down">
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/blog">博客</router-link></li>
                <li>自建代理节点教程</li>
            </ul>
        </div>

        <!-- Header -->
        <div class="mb-8 text-center animate-fade-in-down">
            <h1
                class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                自建代理节点教程
            </h1>
            <div class="flex flex-wrap justify-center items-center gap-4 text-base-content/70 text-sm mb-8">
                <div class="flex items-center gap-2">
                    <span class="font-medium">Mr. Zeng</span>
                </div>
                <span class="hidden md:inline">•</span>
                <span>2026年1月10日</span>
                <span class="hidden md:inline">•</span>
                <div class="flex gap-2">
                    <span class="badge badge-primary badge-outline">VPS</span>
                    <span class="badge badge-secondary badge-outline">Proxy</span>
                    <span class="badge badge-accent badge-outline">教程</span>
                </div>
            </div>

            <figure
                class="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-base-200 mb-8">
                <img src="@/assets/blogs/202601/SelfHostedProxy/cover.jpg" alt="自建代理节点教程"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </figure>
        </div>

        <article
            class="prose lg:prose-xl mx-auto bg-base-100 p-8 rounded-box shadow-lg animate-fade-in-up animation-delay-300">
            
            <!-- Introduction -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-primary">#</span> 前言
                </h2>
                <div class="bg-base-200 p-6 rounded-lg border-l-4 border-primary">
                    <p class="mb-4">
                        自建代理节点是一种更加灵活、私密的科学上网方式。相比于使用第三方机场服务，自建节点具有以下优势：
                    </p>
                    <ul class="list-none space-y-2 mb-4">
                        <li class="flex items-start gap-2">
                            <span class="text-lg">🔒</span>
                            <span><strong>隐私性更强</strong> — 数据不经过第三方服务器，更加安全可控。</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-lg">💰</span>
                            <span><strong>成本可控</strong> — 根据需求选择合适的VPS，按需付费。</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-lg">⚙️</span>
                            <span><strong>高度定制</strong> — 可以自由配置协议、端口等参数。</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-lg">🛡️</span>
                            <span><strong>避免风控</strong> — 独享IP不与他人共用，大幅降低被风控的风险。</span>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Prerequisites -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-secondary">#</span> 准备工作
                </h2>
                <div class="bg-base-200 p-6 rounded-lg border-l-4 border-secondary">
                    <p class="mb-4">在开始之前，你需要准备以下内容：</p>
                    <div class="overflow-x-auto">
                        <table class="table table-zebra w-full">
                            <thead>
                                <tr class="bg-base-300">
                                    <th class="text-center">准备项</th>
                                    <th class="text-center">说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="font-semibold">🖥️ 境外服务器</td>
                                    <td>一台境外服务器（推荐：<a href="https://www.rainyun.com/MrZeng_" target="_blank" class="link link-primary">雨云</a>）</td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">🐧 服务器系统</td>
                                    <td>推荐使用 Debian 11，稳定且兼容性好</td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">🌐 域名（必须）</td>
                                    <td>用于配置TLS证书，提高安全性（推荐：<a href="https://www.spaceship.com/zh/" target="_blank" class="link link-primary">Spaceship</a>）</td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">💻 SSH工具</td>
                                    <td>用于连接和管理服务器（推荐：<a href="https://www.xshell.com/zh/xshell/" target="_blank" class="link link-primary">Xshell</a>）</td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">📱 客户端</td>
                                    <td><a href="https://github.com/2dust/v2rayN" target="_blank" class="link link-primary">V2rayN</a>（Windows）、<a href="https://github.com/2dust/v2rayNG" target="_blank" class="link link-primary">V2rayNG</a>（Android）等代理客户端</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <!-- Server Selection -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-accent">#</span> 服务器选择建议
                </h2>
                <div class="bg-base-200 p-6 rounded-lg border-l-4 border-accent mb-6">
                    <p>
                        选择一个稳定、高速的服务器是搭建代理节点的关键。这里推荐使用 <strong class="text-accent">雨云</strong>，提供多地区服务器可选，性价比高，管理方便。
                    </p>
                </div>
                
                <a href="https://www.rainyun.com/MrZeng_" target="_blank" 
                    class="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block">
                    <div class="card-body">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                                <span class="text-3xl">☁️</span>
                            </div>
                            <div class="flex-1">
                                <h3 class="card-title text-accent text-xl">雨云</h3>
                                <p class="text-sm text-base-content/70 mt-1">
                                    国内老牌云服务商，提供香港、日本、美国等多地区服务器，支持按量付费，价格实惠。
                                </p>
                            </div>
                            <div class="btn btn-accent btn-outline gap-2">
                                立即注册
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-4">
                            <span class="badge badge-outline">🌏 多地区节点</span>
                            <span class="badge badge-outline">💰 价格实惠</span>
                            <span class="badge badge-outline">⚡ 高速稳定</span>
                            <span class="badge badge-outline">🛠️ 简单易用</span>
                        </div>
                    </div>
                </a>
            </section>

            <!-- Protocol Introduction -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-info">#</span> 协议介绍
                </h2>
                <div class="bg-base-200 p-6 rounded-lg border-l-4 border-info mb-6">
                    <p>
                        目前主流的代理协议有多种，以下是常见协议的对比：
                    </p>
                </div>
                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">
                        <thead>
                            <tr class="bg-base-300">
                                <th class="text-center">协议</th>
                                <th class="text-center">特点</th>
                                <th class="text-center">推荐程度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="font-semibold">Hysteria2</td>
                                <td>基于QUIC协议，速度快，抗封锁能力强</td>
                                <td class="text-success">⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">VLESS + Reality</td>
                                <td>Xray核心，伪装性强，安全性高</td>
                                <td class="text-success">⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Trojan</td>
                                <td>伪装成HTTPS流量，部署简单</td>
                                <td class="text-info">⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Shadowsocks</td>
                                <td>经典协议，轻量级，兼容性好</td>
                                <td class="text-warning">⭐⭐⭐</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Installation Steps -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-warning">#</span> 安装步骤
                </h2>
                <div class="bg-base-200 p-6 rounded-lg border-l-4 border-warning mb-6">
                    <p class="mb-4">
                        推荐使用 <strong class="text-warning">3x-ui</strong> 面板搭建代理服务，它是一个功能强大的 Xray 面板，支持多协议、多用户管理，界面友好易操作。
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <a href="https://github.com/MHSanaei/3x-ui" target="_blank" class="btn btn-warning btn-sm gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub 仓库
                        </a>
                    </div>
                </div>

                <!-- YouTube Video -->
                <div class="mb-6">
                    <p class="mb-4 text-base-content/70">详细的安装和配置教程请观看以下视频：</p>
                    <div class="relative group">
                        <div class="aspect-video rounded-2xl overflow-hidden shadow-xl">
                            <iframe 
                                class="w-full h-full"
                                src="https://www.youtube.com/embed/WffyIuCy3Xw" 
                                title="3x-ui 安装教程"
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <button @click="showVideoFullscreen = true" 
                            class="absolute bottom-4 right-4 btn btn-sm btn-primary gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                            全屏观看
                        </button>
                    </div>
                </div>

                <div class="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>推荐使用 VLESS + Reality 或 Hysteria2 协议，安全性更高。配置完成后，在 3x-ui 面板中复制节点链接导入到 V2rayN / V2rayNG 客户端即可使用。</span>
                </div>
            </section>

            <!-- Tips -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-success">#</span> 注意事项
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="alert alert-info shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>定期更新系统和代理软件以确保安全</span>
                    </div>
                    <div class="alert alert-warning shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>请遵守当地法律法规，合理使用</span>
                    </div>
                    <div class="alert alert-success shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>建议开启BBR加速，提升网络性能</span>
                    </div>
                    <div class="alert shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>备份好配置信息，以便服务器迁移</span>
                    </div>
                </div>
            </section>

            <!-- Conclusion -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-error">#</span> 总结
                </h2>
                <div class="bg-base-200 p-6 rounded-lg border-l-4 border-error">
                    <p>
                        自建代理节点虽然需要一定的技术基础，但能够提供更好的隐私保护和定制化体验。
                        后续文章我会详细介绍各种协议的具体配置方法，敬请期待！
                    </p>
                </div>
            </section>
        </article>

        <!-- Navigation -->
        <div
            class="flex justify-between items-center mt-12 pt-8 border-t border-base-200 animate-fade-in-up animation-delay-500">
            <router-link to="/blogs/202512/clash-global-extension" class="btn btn-outline gap-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <div class="text-left">
                    <div class="text-xs opacity-50 font-normal">上一篇</div>
                    <div class="font-bold">Clash全局扩展脚本分享</div>
                </div>
            </router-link>

            <router-link to="/blogs/202604/cliproxy-api-installation" class="btn btn-outline gap-2 group">
                <div class="text-right">
                    <div class="text-xs opacity-50 font-normal">下一篇</div>
                    <div class="font-bold">CPA 安装教程</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </router-link>
        </div>

        <!-- Video Fullscreen Modal -->
        <div v-if="showVideoFullscreen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black p-2 md:p-4 transition-all duration-300"
            @click="showVideoFullscreen = false">
            <div class="w-full h-full max-h-[90vh] aspect-video" @click.stop>
                <iframe 
                    class="w-full h-full"
                    src="https://www.youtube.com/embed/WffyIuCy3Xw?autoplay=1" 
                    title="3x-ui 安装教程"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            <button class="absolute top-4 right-4 btn btn-circle btn-ghost text-white hover:bg-white/20"
                @click="showVideoFullscreen = false">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showVideoFullscreen = ref(false)

onMounted(() => {
    window.scrollTo(0, 0)
})
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
</style>
