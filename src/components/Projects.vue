<template>
  <div>

    <div class="carousel
                slide"
         data-ride='carousel'
         data-interval='false'
         id='repos'
    >
      <ol
        class='carousel-indicators'
      >
        <li data-target="#repos" data-slide-to="0" class="active"></li>
        <li data-target="#repos" data-slide-to="1"></li>
        <li data-target="#repos" data-slide-to="2"></li>
      </ol>


      <div class="carousel-inner"
           role='listbox'
      >

        <repository
          v-for='repo in $store.state.repos'
          :repo='repo'
        >
        </repository>

      </div>

      <a class="left carousel-control" href="#repos" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </a>
      <a class="right carousel-control" href="#repos" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      </a>
    </div>
  </div>
</template>

<script>
import Repository from './Repository.vue'

export default {
  components: {
    Repository
  }
}
</script>

<style>
#projects-container {
  background-image: url('./../assets/projects-background.jpg');
  height: 686px;
}
</style>
