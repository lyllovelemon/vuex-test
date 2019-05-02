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
      path:'/demo',
      component:()=>import('../views/demo/index'),
      meta:{
        title:'vue官网实例'
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
      
    },
    {
      path:'/directive',
      component:()=>import(`../views/directive/index`),
      meta:{
        title:'vue自定义指令'
      }
    },
    {
      path:'/for',
      component:()=>import(`../views/for/index`),
      meta:{
        title:'二维数组遍历'
      }
    }

  ]
})
