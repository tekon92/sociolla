<template>
  <div class="md:flex bg-white rounded-lg p-6 bg-gray-200 mb-2">
    <img
      class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
      :src="company_logo"
    />
    <div class="text-center md:text-left w-full">
      <h1 class="text-lg font-bold">{{ title }}</h1>
      <div class="text-gray-600">{{ company }}</div>
      <div class="flex justify-between items-center">
        <button
          class="bg-indigo-500 hover:bg-indigo-700 text-sm text-white font-thin py-2 px-4 rounded-md mt-3"
        >Apply Now</button>
        <div class="text-white">
          <button
            class="bg-indigo-500 hover:bg-indigo-700 text-sm text-white font-thin py-2 px-2 rounded-md mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="fill-current text-white"
            >
              <path
                class="heroicon-ui"
                d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
              />
            </svg>
          </button>
          <button
            class="bg-indigo-500 hover:bg-indigo-700 text-sm text-white font-thin py-2 px-2 rounded-md mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="fill-current text-white"
            >
              <path
                class="heroicon-ui"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobTitle',
  props: {
    title: String,
    company_logo: String,
    company: String
  }
}
</script>

<style>
</style>
