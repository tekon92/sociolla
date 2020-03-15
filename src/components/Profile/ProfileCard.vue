<template>
  <div
    class="pt-5 flex justify-center"
  >
    <div class="lg:w-3/4 bg-white text-gray-800 flex flex-col">
      <div class="p-8 shadow-md relative bg-white">
        <div class="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            class="w-10 h-10 block rounded object-cover object-top"
          />
          <div class="text-indigo-600 font-medium ml-3">Holden Caulfield</div>
          <button
            class="bg-indigo-100 text-indigo-400 ml-auto w-8 h-8 flex items-center justify-center rounded"
          >
            <svg
              stroke="currentColor"
              class="w-4 h-4"
              viewBox="0 0 24 24"
              stroke-width="2.2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
        </div>
        <h1 class="font-medium text-lg mt-6">Contact List</h1>
        <p class="text-gray-600 text-sm">Fingerstache godard blog, cornhole meh hoodie</p>
        <div class="mt-6 flex">
          <button
            class="bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none"
          >View Profile</button>
          <button
            class="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400"
          >Send Message</button>
          <div class="relative ml-auto flex-1 pl-8 sm:block hidden">
            <input
              placeholder="Message"
              type="text"
              class="w-full border rounded border-gray-400 h-full focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
            />
            <svg
              stroke="currentColor"
              class="w-4 h-4 absolute right-0 top-0 mt-3 mr-2 text-gray-500"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    id: Number,
    name: String,
    avatar: {
      type: String,
      default: 'ttp://i.pravatar.cc/300'
    },
    description: String
  }
}
</script>

<style>
</style>
