<template>
  <NuxtLink
    v-for="l in locales"
    :key="l.code"
    :to="switchLocalePath(l.code)"
    class="lang-link transition-all title"
  >
    <div class="flex gap-2 items-center" :title="l.name">
      <img :src="`/icons/flag-${l.alias}.svg`" :alt="`${l.name} icon`" class="size-6 xl:size-8" />
      <span> {{ l.alias }}</span>
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup>
const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocal = ref(locales.value[0])
//
const getCurrentLocal = () => {
  return locales.value.find((l) => l.code === locale.value) ?? locales.value[0]
}

onMounted(() => {
  currentLocal.value = getCurrentLocal()
})

watch(locale, () => (currentLocal.value = getCurrentLocal()))
</script>

<style scoped>
.router-link-active.lang-link {
  color: var(--color-text-accent-1);
  border: 1px solid var(--color-background-accent-1);
}

.lang-link,
a {
  padding: 8px;
  /* line-height: normal; */
}

.router-link-active.lang-link::after,
.router-link-active.lang-link::before {
  content: none;
}

.lang-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 16px;
  /* color: inherit; */
  border: 1px solid transparent; /* Initial transparent border */
  border-radius: 5px;
  transition: all 0.4s ease-out;
}

/* Top and bottom borders */
.lang-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-border-accent-1);
  border-radius: 5px;
  border-left: none;
  border-right: none;
  z-index: -1;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.4s ease-out;
}

/* Left and right borders */
.lang-link::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-border-accent-1);
  border-radius: 5px;
  border-top: none;
  border-bottom: none;
  z-index: -1;
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.4s ease-out;
}

/* On hover, animate the borders sequentially */
.lang-link:hover::before {
  transform: scaleX(1); /* Draw the top and bottom borders */
  transition-delay: 0.2s; /* Delay for sequential effect */
}

.lang-link:hover::after {
  transform: scaleY(1); /* Draw the left and right borders */
}
</style>
