<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container">
          <a href="#" class="navbar-brand">TOUR OF COURSES</a>
          <div class="navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/add">Add New Course</router-link>
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

<style>
body{
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
