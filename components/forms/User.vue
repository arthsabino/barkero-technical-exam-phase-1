<script>
  export default {
    data() {
      return {
        email: '',
        fullName: '',
        fullAddress:'',
        phoneNumber:'',
        company:'',
        jobRole:''
      }
    },
    methods: {
      async saveUserInfo() {
        localStorage.setItem('userInfo', JSON.stringify({
          email: this.email ,
          fullName: this.fullName ,
          fullAddress: this.fullAddress ,
          phoneNumber: this.phoneNumber ,
          company: this.company ,
          jobRole: this.jobRole 
        }))
        await navigateTo('/dashboard')
      }
      
    }
  }
</script>
<template>
  <form @submit.prevent="saveUserInfo" class="flex flex-col gap-4 w-full">
    <h1 class="text-center">User Form</h1>
    <InputText required type="email" label="Email Address" v-model="email"/>
    <InputText required label="Full Name" v-model="fullName"/>
    <InputText required label="Full Address" v-model="fullAddress"/>
    <InputText required label="Phone Number" v-model="phoneNumber"/>
    <InputText required label="Company" v-model="company"/>
    <InputDropdown required label="Job Role" v-model="jobRole" :options="['Executive', 'Managerial', 'Individual Contributor']"/>
    <Button type="submit">
      <span class="font-semibold text-white">Enter</span>
    </Button>
  </form>
</template>