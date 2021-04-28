<template>
<div v-if="thereAreErrors" class="bg-red-200 p-2 text-sm text-red-600 font-semibold rounded-b-lg ">
    <div class="flex justify-between">
    <span class="">{{message}}</span>
    <button @click="$emit('closeErrors')" class="flex items-center justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button >
    </div>
  <ul class="">
      <li v-for="(error, index) in errors" :key="index"> &#8226; {{error[0]}}</li>
  </ul>
</div>
</template>

<script>
export default {
data(){
    return{
       
    }
},
methods:{
    
    },
    props:['errors','thereAreErrors','message']
}

</script>
