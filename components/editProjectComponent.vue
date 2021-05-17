<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div v-if="editView" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
    aria-modal="true">
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



      <form
        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform md:align-middle sm:w-10/12 lg:w-2/3 max-w-6xl">
        <input class="rounded-md" type="text" readonly :value='`ID: ${project.id}`'>
        <div class="w-full flex mt-4">

          <div class="flex w-full flex-col lg:w-1/2 mx-2">
            <label for="nombre">Nombre</label>
            <input id="nombre" v-model="project.attributes.name" class="rounded-md" type="text">
            <label class="mt-4" for="descripcion">Descripcion</label>
            <textarea id="descripcion" v-model="project.attributes.description" class="rounded-md" type="text"
              rows="5"></textarea>
          </div>
          <div class="grid grid-cols-2 w-full lg:w-1/2 mx-2 gap-1">
            <div class="flex flex-col w-full ">

              <label for="type">Type</label>
              <select id="type" v-model="project.attributes.type" class="rounded-md">
                <option disabled value="">Selecciona tipo</option>
                <option>WebSite</option>
                <option>Photo</option>
                <option>Video</option>
                <option>Mobile App</option>
              </select>
            </div>
            <div class="flex flex-col w-full ">

              <label for="clientName">Client Name</label>
              <input id="clientName" v-model="project.attributes.client_name" class="rounded-md" type="text">
            </div>
            <div class="flex flex-col w-full col-span-2">
              <label for="technologies_used">Technologies Used</label>
              <input id="technologies_used" v-model="project.attributes.technologies_used" class="rounded-md"
                type="text">
            </div>
            <input class="col-span-2 border" type="file" @change="onFileSelected">
            <div class="col-span-2 flex flex-col">
              <label for="link">Link</label>
              <input id="link" v-model="project.attributes.link" class="rounded-md " type="text">
            </div>
          </div>
        </div>
        <error-form-component class="mx-2 rounded-t-md mt-2" :message="errorMessage" :there-are-errors="thereAreErrors" :errors="errors"
          @closeErrors="clearError"></error-form-component>
        <div class="mt-5 sm:mt-6 flex">
          <button type="button"
            class="mx-2 inline-flex justify-center w-2/3 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            @click.prevent="saveChanges(project)">
            Guardar Cambios
          </button>
          <button type="button"
            class="mx-2 inline-flex justify-center w-1/3 rounded-md border border-indigo-500  px-4 py-2 text-base font-medium text-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            @click.prevent="closeit">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
  export default {

    props: {
      editable: {
        type: Object,
        default () {
          return {
            id: null,
            attributes: {
              name: '',
              type: '',
              client_name: '',
              technologies_used: '',
              description: '',
              link: ''
            },
          }
        }
      },
      editView: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        project: {
          id: null,
          attributes: {
            name: '',
            type: '',
            client_name: '',
            technologies_used: '',
            description: '',
            photo: '',
            link: ''
          }
        },
        
            errors: ['one error here', 'one error here', 'one error here', 'one error here', 'one error here'],
            thereAreErrors: false,
            errorMessage: '',
      }
    },
    methods: {
      closeit() {
        this.$emit('closeplease')
        this.clearError()
        this.project.attributes.photo = ''
      },
      onFileSelected(event) {
        this.project.attributes.photo = event.target.files[0]

      },
      clearError(){
     this.errors = []
     this.thereAreErrors = false
   },
      saveChanges() {

        const data = new FormData()
        const json = JSON.stringify({

          name: this.project.attributes.name,
          type: this.project.attributes.type,
          client_name: this.project.attributes.client_name,
          technologies_used: this.project.attributes.technologies_used,
          description: this.project.attributes.description,
          link: this.project.attributes.link
        })
        data.append('id', this.project.id)
        data.append('attributes', json)
        data.append('photo', this.project.attributes.photo)


        // Diferencia entre crear nuevo y editar existente
        if (this.project.id === null) {
          this.$axios.$post("/api/projects", data).then(response => {
            console.log(response)
            this.$emit('addNewProject')
            this.project.attributes.photo = ''
            this.$emit('closeplease')
          }).catch(error => {
            this.thereAreErrors = true
            this.errorMessage= error.response.data.message
            this.errors = error.response.data.errors
          })
        } else {
          data.append('_method', 'PUT')
          this.$axios.$post("/api/projects/" + this.project.id, data).then(response => {
            console.log(response)
            this.$emit('addNewProject')
            this.project.attributes.photo = ''
            this.$emit('closeplease')
          }).catch(error => {
            this.thereAreErrors = true
            this.errorMessage= error.response.data.message
            this.errors = error.response.data.errors
          })
        }

      }
    },
    watch: {
      editable() {
        this.project.id = this.editable.id
        this.project.attributes.name = this.editable.attributes.name
        this.project.attributes.type = this.editable.attributes.type
        this.project.attributes.client_name = this.editable.attributes.client_name
        this.project.attributes.technologies_used = this.editable.attributes.technologies_used
        this.project.attributes.description = this.editable.attributes.description
        this.project.attributes.link = this.editable.attributes.link
      }
    }

  }

</script>
