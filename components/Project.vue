<template>
  <figure class="hover:shadow-xl transition-all relative w-full">
    <FigureFrame class="frame hidden xl:block" />
    <NuxtLink :to="`projects/${link}`">
      <div
        class="relative overflow-hidden bg-project-image min-h-[320px] lg:min-h-[480px] xl:min-h-[600px]"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <!-- <img :src="image" :alt="title" /> -->

        <div class="text-base lg:text-xl 2xl:text-2xl text-white content p-4">
          <h3 class="text-xl lg:text-3xl 2xl:text-5xl text-white stroke-white content-title underline">
            {{ title }} <i> <IconArrowRight class="inline xl:size-9" /> </i>
          </h3>
          <p class="line-clamp-4">{{ description }}</p>
        </div>
      </div>
    </NuxtLink>
    <FigureFrame class="frame reversed hidden xl:block" />
  </figure>
</template>

<script lang="ts" setup>
import FigureFrame from '~/components/icons/FigureFrame.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

defineProps<{
  image: string
  title: string
  link: string
  description: string
}>()
</script>

<style scoped>
figure {
  /* border: 1px solid var(--color-border-contrast); */
  /* filter: grayscale(1); */
  transform: scale(1);
  z-index: 1;
}

.content-title {
  visibility: visible;
  transform: translateY(-100%);
  position: absolute;
  bottom: 0;
  /* text-shadow: #000 0 2px 3px; */
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-property: transform;
}

figure:hover {
  cursor: pointer;
  /* filter: grayscale(0); */
  transform: scale(1.15);
  z-index: 2;
}

figure .content {
  position: absolute;
  bottom: 0;

  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-property: translateY;
  /* transform: translateY(100%); */
}

figure:hover .content {
  transform: translateY(0);
}

figure:hover .content-title {
  /* transform: translateY(0); */
  position: relative;
}

figure .content:before {
  content: '';
  position: relative;
  display: block;
  background-image: url(/img/project-content.png);
  background-image: linear-gradient(180deg, #abe1ff00, #abe1ffa3, #6ecbffa6, #7cc5efd1, #00a4ff);
  width: 100%;
  height: 250px;

  transform: translateY(100%) scale(2.5);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

figure .frame,
figure .content {
  visibility: hidden;
}

figure:hover .frame,
figure:hover .content {
  visibility: visible;
}

/deep/ .line-vertical,
/deep/ .line-horizontal {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}

/* On hover, animate the lines being drawn */
figure:hover /deep/ .line-vertical,
figure:hover /deep/ .line-horizontal {
  stroke-dashoffset: 0;
  transition:
    stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.frame {
  stroke: var(--color-border-accent-2);
  position: absolute;
  top: -50px;
  left: -50px;
  transform: rotate(0);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.frame.reversed {
  position: absolute;
  right: -50px;
  bottom: -50px;
  top: initial;
  left: inherit;
  transform: rotate(180deg);
}

.bg-project-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (max-width: 800px) {
  figure:hover {
    transform: none;
  }
}

@media (hover: none) {
  figure .content:before,
  figure .content {
    visibility: visible;
  }

  figure .content {
    transform: translateY(0);
    bottom: 0;
  }

  figure .content-title {
    position: relative;
  }
}
</style>
