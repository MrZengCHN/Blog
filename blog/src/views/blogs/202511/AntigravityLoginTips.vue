<script setup>
import { onMounted, ref } from 'vue'
import coverImage from '@/assets/blogs/202511/AntigravityLoginTips/cover.jpg'
import doraemonClashImage from '@/assets/blogs/202511/AntigravityLoginTips/doraemon_clash.jpg'
import proxifierCover from '@/assets/blogs/202511/ProxifierIntroduction/cover.png'

const showPreview = ref(false)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Breadcrumbs -->
    <div class="text-sm breadcrumbs mb-6">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li>博客</li>
        <li>Antigravity 登录技巧</li>
      </ul>
    </div>

    <!-- Article Header -->
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">Antigravity 登录技巧：赛博润人</h1>
      
      <div class="flex flex-wrap justify-center items-center gap-4 text-base-content/70 text-sm mb-8">
        <div class="flex items-center gap-2">
          <span class="font-medium">Mr. Zeng</span>
        </div>
        <span class="hidden md:inline">•</span>
        <span>2025年11月27日</span>
        <span class="hidden md:inline">•</span>
        <div class="flex gap-2">
            <div class="badge badge-primary badge-outline">技巧</div>
            <div class="badge badge-secondary badge-outline">Antigravity</div>
        </div>
      </div>

      <figure class="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl">
        <img :src="coverImage" alt="Antigravity Login Tips Cover" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </figure>
    </div>

    <!-- Article Content -->
    <article class="prose prose-lg max-w-none">
      <p class="lead text-xl text-base-content/80 mb-12">
        Google 最近发布了最新的 AI 编辑器 <strong>Antigravity</strong>，但是对于中国大陆用户来说登录却成了问题。这篇博客将带你突破限制，顺利开启 Antigravity 之旅。
      </p>

      <!-- Method 1 -->
      <div class="card bg-base-100 shadow-sm border border-base-200 mb-12 overflow-hidden">
        <div class="card-body p-0 sm:p-8">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-3 px-6 pt-6 sm:px-0 sm:pt-0">
                <span class="badge badge-primary badge-lg h-8 w-8 rounded-full flex items-center justify-center">1</span>
                第一种方法：使用 Clash 代理
            </h2>
            
            <div class="flex flex-col md:flex-row gap-8 items-start px-6 pb-6 sm:px-0 sm:pb-0">
                <div class="flex-1 space-y-4">
                    <p>
                        最直接的方法是使用 Clash 代理。你需要将 Clash 配置文件中的节点切换到 <span class="text-primary font-bold">日本节点</span>，并开启 <span class="text-primary font-bold">TUN 模式</span>。
                    </p>
                    <p>
                        配置完成后，Antigravity 就能通过 Clash 的虚拟网卡进行网络连接，从而绕过登录限制。
                    </p>
                </div>
                <div class="w-full md:w-1/3 flex-shrink-0">
                    <div class="relative group cursor-pointer" @click="showPreview = true">
                        <img 
                            :src="doraemonClashImage" 
                            alt="Doraemon Clash Comic" 
                            class="w-full rounded-xl shadow-lg transform group-hover:rotate-2 transition-all duration-300" 
                        />
                        <div class="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span class="text-white font-bold">点击预览</span>
                        </div>
                    </div>
                    <p class="text-center text-xs text-base-content/50 mt-2">点击查看详情</p>
                </div>
            </div>

            <!-- TUN Info Box -->
            <div class="alert alert-info shadow-sm mt-6 mx-6 sm:mx-0 mb-6 sm:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div class="w-full">
                    <h3 class="font-bold">为什么必须开启 TUN 模式？</h3>
                    <div class="text-sm mt-1">Antigravity 的部分网络请求（尤其是登录验证）可能不遵循系统的 HTTP 代理设置，TUN 模式可以强制接管网卡层面的所有流量，确保请求通过代理。</div>
                    
                    <div class="divider my-2 opacity-20"></div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div class="flex gap-2 items-start">
                            <span class="badge badge-success badge-xs mt-1 shrink-0">利</span>
                            <span><strong>全局接管：</strong> 彻底解决终端、IDE 等软件不走代理的问题。</span>
                        </div>
                        <div class="flex gap-2 items-start">
                            <span class="badge badge-warning badge-xs mt-1 shrink-0">弊</span>
                            <span><strong>软件冲突：</strong> 可能会与虚拟机（VMware/WSL）、游戏加速器产生冲突。</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <!-- Method 2 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
            <span class="badge badge-secondary badge-lg h-8 w-8 rounded-full flex items-center justify-center">2</span>
            使用 Proxifier + Clash 实现登录
        </h2>
        
        <p class="mb-6">
            如果你无法开启 TUN 模式（例如在公司受限环境），<span class="font-bold">Proxifier</span> 是你的最佳替代方案。它是一款强大的“流量调度员”，能强制让不支持代理的软件通过 SOCKS5 或 HTTPS 代理联网。
        </p>

        <div class="grid md:grid-cols-2 gap-6">
            <div class="card bg-base-200 border-l-4 border-secondary shadow-sm">
                <div class="card-body">
                    <h3 class="card-title text-lg">Proxifier 的优势</h3>
                    <ul class="space-y-2 mt-2">
                        <li class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                            <span><strong>强制代理：</strong> “劫持” Antigravity 的请求转发给 Clash。</span>
                        </li>
                        <li class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                            <span><strong>精准控制：</strong> 只代理特定应用，不影响内网通等软件。</span>
                        </li>
                    </ul>
                </div>
            </div>
            
             <!-- Proxifier Link Card -->
            <router-link to="/blogs/202511/proxifier-introduction" class="card bg-base-100 image-full shadow-xl hover:shadow-2xl transition-all group cursor-pointer h-full">
                <figure><img :src="proxifierCover" alt="Proxifier" class="w-full h-full object-cover" /></figure>
                <div class="card-body justify-end">
                    <h2 class="card-title text-white group-hover:text-secondary transition-colors">Proxifier 详细教程</h2>
                    <p class="text-white/80">点击阅读如何配置 Proxifier 接管流量。</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary btn-sm">立即阅读</button>
                    </div>
                </div>
            </router-link>
        </div>
      </div>

      <!-- Airport Recommendations -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 border-l-4 border-accent pl-4">推荐机场</h2>
        <p class="mb-6 text-base-content/70">如果你还没有好用的梯子，可以尝试以下几家（点击注册）：</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 流量光 -->
            <a href="https://llgjc1.com/#/register?code=7ijNhTZR" target="_blank" class="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-200">
                <div class="card-body items-center text-center">
                    <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 class="card-title text-primary">流量光机场</h3>
                    <p class="text-sm opacity-70">高速稳定，性价比之选</p>
                </div>
            </a>

            <!-- 宝贝云 -->
            <a href="https://web1.bby004.com/#/register?code=tD5NWGkz" target="_blank" class="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-200">
                <div class="card-body items-center text-center">
                    <div class="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                    </div>
                    <h3 class="card-title text-secondary">宝贝云</h3>
                    <p class="text-sm opacity-70">多节点覆盖，畅游无阻</p>
                </div>
            </a>

            <!-- 赔钱机场 -->
            <a href="https://xn--mes358aby2apfg.com/register?code=NiJSsAPD" target="_blank" class="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-base-200">
                <div class="card-body items-center text-center">
                    <div class="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 class="card-title text-accent">赔钱机场</h3>
                    <p class="text-sm opacity-70">实惠价格，优质服务</p>
                </div>
            </a>
        </div>
      </div>

      <div class="alert shadow-lg mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
            <h3 class="font-bold">结语</h3>
            <div class="text-sm">无论是直接开启 TUN 模式的简单粗暴，还是配合 Proxifier 的精细控制，都能助你顺利登陆 Antigravity。选择最适合你的装备，开始你的代码星际之旅吧！</div>
        </div>
      </div>

    </article>

    <!-- Navigation -->
    <div class="flex justify-between items-center mt-12 pt-8 border-t border-base-200">
      <router-link to="/blogs/202511/proxifier-introduction" class="btn btn-outline gap-2 group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        <div>
            <div class="text-xs opacity-50 text-left font-normal">上一篇</div>
            <div class="font-bold">Proxifier 介绍</div>
        </div>
      </router-link>
      
      <button class="btn btn-outline gap-2 group" disabled>
        <div class="text-right">
            <div class="text-xs opacity-50 font-normal">下一篇</div>
            <div class="font-bold">敬请期待</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>

    <!-- Image Preview Modal -->
    <dialog class="modal" :class="{ 'modal-open': showPreview }" @click.self="showPreview = false">
      <div class="modal-box max-w-5xl p-0 overflow-hidden bg-transparent shadow-none">
        <div class="relative">
          <img :src="doraemonClashImage" alt="Doraemon Clash Comic Full" class="w-full rounded-xl shadow-2xl" />
          <button class="btn btn-circle btn-sm absolute right-4 top-4 bg-base-100 border-none shadow-lg hover:bg-base-200" @click="showPreview = false">✕</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button @click="showPreview = false">close</button>
      </form>
    </dialog>
  </div>
</template>

<style scoped>
/* Custom styles if needed, but Tailwind/DaisyUI should cover most */
</style>
