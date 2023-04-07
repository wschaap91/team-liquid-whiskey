<script setup>
import { RouterView } from 'vue-router'
import WhiskeyCard from './components/WhiskeyCard.vue'
import whiskies from './whiskies.json'
</script>

<template>
  <header>
    <div class="wrapper">
      <WhiskeyCard :item='item' v-for="item in whiskies" :key="item.title"/>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  .wrapper {
    max-width: 100%;
    padding-block-start: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
</style>
