import Vue from 'vue'
import VueRouter from 'vue-router'
import ImageConverter from '../components/ImageConverter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ImageConverter',
    component: ImageConverter
  },
]

const router = new VueRouter({
  routes
})

export default router
