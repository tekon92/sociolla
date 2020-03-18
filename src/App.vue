<template>
  <div id="app">
    <Navigation />
    <!-- <filter-jobs v-if="this.$router.currentRoute.name === 'Jobs'" /> -->
    <div class="pt-24">
      <div class="container w-full mx-auto flex justify-center">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Nav/Navigation'
// import FilterJobs from '@/components/FilterJob'

export default {
  name: 'App',
  components: {
    Navigation
    // FilterJobs
  }
}
</script>
<style lang="scss">
</style>
