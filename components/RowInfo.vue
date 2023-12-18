<script setup lang="ts">
  interface RowInfo {
    title: string;
    info: string;
    infoCls?:string;
  }

  const props = defineProps<RowInfo>()
</script>
<template>
  <div class="flex items-start md:items-center md:flex-row flex-col gap-2">
    <span class="text-grey">{{ props.title }}:</span>
    <span :class="infoCls">{{ props.info }}</span>
  </div>
</template>