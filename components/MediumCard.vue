<template>
  <a :href="article.link" target="_blank">
    <figure class="grid grid-cols-4">
      <div
        :style="{ backgroundImage: `url(${getThumbnail(article.content)})` }"
        class="image img-style rounded-md col-span-1"
      ></div>
      <figcaption class="flex flex-col justify-between col-span-3 p-10 relative">
        <h2 class="text-2xl font-extrabold">{{ article.title }}</h2>
        <p class="text-sm line-clamp-4">
          {{ cleanContent(article.description) }}
        </p>
        <IconArrowRight class="arrow-icon" />
      </figcaption>
    </figure>
  </a>
</template>
<script lang="ts" setup>
import type { IMediumArticle } from '~/types/medium'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

defineProps<{
  article: IMediumArticle
}>()

const getThumbnail = (el: string): string => {
  const imgSrcRegex: RegExp = /<img[^>]+src=["']([^"']+)["']/g
  const imageSources: string[] = []
  let match

  while ((match = imgSrcRegex.exec(el)) !== null) {
    imageSources.push(match[1])
  }

  console.log(imageSources)

  return imageSources[0]
}

const cleanContent = (htmlText: string): string => {
  const text = htmlText.replace(/<\/?[^>]+(>|$)/g, '')

  return text.replace(/&lt;Vorige Volgende&gt;/g, '')
}
</script>
<style scoped>
.image {
  object-fit: fill;
  object-position: center;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.img-style {
  border: 2px solid #fff;
}

.arrow-icon {
  position: absolute;
  bottom: 15px;
  right: 20px;

  fill: var(--color-border-contrast);
}
</style>
