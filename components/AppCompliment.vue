<template>
  <article id="case" class="w-full py-20 lg:py-40">
    <div class="flex flex-col mb-10">
      <h1 class="title text-5xl lg:text-6xl xl:text-7xl mb-10 uppercase">Kunst tijdens oorlog?</h1>
      <h3 class="text-secondary text-base lg:text-xl 2xl:text-2xl text-right max-w-[900px]  2xl:max-w-[70%] self-end">
        To introduce ‘why and for whom’ these projects exist, and to explain the role of art, even,
        or perhaps even more so during wartime, I’d like to share this (shortened) message exchange
        from Pasha
      </h3>
    </div>
    <blockquote class="bg-white p-5 lg:p-20 min-w-[350px] max-w-[1200px] 2xl:max-w-[80%] mx-auto my-20 border">
      <UserCompliment />
    </blockquote>
  </article>
</template>
<script setup lang="ts">
import UserCompliment from '~/components/UserCompliment.vue'
</script>
<style></style>
