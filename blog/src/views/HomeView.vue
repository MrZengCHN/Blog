<script setup>
import { ref } from 'vue'
import BlogCard from '../components/BlogCard.vue'

const posts = ref([
  {
    id: 1,
    title: 'Mastering Network Traffic with Proxifier',
    summary: 'Proxifier allows network applications that do not support working through proxy servers to operate through a SOCKS or HTTPS proxy and chains.',
    date: 'Nov 26, 2025',
    author: 'Mr. Zeng',
    tags: ['Tools', 'Network', 'Proxy'],
    image: 'https://picsum.photos/seed/proxifier/800/600',
    link: '/blogs/202511/proxifier-introduction'
  }
])
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row justify-between items-end mb-8">
      <div>
        <h1 class="text-4xl font-bold mb-2">Latest Posts</h1>
        <p class="text-base-content/70">Explore my thoughts on technology and development.</p>
      </div>
      <div class="tabs tabs-boxed mt-4 md:mt-0">
        <a class="tab tab-active">All</a>
        <a class="tab">Vue</a>
        <a class="tab">CSS</a>
        <a class="tab">Life</a>
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
