<template>
  <header class="px-2 md:px-4 lg:px-[5vw] xl:px-[15vw] py-6 bg-header text-white">
    <div class="flex gap-2 lg:gap-8 justify-between items-center text-base lg:text-lg xl:text-xl">
      <div class="flex gap-2 lg:gap-4 items-center">
        <a href="/" class="size-12 xl:size-16">
          <img src="/logo.png" alt="Logo icon" class="w-full h-full" />
        </a>
        <ContentQuery :path="`/${locale}/projects`" find="one">
          <template #default="{ data }">
            <el-dropdown>
              <a href="#projects"
                class="el-dropdown-link py-2 pr-1 pl-3 lang-link title text-white transition-all title flex flex-row items-center "
              >
                <span  class="text-base lg:text-lg xl:text-xl">{{ data['sectionTitle'] }}</span>
                <IconExpand class="size-6 xl:size-8" />
              </a>
              <template #dropdown>
                <el-dropdown-menu class="grid gap-2 nav-dropdown">
                  <NuxtLink
                    v-for="(project, index) in data['projects']"
                    :key="index"
                    :to="`/${locale}/projects/${project['link']}`"
                    class="transition-all title lang-link p-2"
                  >
                    <div class="text-base lg:text-lg xl:text-xl">
                      <span>{{ project['title'] }}</span>
                    </div>
                  </NuxtLink>
                 
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
          <template #not-found>
            <p>No project found.</p>
          </template>
        </ContentQuery>

        <div class="hidden lg:flex gap-2 lg:gap-4 title">
          <slot />
        </div>
        <button type="button" class="btn-signup text-base lg:text-lg xl:text-xl title">Register</button>
      </div>

     <LanguageSwitcher />
    </div>
  </header>
</template>

<script setup>
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'
import IconExpand from '~/components/icons/IconExpand.vue'
const { locale } = useI18n()
</script>
<style scoped lang="less">

.bg-header {
  backdrop-filter: blur(10px);
  background-color: rgb(12 15 19 / 40%);
  box-shadow: 0px 0px 30px 0px rgba(24, 24, 24, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10;
}
header {
  line-height: 1.5;
}

.btn-signup {
  background-color: var(--color-border-accent-1);
  color: var(--color-text);
  padding: 8px 12px;
  border-radius: 6px;
}

</style>
