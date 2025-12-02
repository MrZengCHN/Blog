import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/blogs/202511/proxifier-introduction',
      name: 'proxifier-introduction',
      component: () => import('../views/blogs/202511/ProxifierIntroduction.vue'),
    },
    {
      path: '/blogs/202511/antigravity-login-tips',
      name: 'antigravity-login-tips',
      component: () => import('../views/blogs/202511/AntigravityLoginTips.vue'),
    },
    {
      path: '/blogs/202512/ai-prompt-tool',
      name: 'ai-prompt-tool',
      component: () => import('../views/blogs/202512/AiPromptTool/AiPromptTool.vue'),
    },
  ],
})

export default router
