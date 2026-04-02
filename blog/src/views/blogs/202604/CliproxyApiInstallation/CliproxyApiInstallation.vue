<script setup>
import { onMounted, ref } from 'vue'
import certbotResultImage from '@/assets/blogs/202604/CliproxyApiInstallation/certbot-result.png'
import coverImage from '@/assets/blogs/202604/CliproxyApiInstallation/cover.svg'

const showPreview = ref(false)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="container mx-auto max-w-5xl px-4 py-8">
    <div class="breadcrumbs mb-6 text-sm animate-fade-in-down">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/blog">博客</router-link></li>
        <li>CPA 安装教程</li>
      </ul>
    </div>

    <div class="mb-8 text-center animate-fade-in-down">
      <div class="mb-4 flex flex-wrap items-center justify-center gap-2">
        <span class="badge badge-primary badge-outline">CPA</span>
        <span class="badge badge-secondary badge-outline">代理</span>
        <span class="badge badge-accent badge-outline">教程</span>
      </div>
      <h1 class="mb-4 text-4xl font-bold leading-tight md:text-5xl">CPA 安装教程</h1>
      <p class="mx-auto mb-6 max-w-3xl text-base leading-8 text-base-content/75 md:text-lg">
        从服务器初始化到 HTTPS 接入，整理一套可直接复现的 Cliproxy API 安装流程，覆盖远程管理、用户级
        systemd 启动、证书签发与访问验证。
      </p>
      <div class="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-base-content/70">
        <span class="font-medium">Mr. Zeng</span>
        <span class="hidden md:inline">•</span>
        <span>2026年4月2日</span>
        <span class="hidden md:inline">•</span>
        <a
          href="https://help.router-for.me/cn/introduction/quick-start"
          target="_blank"
          rel="noopener noreferrer"
          class="link link-primary"
        >
          官方快速开始
        </a>
      </div>
      <figure class="overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 shadow-2xl">
        <img :src="coverImage" alt="CLProxyAPI 封面" class="w-full object-cover" />
      </figure>
    </div>

    <article class="prose prose-lg max-w-none rounded-box bg-base-100 p-6 shadow-lg md:p-8 animate-fade-in-up animation-delay-300">
      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-primary">#</span> 前言
        </h2>
        <div class="rounded-2xl border-l-4 border-primary bg-base-200 p-6">
          <p class="mb-4">
            CPA 适合用来统一管理代理配置与远程访问入口。相比零散地手动维护服务，这种做法更利于后续证书接入、
            管理页面访问以及日常运维排查。
          </p>
          <p class="mb-0">
            这篇文章基于一份安装笔记整理成完整流程，默认你已经拿到一台 Linux 服务器，并准备好要绑定的域名。
            文中的域名、管理地址和密钥均使用示例值，请替换成你自己的实际配置。
          </p>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-secondary">#</span> 准备工作
        </h2>
        <div class="overflow-x-auto rounded-2xl border border-base-300">
          <table class="table table-zebra">
            <thead>
              <tr class="bg-base-200">
                <th>项目</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-semibold">服务器环境</td>
                <td>建议使用 Ubuntu 或 Debian，并确保能通过 SSH 正常管理。</td>
              </tr>
              <tr>
                <td class="font-semibold">域名</td>
                <td>提前解析到服务器公网 IP，本文统一使用 <code>cpa.your-domain.example</code> 作为示例。</td>
              </tr>
              <tr>
                <td class="font-semibold">防火墙</td>
                <td>确认 80、443 以及 CPA 实际管理端口对外可达。</td>
              </tr>
              <tr>
                <td class="font-semibold">官方文档</td>
                <td>
                  先过一遍
                  <a href="https://help.router-for.me/cn/introduction/quick-start" target="_blank" rel="noopener noreferrer">Quick Start</a>
                  ，避免安装过程中遗漏前置条件。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-accent">#</span> 安装步骤
        </h2>

        <div class="mb-8 rounded-2xl border border-base-300 bg-base-200/70 p-6">
          <h3 class="mt-0 text-xl font-semibold">1. 升级系统</h3>
          <p>先同步软件源并完成基础升级，确保后续安装依赖时不会卡在旧包版本。</p>
          <pre><code>apt update
apt upgrade -y</code></pre>
        </div>

        <div class="mb-8 rounded-2xl border border-base-300 bg-base-200/70 p-6">
          <h3 class="mt-0 text-xl font-semibold">2. 安装 CPA</h3>
          <p>
            官方快速开始已经给出了安装入口。这里不重复抄写整套安装脚本，直接使用官方文档中的最新方式即可，
            这样可以避免文章发布日期之后命令发生变化。
          </p>
          <div class="not-prose mt-4">
            <a
              href="https://help.router-for.me/cn/introduction/quick-start"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary gap-2"
            >
              打开官方安装文档
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5h5m0 0v5m0-5L10 14m-4 5h13a1 1 0 001-1V9m-6 11H5a1 1 0 01-1-1V6a1 1 0 011-1h5" />
              </svg>
            </a>
          </div>
        </div>

        <div class="mb-8 rounded-2xl border border-base-300 bg-base-200/70 p-6">
          <h3 class="mt-0 text-xl font-semibold">3. 开启远程管理</h3>
          <p>
            安装完成后，找到 CPA 的配置文件并补上远程管理配置。这里的 <code>secret-key</code> 必须替换成你自己的强密码。
          </p>
          <pre><code>remote-management:
  allow-remote: true
  secret-key: "replace-with-your-own-password"</code></pre>
          <div class="alert alert-info mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>如果你准备公开暴露管理面板，建议再叠加 IP 限制、反向代理或其他访问控制策略。</span>
          </div>
        </div>

        <div class="mb-8 rounded-2xl border border-base-300 bg-base-200/70 p-6">
          <h3 class="mt-0 text-xl font-semibold">4. 给 root 开启 lingering</h3>
          <p>
            CPA 这里采用用户级 systemd 服务管理。为了避免用户退出后服务被回收，需要先为 <code>root</code> 开启 lingering。
          </p>
          <pre><code>loginctl enable-linger root
loginctl show-user root</code></pre>
          <p>确认输出里能看到下面这一项：</p>
          <pre><code>Linger=yes</code></pre>
        </div>

        <div class="rounded-2xl border border-base-300 bg-base-200/70 p-6">
          <h3 class="mt-0 text-xl font-semibold">5. 启动并检查 CPA 服务</h3>
          <p>linger 生效后，就可以启用、启动并检查用户级服务状态。</p>
          <pre><code>systemctl --user enable cliproxyapi.service
systemctl --user start cliproxyapi.service
systemctl --user status cliproxyapi.service</code></pre>
          <p class="mb-0">
            如果状态异常，优先检查服务文件位置、用户会话是否正确，以及配置文件里是否存在拼写错误。
          </p>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-warning">#</span> HTTPS 配置
        </h2>

        <div class="mb-8 rounded-2xl border border-base-300 bg-base-200/70 p-6">
          <h3 class="mt-0 text-xl font-semibold">1. 安装 Certbot</h3>
          <p>下面是 Debian / Ubuntu 环境下常见的安装方式，按你实际使用的 Web 服务选择插件。</p>
          <pre><code># Ubuntu / Debian
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
# 如果你用 Apache，可替换为 python3-certbot-apache</code></pre>
        </div>

        <div class="mb-8 rounded-2xl border border-base-300 bg-base-200/70 p-6">
          <h3 class="mt-0 text-xl font-semibold">2. 申请证书并自动配置</h3>
          <p>
            文章里统一使用 <code>cpa.your-domain.example</code> 作为演示域名。实际执行时，把它替换成你自己的已解析域名。
          </p>
          <pre><code># Nginx
sudo certbot --nginx -d cpa.your-domain.example

# Apache
sudo certbot --apache -d cpa.your-domain.example</code></pre>

          <div class="not-prose mt-6">
            <div class="rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm">
              <img
                :src="certbotResultImage"
                alt="Certbot 结果示意图"
                class="max-h-80 w-full cursor-zoom-in rounded-xl object-contain"
                @click="showPreview = true"
              />
            </div>
            <p class="mt-3 text-sm text-base-content/65">证书申请结果示意图，点击可放大查看。</p>
          </div>
        </div>

        <div class="rounded-2xl border border-base-300 bg-base-200/70 p-6">
          <h3 class="mt-0 text-xl font-semibold">3. 测试自动续期并重启服务</h3>
          <p>证书签发成功后，先做一次 dry-run，确认续期链路没有问题，再重启 CPA 服务读取最新配置。</p>
          <pre><code>sudo certbot renew --dry-run
systemctl --user restart cliproxyapi.service</code></pre>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-info">#</span> 访问与验证
        </h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-base-300 bg-base-200/70 p-6">
            <h3 class="mt-0 text-lg font-semibold">HTTP 管理入口</h3>
            <p class="mb-0"><code>http://cpa.your-domain.example:8317/management.html#/config</code></p>
          </div>
          <div class="rounded-2xl border border-base-300 bg-base-200/70 p-6">
            <h3 class="mt-0 text-lg font-semibold">HTTPS 管理入口</h3>
            <p class="mb-0"><code>https://cpa.your-domain.example:8317/management.html#/config</code></p>
          </div>
        </div>

        <div class="alert alert-success mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.586-1A2 2 0 0018 7.586l-1-1A2 2 0 0015.586 6H8.414A2 2 0 007 6.586l-1 1A2 2 0 006.414 9H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2h-.414z" />
          </svg>
          <span>如果页面能正常打开且服务状态为 active，说明安装链路已经基本打通。</span>
        </div>

        <ul class="mt-6">
          <li>先用 <code>systemctl --user status cliproxyapi.service</code> 确认服务常驻正常。</li>
          <li>证书签发前请先验证 DNS 解析与 80/443 端口是否可访问。</li>
          <li>如果浏览器仍提示不安全连接，优先排查证书链、域名是否一致以及服务是否已重启。</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-error">#</span> 注意事项
        </h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="alert">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M4.93 19h14.14A1.93 1.93 0 0020.76 16L13.7 4a1.93 1.93 0 00-3.4 0L3.24 16A1.93 1.93 0 004.93 19z" />
            </svg>
            <span><code>secret-key</code> 不要照抄示例值，至少替换成高强度密码。</span>
          </div>
          <div class="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
            </svg>
            <span>管理端口、80、443 的安全组和本机防火墙规则要同步放行。</span>
          </div>
          <div class="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>定期执行续期测试，避免证书到期后管理入口失效。</span>
          </div>
          <div class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5-1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>涉及公开文章或分享截图时，记得把真实域名、面板地址和密钥做脱敏处理。</span>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-primary">#</span> 总结
        </h2>
        <div class="rounded-2xl border-l-4 border-primary bg-base-200 p-6">
          <p class="mb-4">
            到这里，CPA 的基础安装、远程管理与 HTTPS 接入就已经串起来了。后续如果你要继续扩展，可以再补反向代理、
            访问控制、日志监控或者更细的服务治理策略。
          </p>
          <p class="mb-0">
            如果只是快速回看本文，记住三个关键点就够了：配置远程管理、让用户级服务常驻、证书签发后重启服务并验证 HTTPS 入口。
          </p>
        </div>
      </section>
    </article>

    <div class="mt-12 flex items-center justify-between border-t border-base-200 pt-8 animate-fade-in-up animation-delay-500">
      <router-link to="/blogs/202601/self-hosted-proxy" class="btn btn-outline gap-2 group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <div class="text-left">
          <div class="text-xs font-normal opacity-50">上一篇</div>
          <div class="font-bold">自建代理节点教程</div>
        </div>
      </router-link>

      <button class="btn btn-outline gap-2 group" disabled>
        <div class="text-right">
          <div class="text-xs font-normal opacity-50">下一篇</div>
          <div class="font-bold">没有了</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <dialog class="modal" :class="{ 'modal-open': showPreview }" @click.self="showPreview = false">
      <div class="modal-box max-w-5xl overflow-hidden bg-transparent p-0 shadow-none">
        <div class="relative">
          <img :src="certbotResultImage" alt="Certbot 结果示意图大图" class="w-full rounded-xl shadow-2xl" />
          <button
            class="btn btn-circle btn-sm absolute right-4 top-4 border-none bg-base-100 shadow-lg hover:bg-base-200"
            @click="showPreview = false"
          >
            X
          </button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button @click="showPreview = false">close</button>
      </form>
    </dialog>
  </div>
</template>

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
