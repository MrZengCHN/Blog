<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateToPost = () => {
  if (props.post.link) {
    router.push(props.post.link)
  }
}
</script>

<template>
  <div @click="navigateToPost" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full">
    <figure class="h-48 overflow-hidden">
      <img 
        :src="post.image" 
        :alt="post.title" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </figure>
    <div class="card-body">
      <div class="flex items-center gap-2 mb-2">
        <span v-for="tag in post.tags" :key="tag" class="badge badge-primary badge-outline text-xs">
          {{ tag }}
        </span>
        <span class="text-xs text-base-content/60 ml-auto">{{ post.date }}</span>
      </div>
      
      <h2 class="card-title text-xl font-bold group-hover:text-primary transition-colors">
        {{ post.title }}
      </h2>
      
      <p class="text-base-content/70 line-clamp-3 text-sm mt-2">
        {{ post.summary }}
      </p>
      
      <div class="card-actions justify-between items-center mt-4 pt-4 border-t border-base-200">
        <div class="flex items-center gap-2">
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content rounded-full w-8 flex items-center justify-center">
              <span class="text-xs">Z</span>
            </div>
          </div>
          <span class="text-sm font-medium">{{ post.author }}</span>
        </div>
        <button class="btn btn-ghost btn-sm group-hover:translate-x-1 transition-transform">
          Read More 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
