<template>
  <article class="flex relative">
    <div
      :style="backgroundPhoto"
      class="bg-profile-image bg-image px-2 lg:pr-[8%] size-full relative"
    >
      <div
        :style="backgroundEllipses"
        class="bg-image bg-cover absolute top-0 right-0 lg:size-1/2 2xl:size-full xl:visible invisible"
      ></div>
      <div class="text-white text-right flex flex-col items-end z-0">
        <h2 class="text-xl lg:text-3xl mb-10">
          {{ $t('banner.1') }}
          <a
            href="https://tatjana-kirienko.art"
            @click="trackLinkClick(ANALYTICS.LINK.REFERENCE_SITE)"
            target="_blank"
            title="tatjana-kirienko.art website"
            class="text-3xl lg:text-5xl xl:text-6xl text-accent-2 underline pl-5"
          >
            {{ $t('banner.2') }} <i> <IconArrowRight class="inline xl:size-9" /> </i
          ></a>
        </h2>
        <h2 class="text-xl lg:text-2xl max-w-[550px]">
          {{ $t('banner.3') }}
        </h2>
      </div>
      <h3
        class="text-white text-xl lg:text-2xl max-w-[550px] text-right ellipse-right z-0"
        v-html="$t('banner.4')"
      ></h3>
    </div>
  </article>
</template>
<script setup lang="ts">
import IconArrowRight from '~/components/icons/IconArrowRight.vue'; 
import {ANALYTICS } from '~/utils/constants';
const { trackLinkClick } = useAnalytics();

const img = useImage()
const backgroundEllipses = computed(() => {
  const imgUrl = img('/img/ellipse.png', { width: 100, height:100, format: 'webp' }, {densities: 'x1'})
  return { 'backgroundImage': `url('${imgUrl}')` }
});

const backgroundPhoto = computed(() => {
  const imgUrl = img('/img/kirienko_profile.png', {
    sizes: 'xs:100vw sm:100vw md:600px lg:100vw xl:100vw',
    format: 'webp'
  }, {
    densities: 'x1'
  });


  return { 'backgroundImage': `url('${imgUrl}'), radial-gradient(
            circle,
            rgb(17 27 36) 0%,
            rgb(11 18 26) 50%,
            rgb(11 18 26) 60%,
            rgb(8 13 17) 85%,
            rgb(8 13 17) 100%
          )` }
});

</script>

<style lang="less">
.bg-image {
  background-repeat: no-repeat;
  background-position: center bottom;
}

@media (min-width: 1420px) {
  .bg-image {
    background-position: left bottom;
  }
}

.bg-profile-image {
  width: 100vw;
  max-height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: end;
  min-height: 920px;
  justify-content: space-evenly;
}

.text-accent-2 {
  color: var(--color-text-accent-2);
  stroke: var(--color-text-accent-2);
}

mark {
  background-color: var(--color-text-accent-2);
  color: var(--color-text-white);
  padding: 4px;
}
</style>
