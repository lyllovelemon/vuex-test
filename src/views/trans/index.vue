<template>
  <div id="demo">
    <button v-on:click="show=!show">
    Toggle
    </button>  
    <transition name="bounce">
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
    </div>  
</template>
<script>
  export default {
    data() {
      return {
       show:true
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


