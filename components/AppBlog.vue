<template>
    <div id="blog" class="f-h-section py-40">
        <h1 class="title text-6xl lg:text-8xl text-center uppercase mb-10">Blog</h1>
        <h3 class="text-xs lg:text-base text-center lg:px-20 text-secondary"> {{ $t('blog_intro') }} </h3>
        <MediumFeeds class="my-20"/>
    </div>
</template>

<script setup lang="ts">
import MediumFeeds from '~/components/MediumFeeds.vue';
</script>

<style>

</style>