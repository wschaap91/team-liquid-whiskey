<script setup>
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

defineProps({
    item: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <article class="whiskey-card"
             :class="[`u-region-${item.region}`]">
        <div class="whiskey-card__context">
            <h1 class="whiskey-card__title">{{ capitalize(item.title) }}</h1>
            <p class="whiskey-card__region">{{ capitalize(item.region) }} Region</p>
            <p class="whiskey-card__cost">${{ item.cost }}</p>
        </div>
        <ul class="whiskey-card__notes">
            <li v-for="note in item.tasting_notes"
                :key="note">{{ capitalize(note) }}</li>
        </ul>
        <img class="whiskey-card__image"
             :src="`/images/${item.image}`"
             :alt="`Image of a bottle of ${item.title}`">
    </article>
</template>

<style lang='scss' scoped>
.whiskey-card {
    --region: tomato;
    --region-dark: crimson;
    --region-gradient: linear-gradient(to right, var(--region), var(--region-dark));
    display: grid;
    color: white;

    grid-template-columns: [start] 1.5rem [card-start] 2rem [desc-start] min-content [desc-end] minmax(2rem, auto) [img-start] minmax(calc(160px - 2rem), calc(205px - 2rem)) [card-end] 2rem [img-end];
    grid-template-rows: [start card-start] calc(544px - 1.5rem - 3.75rem - 2rem) [desc-end] 1.5rem [notes-start] 3.75rem [notes-end] 2rem [card-end] 2rem [img-end];

    &:before {
        grid-column: card-start / card-end;
        grid-row: card-start / card-end;

        content: '';
        background: linear-gradient(45deg, hsl(0deg 0% 10% / 0.1) 0 35%, hsl(0deg 0% 30% / 0.1), hsl(0deg 0% 10% / 0.1) 65% 100%), url(/images/card-bg.svg), hsl(0deg 0% 15%);
        background-position: left top, right top, left top;
        background-size: 100%, cover, 100%;
        background-repeat: no-repeat;
        border-radius: 0.5rem;
    }

    &:after {
        grid-row: start;
        grid-column: start / card-end;
        content: '';
        height: 0.25rem;
        width: 3.75rem;
        background: var(--region-gradient);
        filter: brightness(97%);
        justify-self: end;
        top: 2.25rem;
        right: -0.75rem;
    }
}

.whiskey-card__context {
    display: flex;
    flex-direction: column;
    align-self: end;

    grid-column: desc-start / desc-end;
    grid-row: card-start / desc-end;
}

.whiskey-card__title,
.whiskey-card__cost {
    font-size: 2.25rem;
    font-weight: bold;
}

.whiskey-card__region {
    font-size: 1.125rem;
    opacity: 50%;
    margin-block-end: 1.25rem;
}

.whiskey-card__image {
    min-width: 160px;
    width:100%;
    max-width: 205px;
    height: auto;
    max-height: calc(544px + 2rem + 1.25rem);

    grid-column: img-start / img-end;
    grid-row: start / img-end;

    align-self: end;
    justify-self: start;
    object-fit: contain;
}

.whiskey-card__notes {
    grid-column: start / desc-end;
    grid-row: notes-start / notes-end;

    justify-self: start;

    display: flex;
    position: relative;
    align-items: center;
    gap: 2rem;
    list-style-type: none;
    padding-inline: 2rem;
    height: 3.75rem;
    font-size: 0.875rem;

    li {
        z-index: 1;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: var(--region-gradient);
        filter: brightness(97%);
        border-radius: 0.25rem;
        transform: skew(-10deg);
    }
}</style>