<template>
  <div class="main">
    <!--<articles url="/watch">-->
      <!--<span class="fa fa-user">fa</span>-->
      <!--Your profile-->
    <!--</articles>-->
    <h1>hello</h1>
  </div>

</template>

<script>
  import articles from '../components/articles/index';
  export default {
    name:'main',
    components:{articles},
    data(){
      return{
        // userType:'weibo',
        // titleStr:'Vue render()函数'
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
