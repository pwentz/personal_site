const api = require('./../helpers/ajax')

class RepoHelper {
  formatSnackTrack(rawData) {
    this.repoLanguages('snacktrack')
    return {
      'name': rawData.name,
      'avatarUrl': rawData.owner.avatar_url,
      'createdAt': rawData.created_at.split('T')[0],
      'updatedAt': rawData.updated_at.split('T')[0],
      'issueCount': rawData.open_issues,
      'areasOfFocus': this.snackTrackAreasOfFocus(),
      'overview': this.snackTrackOverview(),
      'languages': localStorage.getItem('snacktrack').split(',').slice(0, 3),
      'github': rawData.html_url
    }
  }

  repoLanguages(repo) {
    api.
      getLanguages(repo).
        then(response => {
          localStorage.setItem(
            repo,
            Object.keys(response.body).reduce(this.formatLanguages, '')
          )
        })
  }

  formatLanguages(result, language) {
    return result += `${language},`
  }

  snackTrackAreasOfFocus() {
    return [
      'Twin app architecture using standalone Vue app with external Rails API',
      'Performance optimization',
      'Using Vuex to maintain a single source of data across multiple applications'
    ]
  }

  snackTrackOverview() {
    return [
      'Persistent virtual pantry for generating recipes',
      'Google Log In via pop-up',
      'More features to come'
    ]
  }

  formatIdeaBox(rawData) {
    this.repoLanguages('idea_box-idea_box_vue')
    return {
      'name': rawData.name,
      'avatarUrl': rawData.owner.avatar_url,
      'createdAt': rawData.created_at.split('T')[0],
      'updatedAt': rawData.updated_at.split('T')[0],
      'issueCount': rawData.open_issues,
      'areasOfFocus': this.ideaBoxAreasOfFocus(),
      'overview': this.ideaBoxOverview(),
      'languages': localStorage.getItem('idea_box-idea_box_vue').split(',').slice(0, 3),
      'github': rawData.html_url
    }
  }

  ideaBoxAreasOfFocus() {
    return [
      'Component design',
      'Serving up JSON w/ external Rails API',
      'Front end development without jQuery'
    ]
  }

  ideaBoxOverview() {
    return [
      'Simple CRUD app to keep track of ideas',
      'Ideas stored in Rails app separate from Vue app'
    ]
  }

  formatPivot() {
    console.log(localStorage.getItem('pivot'))
  }
}

module.exports = new RepoHelper()
