<template>
<div>
    <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32" id="projects-section">
        <div class="relative flex flex-col items-center">
            <div
                class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">

                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                        Proyectos
                    </span>
                </h2>

                <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500  text-center">
                    Hemos colaborado en proyectos de diferentes tamaños y complejidades.
Aquí un ejemplo de los productos que hemos desarrollado para nuestros clientes y para nosotros mismos.
                </p>
            </div>
            <carousel :autoplay=true :autoplayHoverPause="true" :paginationColor="'#FADF9F'" :perPageCustom="[[320,1],[600,2],[1024,3],[1440,4]]" :paginationActiveColor="'#DA5D10'" :paginationSize="15" class=" mt-12 px-4 w-full max-w-7xl">
                <slide v-for="(project, index) in projects" :key="index" class="flex flex-col rounded-lg shadow-lg overflow-hidden mb-8 px-1">
                    <div class="flex-shrink-0 rounded-t-md relative">
                        <img class="h-48 w-full object-cover rounded-t-md border-b border-indigo-50"
                             :src="project.attributes.picture"
                             alt="">
                             <a :href="project.attributes.link" class="absolute top-2 right-2" title="Visitar">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg></a>
                    </div>
                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-cyan-600">
                                <a href="#" class="hover:underline">
                                    {{project.attributes.type}}
                                </a>
                            </p>
                            <!-- <a href="#" class="block mt-2"> -->
                                <p class="text-xl font-semibold text-gray-900">
                                    {{project.attributes.name}}
                                </p>
                                <p class="mt-3 text-base text-justify text-gray-500">
                                    {{project.attributes.description}}
                                </p>
                            <!-- </a> -->
                            <div class="flex mt-4 text-sm text-gray-500">
                <!-- <span>
                  {{project.attributes.technologies_used}}
                </span> -->
                <badges-component :projectTech="project.attributes.technologies_used"></badges-component>
              </div>
                            
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <!-- <a href="#"> -->
                                    <!-- <span class="sr-only">{{project.attributes.client_name}}</span>
                                    <img class="h-10 w-10 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                         alt=""> -->
                                         <div class="h-10 w-10 bg-red-400 text-white rounded-full flex items-center justify-center font-bold">{{twoLtr(project)}}</div>
                                <!-- </a> -->
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <!-- <a href="#" class="hover:underline"> -->
                                        {{project.attributes.client_name}}
                                    <!-- </a> -->
                                </p>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>

</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
name: "ProjectsSectionComponent",
props:['projects'],
  components: {
    Carousel,
    Slide
  },
  directives: {
    
  },
  data () {
    return {
     
    }
  },
  methods:{
      twoLtr(project){
          
          const arrName = project.attributes.client_name.split(' ')
          let twoCodeName = ''
          if(arrName.length > 1){
               twoCodeName = arrName[0].split('')[0] + arrName[1].split('')[0]
          }else{
               twoCodeName = arrName[0].split('')[0] + arrName[0].split('')[1]
          }
          return twoCodeName
      }
  },
  computed:{
  }


}

</script>
