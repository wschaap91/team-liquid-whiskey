<script setup>
import { ref, computed } from 'vue'
import { useCollection, useFirestore } from 'vuefire'
import { collection } from "firebase/firestore";
import { unique } from './assets/js/utilities.js';

import WhiskeyList from './components/WhiskeyList.vue';
import RegionFilter from './components/RegionFilter.vue';
import ArticleList from './components/ArticleList.vue';

const db = useFirestore()
const whiskies = useCollection(collection(db, 'whiskies'));
const articles = useCollection(collection(db, 'articles'));

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
  <div class="page-wrapper">
    <h1 class="page-title o-title">Whiskey Selection</h1>
    <RegionFilter :regions="regions"
                  @change-region="setActiveFilter" />
    <WhiskeyList :whiskies="whiskies"
                 :activeRegion="activeFilter" />
    <ArticleList :articles="articles" />

    <footer>Copyright 2023 - Koffie met Schaap</footer>
  </div>
</template>

<style lang="scss">
.page-title {
  text-align: center;
  display: block;
  font-size: 3rem;
  margin-inline: auto;
  margin-block: 1em;

  @media screen and (min-width: 500px) {
    font-size: 5.5rem;
  }
}

.page-wrapper {
  box-sizing: content-box;
  padding-inline: var(--page-padding-inline);
  max-width: 1380px;
  margin-inline: auto;
}

footer {
  padding-block: 2rem;
  text-align: center;
}
</style>
