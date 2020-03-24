<template>
  <div class="flex flex-wrap bg-gray-200 py-6 justify-start mt-2">
    <a
      class="py-1 px-2 bg-gray-600 text-gray-100 text-sm rounded hover:bg-gray-500 ml-2 mt-2 inline sm:flex-col"
      href="#"
      v-for="skill in tags"
      :key="skill.id"
    >{{ skill }}</a>
    <!-- <a
          class="py-1 px-2 bg-blue-300 text-white text-sm rounded hover:bg-indigo-500 ml-2 mt-2 inline sm:flex-col"
          href="#"
    >Remote</a>-->
  </div>
</template>

<script>
export default {
  name: 'JobTags',
  props: {
    tags: Array
  }
}
</script>

<style>
</style>
