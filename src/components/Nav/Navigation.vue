<template>
  <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-indigo-600 text-white">
    <!-- Logo text or image -->
    <Logo />
    <!-- END Logo text or image -->

    <!-- Search field -->
    <!-- <search-bar /> -->
    <!-- END Search field -->

    <!-- Global navigation -->
    <main-nav />
    <!-- END Global navigation -->
  </header>
</template>

<script>
import MainNav from '@/components/Nav/MainNav'
// import SearchBar from '@/components/Nav/SearchBar'
import Logo from '@/components/Nav/Logo'

export default {
  name: 'Navigation',
  components: {
    MainNav,
    // SearchBar,
    Logo
  }
}
</script>

<style>
</style>
