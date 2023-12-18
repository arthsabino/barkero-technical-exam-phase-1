<script setup>
useHead({
  title: "Product List"
})
if (!process.client || !localStorage) {
  navigateTo('/')
}

const productList = typeof window !== 'undefined' && localStorage?.getItem('product-list') ? JSON.parse(localStorage?.getItem('product-list')) : [];

</script>
<template>
  <div class="text-white h-screen w-full">
    <h1>Product List</h1>
    <div class="w-full flex justify-end my-4">
      <Button :onclick="() => navigateTo('/product/add')" cls="self-end">Add Product</Button>
    </div>
    <div class='scrollable-table-container'>
      <table v-show="productList.length > 0" class='table w-full h-full border-collapse my-4'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight (kg)</th>
            <th>Qty</th>
            <th>Status</th>
            <th class="text-end">Action</th>
          </tr>
        </thead>
        <tbody class="w-full">
          <ProductRow v-for="(product, index) in productList" :index="index" :key="index" :name="product.name" :weight="product.weight" :qty="product.qty" :status="product.status"/>
        </tbody>
      </table>
      <div v-show="productList.length <= 0" class="flex h-full min-h-[200px] w-full flex-col items-center justify-center">
        <span class='py-4 text-grey font-bold'>No data...</span>
      </div>
    </div>
  </div>
</template>