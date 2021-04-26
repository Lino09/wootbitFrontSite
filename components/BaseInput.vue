<template>

    <div>
      <label :for="label" class="block text-sm font-medium text-gray-700">
        {{label}}
      </label>
     
        <input 
          :id="label"
          class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md px-4 py-2 mt-1"
          :name="label" 
          :value="value" 
          :placeholder="hint"
          type="text"
          @input="updateValue" 
          @blur="blurred">
          <div v-if="errors" class="text-xs text-red-500">
          <p v-if="!requerido">El {{label}} es requerido</p>
          <p v-if="!tipo">Debe ser un formato válido</p>
          <p v-if="!lenghtRequired">Mínimo 4 Caracteres </p>
          </div>
      
    </div>
 
</template>

<script>
  export default {
props:{
    label:{
        type: String,
        default:''
    },
    hint:{
        type: String,
        default:''
    },
    value:{
        type: [String, Number],
        default:''
    },
   lenghtRequired:{
        type: Boolean,
        default:true
    },
    requerido:{
      type: Boolean,
      defaul: true
    },
    tipo:{
      type: Boolean,
      default: true
    }
    ,
    errors:{
      type: Boolean,
      default: false
    }
  },
    data(){
      return{
      
      }
    },
  methods:{
    updateValue(event){
      this.$emit('input', event.target.value)
    },
    blurred(){
      this.$emit('blurred')
    }
  }
  }

</script>
