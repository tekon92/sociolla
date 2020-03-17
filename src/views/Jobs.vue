<template>
  <div class="overflow-auto flex-grow">
    <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
      <!-- <input type="checkbox" /> -->
      <div class="flex ml-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          class="w-10 h-10 object-cover rounded object-top"
        />
        <div class="flex flex-col pl-4">
          <h2 class="font-medium text-sm">Google.com</h2>
          <h3 class="text-gray-500 text-sm">Management Consultant</h3>
        </div>
      </div>
      <!-- <div class="flex" v-for="tag in 3" :key="tag.id">
          <a
            class="px-1 bg-gray-600 text-gray-100 text-sm rounded hover:bg-gray-500 ml-2"
            href="#"
          >Design</a>
        </div> -->
      <button class="bg-indigo-500 hover:bg-blue-700 items-center rounded ml-auto py-2 px-4 text-white">Apply</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jobs'
}
</script>

<style>
</style>
