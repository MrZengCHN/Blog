<script setup>
import { ref } from 'vue';

const activeTab = ref('standard');
const copiedCode = ref(null);

const codes = {
  standard: [
    "4MHDA-C3FNN-EV6YH-ZENEQ-5A2CP",
    "YHAEF-HWLHS-CQR2A-ZENEQ-35H26",
    "987NH-LYFSC-L4V37-PWN3R-PWE7F",
    "CVYAW-WWVJD-8LA2Y-PWN3R-CZA82",
    "TET7R-EY3CC-4E43T-H0NUS-XQCS9",
    "G8E33-937CU-WM3YE-H0NUS-W236X",
    "NRNQ9-KWN42-PSU2N-CYBER-HCEB7",
    "GG2U7-5WH8W-TZF22-CYBER-BGTY3",
    "S4EMQ-NYMZF-LFT3E-ARSEN-SNZLF",
    "ATV34-T2W3Y-WHNWV-ARSEN-AJJ4L",
    "5EZ8G-C3WL5-B56YG-SCXM9-6QZAP"
  ],
  portable: [
    "YYEQ8-PYURB-PVJ3E-ZENEQ-6KCYC",
    "V4FRJ-JYBNC-X4P3F-ZENEQ-G5YNE",
    "L6Z8A-XY2J4-BTZ3P-ZZ7DF-A2Q9C"
  ],
  macos: [
    "87PZC-V3C3H-GTLYP-ZENEQ-2GJLT",
    "NBBCX-D242M-F97WB-ZENEQ-7VH3H",
    "P427L-9Y552-5433E-8DSR3-58Z68"
  ]
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    copiedCode.value = text;
    setTimeout(() => {
      copiedCode.value = null;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};
</script>

<template>
  <div class="card bg-base-200 shadow-xl my-4 overflow-hidden">
    <div class="card-body p-0">
      <!-- Header -->
      <div class="p-3 bg-base-300/50 border-b border-base-300 flex flex-col sm:flex-row justify-between items-center gap-3">
        <h2 class="card-title text-lg flex items-center gap-2">
          <div class="p-1.5 bg-primary/10 rounded-lg text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <span>激活码</span>
          <span class="text-xs font-normal opacity-60">License Keys</span>
        </h2>
        
        <!-- Tabs -->
        <div role="tablist" class="tabs tabs-boxed tabs-sm bg-base-100">
          <a role="tab" class="tab transition-all duration-300" :class="{ 'tab-active bg-primary text-primary-content': activeTab === 'standard' }" @click="activeTab = 'standard'">Standard</a>
          <a role="tab" class="tab transition-all duration-300" :class="{ 'tab-active bg-primary text-primary-content': activeTab === 'portable' }" @click="activeTab = 'portable'">Portable</a>
          <a role="tab" class="tab transition-all duration-300" :class="{ 'tab-active bg-primary text-primary-content': activeTab === 'macos' }" @click="activeTab = 'macos'">MacOS</a>
        </div>
      </div>

      <!-- Content -->
      <div class="p-3 bg-base-100 min-h-[200px]">
        <div class="grid gap-2">
          <div 
            v-for="(code, index) in codes[activeTab]" 
            :key="code" 
            class="group relative flex items-center justify-between p-2 bg-base-200/30 hover:bg-base-200 rounded-lg border border-transparent hover:border-primary/20 transition-all duration-200"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            <div class="flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-base-300 flex items-center justify-center text-[10px] font-mono opacity-50">
                {{ index + 1 }}
              </span>
              <code class="font-mono text-sm tracking-wider select-all">{{ code }}</code>
            </div>
            
            <button 
              class="btn btn-ghost btn-xs btn-square opacity-0 group-hover:opacity-100 transition-all duration-200"
              :class="{ 'btn-success text-success-content opacity-100': copiedCode === code }"
              @click="copyToClipboard(code)"
              :title="copiedCode === code ? '已复制' : '复制'"
            >
              <svg v-if="copiedCode === code" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="px-3 py-2 bg-base-200/50 text-[10px] text-center text-base-content/50">
        点击复制激活码 • 仅供学习交流使用
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid > div {
  animation: slideIn 0.3s ease-out backwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
