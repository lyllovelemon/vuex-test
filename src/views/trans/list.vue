<template>
  <div id="list-demo" class="demo">
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-item">
        {{item}}  
      </span>  
    </transition-group>  
  </div>
</template>
<script>
  export default {
    data() {
      return {
       items:[1,2,3,4,5,6,7,8],
       nextNum:9
      }
    },
    methods:{
      randomIndex(){
        return Math.floor(Math.random()*this.items.length);
      },
      add(){
        this.items.splice(this.randomIndex(),0,this.nextNum++);
      },
      remove(){
        this.items.splice(this.randomIndex(),1);
      }
    }
  }
</script>
<style lang="less">
.bounce-enter-active{
    animation: bounce-in 0.5s;
}
.bounce-leave-active{
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in{
    0%{
        transform: scale(0)
    }
    50%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(1);
    }
}
</style>


