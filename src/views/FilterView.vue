<script setup>
import { ref, computed } from 'vue'
import WhiskeyList from '../components/WhiskeyList.vue'
import RegionFilter from '../components/RegionFilter.vue'
import { unique } from '../assets/js/utilities.js'

const props = defineProps({
  whiskies: {
    type: Array,
    required: true
  }
})

const regions = computed(() => {
  const defaultArray = ['all']

  if (!props.whiskies.length) {
    return defaultArray
  }

  const regions = [...defaultArray, ...props.whiskies.map((w) => w.region)]
  return regions.filter(unique)
})

const activeFilter = ref('all')

const setActiveFilter = (region = 'all') => {
  activeFilter.value = region
}

//Dit is een testje
</script>

<template>
  <h1 class="page-title o-title">Whiskey Selection</h1>

  <RegionFilter :regions="regions" @change-region="setActiveFilter" />
  <WhiskeyList :whiskies="props.whiskies" :activeRegion="activeFilter" />
</template>
