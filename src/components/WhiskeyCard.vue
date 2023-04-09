<script setup>

import { capitalize } from '../assets/js/utilities.js';

defineProps({
    item: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <article class="whiskey-card"
             :class="[`u-region-${item.region}`]">
        <div class="whiskey-card__context">
            <h1 class="whiskey-card__title"><router-link :to="`/whiskey/${item.title.toLowerCase()}`" :whiskey="item"> <span>{{ capitalize(item.title)
            }}</span> </router-link></h1>
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
    --card-end: 2rem;
    --card-gutter: 1.5rem;
    --img-min-width: 120px;

    --grid-img-column: minmax(var(--card-gutter), 1fr);

    margin-inline-start: calc(-0.75 * var(--card-gutter));
    margin-inline-end: calc(-1 * var(--card-end));

    @media screen and (min-width: 390px) {
        --grid-img-column: minmax(calc(var(--img-min-width) - var(--card-end)), calc(205px - var(--card-end)));
    }

    @media screen and (min-width: 465px) {
        --img-min-width: 160px;
        --card-gutter: 2rem;
    }

    display: grid;
    grid-template-columns: [start] calc(0.75 * var(--card-gutter)) [card-start] var(--card-gutter) [desc-start] calc(var(--card-text-length, 13ch) * 0.70) [desc-end] minmax(var(--card-gutter), auto) [img-start] var(--grid-img-column) [card-end] minmax(var(--card-end), auto) [img-end];
    grid-template-rows: [start card-start] calc(544px - 1.5rem - 3.75rem - 2rem) [desc-end] 1.5rem [notes-start] 3.75rem [notes-end] 2rem [card-end] 2rem [img-end];
    container-type: inline-size;

    font-size: 2.25rem;

    color: white;

    /* Black background card for the Whiskey Card */
    &:before {
        grid-column: card-start / card-end;
        grid-row: card-start / card-end;

        content: '';
        background: linear-gradient(45deg, hsl(0deg 0% 10% / 0.1) 0 35%, hsl(0deg 0% 40% / 0.15), hsl(0deg 0% 10% / 0.1) 65% 100%), url(/images/card-bg.svg), hsl(0deg 0% 15%);
        background-position: left top, right top, left top;
        background-size: 100%, cover, 100%;
        background-repeat: no-repeat;
        border-radius: 0.5rem;
    }

    /* Small visual ornament in top right corner */
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

    &:hover {
        a {
            text-decoration: underline;
        }
    }
}

@container(width > 550px) {
    .whiskey-card {

        &:before,
        &:after {
            margin-right: var(--card-end);
            grid-column: card-start / end;
        }
    }
}

.whiskey-card__context {
    position: initial;
    display: flex;
    flex-direction: column;
    align-self: end;

    grid-column: desc-start / desc-end;
    grid-row: card-start / desc-end;
}

.whiskey-card__title {
    position: initial;

    a,
    span {
        font-weight: inherit;
        color: inherit;
        text-decoration: none;
    } 

    a {
        position: initial;
        &:before {
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2;
        }

        &:focus-visible {
            span {
                outline: auto;
            }
        }
    }
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
    z-index: 1;
    min-width: var(--img-min-width);

    object-fit: cover;
    max-width: 160px;
    height: 100%;
    grid-column: card-start / card-end;
    grid-row: card-start / desc-end;
    align-self: start;
    justify-self: center;
    top: -2rem;
    -webkit-mask-image: radial-gradient(circle at 50% 25%, white 50%, transparent 60% 100%);
    mask-image: radial-gradient(circle at 50% 25%, white 50%, transparent 60% 100%);

    @media screen and (min-width: 390px) {
        object-fit: contain;
        max-width: 205px;
        max-height: calc(544px + 2rem + 2rem);
        width: 100%;
        height: auto;
        grid-column: img-start / img-end;
        grid-row: start / img-end;
        align-self: end;
        justify-self: start;
        top: initial;
        mask-image: none;
        -webkit-mask-image: none;
    }
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
    padding-inline: 2.875rem;
    height: 3.75rem;
    font-size: 14px;

    @container (width < 450px) {
        gap: 1rem;
    }

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