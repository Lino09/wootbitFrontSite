<template>
  <div class="sm:col-span-2">
    <div class="flex justify-between">
      <label :for="label" class="block text-sm font-medium text-gray-700">{{label}}</label>
      <span id="company_description" class="text-sm text-gray-500">Opcional</span>
    </div>
    <div class="mt-1">
      <input @input="updateValue" type="text" :name="label" :id="label" autocomplete="organization"
        class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" :value="value" :placeholder="hint" >
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
      }
    },
    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value)
      }
    }
  }

</script>
