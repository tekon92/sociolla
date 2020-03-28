<template>
  <div class="flex-grow flex px-6 py-6 text-grey-darker items-center mb-3 justify-between bg-gray-200 shadow-xs">
    <div class="w-4/6 flex items-center">
      <img :src="company_logo" class="w-16 h-16 object-cover rounded object-top" />
      <div class="flex flex-col pl-4">
        <h1 class="font-medium">{{ company }}</h1>
        <h3 class="text-gray-500 text-sm">{{ title }}</h3>
        <h4 class="text-gray-500 text-sm">100K - 250K</h4>
      </div>
    </div>

    <!-- <div class="w-1/6 flex items-center">
      <div class="flex flex-col px-4 text-right">
        <p class="font-semibold text-sm text-gray-900">Anywhere</p>
        <p class="text-sm text-gray-600 flex items-center">
          <img src="https://image.flaticon.com/icons/svg/64/64113.svg" alt class="h-4 w-4 mr-1" />
          Worldwide
        </p>
      </div>
    </div> -->

    <div class="w-2/6 flex items-center">
      <!-- <div class="w-1/2 px-4 flex items-center justify-end">
        <a
          class="py-1 px-2 bg-gray-600 text-gray-100 text-sm rounded hover:bg-gray-500 ml-2 inline sm:flex-col"
          href="#"
          v-for="tag in tags"
          :key="tag.id"
        >{{ tag }}</a>
      </div> -->
      <div class="w-1/2 px-4 text-right">
        <button
          class="bg-indigo-500 hover:bg-blue-700 items-center rounded ml-auto py-2 px-6 text-white"
        ><router-link :to="{ name: 'SingleJob', params: { id: id }}">Apply</router-link></button>
        <!-- <router-link :to="{ name: 'SingleJob', params: { id: id }}">Apply</router-link> -->
      </div>
    </div>

    <div class="w-/6 flex items-center">
      <div class="flex flex-col px-4 text-right">
        <p class="font-semibold text-sm text-gray-900">10d</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobList',
  props: {
    company_logo: String,
    company: String,
    title: String,
    tags: Array,
    id: String
  }
}
</script>

<style>
</style>
