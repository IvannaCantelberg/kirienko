<template>
  <section class="main-container">
   <article class="f-h-section -mt-40 flex">
    <div class="flex items-center">
        <UserCompliment />
    </div>
   </article>
    <div id="projects" class="f-h-section mb-40">
        <h2 class="text-4xl">Projects</h2>
        <article class="flex gap-16 justify-between my-20">
            <Project v-for="(project, index) in projectsData" :key="index"  :image="project.image" :title="project.title"/>
        </article>
    </div>

   <div id="about_us">
        <h2 class="text-4xl">Blog</h2>
        <MediumFeeds class="my-20"/>
    </div>

    <div id="contact" class="f-h-section">
        <h2 class="text-4xl">Contact</h2>
    </div>
    
    
  </section>
  
</template>
<script setup lang="ts">
import MediumFeeds from '~/components/MediumFeeds.vue';
import Project from '~/components/Project.vue';
import UserCompliment from '~/components/UserCompliment.vue';

const projectSource = [
    {
        image: '/img/Olena.webp', 
        title: 'Тканина Надії'
    },
    {
        image: '/img/LifeForce.webp', 
        title: 'Картина Життя'
    }
];
const projectsData  = ref(projectSource)


</script>

<style scoped>
    .main-container {
        max-width: calc(100% - 30vw);
        margin: auto;
    }

    .f-h-section {
        min-height: calc(100vh);
    }
</style>