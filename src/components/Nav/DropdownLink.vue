<template>
  <li class="flex-1 md:flex-none md:mr-3">
    <div class="relative inline-block">
      <button onclick="toggleDD('myDropdown')" class="drop-button text-white focus:outline-none">
        <span class="pr-2">
          <i class="em em-robot_face"></i>
        </span> Hi, User
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
        class="dropdownlist absolute bg-teal-500 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
      >
        <input
          type="text"
          class="drop-search p-2 text-teal-600"
          placeholder="Search.."
          id="myInput"
          onkeyup="filterDD('myDropdown','myInput')"
        />
        <a
          href="#"
          class="p-2 hover:bg-teal-800 text-white text-sm no-underline hover:no-underline block"
        >
          <i class="fa fa-user fa-fw"></i> Profile
        </a>
        <a
          href="#"
          class="p-2 hover:bg-teal-800 text-white text-sm no-underline hover:no-underline block"
        >
          <i class="fa fa-cog fa-fw"></i> Settings
        </a>
        <div class="border border-teal-800"></div>
        <a
          href="#"
          class="p-2 hover:bg-teal-800 text-white text-sm no-underline hover:no-underline block"
        >
          <i class="fas fa-sign-out-alt fa-fw"></i> Log Out
        </a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'DropdownLink'
}
</script>

<style>
</style>
