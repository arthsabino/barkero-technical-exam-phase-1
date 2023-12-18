<script setup lang="ts">
  export interface DropdownProps {
    label: string,
    labelCls?:string,
    modelValue: string
    options:string[],
  }

  const props = defineProps<DropdownProps>()

  const emit = defineEmits(['update:modelValue'])

  const dropdownModel = computed({
    get() {
      return props.modelValue
    },

    set(value) {
      return emit('update:modelValue', value)
    }
  })

  const isFocus = ref(false)
  const show = ref(false)
</script>
<template>
  <div @click="show = !show" @focus="isFocus = true" @blur="isFocus = false" class="md:min-w-[200px] w-full flex flex-col gap-2 relative">
    <label :class="`${labelCls ? labelCls : 'text-grey opacity-50'}`">{{ props.label }}</label>
    <div :class="`flex items-center pl-4 pr-2 bg-transparent rounded border-2 ${isFocus || show ? 'border-primary' : 'border-grey'}`" >
      <div class="py-1.5 flex-1">
        <input type="text" :value="dropdownModel" readonly class="sm:text-base text-sm outline-none w-full bg-transparent"/>
      </div>
      <span
        :class="`h-4 w-4 text-grey shrink-0 transition-all duration-300 ${
          !show ? '' : 'rotate-180'
        }`"
      >
        <svg
        viewBox="1 -2 10 10"
        xmlns="http://www.w3.org/2000/svg"
        stroke="1"
        fill="none"
      >
        <path d="M1 1L5.5 5.5L10 1" stroke="currentColor" />
      </svg>
      </span>
    </div>
    <ul :class="`transition-all duration-250 absolute w-full rounded shadow-2xl top-16 z-10 bg-white flex flex-col py-2 gap-2 ${show ? 'h-fit' : 'h-0 opacity-0 pointer-events-none'}`" @mouseleave="show = false">
      <li v-for="option in options" :key="option" @click="dropdownModel = option" class="cursor-pointer group hover:bg-primary pl-6 py-2 pr-2">
        <span class="group-hover:text-white text-black">{{ option }}</span>
      </li>
    </ul>
  </div>
</template>