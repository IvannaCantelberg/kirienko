<template>
  <figure class="hover:shadow-2xl transition-all relative">
    <FigureFrame class="frame" />
    <img :src="image" :alt="title" />
    <FigureFrame class="frame reversed" />
  </figure>
</template>

<script lang="ts" setup>
import FigureFrame from '~/components/icons/FigureFrame.vue'

defineProps<{
  image: string
  title: string
}>()
</script>
<style scoped>
figure {
  /* border: 1px solid var(--color-border-contrast); */
  filter: grayscale(1);
  transform: scale(1);
  z-index: 1;
}

figure:hover {
  cursor: pointer;
  filter: grayscale(0);
  transform: scale(1.03);
  z-index: 2;
}

figure .frame {
  visibility: hidden;
}

figure:hover .frame {
  visibility: visible;
}


 /deep/ .line-vertical, /deep/ .line-horizontal {
            stroke-dasharray: 100; 
            stroke-dashoffset: 100;
        }

/* On hover, animate the lines being drawn */
figure:hover /deep/ .line-vertical,
figure:hover /deep/ .line-horizontal {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.6s  cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms  cubic-bezier(0.4, 0, 0.2, 1);
    
}


.frame {
  stroke: var(--color-border-contrast);
  position: absolute;
  top: -50px;
  left: -50px;
  transform: rotate(0);
  transition: transform 150ms  cubic-bezier(0.4, 0, 0.2, 1);
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
