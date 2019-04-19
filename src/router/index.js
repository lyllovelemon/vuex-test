import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import watch from '../views/watch/index';
import drag from '../views/drag/index';
import main from "../views/main";
import tick from  '../views/tick/index';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'tick',
      component:tick
    },
    {
      path:'watch',
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
