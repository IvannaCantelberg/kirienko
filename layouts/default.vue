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
    <el-backtop :right="20" :bottom="20"  style="color: var(--el-text-color-primary); width: 52px; height: 52px">
        <string>&#x2191;</string>
    </el-backtop>
 </section>
</template>