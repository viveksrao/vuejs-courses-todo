<template>
  <div class="card mt-3" :class="{'alert-success': course.completed}">
    <div class="card-body">
      <h5 class="card-title">{{ course.title }}</h5>
      <h6 class="card-subtitle" :class="overDueCSS" v-if="course.dueDate && !course.completed">
        <span>{{ dueDateLabel }}:</span>
        {{ formattedDate }}
      </h6>
      <div class="course-controls">
        <button 
          v-if="!course.completed"
          class="btn btn-sm btn-outline-success" 
          @click.prevent="markAsCompleted">Complete</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['course'],
    computed: {
      formattedDate() {
        let dt = this.course.dueDate;
        return dt.getFullYear() + '–' + (dt.getMonth() + 1) + '–' + dt.getDate(); 
      },
      isOverDue() {
        return this.course.dueDate.getTime() < Date.now();
      },
      dueDateLabel() {
        return this.isOverDue ? 'Overdue' : 'Due';
      },
      overDueCSS() {
        return {
          'text-danger': this.isOverDue,
          'text-uppercase': this.isOverDue
        };
      }
    },
    methods: {
      markAsCompleted() {
        this.course.completed = true;
        this.$courses.markAsCompleted(this.course.id);
        this.$emit('course-completed');
      }
    },
  }
</script>

<style scoped>
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