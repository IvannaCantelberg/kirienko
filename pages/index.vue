<template>
  <section class="main-container">
   <article class="f-h-section flex items-center">
    <UserCompliment />
   </article>
    <div class="f-h-section">
        <h2 class="text-4xl">Projects</h2>
        <article class="flex gap-16 justify-between my-20">
            <Project v-for="(project, index) in projectsData" :key="index"  :image="project.image" :title="project.title" class="hover:shadow-2xl transition-all"/>
        </article>
    </div>

   <div>
        <h2 class="text-4xl">Blog</h2>
        <MediumFeeds class="my-20"/>
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
        min-height: calc(100vh - 100px);
    }
</style>