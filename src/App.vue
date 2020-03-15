<template>
  <div id="app">
    <Navigation />
    <div class="pt-24">
      <div class="container w-full mx-auto flex justify-center">
      <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Nav/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>
<style lang="scss">
</style>
