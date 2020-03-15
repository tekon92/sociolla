<template>
  <nav class="bg-indigo-600 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
    <div class="flex flex-wrap items-center">
      <logo />
      <search-bar></search-bar>
      <main-nav />
    </div>
  </nav>
</template>

<script>
import MainNav from '@/components/Nav/MainNav'
import SearchBar from '@/components/Nav/SearchBar'
import Logo from '@/components/Nav/Logo'

export default {
  name: 'Navigation',
  components: {
    MainNav,
    SearchBar,
    Logo
  }
}
</script>

<style>
</style>
