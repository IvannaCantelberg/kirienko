<template>
  <div class="flex flex-col gap-10">
    <div class="flex gap-4">
      <!-- <div class="w-[50px] h-[50px] rounded-full bg-contrast"></div> -->
      <div class=" bg-contrast p-5 max-w-[90%] min-w-[300px] flex flex-col gap-3 rounded-lg">
        <div class="title">Pasha:</div>
        <p class="text-md">We’ve returned from the battlefield, taking a rest for 3-4 days.</p>
        <div class="self-end text-secondary">23:29</div>
      </div>
    </div>

    <div class="flex gap-4 self-end">
      <!-- <div class="w-[50px] h-[50px] rounded-full bg-slate-100"></div> -->
      <div class="bg-slate-100 p-5 max-w-[90%] min-w-[300px] flex flex-col gap-3 rounded-lg">
        <div class="title">Tanja:</div>
        <p class="text-md">How did it go?</p>
        <div class="self-end text-secondary">23:29</div>
      </div>
    </div>

    <div class="flex gap-4">
      <!-- <div class="w-[50px] h-[50px] rounded-full bg-contrast"></div> -->
      <div class=" bg-contrast p-7 w-[90%] min-w-[300px] flex flex-col gap-3 rounded-lg">
        <div class="title">Pasha:</div>
        <p class="text-lg">
          Rest well. "When I read your post on Facebook, where you invited artists to join your work, tears rolled down my cheeks. 
          I still can’t understand how you can create something like this – from such a distance – without seeing it, but still understanding it so deeply. 
          I may not be a creative person, but I dream of sharing your work and your contribution to Ukraine with people who know how to love life, the world, 
          and the land. If it weren’t for everything that’s happening now, 
          I would never have understood the value, beauty, and meaning of life. 
          Thank you, Tanja! You’ve opened my eyes – maybe even both eyes.

        </p>
        <div class="self-end text-secondary">23:29</div>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts" setup>
</script>

<style scoped>
.description {
  text-align: center;
  max-width: 70%;
}

.description:after {
  content: '';
  display: block;
  width: 40%;
  border: 1px solid;
  margin: auto;
  margin-top: 20px;
}

.bg-contrast {
        background-color:var(--color-background-contrast-lighter);
        
    }
</style>
