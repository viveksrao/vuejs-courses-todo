<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand">TOUR OF COURSES</router-link>
          <div class="navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/add">Add New Course</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/register">Register</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
}
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
body{
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
