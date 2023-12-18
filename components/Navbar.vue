<script setup lang="ts">
  const router = useRouter()
  const isActive = (route: string) => router.currentRoute.value.path.includes(route)
</script>
<template>
  <nav class="h-navh w-screen justify-center flex items-center fixed top-0 left-0 bg-secondary text-white shadow-lg z-30">
    <div class="flex justify-end w-full content-container gap-4">
      <NuxtLink class="nav-link" to="/dashboard">Dashboard</NuxtLink>
      <NuxtLink :class="`nav-link pr-4 sm:pr-0 ${isActive('product') ? 'active' : ''}`" to="/product-list">Product List</NuxtLink>
    </div>
  </nav>
</template>