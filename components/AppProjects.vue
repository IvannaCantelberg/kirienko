<template>
  <div id="projects" class="py-40">
    <div class="flex flex-col">
      <h1 class="title text-6xl lg:text-8xl text-center uppercase mb-10">Projects</h1>
      <h3 class="text-secondary text-xl text-right xl:max-w-[950px] self-end">
        These canvases are sewn by women in Ukraine, made from unused remnants from curtain shops.
        Since the invasion, my art has taken on a new dimension, as everything now revolves around:
        everyone does what they can, and everyone plays their role. Art has become a powerful means
        for me to contribute.
      </h3>
    </div>
    <article
      class="flex flex-col lg:flex-row gap-10 xl:gap-28 lg:justify-between items-center my-28 mx-auto lg:max-w-[1350px]"
    >
      <Project
        v-for="(project, index) in projectsData"
        :key="index"
        :id="project.id"
        :image="project.image"
        :title="project.title"
        :description="project.description"
      />
    </article>
  </div>
</template>
<script setup lang="ts">
import Project from '~/components/Project.vue'

const projectSource = [
  {
    id: 1,
    image: '/img/Olena.webp',
    title: 'Тканина Надії',
    description: `This is a participatory art project in which anyone who wants to can contribute based on the belief 
        that the intention put into the craft is of great value. Each participant adds something to the design, which is ultimately divided into small pieces.  
        Together, we continue to envision the future of Ukraine as we love it, even for those who cannot do so temporarily... `
  },
  {
    id: 2,
    image: '/img/LifeForce.webp',
    title: 'Картина Життя',
    description: `Life Force, one of my works, captures my feelings and insights surrounding the invasion. 
        This canvas is available by invitation as a source of strength for Ukrainians and for events and exhibitions to 
        keep attention on the situation in Ukraine alive...`
  }
]

const projectsData = ref(projectSource)
</script>

<style></style>
