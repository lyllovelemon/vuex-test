import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import watch from '../components/watch/index';
import drag from '../components/drag/index';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'watch',
      component:watch
    },
    {
      path:'drag',
      name:'drag',
      component:drag
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },

  ]
})
