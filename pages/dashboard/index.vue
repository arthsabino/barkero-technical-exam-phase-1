<script setup>
  useHead({
    title: "Dashboard"
  })
  
  const userInfo = typeof window !== 'undefined' ?  JSON.parse(localStorage?.getItem('userInfo')) : {
    email: '',
    fullName: '',
    fullAddress: '',
    phoneNumber: '',
    company: '',
    jobRole: '',
  };
</script>
<template>
  <div class="text-white w-full">
    <h1>Welcome, {{ userInfo?.fullName ?? 'User' }}</h1>
    <h3 class="mt-4 text-grey">Account Information:</h3>
    <div class="flex flex-col gap-4 mt-8">
      <RowInfo title="Email" :info="userInfo?.email ?? '' "/>
      <RowInfo title="Full Name" :info="userInfo?.fullName ?? '' "/>
      <RowInfo title="Full Address" :info="userInfo?.fullAddress ?? '' "/>
      <RowInfo title="Phone Number" :info="userInfo?.phoneNumber ?? '' "/>
      <RowInfo title="Company" :info="userInfo?.company ?? '' "/>
      <RowInfo title="Job Role" :info="userInfo?.jobRole ?? '' "/>
    </div>
  </div>
</template>