<template>
<div class=" h-screen w-screen flex flex-col justify-center items-center">
  <h1>THIS IS THE ADMIN PANEL PRRO</h1>
  <button class="my-8 p-2 bg-red-500 font-bold text-sm text-white" @click="logout">Logout</button>
</div>
</template>

<script>
export default {
  methods:{
  
    logout(){
      this.$auth.strategy.token.set('Bearer '+ this.$auth.$storage.getCookie('token'))
      const userId = this.$auth.$storage.getLocalStorage('user').id 
      console.log(userId)
  //    this.$auth.logout('laravelSanctum',{
  // data:{
  //   id: userId
  // }}
  this.$auth.logout( {data:{
    id:userId
  }} ).then(response => {
    console.log(response,'logout')
    this.$auth.$storage.removeLocalStorage('user')
    console.log('user deleted')
    this.$auth.$storage.removeCookie('token', false)
     console.log('user Token deleted')
  })
    }
  }

}
</script>
