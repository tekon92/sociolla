<template>
  <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b mb-3">
    <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
      <img :src="company_logo" class="w-10 h-10 object-cover rounded object-top" />
      <div class="flex flex-col pl-4">
        <h2 class="font-medium text-sm">{{ company }}</h2>
        <h3 class="text-gray-500 text-sm">{{ title }}</h3>
      </div>
    </div>
    <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
      <div class="flex flex-col px-4">
        <p class="font-semibold text-sm text-gray-900">Anywhere</p>
        <p class="text-sm text-gray-600 flex items-center">
          <img src="https://image.flaticon.com/icons/svg/64/64113.svg" alt class="h-4 w-4 mr-1" />
          Worldwide
        </p>
      </div>

      <div class="flex flex-col px-4">
        <p class="font-semibold text-sm text-gray-900">100k</p>
        <p class="text-sm text-gray-600 flex items-center">
          <!-- <img src="https://image.flaticon.com/icons/svg/64/64113.svg" alt class="h-4 w-4 mr-1" /> -->
          full-time
        </p>
      </div>
    </div>
    <div class="flex w-3/5 md:w/12">
      <div class="w-1/2 px-4 flex items-center justify-end">
        <a
          class="py-1 px-2 bg-gray-600 text-gray-100 text-sm rounded hover:bg-gray-500 ml-2 inline sm:flex-col"
          href="#"
          v-for="tag in tags"
          :key="tag.id"
        >{{ tag }}</a>
      </div>
      <div class="w-1/2 px-4 text-right">
        <button
          class="bg-indigo-500 hover:bg-blue-700 items-center rounded ml-auto py-2 px-6 text-white"
        >Apply</button>
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
    tags: Array
  }
}
</script>

<style>
</style>
