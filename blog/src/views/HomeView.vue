<script setup>
</script>

<template>
  <div class="hero min-h-[calc(100vh-68px)] relative overflow-hidden">
    <div class="hero-content text-center z-10">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold mb-4 animate-fade-in-down">Hello there</h1>
        <p class="py-6 text-lg animate-fade-in-up animation-delay-500">
          Welcome to my personal blog. Here I share my thoughts, tutorials, and experiences in software development.
        </p>

      </div>
    </div>
  </div>
</template>

<style scoped>
.animation-delay-500 {
  animation-delay: 0.5s;
}


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
  animation: fadeInDown 1s ease-out both;
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
  animation: fadeInUp 1s ease-out both;
}


</style>
