<template>
  <div>
    <div class="min-h-screen bg-white">

      <nav-section-component></nav-section-component>

      <main>
        <div>

          <!-- Hero card -->
          <div class="relative">
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div class="absolute inset-0">
                  <img class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="We Do Cool Stuffs">
                  <div class="absolute inset-0 bg-indigo-500" style="mix-blend-mode: multiply;"></div>
                </div>
                <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span class="block text-white">
                      Somos una caja llena de ideas!
                    </span>
                    <span class="block text-indigo-200">¡Ábrela!</span>
                  </h1>
                  <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Somos una compañía enfocada en el desarrollo de soluciones tecnológicas para tu
                    negocio
                    o empresa.
                  </p>
                  <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a v-scroll-to="'#team-section'" href="#"
                        class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                        Conócenos
                      </a>
                      <a v-scroll-to="'#contact-section'" href="#"
                        class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                        Contáctanos
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Logo cloud -->
          <div class="bg-gray-100">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <p class="text-center text-base font-bold uppercase text-gray-600 tracking-wider">
                Llevamos más de
                {{yearsInService}}
                años trabajando de la mano con nuestros clientes, potenciando sus fortalezas mediante medios digitales.
              </p>
              <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-200">
                  <img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Workcation" />
                </div>
                <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-200">
                  <img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-200">
                  <img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-200">
                  <img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                    alt="Laravel" />
                </div>
                <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-200">
                  <img class="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit" />
                </div>
                <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-200">
                  <img class="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                    alt="Statamic" />
                </div>
              </div>
            </div>
          </div>


        </div>

        <div class="bg-white">
          <div class="relative overflow-hidden">

            <main>

              <!-- Feature section with screenshot -->
              <div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
                <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                  <div>

                    <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                      Soluciones tecnólogicas y robustas
                    </p>
                    <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                      ¿Aún no existe la herramienta de software perfecta para tu negocio? ¡Nosotros la construimos!
                    </p>
                  </div>

                  <div class="my-8">
                    <!-- CAROUSEL https://ssense.github.io/vue-carousel/guide/ -->
                    <carousel :autoplay=true :autoplay-hover-pause="true" :pagination-color="'#FADF9F'"
                      :per-page-custom="[[320,1],[600,1],[1024,1],[1440,1]]" :pagination-active-color="'#DA5D10'"
                      :pagination-size="15">

                      <slide v-for="(img, index) in imgs" :key="index"><img
                          class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                          :src="require(`~/assets/photo/wootbitproyects/${img}.png`)" alt=""></slide>


                    </carousel>
                  </div>
                </div>
              </div>

              <!-- START SERVICES SECTION -->
              <services-section-component></services-section-component>
              <!--END SERVICES SECTION-->

              <!-- Testimonial section -->
              <div class="pb-16 bg-gradient-to-r from-red-600 to-yellow-600 lg:pb-0 lg:z-10 lg:relative">
                <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                  <div class="relative lg:-my-8">
                    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
                    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                      <div
                        class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                        <img
                        src="../assets/photo/nicole-wolf.jpg"
                        class="object-cover lg:h-full lg:w-full" alt="">
                        <!-- src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" -->

                      </div>
                    </div>
                  </div>
                  <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                    <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                      <blockquote>
                        <div>
                          <svg class="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32"
                            aria-hidden="true">
                            <path
                              d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p class="mt-6 text-2xl font-medium text-white">
                            Always code as if the guy who ends up maintaining your code will be a violent psychopath who
                            knows where you live
                          </p>
                        </div>
                        <footer class="mt-6">
                          <p class="text-base text-right font-medium text-white">-John Woods</p>
                          <!-- <p class="text-base font-medium text-cyan-100">CEO at
                                                        PureInsights</p> -->
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <!-- PROJECTS SECTION -->
              <projects-section-component :projects="projects"></projects-section-component>
              <!-- END PROJECTS SECTION-->



              <!--TEAM SECTION-->
              <teams-section-component :team="team"></teams-section-component>
              <!--END TEAM SECTION-->


              <!-- CTA Section -->
              <div class="relative bg-gray-900">
                <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                  <img class="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                    alt="">
                  <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                    style="mix-blend-mode: multiply;"></div>
                </div>
                <div
                  class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                  <div class="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                      Soporte 24/7
                    </h2>
                    <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                      La fecha de lanzamiento no significa &#8220;Adiós&#8221;
                    </p>
                    <p class="mt-3 text-lg text-gray-300 text-justify">
                      Contamos con excelente soporte técnico e incluso después de la fecha de lanzamiento de tu proyecto
                      continuaremos colaborando contigo, manteniendote a ti y a tus productos &#8220;online&#8221;.
                    </p>
                    <div class="mt-8">
                      <div class="inline-flex rounded-md shadow">
                        <a href="https://wa.me/527222478613?text=Hola%20Wootbit!"
                          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100">
                          Mándanos un mensaje

                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 text-gray-700 fill-current"
                            fill="current" viewBox="0 0 24 24">
                            <path
                              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <contact-section-component></contact-section-component>

            </main>


          </div>
        </div>
      </main>

      <footer-section-component></footer-section-component>
    </div>


    <!-- Messenger plugin de chat Code -->
    <div id="fb-root"></div>
    <script>
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v10.0'
        });
      };
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    </script>
    <!-- Your plugin de chat code -->
    <div class="fb-customerchat" attribution="biz_inbox" page_id="1044307618963783">
    </div>
  </div>
</template>

<script>
  import {
    Carousel,
    Slide
  } from 'vue-carousel';
  export default {
    auth: false,

    components: {
      Carousel,
      Slide
    },

    data() {
      return {
        actual_year: 2021,
        startYear: 2016,
        clients: ['laravel', 'mirage', 'statamic', 'statickit', 'transistor', 'tuple'],
        team: [{
            photo: 'cmedina.jpg',
            position: 'Desarrollador BackEnd',
            name: 'Chrystopher Medina'
          },
          {
            photo: 'aherrera.jpg',
            position: 'Testing y Desarrollo FrontEnd',
            name: 'Abel  Herrera'
          },
          {
            photo: 'alexrivas.jpeg',
            position: 'Diseñador Gráfico',
            name: 'Alex Rivas'
          }

        ],
        projects: [],
        services: [],
        imgs: ['1-tvnikkenusa', '2-mitiendanikken', '3-porcelanika', '4-residencialavandaro'],
        usertkn: ''
      }
    },
    computed: {
      yearsInService() {
        return this.actual_year - this.startYear
      }
    },
    created() {
      this.updateUserTkn()
      this.fetchProjects()
      this.currentDate()
    },

    methods: {
      async fetchProjects() {

        if (!this.usertkn) {
          this.$axios.setToken(process.env.apiTokenWootbit, 'Bearer')
        } else {
          this.$axios.setToken(this.usertkn, 'Bearer')
        }


        await this.$axios.$get('/api/projects').then(response => {
          this.projects = response.data
        }).catch(error => {
                 if(error.response.status === 401) {
                   this.usertkn = ''
          this.$auth.logout().then(response => {
            console.log(response,'logout')
            this.$auth.$storage.removeLocalStorage('user')
            console.log('user deleted')
            this.$auth.$storage.removeCookie('token', false)
             console.log('user Token deleted')
             location.reload()
          })
          }
        })
      },
      currentDate() {
        const current = new Date();
        const date = current.getFullYear()
        this.actual_year = date
      },
      updateUserTkn() {
        try {
          this.usertkn = this.$auth.$storage.getCookie('token')
        } catch (e) {
          console.log(e, 'No hay Token')
        }
      }
    }
  }

</script>

<style>
  /* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
