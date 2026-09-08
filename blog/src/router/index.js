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
      path: '/blogs/202512/clash-global-extension',
      name: 'clash-global-extension',
      component: () => import('../views/blogs/202512/ClashGlobalExtension/ClashGlobalExtension.vue'),
    },
    {
      path: '/blogs/202601/self-hosted-proxy',
      name: 'self-hosted-proxy',
      component: () => import('../views/blogs/202601/SelfHostedProxy/SelfHostedProxy.vue'),
    },
    {
      path: '/blogs/202604/cliproxy-api-installation',
      name: 'cliproxy-api-installation',
      component: () => import('../views/blogs/202604/CliproxyApiInstallation/CliproxyApiInstallation.vue'),
    },
    {
      path: '/blogs/202606/cpa-codex-auth-converter',
      name: 'cpa-codex-auth-converter',
      component: () => import('../views/blogs/202606/CpaCodexAuthConverter/CpaCodexAuthConverter.vue'),
    },
    {
      path: '/blogs/202609/microsoft-store-download-limits',
      name: 'microsoft-store-download-limits',
      component: () => import('../views/blogs/202609/MicrosoftStoreDownloadLimits/MicrosoftStoreDownloadLimits.vue'),
    },
  ],
})

export default router
