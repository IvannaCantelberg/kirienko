<script setup lang="ts">
import FormContact from './components/FormContact.vue'
import SectionArtist from './components/SectionArtist.vue'
import Project from './components/Project.vue'
</script>

<template>
  <header class="flex justify-between">
    <div class="flex items-center">
      <img alt="Vue logo" class="logo" src="./assets/tk-stof-solo.png" width="125" height="125" />

      <div class="wrapper">
        <h1 class="text-3xl">Tatjana Kiriënko, Textile Artist</h1>
        <h3 class="text-xl">Threads of beauty and resilience</h3>
      </div>
    </div>
    <div class="flex gap-4">
      <a href="#about" class="font-semibold">About Artist</a>
      <a href="#project" class="font-semibold">Project</a>
      <a href="#contact" class="font-semibold">Contact</a>
    </div>
  </header>

  <main>
    <!-- <Project></Project>
    <img src="/src/assets/tk-stof-solo.png" alt=""> -->
    <SectionArtist class="lg:w-3/4 m-auto py-12 lg:py-20" id="about"></SectionArtist>
    <FormContact class="lg:w-3/4 m-auto py-12 lg:py-20" id="contact"></FormContact>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  box-shadow: -8px 3px 40px #87d5f361;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

main {
  padding: calc(var(--section-gap) / 2) 0;
  margin: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding: calc(var(--section-gap) / 8) calc(var(--section-gap) / 4);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
