<template>
<div class=" h-screen w-screen flex justify-center items-center">
  <h1>THIS IS THE ADMIN PANEL PRRO</h1>
  <button class="my-8 p-2 bg-red-500 font-bold text-sm text-white" @click="logout">Logout</button>
</div>
</template>

<script>
export default {
  auth: false,
  methods:{
  
    async logout(){
      const userId = this.$auth.$storage.getLocalStorage('user') 
      await this.$auth.logout('laravelSanctum',{
  data:{
    user: userId.id
  }}).then(response => {
    console.log(response, 'logout')
    this.$auth.$storage.removeLocalStorage('user')
    this.$auth.$storage.removeCookie('token', false)
  })
    }
  }

}
</script>
