<script setup>
import { ref } from 'vue'
import BlogCard from '../components/BlogCard.vue'
import proxifierCover from '@/assets/blogs/202511/ProxifierIntroduction/cover.png'
import antigravityCover from '@/assets/blogs/202511/AntigravityLoginTips/cover.jpg'

const posts = ref([
  {
    id: 2,
    title: 'Antigravity 登录技巧',
    summary: '掌握 Antigravity 的多维身份验证与零重力快速通道，开启安全高效的数字宇宙之旅。',
    date: '2025年11月27日',
    author: 'Mr. Zeng',
    tags: ['技巧', 'Antigravity', '安全'],
    image: antigravityCover,
    link: '/blogs/202511/antigravity-login-tips'
  },
  {
    id: 1,
    title: 'Proxifier：掌控网络流量的利器',
    summary: 'Proxifier 允许不支持通过代理服务器工作的网络应用程序通过 SOCKS 或 HTTPS 代理及代理链进行操作。',
    date: '2025年11月26日',
    author: 'Mr. Zeng',
    tags: ['工具', '网络', '代理'],
    image: proxifierCover,
    link: '/blogs/202511/proxifier-introduction'
  }
])
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row justify-between items-end mb-8">
      <div>
        <h1 class="text-4xl font-bold mb-2">最新文章</h1>
        <p class="text-base-content/70">探索我对技术和开发的思考。</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard 
        v-for="post in posts" 
        :key="post.id" 
        :post="post" 
      />
    </div>
  </div>
</template>
