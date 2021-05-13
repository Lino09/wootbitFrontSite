<template>
  <div class="mt-8 focus:ourline-none" >
    <button class=" p-2 rounded-lg border font-bold bg-yellow-600 hover:bg-yellow-500 hover:text-white text-yellow-100 active:outline-none focus:outline-none" @click.prevent="editProject(projecto)">Add
      Project</button>
    <ul class="flex flex-wrap mt-4">
      <li v-for="(project, index) in projects" :key="index"
        class="w-1/3 flex flex-col rounded-lg overflow-hidden mb-8 px-1">
        <div class="flex-shrink-0 h-24 rounded-t-md flex w-full bg-gray-100">
          <img  class="w-24 h-24 object-cover rounded-t-md" :src="project.attributes.picture" alt="">
          <p class="text-md font-semibold text-gray-900 p-2">
            {{project.attributes.name}}
          </p>
        </div>
        <div class="flex-1 bg-gray-100 p-2 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-cyan-600">
              <!-- <a href="#" class="hover:underline"> -->
                {{project.attributes.type}}
              <!-- </a> -->
            </p>
            <!-- <a href="#" class="block mt-2"> -->

            <p class="mt-3 text-base text-gray-500 ">
              {{project.attributes.description}}
            </p>
            <!-- </a> -->
            <span>{{project.attributes.link}}</span>
          </div>
           <div class="flex mt-2 text-sm text-gray-500">
                <!-- <span>
                  {{project.attributes.technologies_used}}
                </span> -->
                <badges-component :project-tech="project.attributes.technologies_used"></badges-component>
              </div>
          <div class="mt-6 flex items-center w-full">
            
            <div class="flex-shrink-0">
              <!-- <a href="#"> -->
                <span class="sr-only">{{project.attributes.client_name}}</span>
                <img class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
              <!-- </a> -->
            </div>
            <div class="ml-3 w-full truncate">
              <p class="text-sm font-medium text-gray-900">
                <!-- <a href="#" class="hover:underline"> -->
                  {{project.attributes.client_name}}   ID:  {{project.id}}
                <!-- </a> -->
              </p>
             
            </div>
             <div class="flex justify-end">

            <svg 
            xmlns="http://www.w3.org/2000/svg" class="hover:cursor-pointer text-green-600 mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" @click.prevent="editProject(project)" >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>


            <svg
            
            xmlns="http://www.w3.org/2000/svg" class="hover:cursor-pointer text-red-600 mx-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" @click.prevent="requestDeleteProject(project)">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            
          </div>
          </div>
          
        </div>
      </li>
    </ul>
    <edit-project-component  :editable="editable" :edit-view="editView" @addNewProject="fetchProjects" @closeplease="toggleEditView"></edit-project-component>
    <confirmation-delete-component :project="editable" :is-tryingto-delete="isTryingtoDelete"  @closeplease="requestDeleteProject" @confirm="deleteProject"></confirmation-delete-component>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
  
    data() {
      return {
        usertkn: '',
        projects: [],
        editable:{},
        editView: false,
        projecto: {
          id: null,
              attributes:{
                name: '',
                type: '',
                client_name: '',
                technologies_used: '',
                description: '',
                photo:'',
                }
    },
    isTryingtoDelete: false,
    projectToDelete:{}
      }
    },
    

    created() {
      this.updateUserTkn()
      this.fetchProjects()
    },
    methods: {

      async fetchProjects() {
       
        this.$axios.setToken(this.usertkn, 'Bearer')
        await this.$axios.$get('/api/projects').then(response => {
          this.projects = response.data
          
        }).catch(error => console.log(error))
      },
      updateUserTkn() {
        try {
          this.usertkn = this.$auth.$storage.getCookie('token')
        } catch (e) {
          console.log(e, 'NO HAY TOKEN')
        }
      },
    editProject(project){
      this.editable = project
      this.toggleEditView()
  },
  toggleEditView(){
      this.editView = !this.editView
  },
  deleteProject(){
    this.$axios.$delete('/api/projects/' + this.projectToDelete.id, this.projectToDelete).then(response => {
          console.log(response)
          this.isTryingtoDelete = !this.isTryingtoDelete
          this.fetchProjects()
        }).catch(error => console.log(error))
  },
  requestDeleteProject(project){
    this.isTryingtoDelete = !this.isTryingtoDelete
    this.projectToDelete = project 
    this.editable = project
  },
    },
  }

</script>
