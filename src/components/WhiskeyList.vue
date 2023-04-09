<script setup>

import { computed, defineProps } from 'vue'
import WhiskeyCard from './WhiskeyCard.vue'

const props = defineProps({
    whiskies: {
        type: Array,
        required: true
    },
    activeRegion: {
        type: String,
        required: true
    }
})

const longestTitle = computed(() => {
    if (props.whiskies.length) {
        return props.whiskies.reduce((acc, cur) => {
            const length = cur.title.length;
            return acc > length ? acc : length;
        }, 0);
    } else {
        return 0;
    }
})

const filteredWhiskies = computed(() => {
    if (props.activeRegion !== 'all') {
        return props.whiskies.filter(item => item.region === props.activeRegion);
    }
    return props.whiskies;
})
</script>

<template>
    <div class="whiskey-list"
         :style="`--card-text-length: ${longestTitle}ch`">
        <WhiskeyCard :item='item'
                     v-for="item in filteredWhiskies"
                     :key="item.title" />
    </div>
</template>

<style lang="scss" scoped>
.whiskey-list {
    --grid-cell: minmax(0, 1fr);

    display: grid;
    grid-template-columns: var(--grid-cell);
    grid-auto-columns: var(--grid-cell);
    column-gap: 0.5rem;
    row-gap: 3rem;

    margin-inline: auto;
    margin-block-end: 5.5rem;
    padding-block-start: 3rem;

    justify-content: center;

  @media screen and (min-width: 555px) {
    column-gap: 5rem;
    row-gap: 5rem;
    padding-block-start: 5rem;
  }

  @media screen and (min-width: 1050px) {
    grid-template-columns: repeat(2, var(--grid-cell));
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(3, var(--grid-cell));
  }
}
</style>