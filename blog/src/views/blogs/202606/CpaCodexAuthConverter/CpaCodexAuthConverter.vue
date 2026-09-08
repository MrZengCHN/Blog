<script setup>
import { computed, onMounted, ref } from 'vue'
import coverImage from '@/assets/blogs/202606/CpaCodexAuthConverter/cover.svg'

const sourceText = ref('')
const outputText = ref('')
const sourceName = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const fileInput = ref(null)

const outputFilename = computed(() => {
  const name = sourceName.value.replace(/\.json$/i, '') || 'codex-auth'
  return `${name}-codex.json`
})

function readString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function clearResult() {
  outputText.value = ''
  errorMessage.value = ''
  successMessage.value = ''
}

async function loadFile(event) {
  const file = event.target.files?.[0]
  if (!file) return
  clearResult()
  sourceName.value = file.name
  sourceText.value = await file.text()
  convertJson()
  event.target.value = ''
}

function convertJson() {
  clearResult()
  const raw = sourceText.value.trim()
  if (!raw) {
    errorMessage.value = '请先上传文件或粘贴 JSON'
    return
  }

  let source
  try {
    source = JSON.parse(raw)
  } catch {
    errorMessage.value = 'JSON 格式无效'
    return
  }

  if (!source || Array.isArray(source) || typeof source !== 'object') {
    errorMessage.value = '请提供单个认证文件 JSON'
    return
  }

  const idToken = readString(source.id_token)
  const accessToken = readString(source.access_token)
  const refreshToken = readString(source.refresh_token)
  const accountId = readString(source.account_id)
    || readString(source.chatgpt_account_id)
    || readString(source.workspace_id)
  const lastRefresh = readString(source.last_refresh) || new Date().toISOString()
  const missingFields = []

  if (!idToken) missingFields.push('id_token')
  if (!accessToken) missingFields.push('access_token')
  if (!refreshToken) missingFields.push('refresh_token')
  if (!accountId) missingFields.push('account_id')
  if (missingFields.length > 0) {
    errorMessage.value = `缺少必要字段：${missingFields.join('、')}`
    return
  }

  const codexAuth = {
    auth_mode: 'chatgpt',
    OPENAI_API_KEY: null,
    tokens: {
      id_token: idToken,
      access_token: accessToken,
      refresh_token: refreshToken,
      account_id: accountId,
    },
    last_refresh: lastRefresh,
  }

  outputText.value = JSON.stringify(codexAuth, null, 2)
  successMessage.value = '转换完成'
}

async function copyOutput() {
  if (!outputText.value) return
  await navigator.clipboard.writeText(outputText.value)
  successMessage.value = '已复制'
}

function downloadOutput() {
  if (!outputText.value) return
  const blob = new Blob([outputText.value], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = outputFilename.value
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="container mx-auto max-w-6xl px-4 py-8">
    <div class="breadcrumbs mb-6 text-sm animate-fade-in-down">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/blog">博客</router-link></li>
        <li>CPA Codex认证文件格式转换</li>
      </ul>
    </div>

    <div class="mb-8 text-center animate-fade-in-down">
      <div class="mb-4 flex flex-wrap items-center justify-center gap-2">
        <span class="badge badge-primary badge-outline">CPA</span>
        <span class="badge badge-secondary badge-outline">Codex</span>
        <span class="badge badge-accent badge-outline">工具</span>
      </div>
      <h1 class="mb-4 text-4xl font-bold leading-tight md:text-5xl">CPA Codex认证文件格式转换</h1>
      <p class="mx-auto mb-6 max-w-3xl text-base leading-8 text-base-content/75 md:text-lg">
        把 CPA 导出的认证 JSON 转换成 Codex 可读取的 auth 文件格式。整个过程只在浏览器本地完成，
        不上传、不保存你的认证内容。
      </p>
      <div class="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-base-content/70">
        <span class="font-medium">Mr. Zeng</span>
        <span class="hidden md:inline">•</span>
        <span>2026年6月9日</span>
        <span class="hidden md:inline">•</span>
        <span>本地转换工具</span>
      </div>
      <figure class="overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 shadow-2xl">
        <img :src="coverImage" alt="CPA Codex认证文件格式转换封面" class="w-full object-cover" />
      </figure>
    </div>

    <article class="prose prose-lg max-w-none rounded-box bg-base-100 p-6 shadow-lg md:p-8 animate-fade-in-up animation-delay-300">
      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-primary">#</span> 转换工具
        </h2>
        <p>
          左侧粘贴或上传 CPA 认证文件，点击转换后会在右侧生成 Codex 认证文件。生成结果可以直接复制，
          也可以下载为 JSON 文件。
        </p>

        <div class="not-prose mt-6 rounded-2xl border border-base-300 bg-base-200/70 p-4 md:p-6">
          <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 class="text-2xl font-bold">Codex 格式转换</h3>
              <p class="mt-1 text-sm text-base-content/65">支持上传 JSON 或直接粘贴内容。</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <input
                ref="fileInput"
                type="file"
                class="hidden"
                accept=".json,application/json"
                @change="loadFile"
              />
              <button class="btn btn-sm btn-primary btn-outline gap-2" @click="fileInput?.click()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16.5V19a2 2 0 002 2h12a2 2 0 002-2v-2.5M16 8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                上传 JSON
              </button>
              <button class="btn btn-sm btn-primary" @click="convertJson">转换</button>
            </div>
          </div>

          <div v-if="errorMessage" class="alert alert-error mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M4.93 19h14.14A1.93 1.93 0 0020.76 16L13.7 4a1.93 1.93 0 00-3.4 0L3.24 16A1.93 1.93 0 004.93 19z" />
            </svg>
            <span>{{ errorMessage }}</span>
          </div>
          <div v-else-if="successMessage" class="alert alert-success mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5-1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ successMessage }}</span>
          </div>

          <div class="grid gap-4 lg:grid-cols-2">
            <div class="card border border-base-300 bg-base-100 shadow-sm">
              <div class="card-body p-4">
                <div class="mb-3 flex items-center justify-between gap-2">
                  <h4 class="text-lg font-bold">CPA 认证文件</h4>
                  <span v-if="sourceName" class="badge badge-ghost max-w-48 truncate">{{ sourceName }}</span>
                </div>
                <textarea
                  v-model="sourceText"
                  class="textarea textarea-bordered min-h-[24rem] w-full font-mono text-xs leading-relaxed"
                  placeholder="粘贴 CPA 认证文件 JSON"
                  spellcheck="false"
                ></textarea>
              </div>
            </div>

            <div class="card border border-base-300 bg-base-100 shadow-sm">
              <div class="card-body p-4">
                <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h4 class="text-lg font-bold">Codex 认证文件</h4>
                  <div class="flex items-center gap-2">
                    <button class="btn btn-xs btn-ghost" :disabled="!outputText" @click="copyOutput">
                      复制
                    </button>
                    <button class="btn btn-xs btn-ghost" :disabled="!outputText" @click="downloadOutput">
                      下载
                    </button>
                  </div>
                </div>
                <textarea
                  v-model="outputText"
                  class="textarea textarea-bordered min-h-[24rem] w-full font-mono text-xs leading-relaxed"
                  readonly
                  placeholder="转换结果"
                  spellcheck="false"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-secondary">#</span> 字段说明
        </h2>
        <div class="not-prose overflow-x-auto rounded-2xl border border-base-300">
          <table class="table table-zebra">
            <thead>
              <tr class="bg-base-200">
                <th>输入字段</th>
                <th>说明</th>
                <th>输出位置</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-mono">id_token</td>
                <td>必填，写入 Codex tokens。</td>
                <td class="font-mono">tokens.id_token</td>
              </tr>
              <tr>
                <td class="font-mono">access_token</td>
                <td>必填，写入 Codex tokens。</td>
                <td class="font-mono">tokens.access_token</td>
              </tr>
              <tr>
                <td class="font-mono">refresh_token</td>
                <td>必填，写入 Codex tokens。</td>
                <td class="font-mono">tokens.refresh_token</td>
              </tr>
              <tr>
                <td class="font-mono">account_id</td>
                <td>必填，若不存在则依次尝试 chatgpt_account_id、workspace_id。</td>
                <td class="font-mono">tokens.account_id</td>
              </tr>
              <tr>
                <td class="font-mono">last_refresh</td>
                <td>可选，缺失时使用当前时间。</td>
                <td class="font-mono">last_refresh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-warning">#</span> 安全提醒
        </h2>
        <div class="not-prose grid gap-4 md:grid-cols-3">
          <div class="alert alert-info items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>转换逻辑在浏览器本地执行，不会把认证内容上传到服务器。</span>
          </div>
          <div class="alert alert-warning items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
            </svg>
            <span>认证文件包含敏感 token，不要把原始内容贴到公开聊天、截图或仓库里。</span>
          </div>
          <div class="alert alert-success items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="mt-1 h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.586-1A2 2 0 0018 7.586l-1-1A2 2 0 0015.586 6H8.414A2 2 0 007 6.586l-1 1A2 2 0 006.414 9H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2h-.414z" />
            </svg>
            <span>下载后的文件建议按 Codex 实际读取路径保存，并注意本机权限。</span>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <span class="text-accent">#</span> 小结
        </h2>
        <div class="rounded-2xl border-l-4 border-primary bg-base-200 p-6">
          <p class="mb-0">
            这个页面只做一件事：把 CPA 认证文件整理成 Codex 需要的结构。字段校验保持克制，缺什么就提示什么，
            避免在转换过程中悄悄修改 token 内容。
          </p>
        </div>
      </section>
    </article>

    <div class="mt-12 flex items-center justify-between border-t border-base-200 pt-8 animate-fade-in-up animation-delay-500">
      <router-link to="/blogs/202604/cliproxy-api-installation" class="btn btn-outline gap-2 group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <div class="text-left">
          <div class="text-xs font-normal opacity-50">上一篇</div>
          <div class="font-bold">CPA 安装教程</div>
        </div>
      </router-link>

      <router-link to="/blogs/202609/microsoft-store-download-limits" class="btn btn-outline gap-2 group">
        <div class="text-right">
          <div class="text-xs font-normal opacity-50">下一篇</div>
          <div class="font-bold">Microsoft Store 突破下载限制教程</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
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

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}
</style>
