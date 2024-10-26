<template>
  <article class="grid justify-items-center">
    <div class="grid sm:grid-cols-2 xl:grid-cols-4  gap-10 mb-20">
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
  background-color: white;
}


.card /deep/ .arrow-icon {
  visibility: hidden;
}

.card:hover /deep/ .arrow-icon {
  visibility: visible;
}
</style>
