<template>
    <div>
        <header>
            <div class="relative bg-white" id="home-section">
                <div class="flex justify-end items-center max-w-7xl
                            mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">

                    <div class="flex justify-center md:justify-start flex-none md:w-auto w-full place-self-center">
                        <a href="#">
                            <span class="sr-only">logo</span>
                            <img class="hidden lg:block lg:md-12 h-12"
                                 src="../static/letrasWtbt.png" alt="">
                            <img class="lg:hidden w-16 md:w-12 ml-10 md:ml-0  "
                                 src="../static/wootbitiologo.png" alt="">
                        </a>
                    </div>
                    <div class="-mr-2 -my-2 md:hidden">
                        <button type="button"
                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                v-on:click.prevent="isOpen = !isOpen">
                            <span class="sr-only">Open menu</span>
                            <!-- Heroicon name: outline/menu -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>

                    <nav class="hidden md:flex w-full space-x-10 items-center justify-center">
                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex flex-nowrap h-8 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" class="w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                            <span>Inicio</span>
                        </a>

                        <a href="#" v-scroll-to="'#services-section'"
                           class="text-base font-medium text-gray-500 hover:text-gray-900 flex flex-nowrap h-8 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" class="w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                           <span> Servicios</span>
                        </a>


                        <a href="#" v-scroll-to="'#projects-section'" class="text-base font-medium text-gray-500 hover:text-gray-900 flex flex-nowrap h-8 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" class="w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                           <span> Proyectos</span>
                        </a>

                        <a href="#" v-scroll-to="'#team-section'"
                           class="text-base font-medium text-gray-500 hover:text-gray-900 flex flex-nowrap h-8 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" class="w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                           <span> Nosotros</span>
                        </a>

                        <a href="#" v-scroll-to="'#contact-section'"
                           class="text-base font-medium text-gray-500 hover:text-gray-900 flex flex-nowrap h-8 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" class="w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                           <span> Contacto</span>
                        </a>
                    </nav>
                    <div class="hidden md:flex items-center justify-end md:flex-1">
                        <!--                        <a href="#"-->
                        <!--                           class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">-->
                        <!--                            Sign in-->
                        <!--                        </a>-->
                    <a :href="this.isAdmin[0]">
                      <button class="hidden  ml-8 whitespace-nowrap lg:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">{{isAdmin[1]}}</button>
                      <svg class="text-indigo-600 w-6 h-6 lg:hidden" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                     </a>
                    </div>
                </div>

                <!--
                  Mobile menu, show/hide based on mobile menu state.

                  Entering: "duration-200 ease-out"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                  Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                -->
                <transition
                    enter-active-class="transition ease-out duration-200 transform"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95">
                    <div v-show="isOpen"
                         class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div
                            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div class="pt-2 pb-6 px-4">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <img class="h-16 w-auto"
                                             src="../static/wootbitiologo.png"
                                             alt="Workflow">
                                    </div>
                                    <div class="-mr-2">
                                        <button type="button"
                                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        v-on:click.prevent="isOpen = !isOpen">
                                            <span class="sr-only">Close menu</span>
                                            <!-- Heroicon name: outline/x -->
                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <nav class="grid grid-cols-1 gap-7">
                                        <a href="#" v-scroll-to="'#services-section'" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                            <div
                                                class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                                <!-- Heroicon name: outline/inbox -->
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                </svg>
                                            </div>
                                            <div class="ml-4 text-base font-medium text-gray-900">
                                                Servicios
                                            </div>
                                        </a>

                                        <a href="#" v-scroll-to="'#projects-section'" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                            <div
                                                class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                                <!-- Heroicon name: outline/annotation -->
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                </svg>
                                            </div>
                                            <div class="ml-4 text-base font-medium text-gray-900">
                                                Proyectos
                                            </div>
                                        </a>

                                        <a href="#" v-scroll-to="'#team-section'" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                            <div
                                                class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg>
                                            </div>
                                            <div class="ml-4 text-base font-medium text-gray-900">
                                                Nosotros
                                            </div>
                                        </a>

                                        <a href="#" v-scroll-to="'#contact-section'" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                            <div
                                                class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                </svg>
                                            </div>
                                            <div class="ml-4 text-base font-medium text-gray-900">
                                                Contacto
                                            </div>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div class="py-6 px-5">
                                <div class=" hidden grid-cols-2 gap-4">
                                    <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Pricing
                                    </a>

                                    <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Partners
                                    </a>

                                    <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Company
                                    </a>
                                </div>
                                <div class="">
                                    <a :href="this.isAdmin[0]"
                                       class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        {{isAdmin[1]}} 
                                    </a>
                                    <!-- <p class="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?
                                        <a href="#" class="text-gray-900">
                                            Sign in
                                        </a>
                                    </p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "NavSectionComponent",
    data() {
        return {
            isOpen: false,
            isAdmin:[],
        }
    },
    created(){
        this.isThereAnAdmin()
    },
    computed:{
    },
    methods:{
        isThereAnAdmin(){
            if( this.$auth.$storage.getLocalStorage('user')){
                console.log( 'Hola admin',this.$auth.$storage.getLocalStorage('user').name)
                this.isAdmin[0] = '/admin/dashboard'
                this.isAdmin[1]= 'Dashboard'
            }else{
                console.log(this.$auth.$storage.getLocalStorage('user'), 'Hola invitado')
                 this.isAdmin[0] = '/auth/login'
                this.isAdmin[1]= 'Sign in'
            }
            
        }
    }
}
</script>
