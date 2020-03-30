<template>
  <div class="container w-screen lg:w-4/5">
    <!-- header -->
    <job-header @goBack="goBack" />
    <!-- ttle -->

    <job-title
      :company_logo="jobs.company_logo"
      :title="jobs.title"
      :company="jobs.company"
      :url="jobs.url"
    />

    <!-- details -->
    <div class="bg-gray-200 p-6">
      <job-details :exp="jobs.exp" :salary="jobs.salary" />

      <job-tags :tags="jobs.tags" />
    </div>

    <job-description>
      <h3 class="font-bold my-5" v-if="jobs.role_desc">Role Overview</h3>
      <div v-html="jobs.role_desc"></div>
      <h3 class="font-bold my-5" v-if="jobs.job_desc">What you'll be doing</h3>
      <div v-html="jobs.job_desc"></div>
      <h3 class="font-bold my-5" v-if="jobs.exp_desc">We are looking for someone with the following experience:</h3>
      <div v-html="jobs.exp_desc"></div>
      <h3 class="font-bold my-5">Description:</h3>
      <div v-html="jobs.description"></div>
    </job-description>
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
      // return Number(this.$route.params.id)
      return this.$route.params.id
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
