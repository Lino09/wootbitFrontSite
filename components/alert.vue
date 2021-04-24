<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
    <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
    <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="show" class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden" :class=[alertType[alertIndex].bg]>
        <div class="p-4">
          <div class="flex items-start">

            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">
                {{texto}}
              </p>

            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button  class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Close</span>
                <!-- <XIcon class="h-5 w-5" aria-hidden="true" /> -->
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {

  components: {
  },

  props:{
      alertIndex:{
          type:Number,
          default:0
      },
      texto:{
          default: ''
      },
      show:{
          type: Boolean,
          default:false
  }
},
data(){
      return{
          alertType:[
              {
                  'type':'good',
                  'bg':'bg-indigo-100',
                  'border':'border-indigo-400',
                  'txt':'text-indigo-700',
                  'txthover':'hover:text-indigo-600',
          },
          {
                  'type':'meh',
                  'bg':'bg-yellow-100',
                  'border':'border-yellow-400',
                  'txt':'text-yellow-700',
                  'txthover':'hover:text-yellow-600'
          },
          {
                  'type':'bad',
                  'bg':'bg-red-100',
                  'border':'border-red-400',
                  'txt':'text-red-700',
                  'txthover':'hover:text-red-600'
          },

          ]

      }
  },
methods:{
}
}
</script>