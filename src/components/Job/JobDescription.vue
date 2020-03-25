<template>
  <div class="bg-gray-200 px-6 py-6 mt-2">
    <div class="text-gray-600">Posted 1 Week ago</div>
    <h3 class="font-bold my-5">Role Overview</h3>
    <div v-html="role_desc"></div>
    <h3 class="font-bold my-5">What you'll be doing</h3>
    <div v-html="job_desc"></div>
    <h3 class="font-bold my-5">We are looking for someone with the following experience:</h3>

    <div v-html="exp_desc"></div>
    <h3 class="font-bold my-5">This is a remote position.</h3>
    <p>This is a salaried role. In addition, Oddball offers a tech, and a continuing education stipend.</p>
  </div>
</template>

<script>
export default {
  name: 'JobDescription',
  props: {
    role_desc: String,
    job_desc: String,
    exp_desc: String
  }
}
</script>

<style>
</style>
