<template>
    <van-button type="primary">主要按钮</van-button>
    <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { getWeather } from './api/common'
// 获取天气信息
const getWeatherInfo = async () => {
    const weatherInfo = await getWeather()
    console.log(weatherInfo, 66666)
}
onMounted(() => {
    getWeatherInfo()
})
</script>

<style scoped></style>
