<script setup>
import { useCollection, useFirestore } from 'vuefire'
import { collection } from "firebase/firestore";

import ArticleList from './components/ArticleList.vue';

const db = useFirestore()
const whiskies = useCollection(collection(db, 'whiskies'));
const articles = useCollection(collection(db, 'articles'));

</script>

<template>
  <div class="page-wrapper">
    
    <router-view :whiskies="whiskies"></router-view>

    <ArticleList :articles="articles" />
     
    <footer>Copyright 2023 - Koffie met Schaap</footer>
  </div>
</template>

<style lang="scss">
.page-title {
  text-align: center;
  display: flex;
  gap: 2rem;
  justify-content: center;
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
