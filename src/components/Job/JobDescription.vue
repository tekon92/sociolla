<template>
  <div class="bg-gray-200 px-6 py-6 mt-2">
    <div class="text-gray-600">Posted 1 Week ago</div>
    <slot></slot>
    <h3 class="font-bold my-5">This is a remote position.</h3>
    <p>This is a salaried role. In addition, Oddball offers a tech, and a continuing education stipend.</p>
  </div>
</template>

<script>
export default {
  name: 'JobDescription'
}
</script>

<style>
</style>
