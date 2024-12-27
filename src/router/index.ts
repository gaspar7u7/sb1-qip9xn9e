import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Simulator from '../views/Simulator.vue'
import Mentors from '../views/Mentors.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/courses', component: Courses },
    { path: '/simulator', component: Simulator },
    { path: '/mentors', component: Mentors },
    { path: '/contact', component: Contact }
  ]
})

export default router