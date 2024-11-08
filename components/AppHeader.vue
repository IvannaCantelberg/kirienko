<template>
  <header class="px-[5vw] xl:px-[15vw] py-6 bg-header text-white">
    <div class="flex gap-8 justify-between items-center text-2xl xl:text-xl">
      <div class="flex gap-8 items-center">
        <a href="/">
          <img src="/logo.png" alt="Logo icon" class="size-16 xl:size-16" />
        </a>
        <ContentQuery :path="`/${locale}/projects`" find="one">
          <template #default="{ data }">
            <el-dropdown>
              <span
                class="el-dropdown-link nav-link title text-white transition-all title flex flex-row gap-2 items-center"
              >
                <a href="#compliment" class="text-2xl xl:text-xl">{{ data['sectionTitle'] }}</a>
                <IconExpand class="size-6 xl:size-8" />
              </span>
              <template #dropdown>
                <el-dropdown-menu class="grid gap-2 nav-dropdown">
                  <NuxtLink
                    v-for="(project, index) in data['projects']"
                    :key="index"
                    :to="`/${locale}/projects/${project['link']}`"
                    class="transition-all title lang-link p-2"
                  >
                    <div class="text-2xl xl:text-xl">
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

        <div class="hidden lg:flex gap-8 title">
          <slot />
        </div>
      </div>

      <div class="flex gap-5 items-center">
        <LanguageSwitcher />
      </div>
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
  padding: 15px 20px;
  border-radius: 20px;
}

.nav-dropdown .nav-link:hover {
  // background-color: var(--color-border-accent-1);
}
</style>
