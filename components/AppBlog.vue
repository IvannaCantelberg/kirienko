<template>
  <div id="blog" class="py-20 lg:py-40">
    <h1 class="title text-5xl lg:text-8xl text-center uppercase mb-5 lg:mb-10">Blog</h1>
    <h3 class="text-base lg:text-lg xl:text-xl text-center lg:px-20 text-secondary">{{ $t('blog_intro') }}</h3>
    <MediumFeeds class="my-10 lg:my-28" />
  </div>
</template>

<script setup lang="ts">
import MediumFeeds from '~/components/MediumFeeds.vue'
</script>

<style></style>
