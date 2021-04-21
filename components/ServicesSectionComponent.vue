<template>

<!-- COLOR BASE ICONOS #FF5800 -->
    <div>
        <div class="relative bg-white py-16 sm:py-24 lg:py-32" id="services-section">
            <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                        Nuestros Servicios
                    </span>
                </h2>
                <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500 text-justify">
                    Ayudamos a  nuestros clientes a convertir grandes ideas en asombrosas aplicaciones, productos y servicios mediante nuestros servicios digitales.
                </p> 
                <div class="mt-24">
                    <div class="grid grid-cols-1 gap-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="pt-6">
                            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8 border-2 border-indigo-400">
                                <div class="-mt-24">
                                    <div>
                        <span
                            class="inline-flex items-center justify-center p-3 to-cyan-600 rounded-md shadow-lg bg-gray-100">
                          <!-- Heroicon name: outline/cloud-upload -->
                          <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                          </svg> -->
                          <img src="../assets/svg/web.svg" class="w-40 h-32 hover:w-36 hover:h-28">
                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight h-10">Desarrollo de sistemas web</h3>
                                    <p class="mt-5 text-base text-gray-500 h-16">
                                        Contamos con la experiencia necesaria para contruir tu próximo sitio web usando tecnológias modernas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8 border-2 border-indigo-400">
                                <div class="-mt-24">
                                    <div>
                        <span
                            class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gray-100">
                          <!-- Heroicon name: outline/lock-closed -->
                          <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                          </svg> -->
                          <img src="../assets/svg/app.svg" class="w-40 h-32 hover:w-36 hover:h-28">
                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight h-10">Desarrollo de aplicaciones móviles</h3>
                                    <p class="mt-5 text-base text-gray-500 h-16">
                                        Plasmamos tu idea en una aplicación móvil para plataformas iOS y Android.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8 border-2 border-indigo-400">
                                <div class="-mt-24">
                                    <div>
                        <span
                            class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gray-100">
                          <!-- Heroicon name: outline/refresh -->
                          <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                          </svg> -->
                          <img src="../assets/svg/soporte.svg" class="w-40 h-32 hover:w-36 hover:h-28">
                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight h-10">Excelente Soporte técnico</h3>
                                    <p class="mt-5 text-base text-gray-500 h-16">
                                        Contamos con un excelente soporte que tú y tu producto se merecen; durante y después del lanzamiento de tu producto.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8 border-2 border-indigo-400">
                                <div class="-mt-24">
                                    <div>
                        <span
                            class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gray-100">
                          <!-- Heroicon name: outline/shield-check -->
                          <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                          </svg> -->
                          <img src="../assets/svg/uiux.svg" class="w-40 h-32 hover:w-36 hover:h-28">
                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight h-10">
                                        Diseño UX & UI</h3>
                                    <p class="mt-5 text-base text-gray-500 h-16">
                                        Creamos soluciones intuitivas, simples y amigables para nuestros clientes y para los usuarios finales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8 border-2 border-indigo-400">
                                <div class="-mt-24">
                                    <div>
                        <span
                            class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gray-100">
                          <!-- Heroicon name: outline/cog -->
                          <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg> -->
                          <img src="../assets/svg/branding.svg" class="w-40 h-32 hover:w-36 hover:h-28">
                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight h-10">
                                        Branding</h3>
                                    <p class="mt-5 text-base text-gray-500 h-16">
                                        Creamos y damos valor al diseño de tu marca con una imagen positiva para los consumidores.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6">
                            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8 border-2 border-indigo-400">
                                <div class="-mt-24">
                                    <div>
                        <span
                            class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gray-100">
                          <!-- Heroicon name: outline/server -->
                          <!-- <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                          </svg> -->
                          <img src="../assets/svg/data.svg" class="w-40 h-32 hover:w-36 hover:h-28">
                        </span>
                                    </div>
                                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight h-10">
                                       Campañas dígitales.</h3>
                                    <p class="mt-5 text-base text-gray-500 h-16">
                                        Creamos campañas digitales en difirentes canales para potenciar el alcance de tu producto y que éste llegue a los clientes ideales. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ServicesSectionComponent"
}
</script>