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
                                          Somos una caja llena de ideas!!!!!!!!!
                                        </span>
                                        <span class="block text-indigo-200">¡Ábrela!</span>
                                    </h1>
                                    <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                        Somos una compañía enfocada en el desarrollo de soluciones tecnológicas para tu
                                        negocio
                                        o empresa.
                                    </p>
                                    <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div
                                            class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <a href="#" v-scroll-to="'#team-section'"
                                               class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                                                Conócenos
                                            </a>
                                            <a href="#" v-scroll-to="'#contact-section'"
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
                        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <p class="text-center text-sm font-extrabold tracking-wide uppercase">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-800">
                                    Más de
                                <span v-text="years_in_service"></span>
                                    años generando confianza a nuestros clientes.
                                </span>
                            </p>
                            <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide bg-gradient-to-r from-red-500 to-yellow-500">

                            </p>
                            <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-6 lg:grid-cols-6">
                                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
                                     v-for="(key,client) in clients" :key="client">
                                    <img class="h-10" v-bind:src="'images/clients/' + key + '.png'"
                                         v-bind:alt="key">
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
                                <div
                                    class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                                    <div>
                                        <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                                            Serverless</h2>
                                        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                            No server? No problem.
                                        </p>
                                        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                                            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in
                                            quis quis
                                            nunc,
                                            ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                                        </p>
                                    </div>
                                    <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                                        <img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                                             src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
                                             alt="">
                                    </div>
                                </div>
                            </div>

                            <!-- START SERVICES SECTION -->
                            <services-section-component></services-section-component>
                            <!--END SERVICES SECTION-->

                            <!-- Testimonial section -->
                            <div class="pb-16 bg-gradient-to-r from-green-500 to-indigo-500 lg:pb-0 lg:z-10 lg:relative">
                                <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                                    <div class="relative lg:-my-8">
                                        <div aria-hidden="true"
                                             class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
                                        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                                            <div
                                                class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                                <img class="object-cover lg:h-full lg:w-full"
                                                     src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                                     alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                                        <div
                                            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                                            <blockquote>
                                                <div>
                                                    <svg class="h-12 w-12 text-white opacity-25" fill="currentColor"
                                                         viewBox="0 0 32 32"
                                                         aria-hidden="true">
                                                        <path
                                                            d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                                    </svg>
                                                    <p class="mt-6 text-2xl font-medium text-white">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                                        urna nulla
                                                        vitae
                                                        laoreet augue. Amet feugiat est integer dolor auctor adipiscing
                                                        nunc
                                                        urna,
                                                        sit.
                                                    </p>
                                                </div>
                                                <footer class="mt-6">
                                                    <p class="text-base font-medium text-white">Judith Black</p>
                                                    <p class="text-base font-medium text-cyan-100">CEO at
                                                        PureInsights</p>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- PROJECTS SECTION -->
                                <projects-section-component></projects-section-component>
                            <!-- END PROJECTS SECTION-->



                            <!--TEAM SECTION-->
                            <teams-section-component v-bind:team="team"></teams-section-component>
                            <!--END TEAM SECTION-->


                            <!-- CTA Section -->
                            <div class="relative bg-gray-900">
                                <div
                                    class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                                    <img class="w-full h-full object-cover"
                                         src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                                         alt="">
                                    <div aria-hidden="true"
                                         class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                                         style="mix-blend-mode: multiply;"></div>
                                </div>
                                <div
                                    class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                                    <div class="md:ml-auto md:w-1/2 md:pl-10">
                                        <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                                            Award winning support
                                        </h2>
                                        <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                                            We’re here to help
                                        </p>
                                        <p class="mt-3 text-lg text-gray-300">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus
                                            tellus
                                            etiam
                                            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
                                            Aliquet amet
                                            volutpat
                                            quisque ut interdum tincidunt duis.
                                        </p>
                                        <div class="mt-8">
                                            <div class="inline-flex rounded-md shadow">
                                                <a href="#"
                                                   class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                                                    Visit the help center
                                                    <!-- Heroicon name: solid/external-link -->
                                                    <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path
                                                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                                        <path
                                                            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
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

            <footer-section-component v-bind:actual_year="actual_year"></footer-section-component>
        </div>
    </div>
</template>

<script>
export default {}
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
