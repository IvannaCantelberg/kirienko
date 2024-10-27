<template>
  <article class="flex relative">
    <div
      style="
        background-image: url('/img/kirienko-profile1.png'),
          radial-gradient(
            circle,
            rgb(17 27 36) 0%,
            rgb(11 18 26) 50%,
            rgb(11 18 26) 60%,
            rgb(8 13 17) 85%,
            rgb(8 13 17) 100%
          );
      "
      class="bg-profile-image bg-image px-2 lg:pr-[8%]"
    >
      <div class="text-white text-right flex flex-col items-end">
        <h2 class="text-xl lg:text-3xl mb-10">
          I am
          <a href="http://" class="text-3xl lg:text-5xl xl:text-6xl text-accent-2 underline pl-5">
            Tatjana Kirienko <i> <IconArrowRight class="inline xl:size-9" /> </i
          ></a>
        </h2>
        <h2 class="text-xl lg:text-2xl max-w-[550px]">
          a textile artist in Arnhem, the Netherlands, with Ukrainian roots. 
        </h2>
      </div>
      <h3 class="text-white text-xl lg:text-2xl max-w-[550px] text-right ellipse-right">
        Here you will find my Ukrainian art projects and details how you can participate with loving
        intention and creativity. 
      </h3>
    </div>
  </article>
</template>
<script setup lang="ts">
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
</script>

<style>
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
</style>
