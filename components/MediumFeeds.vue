<template>
  <article class="grid justify-items-center">
    <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 mb-20">
      <MediumCard
        v-for="feed in feeds"
        :key="feed.title"
        :article="feed"
        class="card hover:shadow-xl transition-all"
      />
    </div>

    <ContentQuery :path="`/${locale}/blog`" find="one">
      <template #default="{ data }">
        <a
          href="https://medium.com/@tatjanakirienko"
          @click="trackLinkClick(ANALYTICS.LINK.REFERENCE_MEDIUM)"
          target="_blank"
          class="bg-white btn-link stroke-black content-center hover:shadow-xl transition-all"
        >
          {{ data['readMore'] }}
          <IconArrowRight />
        </a>
      </template>
    </ContentQuery>
  </article>
</template>
<script setup lang="ts">
import MediumCard from '~/components/MediumCard.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import {ANALYTICS } from '~/utils/constants';
import { useI18n } from 'vue-i18n'
const { trackLinkClick } = useAnalytics();
const { locale } = useI18n()


const { getFeeds } = useMedium()
const feeds = await getFeeds()
</script>

<style scoped>
.card {
  background-color: white;
}

</style>
