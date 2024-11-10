<template>
  <article
    class="my-20 px-5 lg:px-0 mx-auto lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
  >
    <el-timeline>
      <ContentQuery :path="`/${locale}/projects/with-love`" find="one">
        <template #default="{ data }">
          <el-timeline-item
            v-for="(item, index) in data['archive']"
            :key="index"
            :center="index === data['archive'].length - 1"
            placement="top"
            icon="MoreFilled"
            :color="handleRandomColor()"
          >
            <el-card>
              <div class="flex gap-5 items-center">
                <div
                  :style="{ 'background-image': 'url(' + item['author_avatar'] + ')' }"
                  class="bg-image bg-cover size-16 shadow-md border rounded-md"
                ></div>
                <h3 class="title text-secondary text-lg mb-2">{{ item['author'] }}</h3>
              </div>

              <div class="grid grid-cols-1 gap-10 px-2 lg:px-10 py-5">
                <p class="text-base" v-html="item['description']"></p>
                <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                  <el-image
                    v-for="(img, imgIndex) in item['archive_images']"
                    :key="imgIndex"
                    class="size-24 lg:size-40"
                    :src="img"
                    :zoom-rate="1.2"
                    :max-scale="7"
                    :min-scale="0.2"
                    :preview-src-list="item['archive_images']"
                    :initial-index="4"
                    fit="fill"
                  />
                </div>
              </div>
            </el-card>
          </el-timeline-item>
        </template>
      </ContentQuery>
    </el-timeline>
  </article>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const colors = ['#ABE1FF', '#EDEDA6', '#bae79e', '#97c1f9']
const handleRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
</script>

<style scoped>
:deep(.el-image__preview) {
  cursor: zoom-in;
}
</style>
