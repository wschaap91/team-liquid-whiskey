<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import WhiskeyCard from './components/WhiskeyCard.vue'
import whiskies from './whiskies.json'

const longestTitle = computed(()=> {
    return whiskies.reduce((acc, cur) => {
        const length = cur.title.length;
        return acc > length ? acc : length;
    } , 0);
})
</script>

<template>
  <h1 class="page-title">Whiskey Selection</h1>

  <div class="page-wrapper" :style="`--card-text-length: ${longestTitle}ch`">
    <WhiskeyCard :item='item' v-for="item in whiskies" :key="item.title"/>
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>
  .page-title {
    text-align: center;
    display: block;
    font-style: italic;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3rem;
    line-height: 1;
    letter-spacing: -0.1em;
    margin-inline: auto;

    @media screen and (min-width: 500px) {
      font-size: 5.5rem;
    }
  }

  .page-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0.5rem;
    --padding-inline: 0.75rem;

    max-width: calc(1500px + (2 * var(--padding-inline)));

    padding-inline: var(--padding-inline);
    margin-inline: auto;
    row-gap: 3rem;
    padding-block-start: 3rem;

    @media screen and (min-width: 555px) {
      column-gap: 1.5rem;
      --padding-inline: 2rem;
      row-gap: 5rem;
      padding-block-start: 5rem;
    }

    @media screen and (min-width: 1050px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 9rem;
      padding-block-start: 9rem;
    }

    @media screen and (min-width: 1600px) {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 5rem;
      padding-block-start: 5rem;
    }
  }
</style>
