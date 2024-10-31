<template>
  <header class="px-[5vw] xl:px-[15vw] py-8 bg-header text-white">
    <!-- <p>{{ $t('welcome') }}</p> -->
    <div class="flex justify-end lg:justify-between items-center text-2xl xl:text-xl ">
      <div class="hidden lg:flex gap-5 title ">
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#case" class="nav-link">Case</a>
        <a href="#blog" class="nav-link">Blog</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
      <div class="flex gap-5 items-center">
        <NuxtLink
          v-for="locale in locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="lang-link transition-all title"
        >
          {{ locale.alias }}
        </NuxtLink>
        <!-- <button type="button" class="btn-signup ml-10">Newsletters Sign Up <i>&#8594;</i></button> -->
      </div>
    </div>

    <dialog>
      <button autofocus open>Close</button>
      <p>This modal dialog has a groovy backdrop!</p>
    </dialog>
  </header>
</template>

<script setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
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

.router-link-active.lang-link {
  color: var(--color-text-accent-1);
  border: 1px solid var(--color-background-accent-1);
}

.lang-link,
a {
  padding: 8px;
  /* line-height: normal; */
}

.router-link-active.lang-link::after,
.router-link-active.lang-link::before {
  content: none;
}

.nav-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  /* font-size: 16px; */
  /* line-height: 2.5; */
  border-bottom: 1px solid transparent; /* Initial transparent border */
  border-radius: 5px;
  transition: all 0.4s ease-out;
}

.nav-link::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid var(--color-border-accent-1);
  border-left: none;
  border-right: none;
  z-index: -1;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.4s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(1); /* Draw the top and bottom borders */
  transition-delay: 0.2s; /* Delay for sequential effect */
}

.lang-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 16px;
  /* color: inherit; */
  border: 1px solid transparent; /* Initial transparent border */
  border-radius: 5px;
  transition: all 0.4s ease-out;
}

/* Top and bottom borders */
.lang-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-border-accent-1);
  border-radius: 5px;
  border-left: none;
  border-right: none;
  z-index: -1;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.4s ease-out;
}

/* Left and right borders */
.lang-link::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-border-accent-1);
  border-radius: 5px;
  border-top: none;
  border-bottom: none;
  z-index: -1;
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.4s ease-out;
}

/* On hover, animate the borders sequentially */
.lang-link:hover::before {
  transform: scaleX(1); /* Draw the top and bottom borders */
  transition-delay: 0.2s; /* Delay for sequential effect */
}

.lang-link:hover::after {
  transform: scaleY(1); /* Draw the left and right borders */
}

.btn-signup {
  background-color: var(--color-border-accent-1);
  color: var(--color-text);
  padding: 15px 20px;
  border-radius: 20px;
}
</style>
