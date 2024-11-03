<template>
    <el-dropdown>
    <span class="el-dropdown-link">
      <IconGlobe /> <i>{{ currentLocal.icon }}</i> {{ currentLocal.name }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <NuxtLink
          v-for="l in locales"
          :key="l.code"
          :to="switchLocalePath(l.code)"
          class="lang-link transition-all title"
        >
        <el-dropdown-item> {{ l.name }}</el-dropdown-item>
         
        </NuxtLink>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import IconGlobe from '~/components/icons/IconGlobe';
const { locales, locale  } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const currentLocal = ref(locales.value[0]);
// 
const getCurrentLocal = () => {
    return locales.value.find((l) => l.code === locale.value) ?? locales.value[0];
}


onMounted( () => {
    currentLocal.value = getCurrentLocal()
})

watch(locale, () => currentLocal.value = getCurrentLocal())

</script>