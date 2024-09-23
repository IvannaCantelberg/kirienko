<template>
  <div class="flex flex-col gap-10">
    <MediumCard
      v-for="feed in feeds"
      :key="feed.title"
      :article="feed"
      class="card rounded-md hover:shadow-xl transition-all"
    />
  </div>
</template>
<script setup lang="ts">
import MediumCard from '~/components/MediumCard.vue'

const { getFeeds } = useMedium()
const feeds = await getFeeds()
console.log(feeds)
</script>

<style scoped>
.card {
  border: 2px solid;
}

.card:hover {
  border-color: var(--color-border-contrast);
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
