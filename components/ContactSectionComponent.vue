<template>
    <div>
        <div class="relative bg-white">
            <div class="lg:absolute lg:inset-0">
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-56 w-full object-cover lg:absolute lg:h-full"
                         src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixqx=jlLmNGkxDS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                         alt="">
                </div>
            </div>
            <div id="contact-section"
                 class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div class="lg:pr-8">
                    <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                                Hagamos Equipo
                            </span>
                        </h2>
                        <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                            ¡Nos encantaría saber de ti!, Envíanos un mensaje para saber más de tu idea de proyecto.
                        </p>
                        <form action="#" method="POST"
                              class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label for="first_name" class="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div class="mt-1">
                                    <input type="text" name="first_name" id="first_name"
                                           autocomplete="given-name"
                                           class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                </div>
                            </div>
                            <div>
                                <label for="email"
                                       class="block text-sm font-medium text-gray-700">Email</label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" autocomplete="email"
                                           class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <div class="flex justify-between">
                                    <label for="company"
                                           class="block text-sm font-medium text-gray-700">Company</label>
                                    <span id="company_description"
                                          class="text-sm text-gray-500">Optional</span>
                                </div>
                                <div class="mt-1">
                                    <input type="text" name="company" id="company"
                                           autocomplete="organization"
                                           class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <div class="flex justify-between">
                                    <label for="phone"
                                           class="block text-sm font-medium text-gray-700">Phone</label>
                                    <span id="phone_description"
                                          class="text-sm text-gray-500">Optional</span>
                                </div>
                                <div class="mt-1">
                                    <input type="text" name="phone" id="phone" autocomplete="tel"
                                           aria-describedby="phone_description"
                                           class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <div class="flex justify-between">
                                    <label for="how_can_we_help"
                                           class="block text-sm font-medium text-gray-700">How
                                        can we help you?</label>
                                    <span id="how_can_we_help_description" class="text-sm text-gray-500">Max. 500 characters</span>
                                </div>
                                <div class="mt-1">
                                        <textarea id="how_can_we_help" name="how_can_we_help"
                                                  aria-describedby="how_can_we_help_description" rows="4"
                                                  class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                                </div>
                            </div>

                            <div class="text-right sm:col-span-2">
                                <button type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactSectionComponent"
}
</script>

