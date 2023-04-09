<script setup>
import { ref  } from 'vue';
import { capitalize } from '../assets/js/utilities.js';

defineProps({
    regions: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['change-region']);

const activeRegion = ref('all');

const buttonClick = (region) => {
    activeRegion.value = region;
    emit('change-region', region);
}

</script>

<template>
    <div class="region-filter">
        <ul class="region-filter__list">
            <li class="region-filter__list-item" v-for="region in regions" :key="region" :class="{'is-active': activeRegion === region}">
                <button class="region-filter__btn" @click="buttonClick(region)">
                    {{ capitalize(region) }}
                </button>
            </li>
        </ul>
    </div>
</template>

<style lang='scss' scoped>

.region-filter {
    display: grid;
    place-items: center;
    max-width: 100%;
    padding-inline: var(--page-padding-inline);

}
.region-filter__list {
    max-width: 100%;
    list-style-type: none;
    padding-inline: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
}
    .region-filter__btn {
        font-family: inherit;
        --regular-color: hsl(0deg, 0%, 50%);
        border-radius: 8rem;
        padding-block: 1rem;
        padding-inline: 2rem;
        font-size: 1.125rem;
        color: var(--regular-color);
        background-color: transparent;
        border: none;
        box-shadow: 0 0 2px var(--regular-color);
        cursor: pointer;
    
        @at-root .is-active & {
            --regular-color: rgba(0,0,0,0.75);
            color: black;
            background-color: rgba(0,0,0,0.05);
        }
    }

</style>
