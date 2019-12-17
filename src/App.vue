<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href="#" class="navbar-brand">COURSES HISTORY</a>
      </div>
    </nav>
    <div class="container">
      <CourseList :courses="courses"/>
    </div>
  </div>
</template>

<script>
import CourseList from './components/CourseList.vue'
export default {
  name: 'app',
  components: {
    CourseList
  },
  data() {
    return {
      courses: [
        { title: 'Understanding OAuth with Node.js', dueDate: new Date(2019, 0, 15), completed:false },
        { title: 'TypeScript: The Big Picture', dueDate: new Date(2019, 0, 15), completed:true },
        { title: 'Creating Object-oriented TypeScript Code', dueDate: new Date(2020, 0, 15), completed:false },
        { title: 'JavaScript Promises and Async Programming', dueDate: new Date(2020, 3, 15), completed:false },
        { title: 'Creating and Using TypeScript Decorators', completed:false }
      ]
    }
  },
}
</script>

<style>
body{
  font-family: 'Nunito Sans', sans-serif !important;
}
</style>
