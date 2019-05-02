<template>
    <div  class="demo">
      <h1>{{message}}</h1>
      <div v-if="Math.random() > 0.5">
        Now you see me
      </div>
      <div v-else>
        Now you don't
      </div>
      <ul>
        <li v-for="n in evenNumbers">{{ n }}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "demo",
       data(){
          return{
            message:"hello Vue",
            ok:true,
            numbers: [ 1, 2, 3, 4, 5 ]
          }
       },
      computed: {
        evenNumbers: function () {
          return this.numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
      }

    }
</script>

<style scoped lang="less">
ul,li{
  list-style: none;
}
</style>
