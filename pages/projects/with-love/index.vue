<template>
  <main>
    <AppHeader >
        <a href="/" class="nav-link">Main Page</a>
        <a href="#contact" class="nav-link">Contact</a>
    </AppHeader>
    <section class="min-h-[85vh] relative mt-10">
        <div style="background-image: url('/img/Olena.webp')" class="bg-image bg-cover bg-center absolute size-full ">
            <div class="size-full bg-gray-500 bg-opacity-55 bg-blend-color-burn flex flex-col items-center justify-center" >
                <figure class="shadow-white shadow-2xl">
                    <div
                        class="relative bg-project-image bg-cover size-[320px] lg:size-[480px] xl:size-[600px] "
                        style="background-image: url('/img/Olena.webp')">              
                    </div>
                </figure>
            </div>
        </div>
    </section>
     <div>
        <button type="button" onclick="window.history.back(-1)" class="btn-link shadow-sm mt-10">Go back</button>
    </div>
     <section class="">
       
        <ProjectTimeline />
     </section>

  </main>
</template>
<script lang="ts" setup>
    import ProjectTimeline from '~/components/with-love-project/ProjectTimeline.vue';
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>