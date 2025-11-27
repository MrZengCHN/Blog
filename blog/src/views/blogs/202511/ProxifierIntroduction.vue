<script setup>
import { ref, onMounted } from 'vue';
import ActivationCodes from '@/components/blogs/202511/ProxifierIntroduction/ActivationCodes.vue';
import coverImage from '@/assets/blogs/202511/ProxifierIntroduction/cover.png';
import proxyServersImage from '@/assets/blogs/202511/ProxifierIntroduction/proxy-servers.png';
import proxificationRulesImage from '@/assets/blogs/202511/ProxifierIntroduction/proxification-rules.png';

const showPreview = ref(false);
const previewImage = ref('');

const openPreview = (image) => {
  previewImage.value = image;
  showPreview.value = true;
};

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
        <li>Proxifier 介绍</li>
      </ul>
    </div>

    <!-- Article Header -->
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">Proxifier：掌控网络流量的利器</h1>
      
      <div class="flex flex-wrap justify-center items-center gap-4 text-base-content/70 text-sm mb-8">
        <div class="flex items-center gap-2">
          <span class="font-medium">Mr. Zeng</span>
        </div>
        <span class="hidden md:inline">•</span>
        <span>2025年11月26日</span>
        <span class="hidden md:inline">•</span>
        <div class="badge badge-primary badge-outline">工具</div>
      </div>

      <figure class="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl bg-base-200">
        <img :src="coverImage" alt="Proxifier Banner" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </figure>
    </div>

    <!-- Article Content -->
    <article class="prose prose-lg max-w-none">
      <p class="lead text-xl text-base-content/80 mb-12">
        在网络管理和代理工具的世界中，<strong>Proxifier</strong> 作为一款强大的实用工具脱颖而出。它允许不支持通过代理服务器工作的网络应用程序，通过 SOCKS 或 HTTPS 代理及代理链进行操作，赋予你对网络流量的绝对掌控权。
      </p>

      <!-- What is Proxifier -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            什么是 Proxifier？
        </h2>
        <p>
            Proxifier 是一款允许不支持代理服务器的网络应用程序通过 SOCKS 或 HTTPS 代理及代理链运行的程序。它能有效地“代理化”系统上的任何应用程序，拦截其网络调用并通过你选择的代理进行路由。
        </p>
      </div>

      <!-- Key Features -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">主要功能</h2>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="card bg-base-100 shadow-md border border-base-200">
                <div class="card-body">
                    <h3 class="card-title text-base text-primary">代理一切</h3>
                    <p class="text-sm">将任何互联网应用程序（浏览器、电子邮件、数据库、游戏等）的连接重定向通过代理。</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-md border border-base-200">
                <div class="card-body">
                    <h3 class="card-title text-base text-secondary">掌控你的网络</h3>
                    <p class="text-sm">控制资源访问。通过单一入口点路由所有连接。从一个地方远程更新多个配置。</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-md border border-base-200">
                <div class="card-body">
                    <h3 class="card-title text-base text-accent">改善连接</h3>
                    <p class="text-sm">通过更快的路由或安全隧道路由流量，以提高连接速度和安全性。</p>
                </div>
            </div>
            <div class="card bg-base-100 shadow-md border border-base-200">
                <div class="card-body">
                    <h3 class="card-title text-base text-info">安全与隐私</h3>
                    <p class="text-sm">隐藏你的 IP 地址。绕过防火墙限制。通过加密通道隧道连接。</p>
                </div>
            </div>
        </div>
      </div>

      <!-- Basic Configuration -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">基本配置</h2>
        <p class="mb-6">开始使用 Proxifier 非常简单，只需三步：</p>
        
        <ul class="steps steps-vertical w-full">
            <li class="step step-primary">
                <div class="text-left w-full pl-4 pb-8">
                    <h3 class="font-bold text-lg">1. 安装 Proxifier</h3>
                    <p class="text-sm mt-1">从 <a href="https://www.proxifier.com/" target="_blank" rel="noopener noreferrer" class="link link-primary">官方网站</a> 下载并安装应用程序。</p>
                </div>
            </li>
            <li class="step step-primary">
                <div class="text-left w-full pl-4 pb-8">
                    <h3 class="font-bold text-lg">2. 添加代理服务器</h3>
                    <p class="text-sm mt-1 mb-4">转到 <code>Profile -> Proxy Servers</code> 并添加你的 SOCKS5 或 HTTPS 代理详情。</p>
                    <div class="bg-base-200/50 p-2 rounded-xl border border-base-200 inline-block max-w-full">
                        <img :src="proxyServersImage" alt="Proxy Servers Configuration" class="rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity max-h-64 object-contain" @click="openPreview(proxyServersImage)" />
                    </div>
                </div>
            </li>
            <li class="step step-primary">
                <div class="text-left w-full pl-4">
                    <h3 class="font-bold text-lg">3. 配置规则</h3>
                    <p class="text-sm mt-1 mb-4">转到 <code>Profile -> Proxification Rules</code>。在这里你可以定义哪些应用程序应该使用哪个代理。</p>
                     <div class="bg-base-200/50 p-2 rounded-xl border border-base-200 inline-block max-w-full">
                        <img :src="proxificationRulesImage" alt="Proxification Rules Configuration" class="rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity max-h-64 object-contain" @click="openPreview(proxificationRulesImage)" />
                    </div>
                    <ul class="list-disc list-inside text-sm mt-4 space-y-1 opacity-80">
                        <li><strong>Default Rule（默认规则）：</strong> 处理任何不匹配其他规则的连接。</li>
                        <li><strong>Localhost（本地主机）：</strong> 通常设置为“Direct”（直连）以避免代理本地流量。</li>
                    </ul>
                </div>
            </li>
        </ul>
      </div>

      <!-- Activation Codes -->
      <div class="mb-12">
          <ActivationCodes />
      </div>

      <!-- Why Use Proxifier -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">为什么使用 Proxifier？</h2>
        <p>
            对于开发人员和高级用户来说，Proxifier 提供了对网络流量的细粒度控制。无论你是需要通过特定地区的代理测试应用程序，绕过特定工具的企业防火墙，还是仅仅确保所有流量都经过加密，Proxifier 都能提供所需的灵活性。
        </p>
      </div>

      <div class="alert alert-warning shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>提示：始终确保你有一个可靠的代理服务器。Proxifier 只是路由流量的工具；速度和稳定性取决于你使用的代理。</span>
      </div>

    </article>

    <!-- Navigation -->
    <div class="flex justify-between items-center mt-12 pt-8 border-t border-base-200">
      <button class="btn btn-outline gap-2 group" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        <div class="text-left">
            <div class="text-xs opacity-50 font-normal">上一篇</div>
            <div class="font-bold">没有了</div>
        </div>
      </button>
      
      <router-link to="/blogs/202511/antigravity-login-tips" class="btn btn-outline gap-2 group">
        <div class="text-right">
            <div class="text-xs opacity-50 font-normal">下一篇</div>
            <div class="font-bold">Antigravity 登录技巧</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
      </router-link>
    </div>

    <!-- Image Preview Modal -->
    <dialog class="modal" :class="{ 'modal-open': showPreview }" @click.self="showPreview = false">
      <div class="modal-box max-w-5xl p-0 overflow-hidden bg-transparent shadow-none">
        <div class="relative">
          <img :src="previewImage" alt="Full Preview" class="w-full rounded-xl shadow-2xl" />
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
/* Custom styles if needed */
</style>
