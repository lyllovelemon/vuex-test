import Vue from 'vue'
import Router from 'vue-router'
import tick from  '../views/tick/index';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'tick',
      component:tick
    }

  ]
})
