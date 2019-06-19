<template>
    <div class="child">
      <h3>我是弟弟</h3>
      <!--具名插槽-->
      <slot name="up"></slot>
      <slot :data="data"></slot>
      <!--匿名插槽-->
      <slot ></slot>
    </div>
</template>

<script>
	export default {
		name: "child",
    data(){
		  return{
		    data:['lemon','dean','sakura','meiko']
      }
    }
	}
</script>

<style scoped>

</style>
