const LEARN_COURSE_KEY = 'learn-courses';

function generateID(){
  return `_${Math.random().toString(36).substr(2, 9)}`;
}

function saveCourses(courses){
  localStorage.setItem(LEARN_COURSE_KEY, JSON.stringify(courses));
}

function getCourses(){
  let jsonCourseData = localStorage.getItem(LEARN_COURSE_KEY);
  if(!jsonCourseData){
    return [];
  }
  return JSON.parse(jsonCourseData);
}

export default {
  getCourses(){
    let courses = getCourses();
    courses.forEach(value => {
      if(value.dueDate){
        value.dueDate = new Date(value.dueDate);
      }
    });
    return courses;
  },
  addCourse(title, dueDate){
    let course  = {
      id: generateID(),
      title
    };
    if(dueDate){
      let parts = dueDate.split('-');
      course.dueDate = new Date(parts[0], parts[1] - 1, parts[2]);
    }
    let courses = getCourses();
    courses.push(course);
    saveCourses(courses);
  },
  markAsCompleted(id){
    let courses = getCourses();
    let course = courses.find(el => el.id === id);
    course.completed = true;
    saveCourses(courses);
  }
}