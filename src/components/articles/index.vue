<template>
  <a href="" v-bind:href="url" class="nav-link">
    <slot></slot>
  </a>
</template>

<script>

  export default {
    name:'article',
    data(){
      return{

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
