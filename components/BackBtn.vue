<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
      }

    }
  }
</script>
<template>
  <button class="flex items-center hover:text-primary text-white gap-2 " @click="() => back()">
    <span class="h-4 w-4">
      <svg
        style="height: inherit; width: inherit;"
        viewBox='0 0 21 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19.6581 9C20.2104 9 20.6581 8.55228 20.6581 8C20.6581 7.44772 20.2104 7 19.6581 7L19.6581 9ZM1.20711 7.29289C0.816586 7.68342 0.816586 8.31658 1.20711 8.70711L7.57107 15.0711C7.96159 15.4616 8.59476 15.4616 8.98528 15.0711C9.37581 14.6805 9.37581 14.0474 8.98528 13.6569L3.32843 8L8.98529 2.34314C9.37581 1.95262 9.37581 1.31946 8.98529 0.928931C8.59476 0.538407 7.9616 0.538407 7.57107 0.928931L1.20711 7.29289ZM19.6581 7L1.91422 7L1.91422 9L19.6581 9L19.6581 7Z'
          fill='currentColor'
        />
      </svg>
    </span>
    <span>Back</span>
  </button>
</template>