import Vue from 'vue'
const api = require('./../helpers/ajax')
const repoHelper = require('./../helpers/repoHelper')

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
          let snackTrack = repoHelper.formatSnackTrack(response.body)
          if (state.repos.indexOf(snackTrack) === -1) {
            console.log(snackTrack)
            state.repos.push(snackTrack)
          }
        })

    api.
      getIdeaBox().
        then(response => {
          let ideaBox = repoHelper.formatIdeaBox(response.body)
          if (state.repos.indexOf(ideaBox) === -1) {
            console.log(ideaBox)
            state.repos.push(ideaBox)
          }
        })


    // api.
    //   getPivot().
    //     then(response => {
    //       repoHelper.formatPivot(response.body)
    //     })
  }
}

module.exports = mutations
