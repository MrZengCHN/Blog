<script setup>
import avatarImg from '@/assets/avatar.jpg'
</script>

<template>
  <div class="min-h-[calc(100vh-68px)] flex flex-col md:flex-row items-center justify-center p-4 gap-8">
    <!-- Profile Card -->
    <div class="card w-80 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div class="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img :src="avatarImg" class="object-cover w-full h-full block" />
          </div>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Mr. Zeng</h2>
        <p class="text-sm text-gray-500">全栈开发</p>
        
        <div class="divider"></div>

        <div class="w-full text-left text-sm">
          <div class="flex justify-between mb-2">
            <span class="font-bold">教育背景:</span>
            <span>本科</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="font-bold">专业:</span>
            <span>网络工程</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="font-bold">Github:</span>
            <a href="https://github.com/MrZengCHN" target="_blank" class="link link-primary">@MrZengCHN</a>
          </div>
        </div>

        <div class="card-actions justify-center mt-4">
          <div class="badge badge-outline">Vue.js</div> 
          <div class="badge badge-outline">Tailwind</div>
          <div class="badge badge-outline">Java</div>
          <div class="badge badge-outline">Docker</div>
          <div class="badge badge-outline">Spring Boot</div>
          <div class="badge badge-outline">Spring Cloud</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
