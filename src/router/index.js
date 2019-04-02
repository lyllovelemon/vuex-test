import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Dialog from '../components/dialog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'dialog',
      component:Dialog
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },

  ]
})
