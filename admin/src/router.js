import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main.vue'
import CategoryEdit from './components/categoryEdit.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/categories/create',
          name: 'categoryCreate',
          component: CategoryEdit
        }
      ]
    }
  ]
})
