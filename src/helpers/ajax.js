import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource)

class Ajax {
  getSnackTrack () {
    return Vue.http.get(
      'https://api.github.com/repos/pwentz/snacktrack'
    )
  }

  getLanguages (repo) {
    return Vue.http.get(
      `https://api.github.com/repos/pwentz/${repo}/languages`
    )
  }

  getIdeaBox () {
    return Vue.http.get(
      'https://api.github.com/repos/pwentz/idea_box-idea_box_vue'
    )
  }

  getPivot () {
    return Vue.http.get(
      'https://api.github.com/repos/yoyo2code/the_pivot'
    )
  }
}

module.exports = new Ajax()
