import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faUndo,
  faStar,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import router from './router'
import storage from './storage';

library.add(faBook, faTrash, faLink, faListUl, faRandom, faUndo, faStar, faEnvelope);

Vue.config.productionTip = false
Vue.prototype.$courses = storage;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
