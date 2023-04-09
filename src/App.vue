<script setup>
import { ref, computed } from 'vue'
import { useCollection, useFirestore } from 'vuefire'
import { collection } from "firebase/firestore"
import { unique } from './assets/js/utilities.js';

import WhiskeyList from './components/WhiskeyList.vue'
import RegionFilter from './components/RegionFilter.vue'

const db = useFirestore()
const whiskies = useCollection(collection(db,'whiskies'));

const regions = computed(() => {
  const defaultArray = ['all'];

  if (!whiskies.value.length) {
    return defaultArray;
  }

  const regions = [...defaultArray, ...whiskies.value.map(w => w.region)];
  return regions.filter(unique);
})

const activeFilter = ref('all');

const setActiveFilter = (region = 'all') => {
  activeFilter.value = region;
}

</script>

<template>
  <h1 class="page-title">Whiskey Selection</h1>
  <RegionFilter :regions="regions"
                @change-region="setActiveFilter" />
  <WhiskeyList :whiskies="whiskies"
               :activeRegion="activeFilter" />
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
  padding-inline: var(--page-padding-inline);

  @media screen and (min-width: 500px) {
    font-size: 5.5rem;
  }
}

.page-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 0.5rem;

  max-width: calc(1450px + (2 * var(--page-padding-inline)));

  padding-inline: var(--page-padding-inline);
  margin-inline: auto;
  row-gap: 3rem;
  padding-block-start: 3rem;

  @media screen and (min-width: 555px) {
    column-gap: 1.5rem;
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
