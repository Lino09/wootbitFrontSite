<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
    <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
    <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="show" class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden" :class=[alertType[alertIndex].bg]>
        <div class="p-4">
          <div class="flex items-start">
<div :class=[alertType[alertIndex].txticon]>
  <svg v-if="alertIndex===0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

<svg v-if="alertIndex===1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

<svg v-if="alertIndex===2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium" :class=[alertType[alertIndex].txt]>
                {{texto}}
              </p>
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
                  'txt':'text-indigo-800',
                  'txticon':'text-indigo-500',
          },
          {
                  'type':'notice',
                  'bg':'bg-yellow-100',
                  'border':'border-yellow-400',
                  'txt':'text-yellow-800',
                  'txticon':'text-yellow-500'
          },
          {
                  'type':'bad',
                  'bg':'bg-red-100',
                  'border':'border-red-400',
                  'txt':'text-red-800',
                  'txticon':'text-red-500'
          },

          ]

      }
  },
methods:{
},
watch:{
  show(){
    setTimeout(() => {
      this.$emit('alertTimedOut')
    }, 5000);
}
}
}
</script>