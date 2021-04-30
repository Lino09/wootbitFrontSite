<template>
<div class="flex flex-col w-full">
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-4 bg-gray-50 px-2 py-8 rounded-lg border">
      <div>
        <img class="mx-auto h-12 w-auto sm:hidden" src="../../static/wootbitiologo.png" alt="LogoWootbit" />
        <img class="mx-auto h-12 w-auto hidden sm:block" src="../../static/letrasWtbt.png" alt="LogoWootbit" />
        
       
        <!-- <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-800">
          Area de personal
          
        </h2> -->
        <p class="mt-2 text-center text-sm text-gray-600">
        Inicio de Sesión
          
          <a href="/" class="font-medium text-yellow-600 hover:text-yellow-500 block">
            Regresar
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6 ml-6" action="#" method="POST"  @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md  space-y-4">
          <div>
            <base-input class="mr-6" v-model="login_form.email" :tipo="'email'" :label="'Email'" :hint="'Email Address'"></base-input>
            <!-- <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm" placeholder="Email address" /> -->
          </div>
          <div class=" flex items-end">
            <base-input class="w-full" v-model="login_form.password" :tipo="password" :label="'Password'" :hint="'Password'"></base-input>
            <div class="flex justify-center mb-2">
              <svg @click="toggleView" v-if="!viewPass" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>

              <svg @click="toggleView" v-if="viewPass" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>

            </div>
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

        <div class="pr-6">
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-yellow-600 to-red-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> -->
            </span>
            Sign in
          </button>
         
         
        </div>
      </form>
      <error-form-component :message="errorMessage" :there-are-errors="thereAreErrors" :errors="errors" @closeErrors="clearError"></error-form-component>
    </div>
    
  </div>
    <footer-section-component  :is-loggin="true"></footer-section-component>
</div>
</template>

<script>
import FooterSectionComponent from '~/components/FooterSectionComponent.vue'
// import { mapState} from 'vuex'

export default {
     auth: false,
    name:'Login',
  components: {
    FooterSectionComponent
    // LockClosedIcon,
  },
  data(){
return{
   login_form:{
     email:'',
     password:''
   },
   viewPass: false,
   errors:['one error here','one error here','one error here','one error here','one error here'],
   thereAreErrors: false,
   errorMessage: '',
   
}
  },
  
  computed:{
   password(){
     if(this.viewPass === true){
     return 'text'
   }
   else{
     return 'password'
   }
   }
  },
 methods:{
   submit(){
    this.errors=[]
    this.thereAreErrors = false
this.$auth.loginWith('laravelSanctum',{
  data:{
    email: this.login_form.email,
    password: this.login_form.password
  }
}).then(response => {
  this.$auth.$storage.setCookie('token', response.data.meta.token,false)
  this.$auth.$storage.setLocalStorage('user', response.data.data.attributes)
  this.$auth.setUser(response.data.data.attributes)
  this.$router.push({name: 'admin-dashboard'})
 
}
).catch(error=> {
  this.thereAreErrors = true
  this.errorMessage= error.response.data.message
  this.errors = error.response.data.errors
  })
   },
   clearError(){
     this.errors = []
     this.thereAreErrors = false
   },

   toggleView(){
     this.viewPass = !this.viewPass
   }
 }

  
}
</script>