<script setup lang="ts">
import useGlobalState from '@/stores/globalState';

const globalState = useGlobalState()

const paths = globalState.getPaths
</script>

<template>
  <nav>
    <ul>
      <li v-for="(path, i) of paths" :key="i">
        <RouterLink :to="`/${path}`"><button>{{ path }}</button></RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  width: 100%;
  background-color: blue;

  & ul {
    width: 100%;

    & li {
      width: 100%;

      & a {
        width: 100%;
        display: flex;
        justify-content: center;
        text-decoration: none;
        
        & button {
          width: 90%;
          height: 2.5rem;
          border: none;
          margin: 0.5rem 0 0.5rem;
          cursor: pointer;
        }
      }
    }
  }
}
</style>