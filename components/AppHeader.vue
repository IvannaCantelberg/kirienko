<template>
  <header class="px-[15vw] py-16 bg-header">
    <!-- <p>{{ $t('welcome') }}</p> -->
    <div class="flex justify-between ">
        <div  class="flex gap-5">
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#about_us" class="nav-link">About Us</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
      <div  class="flex  gap-5 items-center">
        <NuxtLink
        v-for="locale in locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="lang-link transition-all"
      >
        {{ locale.alias }}
      </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
<style scoped>
.bg-header {
background-color: var(--color-background-contrast);
}
header {
  line-height: 1.5;
  /* box-shadow: -8px 3px 40px #87d5f361; */
   
}

.router-link-active.lang-link {
  color: var(--color-border-contrast);
  border: 1px solid var(--color-border-contrast);
}

.lang-link, a {
  padding: 8px;
  /* border: 1px solid; */
  line-height: normal;
  /* border-radius: 5px; */
}

.router-link-active.lang-link::after, .router-link-active.lang-link::before {
    content: none;
}

.nav-link {
position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 16px;
  /* color: inherit; */
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
  border-bottom: 1px solid var(--color-border-contrast);
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
  border: 1px solid var(--color-border-contrast);
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
  border: 1px solid var(--color-border-contrast);
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
</style>
