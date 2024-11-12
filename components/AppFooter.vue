<template>
  <div
    class="px-[5vw] xl:px-[15vw] pb-8 flex gap-8 items-center justify-between text-neutral-400 text-xs"
  >
    <p>Copyright © {{ currentYear }}. All rights reserved.</p>
    <p>
      Developed by
      <a
        href="https://www.linkedin.com/in/ivanna-cantelberg-40b009268/"
        @click="trackLinkClick(ANALYTICS.LINK.CREATOR)"
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
        >Ivanna Cantelberg</a
      >
    </p>
  </div>
</template>
<script lang="ts" setup>
import {ANALYTICS } from '~/utils/constants';
const { trackLinkClick } = useAnalytics();
const currentYear = ref(new Date().getFullYear())
</script>
