<script setup>
import { onMounted } from 'vue';

  definePageMeta({
    layout: "login"
  })
  useHead({
    title: "Login"
  })

  onMounted(async () => {
    if(localStorage.getItem('userInfo')) {
      await navigateTo('/dashboard')
    }
  })
</script>
<template>
  <div class="py-8 px-4 rounded-lg shadow-xl border-t-4 border-t-primary flex flex-col items-center min-w-[300px] md:min-w-[380px] gap-4">
    <FormsUser />
  </div>
</template>