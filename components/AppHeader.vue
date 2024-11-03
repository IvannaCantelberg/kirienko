<template>
  <header class="px-[5vw] xl:px-[15vw] py-6 bg-header text-white">
    <div class="flex gap-8 justify-between items-center text-2xl xl:text-xl">
      <div class="flex gap-8 items-center">
        <a href="/">
          <img src="/logo.png" alt="Logo icon" class="size-16 xl:size-16" />
        </a>
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
</script>
<style scoped>
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
</style>
