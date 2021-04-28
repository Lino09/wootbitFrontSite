<template>
    <div class="relative">
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
                        <form 
                        action="#" 
                        method="POST" 
                        class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                        @submit.prevent="submit"
                        >

                            <base-input v-model="form.name" :requerido="$v.form.name.required" label="Nombre"  hint="John Wootbit Doe" :errors="$v.form.name.$invalid"  :length-required="$v.form.name.minLength" :max-length-required="$v.form.name.maxLength" :max-length-amount="30"  @blurred="$v.form.name.$touch()"></base-input >

                            <base-input v-model="form.email" :requerido="$v.form.email.required" :tipo="'email'" :type-mail="$v.form.email.email" label="Email" hint="john@wootbit.io" :errors="$v.form.email.$invalid" :max-length-required="$v.form.email.maxLength" :max-length-amount="50" @blurred="$v.form.email.$touch()"></base-input>

                            <opt-input v-model="form.phone" label="Teléfono" hint="1234567890" :length-required="$v.form.phone.maxLength" :errors="$v.form.phone.$invalid"></opt-input>
                            <opt-input v-model="form.company" label="Compañía" hint="Mi empresa" :length-required="$v.form.company.maxLength" :errors="$v.form.company.$invalid"></opt-input>
                            
                            <input v-model="form.you_are_a_boot" class="invisible h-0" >

                            <text-area v-model="form.message" label="¿Qué podemos hacer por ti?" hint="Mensaje aquí" :errors="$v.form.message.$invalid"
                            :max-length="$v.form.message.maxLength" :min-length="$v.form.message.minLength" :requerido="$v.form.message.required"                         @blurred="$v.form.message.$touch()"></text-area>

                            <div class="text-right sm:col-span-2">
                                <button :disabled="$v.$invalid && isDisabled"
                                type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        :class="{ 'cursor-not-allowed': $v.$invalid,'bg-opacity-50 hover:bg-opacity-50': isDisabled}">
                                    {{sendStatus}}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <alert :show="isVisible" :texto="msgResponse" :alert-index="typeIndex"></alert>
      </div>
</template>
<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import BaseInput from './BaseInput.vue';
export default {
    name: "ContactSectionComponent",
  components: { BaseInput},
    data(){
        return{
            form:{
               name:'',
                email:'',
                company:'',
                phone:'',
                message:'',
                you_are_a_boot:'',
            },
                isVisible:false,
                msgResponse:'',
                isDisabled:false,
                typeIndex:0,
                sendStatus: 'Enviar'

        }
    },
    validations:{
        form:{
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
        }
    },
    methods:{
        submit(){
            this.$v.$touch()
            if(!this.$v.$invalid && this.form.you_are_a_boot === ''){
            this.isDisabled=true
            this.sendStatus = 'Enviando'
            this.msgResponse = 'Enviando'
            this.typeIndex=1
            this.showNotice()
              const data = {
                "type": "contact",
                "attributes": this.form
                
              };
               this.$axios.$post('/api/contact', data).then( response => 
               {
                   this.msgResponse = response.message
                   this.typeIndex=0
                   this.showNotice()               
               }).catch(err => {
                   this.msgResponse =err.response.data.message
                   this.typeIndex=2
                   this.showNotice()               
               }).finally(
                   function(){
                       this.isDisabled=false
                       this.clearForm()
                   }.bind(this)
               )
            }
        },
        showNotice(){
            this.isVisible = true
            setTimeout(function(){

                this.isVisible = false
            }.bind(this),5000);
            },
            clearForm(){
                this.form.you_are_a_boot=''
                this.form.name=''
                this.form.email=''
                this.form.company=''
                this.form.phone=''
                this.form.message=''
                this.sendStatus= 'Enviar'
            }
        
    }

}
</script>
