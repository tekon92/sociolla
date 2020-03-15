<template>
  <li class="flex-1 md:flex-none md:mr-3">
    <router-link class="inline-block py-2 px-4 text-white no-underline" :to="link">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'SingleLink',
  props: {
    name: String,
    link: String
  }
}
</script>

<style>
</style>
