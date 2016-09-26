<template>
  <div
  >

    <nav
      class='navbar
             nav-bar
             navbar-default'
    >

      <ul
        class='nav
               navbar-right
               navbar-nav'
      >

        <li>
          <a href='#'
             class='menu-item'
             v-on:click='mountProjects'
          >
            Projects
          </a>
        </li>

        <li>
          <a href='#'
             class='menu-item'
             v-on:click='mountBackground'
          >
            Background
          </a>
        </li>

        <li>
          <a href='https://www.linkedin.com/in/patrick-wentz-19a474bb'
             target='_blank'
             class='menu-item'
          >
            <i class='fi-social-linkedin'></i>
          </a>
        </li>

        <li>
          <a href='https://www.github.com/pwentz'
             target='_blank'
             class='menu-item'
          >
            <i class='fi-social-github'></i>
          </a>
        </li>

      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  props: ['mountProjects', 'mountBackground']
}
</script>

<style>
.nav-bar {
  height: 65px;
  background-color: #99ff99;
  margin-bottom: 0px;
  opacity: 0.8;
}
.menu-item, .menu-item:hover {
  color: black;
  margin-right: 50px;
  margin-top: 10px;
}
</style>
