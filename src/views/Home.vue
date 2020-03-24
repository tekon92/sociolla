<template>
  <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <!--Left Col-->
    <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
      <p class="uppercase tracking-loose w-full">What business are you?</p>
      <h1 class="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
      <p
        class="leading-normal text-2xl mb-8"
      >Sub-hero message, not too long and not too short. Make it just right!</p>

      <button
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      >Subscribe</button>
    </div>
    <!--Right Col-->
    <div class="w-full md:w-3/5 py-6 text-center">
      <img class="w-full md:w-4/5 z-50" src="@/assets/hero.png" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchPosts')
      .then(posts => {
        this.loading = false
      })
  }
}
</script>
