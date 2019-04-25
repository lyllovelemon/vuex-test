import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'tick',
      component:()=>import('../views/tick/index'),
      meta:{
        title:'nextTick实现'
      }
    },
    {
      path:'/drag',
      component:()=>import('../views/drag/index'),
      meta:{
        title:'拖拽实现'
      }
    },
    {
      path:'/page',
      component:()=>import('../views/pagination/index'),
      meta:{
        title:'分页'
      }
      
    }

  ]
})
