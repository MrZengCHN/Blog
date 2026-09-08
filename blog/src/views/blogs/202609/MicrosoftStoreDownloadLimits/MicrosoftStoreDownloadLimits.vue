<script setup>
import { onMounted } from 'vue'
import coverImage from '@/assets/blogs/202609/MicrosoftStoreDownloadLimits/cover.png'
import copyAppLinkImage from '@/assets/blogs/202609/MicrosoftStoreDownloadLimits/step-2-copy-app-link.png'
import pasteLinkImage from '@/assets/blogs/202609/MicrosoftStoreDownloadLimits/step-3-paste-link.png'
import generateLinksImage from '@/assets/blogs/202609/MicrosoftStoreDownloadLimits/step-3-generate-links.png'
import downloadLinkImage from '@/assets/blogs/202609/MicrosoftStoreDownloadLimits/step-3-download-link.png'
import downloadFileImage from '@/assets/blogs/202609/MicrosoftStoreDownloadLimits/step-3-download-file.png'

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
        <li>Microsoft Store 突破下载限制教程</li>
      </ul>
    </div>

    <div class="mb-8 text-center animate-fade-in-down">
      <div class="mb-4 flex flex-wrap items-center justify-center gap-2">
        <span class="badge badge-primary badge-outline">Microsoft Store</span>
        <span class="badge badge-secondary badge-outline">Windows</span>
        <span class="badge badge-accent badge-outline">教程</span>
      </div>
      <h1 class="mb-4 text-4xl font-bold leading-tight md:text-5xl">Microsoft Store 突破下载限制教程</h1>
      <p class="mx-auto mb-6 max-w-3xl text-base leading-8 text-base-content/75 md:text-lg">
        通过网页版 Microsoft Store 获取应用页面链接，再生成可下载的文件链接。
      </p>
      <div class="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-base-content/70">
        <span class="font-medium">Mr. Zeng</span>
        <span class="hidden md:inline">•</span>
        <span>2026年9月8日</span>
      </div>
      <figure class="overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 shadow-2xl">
        <img :src="coverImage" alt="Microsoft Store 下载流程封面" class="w-full object-cover" />
      </figure>
    </div>

    <article class="prose prose-lg max-w-none rounded-box bg-base-100 p-6 shadow-lg md:p-8 animate-fade-in-up animation-delay-300">
      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-primary">#</span> 适用范围
        </h2>
        <div class="rounded-2xl border-l-4 border-primary bg-base-200 p-6">
          <p class="mb-3">本方法可用于处理以下下载限制：</p>
          <ul class="mb-0">
            <li>登录下载限制</li>
            <li>地区下载限制</li>
            <li>系统下载限制</li>
          </ul>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-secondary">#</span> 第一步：打开网页版微软商店
        </h2>
        <p>打开网页版 Microsoft Store，搜索需要下载的应用。</p>
        <div class="not-prose mb-6">
          <a
            href="https://apps.microsoft.com/home?hl=zh-CN&amp;gl=US"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            打开网页版 Microsoft Store
          </a>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-accent">#</span> 第二步：复制应用下载页面链接
        </h2>
        <p>打开目标应用的详情页，复制浏览器地址栏中的页面链接。</p>
        <figure class="not-prose overflow-hidden rounded-2xl border border-base-300 bg-base-200/70 p-3 shadow-sm">
          <img :src="copyAppLinkImage" alt="复制 Microsoft Store 应用详情页链接" class="w-full rounded-xl object-contain" />
        </figure>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-warning">#</span> 第三步：生成下载链接
        </h2>
        <p>将刚才复制的应用页面链接粘贴到下方网站中。</p>
        <div class="not-prose mb-6">
          <a
            href="https://store.rg-adguard.net/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            打开下载链接生成页
          </a>
        </div>

        <figure class="not-prose mb-6 overflow-hidden rounded-2xl border border-base-300 bg-base-200/70 p-3 shadow-sm">
          <img :src="pasteLinkImage" alt="将应用页面链接粘贴到下载链接生成页" class="w-full rounded-xl object-contain" />
        </figure>
        <p>点击右侧的 <strong>✔</strong>，生成下载链接。</p>
        <figure class="not-prose mb-6 overflow-hidden rounded-2xl border border-base-300 bg-base-200/70 p-3 shadow-sm">
          <img :src="generateLinksImage" alt="下载链接生成结果" class="w-full rounded-xl object-contain" />
        </figure>
        <figure class="not-prose mb-6 overflow-hidden rounded-2xl border border-base-300 bg-base-200/70 p-3 shadow-sm">
          <img :src="downloadLinkImage" alt="打开生成的下载链接" class="mx-auto rounded-xl object-contain" />
        </figure>
        <p>在新窗口中打开后，刷新一下页面就可以下载了。</p>
        <figure class="not-prose overflow-hidden rounded-2xl border border-base-300 bg-base-200/70 p-3 shadow-sm">
          <img :src="downloadFileImage" alt="刷新页面后下载文件" class="w-full rounded-xl object-contain" />
        </figure>
      </section>

      <section>
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-info">#</span> 总结
        </h2>
        <div class="rounded-2xl border-l-4 border-primary bg-base-200 p-6">
          <p class="mb-0">
            按照上面的三个步骤，先获取 Microsoft Store 应用详情页链接，再生成对应下载链接，即可完成下载。
          </p>
        </div>
      </section>
    </article>

    <div class="mt-12 flex items-center justify-between border-t border-base-200 pt-8 animate-fade-in-up animation-delay-500">
      <router-link to="/blogs/202606/cpa-codex-auth-converter" class="btn btn-outline gap-2 group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <div class="text-left">
          <div class="text-xs font-normal opacity-50">上一篇</div>
          <div class="font-bold">CPA Codex认证文件格式转换</div>
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
