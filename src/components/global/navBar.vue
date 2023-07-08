<script setup lang="ts">
import { useGlobalState } from '@/stores/globalState';
import { ref } from 'vue';

const globalState = useGlobalState()

const paths = ref(globalState.getAllpaths())
</script>

<template>
  <aside>
    <nav v-for="(day, i) of paths" :key="i">
      <RouterLink :to="'/' + day">{{ day }}</RouterLink>
    </nav>
  </aside>
</template>

<style scoped lang="scss">
// desktop
@media screen and (min-width: 1024px) {
  aside {
    height: 100vh;
    width: 10%;
    background-color: rgb(45, 45, 45);
  }
}
</style>