<template>
  <div class="about mt-4">
    <div class="form-group">
      <label for="course-title">Course Title</label>
      <input type="text" class="form-control" id="course-title" v-model="title">
    </div>
    <div class="form-group">
      <label for="due-date">Due Date</label>
      <input type="date" class="form-control" id="due-date" v-model="dueDate">
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click.prevent="addCourse">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      dueDate: ''
    }
  },
  methods: {
    addCourse() {
      this.$courses.addCourse(this.title, this.dueDate);
      this.$router.push('/');
    }
  },
}
</script>
