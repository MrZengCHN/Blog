<script setup>
import ThemeSelect from '@/components/ThemeSelect.vue'
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
      <div class="navbar-end">
        <ThemeSelect />
      </div>
    </div>
  </header>
</template>
