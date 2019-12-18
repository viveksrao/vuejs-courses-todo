<template>
  <div class="home">
    <CourseList :courses="courses"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from '@/components/CourseList.vue'

export default {
  name: 'home',
  components: {
    CourseList
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
