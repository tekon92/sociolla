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
    ]
  },
  getters: {
    profiles: state => {
      return state.profiles
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
