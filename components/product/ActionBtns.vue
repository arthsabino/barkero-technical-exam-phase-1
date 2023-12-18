<script setup lang="ts">
  import type { ProductProps } from '~/types/product.ts';
  const props = defineProps<ProductProps>()
  const show = ref(false)
  const deleteProduct = () => {
    const productList = (!process.client || !localStorage || !localStorage?.getItem('product-list')) ? [] : JSON.parse(localStorage.getItem('product-list') as string)

    const index = productList.findIndex((p: ProductProps) => (p.name === props.name && p.weight === props.weight && p.qty === props.qty && p.status === props.status))
    if(index <= -1) {
      alert('Product not found!')
      return
    }

    if(confirm('Are you sure you want to delete this?') == true) {
      productList.splice(index, 1)
      localStorage.setItem('product-list', JSON.stringify((productList)))
      navigateTo('/product/delete')
    }
  }
  const params = `?name=${props.name}&weight=${props.weight}&qty=${props.qty}&status=${props.status}`
</script>
<template>
  <div class="relative flex justify-end cursor-pointer w-full" @click="show = !show">
    <div class="gap-2 bg-gray-50 rounded p-2 px-4 w-fit flex items-center">
      <span class="text-black">Action</span>
        <span :class="`h-4 w-4 text-grey shrink-0 transition-all duration-300 ${!show ? '' : 'rotate-180'}`">
          <svg
            style="height: inherit; width: inherit;"
            viewBox="1 -2 10 10"
            xmlns="http://www.w3.org/2000/svg"
            stroke="1"
            fill="none"
          >
            <path d="M1 1L5.5 5.5L10 1" stroke="currentColor" />
          </svg>
        </span>
    </div>
      
    <ul :class="`transition-all duration-250 absolute w-full rounded shadow-2xl left-0 top-10 z-10 bg-white flex flex-col py-2 gap-2 ${show ? 'h-fit' : 'h-0 opacity-0 pointer-events-none w-0'}`" @mouseleave="show=false" @blur="show=false">
      <li @click="() => navigateTo(`/product${params}`)" class="cursor-pointer group hover:bg-primary pl-6 py-2 pr-2">
        <span class="group-hover:text-white text-black">View</span>
      </li>
      <li @click="() => navigateTo(`/product/update${params}`)" class="cursor-pointer group hover:bg-primary pl-6 py-2 pr-2">
        <span class="group-hover:text-white text-black">Update</span>
      </li>
      <li @click="() => deleteProduct()" class="cursor-pointer group hover:bg-primary pl-6 py-2 pr-2">
        <span class="group-hover:text-white text-black">Delete</span>
      </li>
    </ul>
  </div>
</template>