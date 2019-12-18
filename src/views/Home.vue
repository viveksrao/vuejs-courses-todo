<template>
  <div class="home">
    <div class="mt-3">
      <div class="text-secondary text-center">
        Welcome back <span class="font-weight-light text-info"></span>
      </div>
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-10 col-md-10 col-lg-8 col-xl-7">
            <h4 class="display-4 text-primary mb-2">Courses Log <font-awesome-icon icon="book"></font-awesome-icon></h4>
            <p class="lead">
              This simple app allows users to add courses and track the status of it by marking it as Complete or Incomplete. 
              It's a good example of a Single Page Application which includes connection to a database and routing. 
              It's a practical way to learn
              <a href="https://vuejs.org/">Vue.js</a>
              with
              <a href="https://firebase.google.com">Firebase</a>.
            </p>
            <router-link class="btn btn-outline-primary mr-2" to="/register">Register</router-link>
            <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>
            <router-link class="btn btn-primary" to="/meetings">Meetings</router-link>
          </div>
        </div>
      </div>
    </div>
    <CourseList :courses="courses"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from '@/components/CourseList.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'home',
  components: {
    CourseList,
    FontAwesomeIcon
  },
  created () {
    this.courses = this.$courses.getCourses();
  },
  data() {
    return {
      courses: []
      // courses: [
      //   { title: 'Understanding OAuth with Node.js', dueDate: new Date(2019, 0, 15), completed:false },
      //   { title: 'TypeScript: The Big Picture', dueDate: new Date(2019, 0, 15), completed:true },
      //   { title: 'Creating Object-oriented TypeScript Code', dueDate: new Date(2020, 0, 15), completed:false },
      //   { title: 'JavaScript Promises and Async Programming', dueDate: new Date(2020, 3, 15), completed:false },
      //   { title: 'Creating and Using TypeScript Decorators', completed:false }
      // ]
    }
  }
}
</script>
