import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    jobs: [
      {
        id: 1,
        title: 'Fullstack Developer',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias illo expedita vel deleniti. Commodi laudantium ut minima ratione. Magnam dignissimos recusandae, laboriosam aliquam dolore possimus perspiciatis mollitia voluptate nisi.',
        date_posted: '2020-03-20',
        tags: ['remote', 'work', 'js'],
        skills: ['js', 'frontend', 'backend'],
        company: 'google.com',
        company_logo: 'https://randomuser.me/api/portraits/women/44.jpg',
        exp: 3,
        salary: 50000,
        hours: 40
      },
      {
        id: 2,
        title: 'iOS Developer',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias illo expedita vel deleniti. Commodi laudantium ut minima ratione. Magnam dignissimos recusandae, laboriosam aliquam dolore possimus perspiciatis mollitia voluptate nisi.',
        date_posted: '2020-03-20',
        tags: ['remote', 'work', 'js'],
        skills: ['js', 'frontend', 'backend'],
        company: 'Apple',
        company_logo: 'https://randomuser.me/api/portraits/women/44.jpg',
        exp: 3,
        salary: 50000,
        hours: 40
      }
    ]
  },
  getters: {
    profiles: state => {
      return state.profiles
    },
    jobs: state => {
      return state.jobs
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
