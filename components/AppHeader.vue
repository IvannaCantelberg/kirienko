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
  border: 1px solid var(--color-border-contrast);
}

.lang-link {
  padding: 8px;
  /* border: 1px solid; */
  line-height: normal;
  /* border-radius: 5px; */
}

.router-link-active::after, .router-link-active::before {
    content: none;
}

a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 16px;
  color: inherit;
  border: 1px solid transparent; /* Initial transparent border */
  border-radius: 5px;
    transition: color 0.4s ease-out;
}

/* Top and bottom borders */
a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-border-contrast);
  border-radius: 5px;
  border-left: none;
  border-right: none;
  z-index: -1;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.4s ease-out;
}

/* Left and right borders */
a::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-border-contrast);
  border-radius: 5px;
  border-top: none;
  border-bottom: none;
  z-index: -1;
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.4s ease-out;
}

/* On hover, animate the borders sequentially */
a:hover::before {
  transform: scaleX(1); /* Draw the top and bottom borders */
  transition-delay: 0.2s; /* Delay for sequential effect */
}

a:hover::after {
  transform: scaleY(1); /* Draw the left and right borders */
}
</style>
