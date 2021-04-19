<template>

    <div>
      <label :for="label" class="block text-sm font-medium text-gray-700">
        {{label}}
      </label>
      <div class="mt-1">
        <input @input="updateValue" 
          :name="label" 
          :id="label" 
          :value="value" 
          :placeholder="hint" 
          class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md px-4 py-2"
          @blur="blurred">

          <div v-if="errors" class="text-xs text-red-500">
          <p v-if="!requerido">El {{label}} es requerido</p>
          <p v-if="!tipo">Debe ser un formato válido</p>
          <p v-if="!lenghtRequired">Mínimo 4 Caracteres </p>
          </div>
      </div>
    </div>
 
</template>

<script>
  export default {
    data(){
      return{
      
      }
    },
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
