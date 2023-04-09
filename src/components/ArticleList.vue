<script setup>
import ArticleItem from './ArticleItem.vue';

const props = defineProps({
    articles: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <ArticleItem v-for="article in props.articles" :key="article.id" :article="article"/>
</template>

