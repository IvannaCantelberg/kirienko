<template>
  <a :href="article.link" target="_blank">
    <figure class="grid grid-row-2 gap-8">
      <div
        :style="{ backgroundImage: `url(${getThumbnail(article.content)})` }"
        class="image img-style"
      ></div>
      <figcaption class="grid grid-row-3 gap-4 lg:gap-8 mx-5 mb-8">
        <h2 class="text-lg lg:text-2xl font-extrabold">{{ article.title }}</h2>
        <p class="text-md line-clamp-4">
          {{ cleanContent(article.description) }}
        </p>
        <span class="text-sm text-right font-extrabold">Read more</span>
      </figcaption>
    </figure>
  </a>
</template>
<script lang="ts" setup>
import type { IMediumArticle } from '~/types/medium'

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
  
  return imageSources[0]
}

const cleanContent = (htmlText: string): string => {
  const text = htmlText.replace(/<\/?[^>]+(>|$)/g, '')

  return text.replace(/&lt;Vorige Volgende&gt;/g, '')
}
</script>
<style scoped lang="less">
.image {
  object-fit: fill;
  object-position: center;
  /* width: 200px; */
  height: 230px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.img-style {
  /* border: 2px solid #fff; */
}

.arrow-icon {
  position: relative;
  bottom: 50%;
  left: 90%;

  fill: var(--color-border-contrast);
}
</style>
