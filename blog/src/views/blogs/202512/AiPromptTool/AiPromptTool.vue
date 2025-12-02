<script setup>
import { ref } from 'vue'
import cover from '@/assets/blogs/202512/AiPromptTool/cover.jpg'

const prompts = ref([
    {
        title: '代码解释器',
        content: '你是一个资深的软件工程师，请解释以下代码的功能、逻辑和潜在问题：\n\n[在此处粘贴代码]',
        category: '编程开发'
    },
    {
        title: 'Vue3 组件生成',
        content: '请使用 Vue3 + TailwindCSS + DaisyUI 创建一个[组件名称]组件。要求：\n1. 响应式设计\n2. 代码整洁\n3. 包含必要的交互逻辑',
        category: '前端开发'
    },
    {
        title: 'Bug 修复助手',
        content: '我遇到了一个报错：[错误信息]。\n环境：Vue3, Vite, Windows。\n请分析可能的原因并提供解决方案。',
        category: '调试'
    },
    {
        title: '技术文章润色',
        content: '请帮我润色以下技术文章，使其更加通俗易懂，专业术语使用准确，语气专业且亲切：\n\n[在此处粘贴文章内容]',
        category: '写作'
    }
])

const copyPrompt = (content) => {
    navigator.clipboard.writeText(content)
    // 这里可以添加一个简单的提示，比如使用 DaisyUI 的 toast
    const toast = document.createElement('div')
    toast.className = 'toast toast-top toast-center z-50'
    toast.innerHTML = `
    <div class="alert alert-success">
      <span>提示词已复制到剪贴板</span>
    </div>
  `
    document.body.appendChild(toast)
    setTimeout(() => {
        document.body.removeChild(toast)
    }, 2000)
}
</script>

<template>
    <div class="container mx-auto px-4 py-8 max-w-4xl">
        <!-- Header -->
        <div class="mb-8 animate-fade-in-down">
            <img :src="cover" alt="Cover" class="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl mb-6" />
            <h1 class="text-4xl md:text-5xl font-bold mb-4">使用 Vue3 实现的 AI 提示词工具分享</h1>
            <div class="flex items-center gap-4 text-base-content/70">
                <div class="flex items-center gap-2">
                    <span>Mr. Zeng</span>
                </div>
                <span>•</span>
                <span>2025年12月1日</span>
                <span>•</span>
                <div class="flex gap-2">
                    <span class="badge badge-primary badge-outline">Vue3</span>
                    <span class="badge badge-secondary badge-outline">AI</span>
                    <span class="badge badge-accent badge-outline">工具</span>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none mb-12 animate-fade-in-up animation-delay-300">
            <p>
                在 AI 时代，提示词（Prompt）就是生产力。为了更高效地管理和使用常用的 AI 提示词，我使用 Vue3 开发了一个简单的 <a
                    href="https://mrzengchn.github.io/AI-Prompt-Generator/#/" target="_blank"
                    class="link link-primary">提示词工具</a>。
                今天分享一些我日常开发中常用的高质量提示词，希望能帮助大家提高效率。
            </p>

            <div class="not-prose mb-8">
                <a href="https://mrzengchn.github.io/AI-Prompt-Generator/#/" target="_blank"
                    class="btn btn-primary gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    在线体验提示词工具
                </a>
            </div>

            <div class="not-prose mb-12">
                <h3 class="text-2xl font-bold mb-6">主要功能</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">需求管理</span>
                            <span class="text-sm opacity-70">添加、编辑、删除、排序需求条目</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">优先级标记</span>
                            <span class="text-sm opacity-70">高/中/低三级优先级</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">标签分类</span>
                            <span class="text-sm opacity-70">使用标签组织需求</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">文件关联</span>
                            <span class="text-sm opacity-70">为每个需求添加相关文件路径</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">拖拽排序</span>
                            <span class="text-sm opacity-70">直接拖动卡片调整顺序</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">搜索过滤</span>
                            <span class="text-sm opacity-70">按内容、标签、文件快速查找</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">自定义编码</span>
                            <span class="text-sm opacity-70">支持多种文件编码格式</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">自定义提示词</span>
                            <span class="text-sm opacity-70">个性化 Markdown 导出内容</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">Markdown 导出</span>
                            <span class="text-sm opacity-70">一键导出为标准格式文档</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 p-4 bg-base-100 rounded-lg shadow-sm border border-base-200">
                        <div class="text-success mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <span class="font-bold block">数据持久化</span>
                            <span class="text-sm opacity-70">自动保存到本地存储</span>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="text-2xl font-bold mb-6">为什么需要管理提示词？</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                <div class="card bg-base-100 shadow-sm border border-base-200">
                    <div class="card-body p-6 items-center text-center">
                        <div
                            class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h4 class="card-title text-base">复用性</h4>
                        <p class="text-sm opacity-70">好的提示词值得反复使用，避免重复造轮子。</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-sm border border-base-200">
                    <div class="card-body p-6 items-center text-center">
                        <div
                            class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 class="card-title text-base">迭代优化</h4>
                        <p class="text-sm opacity-70">记录并不断改进提示词，持续获得更好的结果。</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-sm border border-base-200">
                    <div class="card-body p-6 items-center text-center">
                        <div
                            class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 class="card-title text-base">分享协作</h4>
                        <p class="text-sm opacity-70">团队内部共享最佳实践，提升整体效率。</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Prompt Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up animation-delay-500">
            <div v-for="(prompt, index) in prompts" :key="index"
                class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200">
                <div class="card-body">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="card-title text-primary">{{ prompt.title }}</h3>
                        <span class="badge badge-ghost">{{ prompt.category }}</span>
                    </div>
                    <div
                        class="bg-base-200 p-4 rounded-lg mb-4 font-mono text-sm h-32 overflow-y-auto custom-scrollbar">
                        {{ prompt.content }}
                    </div>
                    <div class="card-actions justify-end">
                        <button @click="copyPrompt(prompt.content)" class="btn btn-primary btn-sm gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            复制提示词
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: hsl(var(--bc) / 0.2);
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: hsl(var(--bc) / 0.4);
}

.animation-delay-300 {
    animation-delay: 0.3s;
}

.animation-delay-500 {
    animation-delay: 0.5s;
}

.animation-delay-700 {
    animation-delay: 0.7s;
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
    animation: fadeInDown 0.8s ease-out both;
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
    animation: fadeInUp 0.8s ease-out both;
}
</style>
