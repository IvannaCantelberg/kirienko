<template>
  <main>
    <AppHeader>
      <ContentQuery :path="`/${locale}/header`" find="one">
        <template #default="{ data }">
          <a href="#projects" class="nav-link">{{ data['projects'] }}</a>
          <a href="#compliment" class="nav-link">{{ data['compliment'] }}</a>
          <a href="#blog" class="nav-link">{{ data['blog'] }}</a>
          <a href="#contact" class="nav-link">{{ data['contact'] }}</a>
        </template>
      </ContentQuery>
    </AppHeader>
    <section class="bg-dark">
      <AppBanner />
    </section>

    <section>
      <div class="container-space">
        <AppProjects />
      </div>
    </section>

    <section class="relative">
      <div
        style="background-image: url('/img/petrykivka_detail.webp')"
        class="bg-image bg-cover absolute size-full -z-10 filter opacity-10"
      ></div>
      <div class="container-space">
        <AppCompliment />
      </div>
    </section>

    <section class="bg-contrast">
      <div class="container-space">
        <AppBlog />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import AppBanner from '~/components/AppBanner.vue'
import AppProjects from '~/components/AppProjects.vue'
import AppCompliment from '~/components/AppCompliment.vue'
import AppBlog from '~/components/AppBlog.vue'
import AppHeader from '~/components/AppHeader.vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

useSeoMeta({
  title: 'Ukrainian textile art projects',
  ogTitle: 'Ukrainian textile art projects',
  description:
    'This is Ukrainian textile art projects site. Here you will find my Ukrainian art projects and details how you can participate with loving intention and creativity. Discover traditional styles like Petrykivka. modern interpretations, and featured Ukrainian artists. Dive into a world of vibrant patterns, history, and culture. ',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogUrl: 'https://ukrainianartproject.com/'
})
</script>

<style scoped>
.container-space {
  max-width: calc(100% - 20vw);
  margin: auto;
}

@media (min-width: 1200px) and (max-width: 1600px) {
  .container-space {
    max-width: calc(100% - 15vw);
  }
}

@media (max-width: 1199px) {
  .container-space {
    max-width: calc(100% - 10vw);
  }
}

.main-container {
  max-width: calc(100% - 30vw);
  margin: auto;
}

.f-h-section {
  min-height: calc(100vh);
}

.bg-contrast {
  background-color: var(--color-background-contrast);
}

::backdrop {
  background-image: linear-gradient(45deg, magenta, rebeccapurple, dodgerblue, green);
  opacity: 0.75;
}
</style>
