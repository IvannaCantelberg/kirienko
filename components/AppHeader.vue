<template>
  <header class="pr-[15vw] py-16">
    <!-- <p>{{ $t('welcome') }}</p> -->
    <div class="flex gap-5 justify-end">
      <NuxtLink
        v-for="locale in locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="lang-link transition-all"
      >
        {{ locale.alias }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
<style scoped>
header {
  line-height: 1.5;
  /* box-shadow: -8px 3px 40px #87d5f361; */
}

.router-link-active {
  color: var(--color-border-contrast);
}

.lang-link {
  padding: 8px;
  border: 1px solid;
  line-height: normal;
  border-radius: 5px;
}
</style>
