<script setup lang="ts">
import { RouterView } from 'vue-router';
import navBar from './components/navBar/navBar.vue'
</script>

<template>
  <div class="home-page">
    <navBar />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
// desktop
@media screen and (min-width: 1024px) {
  .home-page {
    display: flex;
  }
}
</style>