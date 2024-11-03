<template>
    <div class="py-8 px-[15%] flex gap-8 items-center justify-between text-gray-300 text-xs">
        <p>Copyright © {{currentYear}}. All rights reserved.</p>
        <p>Developed by <a href="https://www.linkedin.com/in/ivanna-cantelberg-40b009268/" target="_blank" rel="noopener noreferrer" class="underline">Ivanna Cantelberg</a> </p>
    </div>
</template>
<script lang="ts" setup>
const currentYear = ref((new Date()).getFullYear());
</script>