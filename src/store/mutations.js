import Vue from 'vue'
const api = require('./../helpers/ajax')

const mutations = {
  MOUNT_PROJECTS (state) {
    Vue.set(state, 'projectsMounted', true)
  },

  DISMOUNT_PROJECTS (state) {
    Vue.set(state, 'projectsMounted', false)
  },

  MOUNT_BACKGROUND (state) {
    Vue.set(state, 'backgroundMounted', true)
  },

  DISMOUNT_BACKGROUND (state) {
    Vue.set(state, 'backgroundMounted', false)
  },

  LOAD_REPOS (state) {
    api.
      getSnackTrack().
        then(response => {
          if (state.repos.indexOf(response.body) === -1) {
            state.repos.push(response.body)
          }
        })

    api.
      getIdeaBox().
        then(response => {
          if (state.repos.indexOf(response.body) === -1) {
            state.repos.push(response.body)
          }
        })

    api.
      getRailsEngine().
        then(response => {
          if (state.repos.indexOf(response.body) === -1) {
            state.repos.push(response.body)
          }
        })
  }
}

module.exports = mutations
