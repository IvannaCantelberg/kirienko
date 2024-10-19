<template>
   <main>
     <section class="bg-dark">
        <AppBanner />
    </section>

    <section>
        <div class="container-space">    
            <AppProjects />        
        </div>         
     </section>

     <section>
        <div class="container-space">    
            <AppCompliment />        
        </div>         
     </section>

    <section class="bg-contrast">
        <div class="container-space">
            <AppBlog />
        </div>
    </section>

    <section class="bg-dark">
        <AppContact />
    </section>

    
    
    

   </main>
  
</template>
<script setup lang="ts">
import AppBanner from '~/components/AppBanner.vue';
import AppProjects from '~/components/AppProjects.vue';
import AppCompliment from '~/components/AppCompliment.vue';
import AppBlog from '~/components/AppBlog.vue';
import AppContact from '~/components/AppContact.vue'; 


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
        max-width: calc(100% - 30vw);
        margin: auto;
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

    .bg-dark {
         background-color: var(--color-background-dark);
    }

    
</style>