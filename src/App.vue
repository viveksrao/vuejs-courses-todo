<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href="#" class="navbar-brand">COURSES TODO</a>
      </div>
    </nav>
    <div class="container">
      <div class="card mt-3" v-show="!course.completed" v-for="(course, index) in courses" :key="index">
        <div class="card-body">
          <h5 class="card-title">{{ course.title }}</h5>
          <h6 class="card-subtitle text-danger" v-if="course.dueDate">
            <span v-show="course.dueDate.getTime() < Date.now()">Overdue:</span>
            {{ course.dueDate }}
          </h6>
          <div class="course-controls">
            <button class="btn btn-sm btn-outline-success" @click.prevent="course.completed = true">Complete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      courses: [
        { title: 'Understanding OAuth with Node.js', dueDate: new Date(2019, 0, 15), completed:false },
        { title: 'TypeScript: The Big Picture', dueDate: new Date(2019, 0, 15), completed:false },
        { title: 'Creating Object-oriented TypeScript Code', dueDate: new Date(2020, 0, 15), completed:false },
        { title: 'JavaScript Promises and Async Programming', dueDate: new Date(2020, 0, 15), completed:false },
        { title: 'Creating and Using TypeScript Decorators', completed:false }
      ]
    }
  },
}
</script>

<style>
.card .course-controls{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  visibility: hidden;
}
.card:hover .course-controls{
  visibility: visible;
}
</style>
