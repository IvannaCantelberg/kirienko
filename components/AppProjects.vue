<template>
  <div id="projects" class="py-20 lg:py-40">
    <ContentQuery :path="`/${locale}/projects`" find="one">
      <template #default="{ data }">
        <div class="flex flex-col">
          <h1 class="title text-5xl lg:text-8xl text-center uppercase mb-5 lg:mb-10">
            {{ data['sectionTitle'] }}
          </h1>
          <h3
            class="text-secondary text-base lg:text-xl 2xl:text-2xl text-right xl:max-w-[950px] 2xl:max-w-[70%] self-end"
            v-html="data['description']"
          ></h3>
        </div>
        <article
          class="flex flex-col lg:flex-row gap-10 xl:gap-28 lg:justify-between items-center my-10 lg:my-28 mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl"
        >
          <Project
            v-for="(project, index) in data['projects']"
            :key="index"
            :link="project.link"
            :image="optimizeImg(project.image)"
            :title="project.title"
            :description="project.description"
          />
        </article>
      </template>
      <template #not-found>
        <p>No project found.</p>
      </template>
    </ContentQuery>
  </div>
</template>
<script setup lang="ts">
import Project from '~/components/Project.vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const img = useImage()


const optimizeImg = (imgUrl:string) => {
        
        const backgroundProjectImage = computed(() => {
            const result = img(imgUrl, {
                sizes: 'xs:100vw sm:100vw lg:400px xl:600px',
                format: 'webp'                
            }, {
                densities: 'x1'
            });
        
            return result;
        });
        return backgroundProjectImage.value;
}
</script>

<style></style>
