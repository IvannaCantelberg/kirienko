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
 </section>
</template>