<template>
  <div class="w-9/12">
    <div class="block text-center pb-20">
      <p class="font-rubik font-medium text-center text-primary-color uppercase">Get a remote job</p>
      <h2 class="font-black text-primary-grey uppercase pb-8 text-3xl">You can do anywhere</h2>
    </div>
    <filter-jobs />
    <JobList
      v-for="job in jobs"
      :key="job.id"
      :company="job.company"
      :title="job.title"
      :tags="job.tags"
      :company_logo="job.company_logo"
      :id="job.id"
      :curr_date="job.date"
    />
  </div>
</template>

<script>
import JobList from '@/components/Job/JobList'
import FilterJobs from '@/components/FilterJob'

export default {
  name: 'Jobs',
  components: {
    JobList,
    FilterJobs
  },
  computed: {
    jobs () {
      return this.$store.getters.jobs
      // return this.$store.state.jobs
    }
  },
  created () {
    this.$store.dispatch('fetchJobs')
  }
}
</script>

<style>
</style>
