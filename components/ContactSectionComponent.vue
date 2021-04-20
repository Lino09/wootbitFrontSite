<template>
    <div>
        <div class="relative bg-white">
            <div class="lg:absolute lg:inset-0">
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-56 w-full object-cover lg:absolute lg:h-full"
                         src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixqx=jlLmNGkxDS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                         alt="">
                </div>
            </div>
            <div id="contact-section"
                 class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div class="lg:pr-8">
                    <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                                Hagamos Equipo
                            </span>
                        </h2>
                        <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                            ¡Nos encantaría saber de ti!, Envíanos un mensaje para saber más de tu idea de proyecto.
                        </p>
                        <form action="#" method="POST" @submit.prevent="submit"
                              class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                            <base-input :requerido="$v.name.required" label="Nombre" v-model="name" hint="John Wootbit Doe" :errors="$v.name.$invalid" @blurred="$v.name.$touch()" :lenghtRequired="$v.name.minLength"></base-input >
                               
                            <base-input :requerido="$v.email.required" :tipo="$v.email.email" label="Email" v-model="email" hint="john@wootbit.io" :errors="$v.email.$invalid" @blurred="$v.email.$touch()"></base-input>

                            <opt-input label="Teléfono" hint="1234567890" v-model="phone" :lengthRequired="$v.phone.maxLength" :errors="$v.phone.$invalid"></opt-input>
                            <opt-input label="Compañía" hint="Mi empresa" v-model="company" :lengthRequired="$v.company.maxLength" :errors="$v.company.$invalid"></opt-input>

                            <text-area v-model="message" label="¿Qué podemos hacer por ti?" hint="Mensaje aquí" @blurred="$v.message.$touch()" :errors="$v.message.$invalid"
                            :maxLength="$v.message.maxLength" :minLength="$v.message.minLength" :requerido="$v.message.required"
                            ></text-area>

                            <div class="text-right sm:col-span-2">
                                <button :disabled="$v.$invalid"
                                type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        :class="{ 'cursor-not-allowed': $v.$invalid}">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import BaseInput from './BaseInput.vue';
export default {
  components: { BaseInput},
    name: "ContactSectionComponent",
    data(){
        return{
               name:'',
                email:'',
                company:'',
                phone:'',
                message:''
            
        }
    },
    validations:{
        name:{
            required,
            minLength: minLength(4),
            maxLength: maxLength(30)
        },
        email:{
            email,
            required,
            maxLength: maxLength(50)
        },
        message:{
            required,
            minLength: minLength(10),
            maxLength: maxLength(500)
        },
        company: {
            maxLength: maxLength(20)
        },
        phone: {
            maxLength: maxLength(20)
        }
    },
    methods:{
        submit(){
            this.$v.$touch()
            if(!this.$v.$invalid){

              const data = JSON.stringify({
                "type": "contact",
                "attributes": {
                "you_are_a_boot": "",
                 "name": this.name,
                 "email": this.email,
                 "company": this.company,
                 "phone": this.phone,
                 "message": this.message
  }
});
               this.$axios.$post('/api/contact', data).then( response => console.log(response)).catch(error => console.log(error))
            }
        }
    }
   
}
</script>