<template>
  <figure class="hover:shadow-xl transition-all relative ">
    <FigureFrame class="frame hidden xl:block" />
    <NuxtLink :to="`projects/${id}`">
        <div class="relative overflow-hidden">
          <img :src="image" :alt="title" />
          <div class="text-xs lg:text-base text-white content p-4 transition-all  delay-100">
            <p>{{description}}</p>
          </div>
        </div>

    </NuxtLink>
    <FigureFrame class="frame reversed hidden xl:block" />
  </figure>
</template>

<script lang="ts" setup>
import FigureFrame from '~/components/icons/FigureFrame.vue';

defineProps<{
  image: string
  title: string
  id: number, 
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

figure:hover {
  cursor: pointer;
  /* filter: grayscale(0); */
  transform: scale(1.15);
  z-index: 2;
}

@media (max-width: 800px) {
  figure:hover {
    transform: none;
  }
}


figure .content {
    position: absolute;
}

figure:hover .content {
      transform: translateY(-100%);
}

figure:hover .content:before {
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




figure .frame, figure .content {
  visibility: hidden;
}

figure:hover .frame, figure:hover .content {
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

</style>
