<script setup>
import { ref, computed } from 'vue'
import WhiskeyList from './components/WhiskeyList.vue'
import RegionFilter from './components/RegionFilter.vue'
import whiskies from './whiskies.json'

const allRegions = computed(()=> {
  const regions = whiskies.reduce((acc, curr) => {
    const region = curr.region;
    return acc.includes(region) ? acc : [...acc, region];
  }, ['all']);

  return regions.sort();
})

const activeFilter = ref(null);

const setActiveFilter = (region = 'all') => {
  activeFilter.value = region;
}

</script>

<template>
  <h1 class="page-title">Whiskey Selection</h1>

  <RegionFilter :regions="allRegions" @change-region="setActiveFilter"/>

  <WhiskeyList :whiskies="whiskies" :activeRegion="activeFilter"/>

</template>

<style lang="scss">
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
    margin-block: 1em;

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
    }

    @media screen and (min-width: 1600px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
