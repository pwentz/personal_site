<template>
  <div>

    <div class="orbit"
         role="region"
         aria-label="Top Github Repos"
         data-orbit
    >


      <ul class="orbit-container"
      >
        <button class="orbit-previous">
          Previous Slide
        </button>

        <button class="orbit-next">
          Next Slide
        </button>

        <li
          class='orbit-slide
                 is-active'
        >
          {{ this.repos[0].name }}
        </li>

        <li
          class='orbit-slide'
        >
          {{ this.repos[1].name }}
        </li>

        <li
          class='orbit-slide'
        >
          {{ this.repos[2].name }}
        </li>

        <!-- <li class='orbit-slide -->
        <!--            is-active' -->
        <!-- > -->
        <!-- </li> -->

      </ul>
      <nav class="orbit-bullets">
        <button class="is-active" data-slide="0"></button>
        <button data-slide="1"></button>
        <button data-slide="2"></button>
        <button data-slide="3"></button>
      </nav>
    </div>
  </div>
</template>

<script>
import Repository from './Repository.vue'

export default {
  components: {
    Repository
  },
  props: ['repos'],
  computed: {
    orbitSlide(repo) {
      if (repo.name === 'SnackTrack') {
        return 'orbit-slide is-active'
      }
      else {
        return 'orbit-slide'
      }
    }
  }
}
</script>

<style>
#projects-container {
  background-image: url('./../assets/projects-background.jpg');
  height: 686px;
}
</style>
