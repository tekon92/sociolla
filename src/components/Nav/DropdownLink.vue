<template>
  <li class="flex-1 md:flex-none md:mr-3">
    <div class="relative inline-block">
      <button @click="myDd" class="text-white bg-indigo-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span class="pr-2">
          <i class="em em-robot_face"></i>
        </span> Hi, {{ user.firstName }}
        <svg
          class="h-3 fill-current inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <div
        id="myDropdown"
        class="dropdownlist absolute bg-indigo-500 text-white right-0 mt-3 p-3 overflow-auto z-30"
        :class="dd"
      >
        <router-link class="p-2 hover:bg-indigo-800 text-white text-sm no-underline hover:no-underline block" to="/dashboard">
          <i class="fa fa-user fa-fw"></i> Dashboard
        </router-link>
        <router-link class="p-2 hover:bg-indigo-800 text-white text-sm no-underline hover:no-underline block" to="/dashboard">
          <i class="fa fa-user fa-fw"></i> Settings
        </router-link>
        <div class="border border-indigo-800"></div>
        <router-link class="p-2 hover:bg-indigo-800 text-white text-sm no-underline hover:no-underline block" to="/login">
          <i class="fa fa-user fa-fw"></i> Logout
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'DropdownLink',
  data () {
    return {
      dd: 'invisible'
    }
  },
  computed: {
    user () {
      return this.$store.state.authentication.user
    }
  },
  methods: {
    myDd () {
      if (this.dd === '') {
        this.dd = 'invisible'
      } else {
        this.dd = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
