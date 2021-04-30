<template>
  <div>
    <button></button>
      <ul class="flex flex-wrap mt-4">
          <li v-for="(project, index) in projects" :key="index" class="w-1/3 flex flex-col rounded-lg shadow-lg overflow-hidden mb-8 px-1">
                    <div class="flex-shrink-0 h-24 rounded-t-md flex w-full bg-white">
                        <img class="w-24 h-24 object-cover rounded-t-md"
                             :src="project.attributes.picture"
                             alt="">
                             <p class="text-md font-semibold text-gray-900 p-2">
                                    {{project.attributes.name}}
                                </p>
                    </div>
                    <div class="flex-1 bg-white p-2 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-cyan-600">
                                <a href="#" class="hover:underline">
                                    {{project.attributes.type}}
                                </a>
                            </p>
                            <!-- <a href="#" class="block mt-2"> -->
                                
                                <p class="mt-3 text-base text-gray-500">
                                    {{project.attributes.description}}
                                </p>
                            <!-- </a> -->
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="#">
                                    <span class="sr-only">{{project.attributes.client_name}}</span>
                                    <img class="h-10 w-10 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                         alt="">
                                </a>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a href="#" class="hover:underline">
                                        {{project.attributes.client_name}}
                                    </a>
                                </p>
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-03-16">
                                        Mar 16, 2020
                                    </time>
                                    <span aria-hidden="true">
                          &middot;
                        </span>
                                    <span>
                          {{project.attributes.technologies_used}}
                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
      </ul>
  </div>
</template>

<script>
export default {
layout: 'admin',
  
  created(){
      this.updateUserTkn()
      this.fetchProjects()
  },
  data(){
return{
    usertkn:'',
    projects:[]
}
  },
  methods:{

      async fetchProjects(){
    this.$axios.setToken(this.usertkn, 'Bearer')
      await this.$axios.$get('/api/projects').then( response => {
          this.projects = response.data
      }).catch(error => console.log(error))
    },
    updateUserTkn(){
       try{
           this.usertkn = this.$auth.$storage.getCookie('token') 
       } catch(e){
           console.log(e, 'que pedo que pedo')
       }
    }
          }
}
</script>