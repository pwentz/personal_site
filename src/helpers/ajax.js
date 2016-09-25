import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource)

class Ajax {
  getSnackTrack () {
    return Vue.http.get(
      'https://api.github.com/repos/pwentz/snacktrack'
    )
  }

  getIdeaBox () {
    return Vue.http.get(
      'https://api.github.com/repos/pwentz/idea_box-idea_box_vue'
    )
  }

  getRailsEngine () {
    return Vue.http.get(
      'https://api.github.com/repos/pwentz/rails_engine'
    )
  }
}

module.exports = new Ajax()
