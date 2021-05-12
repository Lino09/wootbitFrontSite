<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div v-if="editView" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

  
    
    <form class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform md:align-middle sm:w-10/12 lg:w-2/3 max-w-6xl">
     <input class="rounded-md" type="text" readonly :value='`ID: ${project.id}`'>
     <div class="w-full flex mt-4">

      <div class="flex w-full flex-col lg:w-1/2 mx-2">
        <label for="nombre">Nombre</label>
        <input class="rounded-md" id="nombre" type="text" v-model="project.attributes.name">
        <label class="mt-4" for="descripcion">Descripcion</label>
        <textarea class="rounded-md" id="descripcion" type="text" rows="4" v-model="project.attributes.description" ></textarea>
      </div>
      <div class="grid grid-cols-2 w-full lg:w-1/2 mx-2 gap-1">
      <div class="flex flex-col w-full ">

        <label for="type">Type</label>
        <select class="rounded-md" id="type" v-model="project.attributes.type">
          <option disabled value="">Selecciona tipo</option>
          <option>WebSite</option>
          <option>Photo</option>
          <option>Video</option>
          <option>Mobile App</option>
        </select>
      </div>
      <div class="flex flex-col w-full ">
        
        <label for="clientName">Client Name</label>
        <input class="rounded-md" id="clientName" type="text" v-model="project.attributes.client_name">
      </div>
      <div class="flex flex-col w-full col-span-2">
        
        <label for="technologies_used">Technologies Used</label>
        <input class="rounded-md" id="technologies_used" type="text" v-model="project.attributes.technologies_used">
      </div>
      <input class="col-span-2" type="file" @change="onFileSelected">
      </div>
       
     </div>
       
      <div class="mt-5 sm:mt-6 flex">
        <button @click.prevent="saveChanges(project)" tupe="button" class="mx-2 inline-flex justify-center w-2/3 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
          Guardar Cambios
        </button>
        <button @click.prevent="closeit" tupe="button" class="mx-2 inline-flex justify-center w-1/3 rounded-md border border-indigo-500  px-4 py-2 text-base font-medium text-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</div>

</template>

<script>

export default {
  
    props:{
        editable:{
            default:{
              id: null,
              attributes:{
                name: '',
                type: '',
                client_name: '',
                technologies_used: '',
                description: '',
              }
            }
        },
        editView:{
            type: Boolean,
            default:false
        } 
    },

    data(){
      return{
        project: {
          id: null,
              attributes:{
                name: '',
                type: '',
                client_name: '',
                technologies_used: '',
                description: '',
                photo:'',
                }
    }
    }
    },
    methods:{
        closeit(){
            this.$emit('closeplease')
        },
        onFileSelected(event){
          this.project.attributes.photo = event.target.files[0]

        },
        saveChanges(){
         
         const data = new FormData()
         const json = JSON.stringify({
           
           name: this.project.attributes.name,
           type: this.project.attributes.type,
           client_name: this.project.attributes.client_name,
           echnologies_used: this.project.attributes.technologies_used,
           description: this.project.attributes.description
         })
        
         data.append('data', json)
         data.append('json/photo', this.project.attributes.photo)
         for (const value of data.values()) {
   console.log(value);
}
         // Diferencia entre crear nuevo y editar existente
        if(this.project.id === null){
          this.$axios.$post("/api/projects", data).then(response=>{
            console.log(response)
            this.$store.commit('updateNewProject', this.project)
            this.$emit('addNewProject')
          }).catch(error=>console.log(error)).finally( ()=> this.$emit('closeplease'))
        }else{
           this.$axios.$put("/api/projects/" + this.project.id, data).then(response=> {
             console.log(response)
             
             }).catch(error=>console.log(error)).finally( ()=> this.$emit('closeplease'))
        }

        }
    },
    watch:{
      editable(){
        this.project.id = this.editable.id
        this.project.attributes.name  = this.editable.attributes.name
        this.project.attributes.type  = this.editable.attributes.type
        this.project.attributes.client_name  = this.editable.attributes.client_name
        this.project.attributes.technologies_used  = this.editable.attributes.technologies_used
        this.project.attributes.description  = this.editable.attributes.description
      }
    }

}
</script>