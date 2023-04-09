<script setup>

const props = defineProps({
    article: {
        type: Object,
        required: true
    }
});

</script>

<template>
    <article class="article-hero">
        <img :src="`/images/${props.article.img}`"
             alt="Glass of whiskey on the rocks">
        <div class="article-hero__copy">
            <h1 class="o-title"><a :href="props.article.url"
                   target="_blank">{{ props.article.title }}</a></h1>
            <p>{{ props.article.teaser }}</p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.article-hero {
    container-type: inline-size;

    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: black;

    @media screen and (min-width: 600px) {
        aspect-ratio: 1.5 / 1;
    }

    img {
        grid-row: 1;
        grid-column: 1;
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: brightness(1) contrast(0.5) saturate(0.7);
        opacity: 0.4;
    }

    &:hover {
        cursor: pointer;

        a {
            text-decoration: underline;
        }
    }
}

.article-hero__copy {
    grid-row: 1;
    grid-column: 1;

    padding: 5.5rem;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: end;

    a {
        font-family: inherit;
        color: inherit;
        font-weight: inherit;
        text-decoration: none;
        position: initial;

        &:before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
    }

    >* {
        width: 50%;
    }

    h1 {
        font-size: 3.75rem;
        padding-inline-end: 2rem;
        margin-block-end: 1rem;
        position: initial;
    }

    p {
        font-size: 1.125rem;
    }

    @container (width < 950px) {
        padding: 3rem;

        h1 {
            font-size: 3rem;
        }
    }

    @container (width < 700px) {
        padding: 2rem;

        >* {
            width: initial;
        }
    }

    @container (width < 350px) {
        h1 {
            font-size: 2.5rem;
        }
    }
}
</style>