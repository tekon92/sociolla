<template>
  <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
      <single-link v-for="link in links" :key="link.id" :name="link.name" :link="link.link" />
      <dropdown-link />
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
  data () {
    return {
      links: [
        { id: 1, link: 'developer', name: 'Developer' },
        { id: 2, link: 'jobs', name: 'Jobs' },
        { id: 2, link: 'register', name: 'Register' },
        { id: 3, link: 'login', name: 'Login' }
      ]
    }
  }
}
</script>

<style>
</style>
