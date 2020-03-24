<template>
  <div class="md:flex justify-between">
    <div class="py-2 text-center">
      <h3 class="text-gray-500">EXPERIENCE</h3>
      <div class="text-gray-900 font-bold">{{ exp }} Years</div>
    </div>

    <div class="py-2 text-center">
      <h3 class="text-gray-500">SALARY</h3>
      <div class="text-gray-900 font-bold">${{ salary }} yearly</div>
    </div>

    <div class="py-2 text-center">
      <h3 class="text-gray-500">START DATE</h3>
      <div class="text-gray-900 font-bold">18th of July, 2020</div>
    </div>

    <div class="py-2 text-center">
      <h3 class="text-gray-500">LOCATION</h3>
      <div class="text-gray-900 font-bold">Los Angeles, CA</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetails',
  props: {
    exp: Number,
    salary: Number
  }
}
</script>

<style>
</style>
