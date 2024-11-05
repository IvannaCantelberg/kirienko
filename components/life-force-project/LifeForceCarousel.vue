<template>
  <article class="pb-20">

    <div class="gallery-container flex justify-center mx-auto">
        <div class="flex flex-col  row">
            <picture class="relative">
                <!-- <img src="/img/projects/life-force/gallery/1.webp" decoding="async" loading="lazy" alt="" srcset="" height="400" width="400"> -->
                <el-image
                    class="absolute top-0 left-0 bottom-0 right-0 size-full"
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/1.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/1.webp']"
                  fit="fill"
                />
            </picture>
            <picture>
                <!-- <img src="/img/projects/life-force/gallery/2.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
                <el-image
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/2.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/2.webp']"
                  fit="fill"
                  class="absolute top-0 left-0 bottom-0 right-0 size-full"
                />
            </picture>
            <picture>
                <!-- <img src="/img/projects/life-force/gallery/3.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
                 <el-image
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/3.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/3.webp']"
                  fit="fill"
                  class="absolute top-0 left-0 bottom-0 right-0 size-full"
                />
            </picture>
        </div>
        <div class="flex flex-col  row">
            <picture class="relative">
                <!-- <img src="/img/projects/life-force/gallery/4.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
                 <el-image
                    class="absolute top-0 left-0 bottom-0 right-0 size-full"
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/4.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/4.webp']"
                  fit="fill"
                />
            </picture>
            <picture>
                <!-- <img src="/img/projects/life-force/gallery/5.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
                 <el-image
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/5.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/5.webp']"
                  fit="fill"
                  class="absolute top-0 left-0 bottom-0 right-0 size-full"
                />
            </picture>
            
        </div>
        <div class="flex flex-col  row">
            <picture>
                <!-- <img src="/img/projects/life-force/gallery/6.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
                 <el-image
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/6.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/6.webp']"
                  fit="fill"
                  class="absolute top-0 left-0 bottom-0 right-0 size-full"
                />
            </picture>
            <picture>
                <!-- <img src="/img/projects/life-force/gallery/7.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
                 <el-image
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/7.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/7.webp']"
                  fit="fill"
                  class="absolute top-0 left-0 bottom-0 right-0 size-full"
                />
            </picture>
            <picture>
                <!-- <img src="/img/projects/life-force/gallery/8.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
                 <el-image
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/8.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/8.webp']"
                  fit="fill"
                  class="absolute top-0 left-0 bottom-0 right-0 size-full"
                />
            </picture>
            <picture>
                <!-- <img src="/img/projects/life-force/gallery/9.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
                 <el-image
                  decoding="async" loading="lazy"  width="400"
                  src="/img/projects/life-force/gallery/9.webp"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="['/img/projects/life-force/gallery/9.webp']"
                  fit="fill"
                  class="absolute top-0 left-0 bottom-0 right-0 size-full"
                />
            </picture>
        </div>
    </div>

    <!-- <el-carousel
      :interval="6000"
      type="card"
      height="500px" 
      :cardScale="0.5"
      class="mb-20 relative"
      
    >
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="item" alt="" class="h-full">
       
      </el-carousel-item>
    </el-carousel> -->

  </article>
</template>

<script lang="ts" setup>
const pictureLinks: string[] = []

let images = ref([])

onMounted(() => {
  const glob: Record<string, any> = import.meta.glob('/public/img/projects/life-force/gallery/*', {
    import: 'default',
    eager: true // defaults to false
  })

  Object.entries(glob).forEach((element: [string, any]) => {
    const link: string = element[0]
    pictureLinks.push(link.replace('/public', ''))
  })
  console.log(pictureLinks)
  images.value = pictureLinks
})
</script>

<style scoped lang="less">
@color: #d41d1d;
@width: 80%;
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

.gallery-container {
    width: @width;
    max-width: (1800 / 20) * 1em;
    font-size: min(1.3vw, 1em);
    gap: (30 / 20) * 1em;
}

.gallery-container .row {
     gap: (30 / 20) * 1em;
}

.gallery-container .row picture {
    position: relative;
    display: block;
}

// .gallery-container .row:nth-of-type(1) img:nth-last-of-type(1) {
//     width: 400px/20em;
//     height: 400/20em;
// }

// .gallery-container .row:nth-of-type(1) img:nth-last-of-type(2) {
//     width: 400/20em;
//     height: 400/20em;
// }
// .gallery-container .row:nth-of-type(1) img:nth-last-of-type(3) {
//     width: 400/20em;
//     height: 267/20em;
// }

</style>
2
