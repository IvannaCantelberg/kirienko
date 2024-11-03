<template>
  <article class="my-40 mx-auto lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
    <el-timeline>
      <ContentQuery :path="`/${locale}/projects/with-love`" find="one">
        <template #default="{ data }">        

          <el-timeline-item
            v-for="(item, index) in data['archive']"
            :key="index"
            :center="index === (data['archive'].length - 1)"
            placement="top"
            icon="MoreFilled"
          >
            <el-card>
              <div class="flex gap-5">
                <div
                  :style="{ 'background-image': 'url(' + item['author_avatar'] + ')' }"
                  class="bg-image bg-cover size-20 shadow-md border rounded-md"
                ></div>
                <div class="flex-1">
                  <h3 class="title text-secondary text-lg mb-2">{{ item['author'] }}</h3>
                  <p class="text-base" v-html="item['description']"></p>
                </div>
              </div>
              <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-10">
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
</script>
