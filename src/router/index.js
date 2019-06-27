import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/slot',
      component:()=>import('../views/main'),
      meta:{
        title:'主页:slot插槽'
      }
    },
    {
      path:'tick',
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
    },
    {
      path:'/settimeout',
      component:()=>import('../views/settimeout/index'),
      meta:{
        title:'settimeout变量测试'
      }
    },
    {
      path:'/',
      component:()=>import('../views/trans/index'),
      meta:{
        title:'transition'
      }
    },
    {
      path:'/list',
      component:()=>import('../views/trans/list'),
      meta:{
        title:'transition in list'
      }
    },
      {
        path:'/flip',
        component:()=>import('../views/trans/flip'),
        meta:{
          title:'transition in search'
        }
      }
    

  ]
})
