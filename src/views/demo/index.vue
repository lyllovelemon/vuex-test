<template>
    <div  class="demo">
      <h1>{{message}}</h1>
      <div v-if="Math.random() > 0.5">
        Now you see me
      </div>
      <div v-else>
        Now you don't
      </div>
    </div>
</template>

<script>
    export default {
        name: "demo",
       data(){
          return{
            message:"hello Vue",
            ok:true
          }
       }

    }
</script>

<style scoped>

</style>
