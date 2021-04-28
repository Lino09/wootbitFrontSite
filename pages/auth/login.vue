<template>
<div class="flex flex-col w-full">
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-gray-50 px-2 py-4 rounded-lg">
      <div>
        <img class="mx-auto h-12 w-auto sm:hidden" src="../../static/wootbitiologo.png" alt="LogoWootbit" />
        <img class="mx-auto h-12 w-auto hidden sm:block" src="../../static/letrasWtbt.png" alt="LogoWootbit" />
        
       
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-800">
          Area de personal
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
        Inicio de Sesión
          
          <a href="/" class="font-medium text-yellow-600 hover:text-yellow-500 block">
            Regresar
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST"  @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <base-input v-model="login_form.email" :tipo="'email'" :label="'Email'" :hint="'Email Address'"></base-input>
            <!-- <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Email address" /> -->
          </div>
          <div>
            <base-input v-model="login_form.password" :tipo="'password'" :label="'Password'" :hint="'Password'"></base-input>
            <!-- <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Password" /> -->
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <!-- <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div> -->
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-yellow-600 to-red-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> -->
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
    <footer-section-component></footer-section-component>
</div>
</template>

<script>
import FooterSectionComponent from '~/components/FooterSectionComponent.vue'
// import { mapState} from 'vuex'

export default {
     auth: false,
    name:'login',
  components: {
    FooterSectionComponent
    // LockClosedIcon,
  },
  data(){
return{
   login_form:{
     email:'',
     password:''
   }
}
  },
  
  computed:{
  },
 methods:{
   submit(){
this.$auth.loginWith('laravelSanctum',{
  data:{
    email: this.email,
    password: this.password
  }
})
   }
 }

  
}
</script>