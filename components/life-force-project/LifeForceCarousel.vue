<template>
  <article class="py-20">
    <el-carousel :interval="6000"  type="card" height="600px" :cardScale="0.5"  class="mb-20 relative" >
        <el-carousel-item v-for="item in images" :key="item">
         <div :style="{ backgroundImage: `url(${item})` }" class="bg-image bg-cover bg-no-repeat bg-center absolute  right-0 size-full "></div>
        </el-carousel-item>
    </el-carousel>

    <!-- <el-carousel height="600px">
       <el-carousel-item v-for="item in images" :key="item">
         <div :style="{ backgroundImage: `url(${item})` }" class="bg-image bg-cover bg-no-repeat bg-center absolute  right-0 size-full "></div>
        </el-carousel-item>
    </el-carousel> -->    
  </article>
</template>

<script lang="ts" setup>
 const pictureLinks: string[] = [

 ]


 let images = ref([]);

onMounted(()=> {
    const glob: Record<string, any> = import.meta.glob('/public/img/projects/life-force/*', {
  import: 'default',
  eager: true, // defaults to false
});

    Object.entries(glob).forEach((element: [string, any]) => {
        const link: string = element[0];        
        pictureLinks.push(link.replace('/public', ''));
    });
    console.log(pictureLinks);
    images.value = pictureLinks;
})

</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  /* line-height: 200px; */
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
}
</style>2