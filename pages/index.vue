<template>
   <main>
     <section class="bg-contrast">
        <div class="container-space ">
            <!-- <FigureFlower /> -->
            <article class="f-h-section -mt-40 flex ">
                <div class="flex items-center">
                     {{ $t('introduction') }}
                </div>
            </article>
        </div>
    </section>
    <section>
        <div class="container-space">
            <div id="projects" class="f-h-section my-40">
                <h1 class="text-8xl text-center uppercase mb-10">Projects</h1>
                <h3 class="text-xl text-center"> Text from Tatjana about projects . 2-3 lines of text </h3>
                <article class="flex gap-16 justify-between my-28">
                    <Project v-for="(project, index) in projectsData" :key="index" :id="project.id" :image="project.image" :title="project.title"/>
                </article>
                <article class="w-full">
                    <blockquote  class="bg-white p-10 min-w-[350px]">
                       <span class="text-2xl">&#8220; </span>
                       <UserCompliment />
                    </blockquote>
                </article>
            </div>
        </div>         
     </section>

     <section>
        <div class="mx-[8%]">
            <div class="bg-black text-white p-20">
                <div>
                    <h1 class="text-8xl text-left uppercase mb-10">About</h1>
                    <p class="min-w-[300px] max-w-[50%]">
                        {{ $t('introduction') }}
                    </p>
                </div>                
            </div>
            <!-- <div>
                <img src="/img/kirienko-profile.png" alt="">
            </div> -->
        </div>

     </section>

    <section class="bg-contrast">
        <div class="container-space">
            <div id="blog" class="f-h-section py-40">
                <h1 class="text-8xl text-center uppercase mb-10">Blog</h1>
                <h3 class="text-sm text-center px-20"> {{ $t('blog_intro') }} </h3>
                <MediumFeeds class="my-20"/>
            </div>
        </div>
    </section>

   

    <!-- <div id="contact" class="f-h-section">
        <h2 class="text-4xl">Contact</h2>
        <div class=" grid grid-cols-2 h-[85vh]">
            <div class="relative flex items-center">
                <div class="flex items-center">Contact Form</div>
                 <FigureFrameSection/>
            </div>
           
           
            <div class="relative flex"> 
                <div class="flex  gap-8 items-center justify-center px-[15vw]">
                    <a href="http://" target="_blank" class="social-link"><IconSocialInstagram /> </a>
                    <a href="http://" target="_blank" class="social-link"><IconSocialFacebook /> </a>
                    <a href="http://" target="_blank" class="social-link"><IconSocialLinkedIn /> </a>
                </div>
                 <FigureFrameSection class="reversed"/>
            </div>
        </div>
    </div> -->
    
    

   </main>
  
</template>
<script setup lang="ts">
import MediumFeeds from '~/components/MediumFeeds.vue';
import Project from '~/components/Project.vue';
import UserCompliment from '~/components/UserCompliment.vue';
import FigureFrameSection from '~/components/icons/FigureFrameSection.vue';
import IconSocialInstagram from '~/components/icons/IconSocialInstagram.vue';
import IconSocialFacebook from '~/components/icons/IconSocialFacebook.vue';
import IconSocialLinkedIn from '~/components/icons/IconSocialLinkedIn.vue';
import FigureFlower from '~/components/icons/FigureFlower.vue';


useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const projectSource = [
    {   
        id: 1,
        image: '/img/Olena.webp', 
        title: 'Тканина Надії'
    },
    {
        id: 2,
        image: '/img/LifeForce.webp', 
        title: 'Картина Життя'
    }
];

const projectsData  = ref(projectSource)


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

    .section-frame {
        stroke: var(--color-border-contrast);
        transform: rotate(0);

        position: absolute;
        right: -100px;
        top: 0;
    }

    .section-frame.reversed {
        transform: rotate(180deg);
        top: initial;
        bottom: 0;
        left: -100px;
    }

    .social-link {
        width: 90px;
        height: 90px;
    }

    .bg-contrast {
        background-color: var(--color-background-contrast);
    }
</style>