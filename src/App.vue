<template>
  <div id="app"
  >
    <nav-bar
      :mountProjects='handleProjectsScroll'
      :mountBackground='handleBackgroundScroll'
    >
    </nav-bar>

    <projects
      v-if='projectsMounted'
    >
    </projects>

    <background
      v-if='backgroundMounted'
    >
    </background>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Projects from './components/Projects.vue'
import Background from './components/Background.vue'

export default {
  components: {
    NavBar,
    Projects,
    Background
  },

  vuex: {
    getters: {
      projectsMounted: state => state.projectsMounted,
      backgroundMounted: state => state.backgroundMounted,
      repos: state => state.repos
    }
  },

  mounted() {
    this.$store.dispatch('LOAD_REPOS')
    console.log(this.repos)
  },

  methods: {
    handleProjectsScroll() {
      this.$store.dispatch('DISMOUNT_BACKGROUND')
      this.$store.dispatch('MOUNT_PROJECTS')
      console.log(this.repos)
    },

    handleBackgroundScroll() {
      this.$store.dispatch('DISMOUNT_PROJECTS')
      this.$store.dispatch('MOUNT_BACKGROUND')
    },

    handleScroll() {
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  background-attachment: fixed;

}
</style>
