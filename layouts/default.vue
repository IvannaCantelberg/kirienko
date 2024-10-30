<script setup lang="ts">
    import AppHeader from '~/components/AppHeader.vue';
    import AppContact from '~/components/AppContact.vue'; 
</script>

<template>
 <section>
    <AppHeader/>
        <slot />
    <section class="bg-dark">
        <AppContact />
    </section>
 </section>
</template>