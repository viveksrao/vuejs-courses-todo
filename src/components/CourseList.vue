<template>
  <div class="mt-4">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a 
          href="#" 
          class="nav-link" 
          :class="{'active': filterType === false}" 
          @click.prevent="filterType = false">Incomplete</a>
      </li>
      <li class="nav-item">
        <a 
          href="#" 
          class="nav-link" 
          :class="{'active': filterType === true}"
          @click.prevent="filterType = true">Complete</a>
      </li>
      <li class="nav-item">
        <a 
          href="#" 
          class="nav-link" 
          :class="{'active': filterType === undefined}"
          @click.prevent="filterType = undefined">All</a>
      </li>
    </ul>
    <CourseListItem 
      v-for="(course, index) in filteredCourses" 
      :key="index"
      :course="course"
      @course-completed="filter()"
    />
  </div>
</template>

<script>
  import CourseListItem from "./CourseListItem.vue";
  export default {
    props: ['courses'],
    components:{
      CourseListItem
    },
    data() {
      return {
        filteredCourses: this.courses.filter(course => !course.completed),
        filterType: false
      };
    },
    methods: {
      filter() {
        if(this.filterType === true){
          this.filteredCourses = this.courses.filter(course => course.completed);
        }else if(this.filterType === false){
          this.filteredCourses = this.courses.filter(course => !course.completed);
        }else{
          this.filteredCourses = this.courses;
        }
      }
    },
    watch: {
      filterType(value) {
        this.filter();
      }
    },
  }
</script>

<style scoped>

</style>