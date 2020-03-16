<template>
  <div class="container mx-auto h-screen py-16 px-8 relative">
    <div class="block text-center pb-24">
      <p class="font-rubik font-medium text-center text-primary-color uppercase">Methodology</p>
      <h2 class="font-black text-primary-grey uppercase pb-8 text-3xl">The Engineering Approach</h2>
      <p class="w-full md:w-2/3 mr-auto ml-auto text-grey-darker text-base">
        More than ever before software defines how we experience the world.
        Businesses in every industry are seeking technology-driven innovation.
        A successful digital transformation requires the right approach to send with the message the expected audience and get the correct response.
        That is why I'm using an engineering approach for digital business.
      </p>
    </div>
    <profile-card
      v-for="profile in profiles"
      :key="profile.id"
      :title="profile.title"
      :name="profile.name"
      :description="profile.description"
      :id="profile.id"
      :avatar="profile.avatar"
    />
  </div>
</template>

<script>
import ProfileCard from '@/components/Profile/ProfileCard'

export default {
  name: 'Profile',
  components: {
    ProfileCard
  },
  computed: {
    profiles () {
      return this.$store.getters.profiles
    }
  },
  data () {
    return {
      // profiles: [
      //   {
      //     id: 1,
      //     name: 'Rian',
      //     description:
      //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias illo expedita vel deleniti. Commodi laudantium ut minima ratione. Magnam dignissimos recusandae, laboriosam aliquam dolore possimus perspiciatis mollitia voluptate nisi.',
      //     avatar: 'http://i.pravatar.cc/300'
      //   },
      //   {
      //     id: 2,
      //     name: 'Qdut',
      //     description:
      //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias illo expedita vel deleniti. Commodi laudantium ut minima ratione. Magnam dignissimos recusandae, laboriosam aliquam dolore possimus perspiciatis mollitia voluptate nisi.',
      //     avatar: 'http://i.pravatar.cc/300'
      //   }
      // ]
    }
  }
}
</script>

<style>
</style>
