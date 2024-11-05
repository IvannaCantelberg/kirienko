<template>
  <div id="blog" class="py-20 lg:py-40">
    <ContentQuery :path="`/${locale}/blog`" find="one">
      <template #default="{ data }">
        <h1 class="title text-5xl lg:text-8xl text-center uppercase mb-5 lg:mb-10">
          {{ data['sectionTitle'] }}
        </h1>
        <h3 class="text-base lg:text-lg xl:text-xl  lg:px-20 text-secondary text-justify">
          {{ data['description'] }}
        </h3>
      </template>
      <template #not-found>
        <p>No data found.</p>
      </template>
    </ContentQuery>
    <MediumFeeds class="my-10 lg:my-28" />
  </div>
</template>

<script setup lang="ts">
import MediumFeeds from '~/components/MediumFeeds.vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

<style></style>
