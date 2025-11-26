<script setup>
</script>

<template>
  <header>
    <div class="navbar bg-base-100 shadow-md">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">My Blog</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>
