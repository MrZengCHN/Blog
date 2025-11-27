<script setup>
import ThemeSelect from '@/components/ThemeSelect.vue'
import { gloableStore } from '@/stores/gloableStore'

const store = gloableStore()
</script>

<template>
  <header class="sticky top-0 z-50">
    <div class="navbar bg-base-100/70 backdrop-blur-md shadow-md">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl">My Blog</a>
      </div>
      <div class="navbar-center">
        <ul class="menu menu-horizontal px-1">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </div>
      <div class="navbar-end gap-2">
        <button class="btn btn-ghost btn-circle" v-if="!store.isMusicPlayerVisible" @click="store.setMusicPlayerVisibility(true)" title="Show Music Player">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
        </button>
        <ThemeSelect />
      </div>
    </div>
  </header>
</template>
