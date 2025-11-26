<script setup>
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <div class="prose prose-lg mx-auto">
      <h1 class="text-4xl font-bold mb-4">Proxifier：掌控网络流量的利器</h1>
      
      <div class="flex items-center gap-4 text-sm text-base-content/70 mb-8">
        <span>2025年11月26日</span>
        <span>•</span>
        <span>Mr. Zeng</span>
        <span>•</span>
        <span class="badge badge-primary badge-outline">工具</span>
      </div>

      <img src="https://picsum.photos/seed/proxifier/800/400" alt="Proxifier Banner" class="w-full rounded-xl shadow-lg mb-8" />

      <p class="lead text-xl mb-6">
        在网络管理和代理工具的世界中，Proxifier 作为一款强大的实用工具脱颖而出，它允许不支持通过代理服务器工作的网络应用程序通过 SOCKS 或 HTTPS 代理及代理链进行操作。
      </p>

      <h2>什么是 Proxifier？</h2>
      <p>
        Proxifier 是一款允许不支持代理服务器的网络应用程序通过 SOCKS 或 HTTPS 代理及代理链运行的程序。它能有效地“代理化”系统上的任何应用程序，拦截其网络调用并通过你选择的代理进行路由。
      </p>

      <h2>主要功能</h2>
      <ul>
        <li><strong>代理一切：</strong> 将任何互联网应用程序（浏览器、电子邮件、数据库、游戏等）的连接重定向通过代理。</li>
        <li><strong>掌控你的网络：</strong> 控制资源访问。通过单一入口点路由所有连接。从一个地方远程更新多个配置。</li>
        <li><strong>改善连接：</strong> 通过更快的路由或安全隧道路由流量，以提高连接速度和安全性。</li>
        <li><strong>安全与隐私：</strong> 隐藏你的 IP 地址。绕过防火墙限制。通过加密通道隧道连接。</li>
      </ul>

      <h2>基本配置</h2>
      <p>
        开始使用 Proxifier 非常简单：
      </p>
      <ol>
        <li><strong>安装 Proxifier：</strong> 从<a href="https://www.proxifier.com/" target="_blank" rel="noopener noreferrer" class="link link-primary">官方网站</a>下载并安装应用程序。</li>
        <li><strong>添加代理服务器：</strong> 转到 <code>Profile -> Proxy Servers</code> 并添加你的 SOCKS5 或 HTTPS 代理详情。
          <div class="my-6 p-4 bg-base-200/50 rounded-xl border border-base-200">
            <img src="@/assets/blogs/202511/ProxifierIntroduction/proxy-servers.png" alt="Proxy Servers Configuration" class="rounded-lg shadow-lg mx-auto" />
            <p class="text-center text-sm text-base-content/60 mt-3 font-medium">图示：代理服务器配置界面</p>
          </div>
        </li>
        <li><strong>配置规则：</strong> 转到 <code>Profile -> Proxification Rules</code>。在这里你可以定义哪些应用程序应该使用哪个代理。
          <ul>
            <li>Default Rule（默认规则）：处理任何不匹配其他规则的连接。</li>
            <li>Localhost（本地主机）：通常设置为“Direct”（直连）以避免代理本地流量。</li>
          </ul>
          <div class="my-6 p-4 bg-base-200/50 rounded-xl border border-base-200">
            <img src="@/assets/blogs/202511/ProxifierIntroduction/proxification-rules.png" alt="Proxification Rules Configuration" class="rounded-lg shadow-lg mx-auto" />
            <p class="text-center text-sm text-base-content/60 mt-3 font-medium">图示：代理规则配置界面</p>
          </div>
        </li>
      </ol>

      <h2>为什么使用 Proxifier？</h2>
      <p>
        对于开发人员和高级用户来说，Proxifier 提供了对网络流量的细粒度控制。无论你是需要通过特定地区的代理测试应用程序，绕过特定工具的企业防火墙，还是仅仅确保所有流量都经过加密，Proxifier 都能提供所需的灵活性。
      </p>

      <div class="alert alert-info mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>提示：始终确保你有一个可靠的代理服务器。Proxifier 只是路由流量的工具；速度和稳定性取决于你使用的代理。</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any specific styles here if needed, but Tailwind prose plugin handles most typography */
</style>
