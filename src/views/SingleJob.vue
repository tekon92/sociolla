<template>
  <div class="container w-screen lg:w-4/5">
    <!-- header -->
    <job-header @goBack="goBack" />
    <!-- ttle -->

    <job-title :company_logo="jobs.company_logo" :title="jobs.title" :company="jobs.company" />

    <!-- details -->
    <div class="bg-gray-200 p-6">
      <job-details :exp="jobs.exp" :salary="jobs.salary" />

      <job-tags :tags="jobs.skills" />
    </div>

    <!-- description -->

    <job-description :role_desc="jobs.role_desc" :job_desc="jobs.job_desc" :exp_desc="jobs.exp_desc" />
  </div>
</template>

<script>
import JobDescription from '@/components/Job/JobDescription'
import JobDetails from '@/components/Job/JobDetails'
import JobTags from '@/components/Job/JobTags'
import JobHeader from '@/components/Job/JobHeader'
import JobTitle from '@/components/Job/JobTitle'

export default {
  name: 'SingleJob',
  components: {
    JobDescription,
    JobDetails,
    JobTags,
    JobHeader,
    JobTitle
  },
  data () {
    return {
      jobs: ''
    }
  },
  computed: {},
  methods: {
    goBack () {
      window.history.length > 0 ? this.$router.go(-1) : this.$router.push('/')
    },
    getSingleJob () {
      this.jobs = this.$store.getters.jobsById(this.currentRoute())
    },
    currentRoute () {
      return Number(this.$route.params.id)
    }
  },
  async created () {
    if (this.jobs.length > 0) {
      this.getSingleJob(this.currentRoute)
    } else {
      await this.$store.dispatch('fetchJobs')
      this.getSingleJob(this.currentRoute)
    }
  }
}
</script>

<style>
</style>
