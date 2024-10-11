<template>
  <article class="grid justify-items-center">
    <div class="grid grid-cols-3 gap-10 mb-20">
      <MediumCard
        v-for="feed in feeds"
        :key="feed.title"
        :article="feed"
        class="card hover:shadow-xl transition-all"
      />
    </div>
    <a href="https://medium.com/@tatjanakirienko" target="_blank" class="btn-link content-center hover:shadow-xl transition-all">Visit Medium to read more 
      <IconArrowRight/>
    </a>
  </article>
</template>
<script setup lang="ts">
import MediumCard from '~/components/MediumCard.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

const { getFeeds } = useMedium()
const feeds = await getFeeds()
console.log(feeds)
</script>

<style scoped>
.card {
  /* border: 2px solid; */
  background-color: white
}

.card:hover {
  /* border-color: var(--color-border-contrast); */
}

.card /deep/ .arrow-icon {
  visibility: hidden;

  /* transition-property: visibility;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms; */
}

.card:hover /deep/ .arrow-icon {
  visibility: visible;
}
</style>
