<script setup lang="ts">
  export interface TextProps {
    label: string,
    labelCls?:string,
    modelValue: string
    required?: boolean,
    type?: string
    keypress?: (e: KeyboardEvent) => void
  }
  const props = withDefaults(defineProps<TextProps>(), {
    type: 'text',
    required: false
  })

  const emit = defineEmits(['update:modelValue'])

  const inputModel = computed({
    get() {
      return props.modelValue
    },

    set(value) {
      return emit('update:modelValue', value)
    }
  })

  const isFocus = ref(false)
</script>
<template>
  <div class="input-container">
    <label :class="props.labelCls">{{props.label}}</label>
    <div :class="`flex items-center pl-4 pr-2 bg-transparent rounded border-2 ${isFocus ? 'border-primary' : 'border-grey'}`">
      <div class="py-1.5 flex-1">
        <input :required="props.required" :type="props.type" :value="inputModel" v-on:input="inputModel = ($event.target as HTMLInputElement).value" @focus="isFocus=true" @blur="isFocus=false" @keypress="(e) => keypress?.(e)" class="sm:text-base text-sm outline-none w-full bg-transparent"/>
      </div>
    </div>
  </div>
</template>