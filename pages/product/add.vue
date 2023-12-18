<script >
  import { _isNumber } from '~/lib/format'
  export default {
    data() {
      return {
        name: '',
        weight: '',
        qty: '',
        status: '',
      }
    },
    methods: {
      saveProduct() {
        const productList = (!process.client || !localStorage || !localStorage?.getItem('product-list')) ? [] : JSON.parse(localStorage.getItem('product-list'))
        
        productList.push({
          name: this.name,
          weight: this.weight,
          qty: this.qty,
          status: this.status,
        })
        if (!process.client || !localStorage) {
          alert('Error in creating product, please check if you have enabled localStorage')
          return
        }

        alert('Product created.')
        localStorage.setItem('product-list', JSON.stringify((productList)))
        navigateTo('/product-list')
        
      },

      isNumber(e, noDecimal = false) {
        _isNumber(e, noDecimal)
        
      }

    },
    setup() {
      useHead({
        title: "Add Product"
      })
    }
  }
</script>
<template>
  <div class="w-full text-white">
    <BackBtn/>
    <form @submit.prevent="saveProduct" class="flex flex-col gap-4 w-full mt-4">
      <h1 class="text-center ">Product Form</h1>
      <InputText required label="Name" labelCls="alt" v-model="name"/>
      <InputText required label="Weight (kg)" labelCls="alt" :keypress="(e) => isNumber(e)" v-model="weight"/>
      <InputText required type="number" label="Quantity" labelCls="alt" :keypress="(e) => isNumber(e, true)" v-model="qty"/>
      <InputDropdown required label="Status" labelCls="alt" v-model="status" :options="['Active', 'Draft']"/>
      <Button type="submit">
        <span class="font-semibold text-white">Save</span>
      </Button>
    </form>
  </div>
</template>