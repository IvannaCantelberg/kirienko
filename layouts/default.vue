<script setup lang="ts">
    import AppContact from '~/components/AppContact.vue'; 
    import AppFooter from '~/components/AppFooter.vue';
</script>

<template>
 <section>    
    <slot />
    <section class="bg-dark">
        <AppContact />
    </section>
    <section class="bg-dark">
        <AppFooter />
    </section>
    <el-backtop :right="50" :bottom="50" style="color: var(--el-text-color-primary)">
        <string>&#x2191;</string>
    </el-backtop>
 </section>
</template>