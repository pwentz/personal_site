<template>
  <div class='home-background'>
    <div
      class='row'
    >
      <div
        class='col-md-6
               type-container'
      >
        <div class='filler'></div>
        <h1>Hey, I'm Pat.</h1>
        <h1>I'm a full stack web developer.</h1>
      </div>

      <div
        class='nav-container
               col-md-6'
      >
        <div class='nav-filler'></div>
        <div
          class='row'
        >

          <div class='col-md-4'></div>

          <div
            class='col-md-4'
          >
            <a
              href='#'
            >
              Background
            </a>
          </div>

        </div>

        <div class='small-filler'></div>

        <div
          class='row'
        >
          <div class='col-md-4'></div>

          <div
            class='col-md-4'
          >
            <a
              href='#'
            >
              Code
            </a>
          </div>


        </div>

        <div class='small-filler'></div>

        <div
          class='row
                 social-container'
        >
          <div class='col-md-4'></div>

          <div
            class='col-md-4'
          >
            <a href='https://www.github.com/pwentz'
               target='_blank'
               class='menu-item'
            >
              <i class='fi-social-github large'></i>
            </a>

            <a href='https://www.linkedin.com/in/patrick-wentz-19a474bb'
               target='_blank'
               class='menu-item'
            >
              <i class='fi-social-linkedin large'></i>
            </a>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.home-background {
  margin-top: 0px;
  height: 862px;
  z-index: -1;
}
.filler {
  height: 350px;
}
.type-container h1 {
  font-family: 'Asap', sans-serif;
  font-weight: 800;
  font-size: 52px;
  margin-left: 10px;
}
.nav-container {
  text-align: center;
}
.nav-filler {
  height: 200px;
}
.small-filler {
  height: 75px;
}
</style>
