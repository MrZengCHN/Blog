<script setup>
import { ref, onMounted, computed } from 'vue'
import avatarImg from '@/assets/avatar.jpg'

const weather = ref(null)
const loading = ref(true)
const error = ref(null)

// Jinan, Shandong, China
const JINAN_COORDS = { lat: 36.6512, lon: 117.1201 }

const fetchWeather = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    const data = await response.json()
    weather.value = data.current_weather
    error.value = null
  } catch (e) {
    error.value = "Failed to load weather"
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude)
      },
      (err) => {
        console.warn("Geolocation denied/failed, using Jinan default")
        fetchWeather(JINAN_COORDS.lat, JINAN_COORDS.lon)
      }
    )
  } else {
    console.warn("Geolocation not supported, using Jinan default")
    fetchWeather(JINAN_COORDS.lat, JINAN_COORDS.lon)
  }
})

const weatherType = computed(() => {
  if (!weather.value) return 'sunny'
  const code = weather.value.weathercode
  
  // Sunny: 0, 1
  if ([0, 1].includes(code)) return 'sunny'
  
  // Snowy: 71-77, 85-86
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snowy'
  
  // Rainy: 51-67, 80-82, 95-99
  if (
    (code >= 51 && code <= 67) ||
    (code >= 80 && code <= 82) ||
    (code >= 95 && code <= 99)
  ) return 'rainy'
  
  // Default to Windy (Cloudy/Fog/Wind)
  return 'windy'
})

const weatherLabel = computed(() => {
  const map = {
    sunny: '晴天',
    rainy: '雨天',
    snowy: '雪天',
    windy: '多风'
  }
  return map[weatherType.value]
})

const currentDate = computed(() => {
  const date = new Date()
  return `${date.getMonth() + 1}月${date.getDate()}日`
})
</script>

<template>
  <div class="min-h-[calc(100vh-68px)] bg-base-200 flex flex-col md:flex-row items-center justify-center p-4 gap-8">
    <!-- Profile Card -->
    <div class="card w-80 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div class="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img :src="avatarImg" class="object-cover w-full h-full block" />
          </div>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Mr. Placeholder</h2>
        <p class="text-sm text-gray-500">Full Stack Developer</p>
        
        <div class="divider"></div>

        <div class="w-full text-left text-sm">
          <div class="flex justify-between mb-2">
            <span class="font-bold">Education:</span>
            <span>University of Code</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="font-bold">Degree:</span>
            <span>B.S. CS</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="font-bold">Github:</span>
            <a href="https://github.com/placeholder" target="_blank" class="link link-primary">@placeholder</a>
          </div>
        </div>

        <div class="card-actions justify-center mt-4">
          <div class="badge badge-outline">Vue.js</div> 
          <div class="badge badge-outline">Tailwind</div>
          <div class="badge badge-outline">Java</div>
        </div>
      </div>
    </div>

    <!-- Weather Card -->
    <div class="weather-card" :class="weatherType">
      <div v-if="loading" class="flex items-center justify-center h-full">
        <span class="loading loading-spinner text-white"></span>
      </div>
      <div v-else-if="error" class="flex items-center justify-center h-full text-white">
        {{ error }}
      </div>
      <div v-else class="weather-content">
        <div class="weather-icon">
          <!-- Sunny Icon -->
          <svg v-if="weatherType === 'sunny'" class="w-24 h-24 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
          </svg>
          <!-- Rainy Icon -->
          <svg v-if="weatherType === 'rainy'" class="w-24 h-24 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
            <path class="animate-bounce" d="M8 17v2M12 17v2M10 18v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <!-- Snowy Icon -->
          <svg v-if="weatherType === 'snowy'" class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
             <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
             <text x="5" y="20" class="text-xs animate-pulse">❄</text>
             <text x="10" y="20" class="text-xs animate-pulse" style="animation-delay: 0.5s">❄</text>
             <text x="15" y="20" class="text-xs animate-pulse" style="animation-delay: 1s">❄</text>
          </svg>
           <!-- Windy Icon -->
           <svg v-if="weatherType === 'windy'" class="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
           </svg>
        </div>
        
        <div class="weather-info">
          <div class="weather-text">{{ weatherLabel }}</div>
          <div class="temperature">{{ weather.temperature }}°C</div>
          <div class="date">{{ currentDate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-card {
  width: 300px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.weather-card:hover {
  transform: translateY(-5px);
}

.weather-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.weather-text {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.temperature {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
}

.date {
  margin-top: 1rem;
  opacity: 0.8;
  font-size: 0.9rem;
}

/* Themes */
.sunny {
  background: linear-gradient(to bottom right, #4facfe, #00f2fe);
}

.rainy {
  background: linear-gradient(to bottom right, #373b44, #4286f4);
}

.snowy {
  background: linear-gradient(to bottom right, #83a4d4, #b6fbff);
  color: #2c3e50; /* Darker text for snowy background */
}
.snowy .weather-icon { color: #2c3e50; }

.windy {
  background: linear-gradient(to bottom right, #636fa4, #e8cbc0);
}
</style>
