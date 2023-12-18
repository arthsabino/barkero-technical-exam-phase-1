<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - Technical Assesment',
  // ... or as a function
  titleTemplate: (title) => {
    return title
      ? `${title} - Technical Assesment`
      : 'Technical Assesment'
  }
})
  onMounted(() => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('product-list')
  })
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
