<script setup lang="ts">
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined
  cls?: string
  onclick?: () => void
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
})
</script>
<template>
  <button :type="props.type" @click="onclick" :class="`shadow-lg py-2.5 px-4 rounded text-sm md:min-w-[150px] transition-all duration-300 flex items-center justify-center bg-primary hover:bg-primary-touch ${cls ?? ''}`">
    <slot/>
  </button>
</template>