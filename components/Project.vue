<template>
  <figure class="">
    <img :src="image" :alt="title" />
  </figure>
</template>
<script lang="ts" setup>
defineProps<{
  image: string
  title: string
}>()
</script>
<style scoped>
figure {
  border: 1px solid var(--color-border-contrast);
  filter: grayscale(1);
}

figure:hover {
  cursor: pointer;
  filter: grayscale(0);
}
</style>
