<script setup>
  if (!process.client || !localStorage || !localStorage?.getItem('userInfo')) {
    navigateTo('/')
  }
</script>
<template>
  <div class="DefaultLayout bg-secondary">
    <Navbar/>
    <div class="mt-navh content-container sm:py-4 pb-8">
      <div class="h-screen w-full">
        <slot />
      </div>
    </div>
  </div>
</template>