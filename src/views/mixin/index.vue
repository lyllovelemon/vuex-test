<template>
<div id="test">
  主页mixin
</div>
</template>
<style lang="less">
  #test{
    width: 100px;
    height: 100px;
    background: rosybrown;
  }
</style>
<script>
   import mixin from './mixin'
    export default {
        data() {
            return{

            }
        },
        mixins:[mixin],
        created(){
          console.log('组件')
        },
        components: {}
    }
</script>
