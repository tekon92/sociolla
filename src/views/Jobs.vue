<template>
  <div class="w-full">
    <JobList
      v-for="job in jobs"
      :key="job.id"
      :company="job.company"
      :title="job.title"
      :tags="job.tags"
      :company_logo="job.company_logo"
    />
  </div>
</template>

<script>
import JobList from '@/components/Job/JobList'
export default {
  name: 'Jobs',
  components: {
    JobList
  },
  computed: {
    jobs () {
      return this.$store.getters.jobs
    }
  }
}
</script>

<style>
</style>
