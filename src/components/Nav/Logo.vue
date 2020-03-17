<template>
<div class="flex items-center justify-between mb-4 md:mb-0">
      <h1 class="leading-none text-2xl text-grey-darkest">
        <router-link class="no-underline text-grey-darkest hover:text-black" to="/">LOGO</router-link>
      </h1>

      <a class="text-white hover:text-orange md:hidden" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
      </a>
    </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style>
</style>
