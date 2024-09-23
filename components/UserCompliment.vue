<template>
  <div class="flex flex-col gap-20 items-center">
    <UserAvatar />
    <p class="description">
      {{ $t('compliment') }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import UserAvatar from './UserAvatar.vue'
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
</style>
