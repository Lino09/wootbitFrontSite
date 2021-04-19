<template>
  <div class="sm:col-span-2">
    <div class="flex justify-between">
      <label for="how_can_we_help" class="block text-sm font-medium text-gray-700">{{label}}</label>
      <span id="how_can_we_help_description" class="text-sm text-gray-500">Max. 500 caracteres</span>
    </div>
    <div class="mt-1">
      <textarea @blur="blurred" @input="updateValue" :name="label" :id="label"
          :value="value" :placeholder="hint"  aria-describedby="how_can_we_help_description" rows="4"
        class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
    </div>
     <div v-if="errors" class="text-xs text-red-500">
          <p v-if="!maxLength">Máximo 500 Caracteres</p>
          
          <p v-if="!minLength">Mínimo 10 Caracteres</p>
          </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      hint: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number],
        default: ''
      },
      maxLength:{
        type: Boolean,
        default: true
      },
      minLength:{
        type: Boolean,
        default: true
      },
    errors:{
      type: Boolean,
      default: false
    }
    },
    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value)
      },
      
    blurred(){
      this.$emit('blurred')
    }
    }
  }

</script>
