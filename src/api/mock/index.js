import posts from './data/posts'
// import jobs from './data/jobs'
import jobs from './data/jobs_remote_io'

const fetch = (mockData, time = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchPosts () {
    return fetch(posts, 100)
  },
  fetchJobs () {
    return fetch(jobs, 100)
  }
}
