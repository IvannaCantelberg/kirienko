<script setup lang="ts">
    import AppContact from '~/components/AppContact.vue'; 
</script>

<template>
 <section>    
    <slot />
    <section class="bg-dark">
        <AppContact />
    </section>
 </section>
</template>