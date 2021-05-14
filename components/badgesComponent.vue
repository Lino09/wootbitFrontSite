<template>
<div class=" w-full grid grid-cols-2 sm:grid-cols-3 gap-1">
  <span v-for="(badge,index) in badges" :key="index"  class="flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium"  :class="colors[index%7]"  >
    {{badge}} 
  </span>
</div>
</template>

<script>
export default {
    props:{
      projectTech:{
        type:String,
        default:''
      }
    },
    data(){
        return{
            colors:['bg-red-200 text-red-800','bg-green-200 text-green-800','bg-purple-200 text-purple-800','bg-pink-200 text-pink-800','bg-blue-200 text-blue-800','bg-yellow-200 text-yellow-800','bg-indigo-200 text-indigo-800'],
        }
    },
      computed:{
          badges(){
          const badges = this.projectTech.split(',')
          return badges
        }
      },
    methods:{
      // PARA RANDOMIZAR USAR rando() en lugar de index%7 en :class
      // Pendiente ver como automatizar el proceso de seleccionar random o ordenado
      rando(){
        const num = Math.floor(Math.random() * 7);
        return num
      },
      
    },
}
</script>