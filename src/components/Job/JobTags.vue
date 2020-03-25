<template>
  <div class="flex flex-wrap bg-gray-200 py-6 justify-start mt-2">
    <a
      class="py-1 px-2 text-gray-100 text-sm rounded ml-2 mt-2 inline sm:flex-col"
      :href="'tags/' + skill"
      v-for="skill in tags"
      :key="skill.id"
      :class="checkColor(skill)"
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
  },
  methods: {
    checkColor (color) {
      return color === 'remote' ? ['bg-red-700', 'hover:bg-red-500'] : ['bg-gray-600', 'hover:bg-gray-500']
    }
  }
}
</script>

<style>
</style>
