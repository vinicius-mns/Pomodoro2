<script setup lang="ts">
import desktopSizeVue from './views/desktop/desktopSize.vue';
import { ref } from 'vue';

const divice = ref('desktop')

window.addEventListener('resize', () => {
  const size = window.innerWidth
  if(size >= 1024) divice.value = 'desktop'
  if(size > 767 && size < 1023) divice.value = 'tablet'
  if(size< 767) divice.value = 'mobile'
})
</script>

<template>
  <div class="home-page">
    <desktopSizeVue v-if="divice === 'desktop'" />
    <div  v-if="divice === 'tablet'"><h1>Tablet em contrucao</h1></div>
    <div  v-if="divice === 'mobile'"><h1>mobile em contrucao</h1></div>
  </div>
</template>

<style scoped lang="scss">
</style>