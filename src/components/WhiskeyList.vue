<script setup>
import { computed } from 'vue'
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

const longestTitle = computed(()=> {
    return props.whiskies.reduce((acc, cur) => {
        const length = cur.title.length;
        return acc > length ? acc : length;
    } , 0);
})

const filteredWhiskies = computed(()=> {
    if(props.activeRegion !== 'all') {
        return props.whiskies.filter(item => item.region === props.activeRegion);
    }
    return props.whiskies;
})
</script>

<template>
    <div class="page-wrapper"
         :style="`--card-text-length: ${longestTitle}ch`">
        <WhiskeyCard :item='item'
                     v-for="item in filteredWhiskies"
                     :key="item.title" />
    </div>
</template>