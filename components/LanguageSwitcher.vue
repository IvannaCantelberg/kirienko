<template>
  <el-dropdown class="outline-none">
    <span
      class="el-dropdown-link lang-link py-2 pr-1 pl-3 text-white transition-all title flex flex-row gap-2 items-center"
    >
      <NuxtImg :src="`/icons/flag-${currentLocal.alias}.svg`" width="32"  sizes="xs:24px xl:32px" class="size-6 xl:size-8"/>
      <span class="text-sm sm:text-base lg:text-lg xl:text-xl flex flex-row items-center">
        <span>{{ currentLocal.name }}</span>
        <IconExpand class="size-4 md:size-6 xl:size-8" />
      </span>
    </span>
    <template #dropdown>
      <el-dropdown-menu class="languages-dropdown grid gap-2">
        <NuxtLink
          v-for="l in locales"
          :key="l.code"
          :to="switchLocalePath(l.code)"
          @click="trackLinkClick(`${ANALYTICS.LINK.LANGUAGE} - ${l.alias}`)"
          class="lang-link py-2 px-3 transition-all title text-base lg:text-lg xl:text-xl"
        >
          <div class="flex gap-2 md:gap-4 items-center">
            <NuxtImg :src="`/icons/flag-${l.alias}.svg`" sizes="xs:24px xl:32px" class="size-6 xl:size-8"/>
            <span> {{ l.name }}</span>
          </div>
        </NuxtLink>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import IconExpand from '~/components/icons/IconExpand.vue'
import {ANALYTICS } from '~/utils/constants';
const { locales, locale } = useI18n()
const { trackLinkClick } = useAnalytics();
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

<style lang="less">
.el-dropdown-menu.languages-dropdown {
  padding: 0;
  border: none;
}

.el-dropdown-menu.languages-dropdown .lang-link {
  border-radius: 0;
}

.router-link-active.lang-link {
  color: var(--color-text-secondary);
  border: 1px solid var(--color-background-accent-1);
}

.lang-link {
  //   padding: 8px;
}

.router-link-active.lang-link::after,
.router-link-active.lang-link::before {
  content: none;
}

.lang-link {
  position: relative;
  text-decoration: none;
  //   border: 1px solid transparent; /* Initial transparent border */
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
