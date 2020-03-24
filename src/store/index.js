import Vue from 'vue'
import Vuex from 'vuex'
import { alert } from './alert.module'
import { authentication } from './authentication.module'
import { users } from './users.module'
import client from 'api-client'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['jobs']
    })
  ],
  modules: {
    alert,
    authentication,
    users
  },
  state: {
    posts: [],
    profiles: [
      {
        id: 1,
        name: 'Rian',
        title: 'Fullstack Developer',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias illo expedita vel deleniti. Commodi laudantium ut minima ratione. Magnam dignissimos recusandae, laboriosam aliquam dolore possimus perspiciatis mollitia voluptate nisi.',
        avatar: 'http://i.pravatar.cc/300'
      },
      {
        id: 2,
        name: 'Qdut',
        title: 'Tableau Developer',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias illo expedita vel deleniti. Commodi laudantium ut minima ratione. Magnam dignissimos recusandae, laboriosam aliquam dolore possimus perspiciatis mollitia voluptate nisi.',
        avatar: 'http://i.pravatar.cc/300'
      }
    ],
    jobs: []
  },
  getters: {
    profiles: state => {
      return state.profiles
    },
    jobs: state => {
      return state.jobs
    },
    jobsById: state => (id) => {
      return state.jobs ? state.jobs.find(job => job.id === id) : null
    }
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    SET_JOBS (state, jobs) {
      state.jobs = jobs
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      return client.fetchPosts().then(posts => commit('SET_POSTS', posts))
    },
    fetchJobs ({ commit }) {
      return client.fetchJobs().then(jobs => commit('SET_JOBS', jobs))
    }
  }
})
