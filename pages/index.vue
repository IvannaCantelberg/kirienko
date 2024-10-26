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

     <section class="relative">
        <div style="background-image: url('/img/petrykivkadetail.jpg')" class="bg-image absolute size-full -z-10 filter  opacity-10"></div>
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

// const dialog = document.querySelector("dialog");
// const showButton = document.querySelector("dialog + button");
// const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// // "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });


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

    .bg-dark {
         background-color: var(--color-background-dark);
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