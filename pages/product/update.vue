<script lang="ts">
  import type { ProductProps } from '~/types/product';
  import { _isNumber } from '~~/lib/format'
  export default {
    data() {
      return {
        name: '',
        weight: '',
        qty:'',
        status: '',

        pName: '',
        pWeight: '',
        pQty: '',
        pStatus: ''
      }
    },
    methods: {
      saveProduct() {
        const productList: ProductProps[] = typeof window !== 'undefined' && localStorage && localStorage?.getItem('product-list') ? JSON.parse(localStorage?.getItem('product-list') as string) : [];
        const isInProductList = productList.findIndex((p: ProductProps) => (p.name === this.pName && p.weight === this.pWeight && p.qty === this.pQty && p.status === this.pStatus))

        if(isInProductList >=0) {
          productList[isInProductList] = {
            name: this.name ,
            weight: this.weight,
            qty: this.qty,
            status: this.status,
          }
          alert('Product updated.')
          localStorage.setItem('product-list', JSON.stringify((productList)))
          navigateTo('/product-list')
        } else {
          alert('Product not found!')
        }
      },

      isNumber(e: KeyboardEvent, noDecimal = false) {
        _isNumber(e, noDecimal)
      }

    },
    
    mounted() {
      const route = useRoute()
      const { name: _name, weight: _weight, qty: _qty, status: _status } = route.query
      
      this.name = _name as string
      this.weight = _weight as string
      this.qty = _qty as string
      this.status = _status as string

      this.pName = _name as string
      this.pWeight = _weight as string
      this.pQty = _qty as string
      this.pStatus = _status as string
    },
    setup() {
      useHead({
        title: "Update Product"
      })
    }
  }
</script>
<template>
  <div class="w-full text-white">
    <BackBtn />
    <form @submit.prevent="saveProduct" class="flex flex-col gap-4 w-full mt-4">
      <h1 class="text-center ">Product Form</h1>
      <InputText required label="Name" labelCls="alt" v-model="name" />
      <InputText required label="Weight (kg)" labelCls="alt" :keypress="(e: KeyboardEvent) => isNumber(e)" v-model="weight" />
      <InputText required type="number" label="Quantity" labelCls="alt" :keypress="(e: KeyboardEvent) => isNumber(e, true)"
        v-model="qty" />
      <InputDropdown required label="Status" labelCls="alt" v-model="status" :options="['Active', 'Draft']" />
      <Button type="submit">
        <span class="font-semibold text-white">Save</span>
      </Button>
    </form>
  </div>
</template>