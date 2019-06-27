<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<template>
  <div id="staggered-list-demo">
    <input v-model="query" placeholder="请输入要查询的名字">
    <transition-group name="staggerd-fade"
    tag="ul" 
    v-bind:class="false" 
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    >
      <li v-for="(item,index) in computedList" 
      v-bind:key="item.msg" 
      v-bind:data-index="index">
      {{item.msg}}
      </li>
    </transition-group>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
  export default {
    data() {
      return {
       query:'',
       list:[
         {
           msg:'Bruce Lee'
         },
         {
           msg:'Jackie Chan'
         },
         {
           msg:'chunk Norris'
         },
         {
           msg:'Jet Li'
         },
         {
           msg:'Kung Fury'
         }
       ]
      }
    },
    computed:{
      computedList(){
        let vm=this;
        return this.list.filter(item=>{
          return item.msg.toLowerCase().indexOf(vm.query.toLowerCase())!==-1;
        })
      }
    },
    methods:{
      beforeEnter(el){
        el.style.opacity=0;
        el.style.height=0;
      },
      enter(el,done){
        let delay=el.dataset.index*150;
        setTimeout(()=>{
          Velocity(
            el,
            { opacity:1,height:'1.6em'},
            { complete:done}
          )
        },delay)
      },
      leave(el,done){
        let delay=el.dataset.index*150;
        setTimeout(()=>{
          Velocity(
            el,
            {opacity:0,height:0},
            {complete:done}
          )
        },delay)
      }

    }
  }
</script>
<style lang="less">
ul,li{
  list-style: none;
}
.list-item{
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,.list-leave-active{
  transition: all 1s;
}
.list-enter,.list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>


