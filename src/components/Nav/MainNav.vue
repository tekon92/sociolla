<template>
  <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
      <single-link v-for="link in navLink" :key="link.id" :name="link.name" :link="link.link" />
      <dropdown-link v-if="user" />
    </ul>
  </div>
</template>

<script>
import SingleLink from '@/components/Nav/SingleLink'
import DropdownLink from '@/components/Nav/DropdownLink'

export default {
  name: 'MainNav',
  components: {
    SingleLink,
    DropdownLink
  },
  computed: {
    navLink () {
      if (this.user) {
        return [...this.links_1]
      } else {
        return [...this.links_1, ...this.links_2]
      }
    },
    user () {
      return this.$store.state.authentication.user
    }
  },
  data () {
    return {
      links_1: [
        { id: 1, link: 'developer', name: 'Developer' },
        { id: 2, link: 'jobs', name: 'Jobs' },
        { id: 3, link: 'search', name: 'Search' }
      ],
      links_2: [
        { id: 4, link: 'register', name: 'Register' },
        { id: 5, link: 'login', name: 'Login' }
      ]
    }
  }
}
</script>

<style>
</style>
