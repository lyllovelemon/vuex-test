<template>
  <div class="main">
    <div class="father">
      <h1>我是爸爸</h1>
      <child>
        <template slot-scope="user">
          {{user.data}}
        </template>
      </child>
      <child>
        <template slot-scope="user">
          <div class="test">
            <span v-for="item in user.data">{{item}}</span>
            <!--后海附属公司-->
          </div>
        </template>
      </child>
      <child>
        <template slot-scope="user">
          <ul class="menu">
            <li v-for="item in user.data">{{item}}</li>
          </ul>
        </template>
      </child>
    </div>
  </div>

</template>

<script>
  import articles from '../components/articles/index';
  import Child from '../components/child/index';
  export default {
    name:'main',
    components:{ articles,Child },
    data(){
      return{

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
ul,li{
  list-style:none ;
}
  .test{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    span{
      margin: 10px;
      color: #333333;
      font-size: 16px;
    }
  }
</style>
