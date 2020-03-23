<template>
  <div class="container xs:w-full lg:w-11/12 flex justify-between h-screen">
    <div class="w-2/6 flex flex-col overflow-y-auto">
      <!-- <div class="block text-center pb-20">
      <p class="font-rubik font-medium text-center text-primary-color uppercase">Get a remote job</p>
      <h2 class="font-black text-primary-grey uppercase pb-8 text-3xl">You can do anywhere</h2>
      </div>-->
      <!-- <filter-jobs /> -->
      <JobList
        v-for="job in jobs"
        :key="job.id"
        :company="job.company"
        :title="job.title"
        :tags="job.tags"
        :company_logo="job.company_logo"
        class="hover:bg-gray-300"
      />
    </div>

    <div class="w-screen lg:w-3/5 flex flex-col overflow-auto">

      <!-- next  -->

      <div class="md:flex bg-white rounded-lg p-6 bg-gray-200 mb-2">
        <img
          class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
          src="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <div class="text-center md:text-left w-full">
          <h1 class="text-lg font-bold">Product Store for Apple in Los Angeles</h1>
          <div class="text-gray-600">Apple</div>
          <div class="flex justify-between items-center">
            <button
              class="bg-indigo-500 hover:bg-indigo-700 text-sm text-white font-thin py-2 px-4 rounded-md mt-3"
            >Apply Now</button>
            <div class="text-white">
              <button
                class="bg-indigo-500 hover:bg-indigo-700 text-sm text-white font-thin py-2 px-2 rounded-md mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="fill-current text-white"
                >
                  <path
                    class="heroicon-ui"
                    d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
                  />
                </svg>
              </button>
              <button
                class="bg-indigo-500 hover:bg-indigo-700 text-sm text-white font-thin py-2 px-2 rounded-md mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="fill-current text-white"
                >
                  <path
                    class="heroicon-ui"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- section 2 -->

      <div class="bg-gray-200 p-6">
        <div class="md:flex justify-between">
          <div class="py-2 text-center">
            <h3 class="text-gray-500">EXPERIENCE</h3>
            <div class="text-gray-900 font-bold">3 - 5 Years</div>
          </div>

          <div class="py-2 text-center">
            <h3 class="text-gray-500">SALARY</h3>
            <div class="text-gray-900 font-bold">$20,000 to $100.000 yearly</div>
          </div>

          <div class="py-2 text-center">
            <h3 class="text-gray-500">START DATE</h3>
            <div class="text-gray-900 font-bold">18th of July, 2020</div>
          </div>

          <div class="py-2 text-center">
            <h3 class="text-gray-500">LOCATION</h3>
            <div class="text-gray-900 font-bold">Los Angeles, CA</div>
          </div>
        </div>

        <div class="md:flex bg-gray-200 py-6 justify-start mt-2">
          <a
            class="py-1 px-2 bg-gray-600 text-gray-100 text-sm rounded hover:bg-gray-500 ml-2 inline sm:flex-col"
            href="#"
          >Javascript</a>

          <a
            class="py-1 px-2 bg-gray-600 text-gray-100 text-sm rounded hover:bg-gray-500 ml-2 inline sm:flex-col"
            href="#"
          >SQL</a>

          <a
            class="py-1 px-2 bg-gray-600 text-gray-100 text-sm rounded hover:bg-gray-500 ml-2 inline sm:flex-col"
            href="#"
          >React</a>

          <a
            class="py-1 px-2 bg-gray-600 text-gray-100 text-sm rounded hover:bg-gray-500 ml-2 inline sm:flex-col"
            href="#"
          >Frontend</a>
          <a
            class="py-1 px-2 bg-blue-300 text-white text-sm rounded hover:bg-indigo-500 ml-2 inline sm:flex-col"
            href="#"
          >Remote</a>
        </div>
      </div>

      <!-- section 3 -->

      <div class="bg-gray-200 px-6 py-6 mt-2 overflow-scroll h-64">
        <div class="text-gray-600">Posted 1 Week ago</div>
        <h3 class="font-bold my-5">Role Overview</h3>
        <p>Oddball believes that the best products are built when teams understand and value the things they are working on. We value learning and growth and the ability to make a big impact at a small company. We believe that we can make big changes happen and improve the daily lives of millions of people by bringing quality software to the federal space.</p>

        <p>We are looking for an experienced Program Manager to oversee and build a major program and initiative within the Federal space.</p>

        <p>You can expect top-of-the-market pay, flexible hours, and a balanced work week.</p>

        <h3 class="font-bold my-5">What you'll be doing</h3>

        <p>Working hand in hand with our engineering, leadership and government partners to oversee all things pertinent to the successful implementation and delivery of a major government initiative. You’ll work on everything from financial oversight, personnel management, delivery timelines, internal and external documentation, client relations, etc., to ensure the delivery, scope and quality of the entire program is on schedule and running effectively and efficiently.</p>

        <h3 class="font-bold my-5">We are looking for someone with the following experience:</h3>

        <ul class="list-disc px-5">
          <li>Personnel Management: Experience staffing, growing and leading successful and driven teams</li>
          <li>Client facing experience: Extensive client and vendor interaction with a history of satisfied customers and long term relationships</li>
          <li>Systems Management: Ability organize and bring together technology, people, venders, management, etc. to tackle complex and multi-level business problems</li>
          <li>Implementation: Ability to implement both short and long term strategic initiatives to meet, maintain and exceed goals</li>
          <li>Financial management: Extensive finance expertise, experience with large-budget oversight, the ability to forecast revenue, and make impactful, data-driven decisions based on findings</li>
          <li>Technical competency: Ability to interface, understand, and oversee technical teams and projects</li>
        </ul>
        <h3 class="font-bold my-5">This is a remote position.</h3>
        <p>This is a salaried role. In addition, Oddball offers a tech, and a continuing education stipend.</p>
      </div>
    </div>
  </div>
</template>

<script>
import JobList from '@/components/Job/JobList'
// import FilterJobs from '@/components/FilterJob'

export default {
  name: 'SearchJob',
  components: {
    JobList
    // FilterJobs
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
