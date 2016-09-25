<template>
  <div
    :class='itemSlide'
  >
    <div
      class='row
             top-half-repo'
    >
      <div class='col-md-2'></div>

      <div
        class='col-md-10
               inner-repo-container'
      >
        <div
          class='row'
        >
          <div
            class='col-md-2
                   repo-stats'
          >
            <div
              class='row'
            >
              <img
                class='avatar'
                :src='avatarUrl'
              >
              <span
                class='repo-title'
              ><strong>{{ this.repo.name }}</strong></span>
            </div>

            <hr>

            <div
              class='repo-data'
            >
              <p><strong>Created At:</strong> {{ this.repo.createdAt }}</p>
              <p><strong>Updated At:</strong> {{ this.repo.updatedAt }}</p>
              <p><strong>Open Issues:</strong> {{ this.repo.issueCount }}</p>
            </div>

            <hr>

            <div
            >
              <ul>
                <li
                  v-for='t in repo.languages'
                >
                  {{ t }}
                </li>
              </ul>
            </div>

          </div>
          <div class='col-md-1'></div>

          <div
            class='col-md-6
                   repo-image'
            :style='repoImage'
          >
          </div>
        </div>
      </div>

    </div>

    <div
      class='bottom-half-repo
             row'
    >
      <div class='col-md-2'></div>

      <div
        class='col-md-10
               lower-repo-container'
      >

        <div
          class='col-md-4
                 overview'
        >
          <h5>Overview</h5>
          <ul
          >
            <li
              v-for='p in repo.overview'
            >
              {{ p }}
            </li>
          </ul>
        </div>

        <div
          class='col-md-5
                 areas-of-focus'
        >
          <h5>Areas of Focus</h5>
          <ul
          >
            <li
              v-for='a in repo.areasOfFocus'
            >
              {{ a }}
            </li>
          </ul>
        </div>

      </div>
      <div class='col-md-2'></div>

    </div>

  </div>
</template>

<script>
export default {
  props: ['repo'],
  computed: {
    itemSlide() {
      if (this.repo.name === 'SnackTrack') {
        return 'item active repo-container'
      }
      else {
        return 'item repo-container'
      }
    },

    avatarUrl() {
      return this.repo.avatarUrl
    },

    repoImage() {
      if (this.repo.name === 'SnackTrack') {
        return 'background-image: url(./../assets/snacktrack.png);'
      }
      else if (this.repo.name === 'idea_box-idea_box_vue') {
        return 'background-image: url(./../assets/idea_box.png);'
      }
      else {
        return 'background-image: url(./../assets/stay_and_play.png);'
      }
    }
  }
}
</script>

<style>
.repo-container {
  height: 650px;
}

.top-half-repo {
  height: 350px;
}

.top-half-repo ul {
  list-style-type: none;
  font-family: Raleway;
}

.top-half-repo p, h5 {
  font-family: Raleway;
}

.bottom-half-repo {
  margin-top: 25px;
}

.bottom-half-repo h5 {
  text-align: center;
}

.bottom-half-repo ul {
  list-style-type: none;
  font-family: Raleway;
}

.bottom-half-repo li {
  margin-top: 20px;
}

.overview, .tech-stack, .areas-of-focus {
  border: 1px solid hsla(0,0%,4%,.25);
}

.overview {
  margin-right: 27px;
}

.tech-stack {
  margin-left: 15px;
}

.repo-stats {
  border: 1px solid hsla(0,0%,4%,.25);
  border-radius: 12px;
  margin-left: 20px;
  margin-top: 10px;
}

.repo-image {
  height: 350px;
  margin-left: 15px;
}

.avatar {
  height: 50px;
  width: 50px;
  border-radius: 12px;
  margin-left: 10px;
  margin-top: 10px;
}

.repo-title {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 18px;
  font-family: Raleway;
}
</style>
