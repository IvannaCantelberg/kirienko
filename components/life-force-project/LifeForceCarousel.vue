<template>
  <article class="pb-20">
    <div class="gallery-container flex justify-center mx-auto">
      <div class="flex flex-col row">
        <picture class="relative">
          <!-- <img src="/img/projects/life-force/gallery/1.webp" decoding="async" loading="lazy" alt="" srcset="" height="400" width="400"> -->
          <el-image
            class="absolute top-0 left-0 bottom-0 right-0 size-full"
            decoding="async"
            loading="lazy"
            width="400"
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
            decoding="async"
            loading="lazy"
            width="400"
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
            decoding="async"
            loading="lazy"
            width="400"
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
      <div class="flex flex-col row">
        <picture class="relative">
          <!-- <img src="/img/projects/life-force/gallery/4.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
          <el-image
            class="absolute top-0 left-0 bottom-0 right-0 size-full"
            decoding="async"
            loading="lazy"
            width="400"
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
            decoding="async"
            loading="lazy"
            width="400"
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
      <div class="flex flex-col row">
        <picture>
          <!-- <img src="/img/projects/life-force/gallery/6.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
          <el-image
            decoding="async"
            loading="lazy"
            width="400"
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
            decoding="async"
            loading="lazy"
            width="400"
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
            decoding="async"
            loading="lazy"
            width="400"
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
            decoding="async"
            loading="lazy"
            width="400"
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
  </article>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
@color: #d41d1d;
@width: 80%;

.gallery-container {
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
/deep/  .el-image__preview {
    cursor: zoom-in;
}
</style>
2
