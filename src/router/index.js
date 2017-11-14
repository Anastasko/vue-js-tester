import Vue from 'vue'
import Router from 'vue-router'
import Tests from '@/components/Tests'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tests',
      component: Tests
    }
  ]
})
