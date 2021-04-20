<template>
<div>
    <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32" id="projects-section">
        <div class="relative">
            <div
                class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">

                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                        Proyectos
                    </span>
                </h2>

                <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                    Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in
                    quis quis
                    nunc,
                    ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                </p>
            </div>
            <flickity ref="flickity" :options="flickityOptions"
                class=" flickity mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-1 lg:max-w-7xl py-4 border">

                <div  v-for="project, index in projects" :key="index" class="carousel-cell flex flex-col rounded-lg shadow-lg overflow-hidden w-1/3 px-2 rounded-t-md border border-red-500">
                    <div class="flex-shrink-0 rounded-t-md">
                        <img class="h-48 w-full object-cover rounded-t-md"
                             :src="project.attributes.picture"
                             alt="">
                    </div>
                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-cyan-600">
                                <a href="#" class="hover:underline">
                                   {{project.attributes.type}}
                                </a>
                            </p>
                            <a href="#" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                   {{project.attributes.name}}
                                </p>
                                <p class="mt-3 text-base text-gray-500">
                                    {{project.attributes.description}}
                                </p>
                            </a>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="#">
                                    <span class="sr-only">Roel Aufderehar</span>
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
                                        {{project.attributes.technologies_used}}
                                    </time>
                                    <span aria-hidden="true">
                          &middot;
                        </span>
                                    <span>
                          6 min read
                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

     
            </flickity>
        </div>
    </div>
</div>
</template>

<script>
import Flickity from 'vue-flickity'
export default {
name: "ProjectsSectionComponent",
props:['projects'],
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: false
        // any options from Flickity can be used
      }
    }
  }


}

</script>
