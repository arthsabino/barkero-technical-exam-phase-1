<script setup lang="ts">
  import type { ProductProps } from '~/types/product';
  useHead({
    title: "Dashboard"
  })
  const route = useRoute()
  const { name:pName, weight, qty, status: pStatus } = route.query
  const productList:ProductProps[] = typeof window !== 'undefined' && localStorage && localStorage?.getItem('product-list') ? JSON.parse(localStorage?.getItem('product-list') as string) : [];
  const isInProductList = productList.findIndex((p: ProductProps) => (p.name === pName && p.weight === weight && p.qty === qty && p.status === pStatus))

</script>
<template>
    <div v-show="isInProductList >= 0" class="text-white w-full">
      <BackBtn/>
      <h1 class="text-center">{{ pName ?? 'Name' }}</h1>
      <h3 class="mt-4 text-grey">Product Information:</h3>
      <div class="flex flex-col gap-4 mt-8">
        <RowInfo title="Name" :info="(pName as string) ?? 'Name'"/>
        <RowInfo title="Weight" :info="(weight as string) ?? 'Weight'"/>
        <RowInfo title="Quantity" :info="(qty as string) ?? 'Quantity'"/>
        <RowInfo title="Status" :info="(pStatus as string) ?? 'Status'" :info-cls="pStatus === 'Active' ? 'text-primary' : 'text-warning'"/>
      </div>
    </div>
    <div v-show="isInProductList < 0" class="text-white">
      No data...
    </div>
</template>