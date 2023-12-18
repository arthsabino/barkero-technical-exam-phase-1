<script setup lang="ts">
import type { ProductProps } from '~/types/product';

const props = defineProps<ProductProps>()
</script>
<template>
  <tr class="h-20 even:bg-slate-400">
    <td class="font-semibold">{{ props.name }}</td>
    <td class="text-center">{{ props.weight }}</td>
    <td class="text-center">{{ props.qty }}</td>
    <td class="text-center">
      <span :class="`${props.status === 'Active' ? 'text-primary' : 'text-warning'}`">
        {{ props.status }}
      </span>
    </td>
    <td>
      <ProductActionBtns :name="props.name" :weight="props.weight" :qty="props.qty" :status="props.status"/>
    </td>
  </tr>
</template>