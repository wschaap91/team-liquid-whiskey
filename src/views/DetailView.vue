<script setup>
import WhiskeyCard from '../components/WhiskeyCard.vue';

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const props = defineProps({
    whiskies: {
        type: Object,
        required: true
    }
})

const route = useRoute();

const whiskey = computed(() => {

    if (!props.whiskies.length) {
        return false;
    } else {
        // console.log(route.params.id);
        return props.whiskies.find(w => w.title.toLowerCase() === route.params.id);
    }

})

</script>

<template>
    <div :class="`u-region-${whiskey.region}`">
        <h1 class="page-title o-title"><router-link :to="{ name: 'home' }">&larr;</router-link>{{ whiskey ?
            whiskey.title : 'Placeholder' }}</h1>

        <div class="detail-wrapper"
             v-if="whiskey">
            <WhiskeyCard :item="whiskey" />
            <div class="detail-wrapper__context">
                <h2 class="o-title">Want to purchase this item?</h2>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
a {
    font-family: inherit;
    font-weight: inherit;
    color: var(--region);
    text-decoration: none;
}

.detail-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    gap: 2rem;

    margin-block-end: 5rem;    

    @media screen and (min-width: 775px) {
        grid-template-columns: 2fr 1fr;
        grid-auto-flow: column;
    }

    &__context {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: start;
    }

    button {
        padding: 1rem 2rem;
        border:none;
        color: white;
        font: inherit;
        text-transform: uppercase;
        border-radius: 5rem;
        font-size: 1.125rem;
        background: linear-gradient(to right, var(--region), var(--region-dark));
    }
}
</style>