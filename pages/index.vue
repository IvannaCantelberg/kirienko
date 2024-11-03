<template>
   <main>
    <AppHeader >
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#case" class="nav-link">Compliment</a>
        <a href="#blog" class="nav-link">Blog</a>
        <a href="#contact" class="nav-link">Contact</a>
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
        <div style="background-image: url('/img/petrykivkadetail.png')" class="bg-image bg-cover absolute size-full -z-10 filter  opacity-10"></div>
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
import AppBanner from '~/components/AppBanner.vue';
import AppProjects from '~/components/AppProjects.vue';
import AppCompliment from '~/components/AppCompliment.vue';
import AppBlog from '~/components/AppBlog.vue';
import AppHeader from '~/components/AppHeader.vue'; 


useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})


</script>

<style scoped>

    .container-space {
        max-width: calc(100% - 20vw);
        margin: auto;
    }

    @media (min-width: 1200px ) and (max-width: 1600px) {
        .container-space {
            max-width: calc(100% - 15vw);
        }
    }

    @media  (max-width: 1199px) {
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
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}


</style>