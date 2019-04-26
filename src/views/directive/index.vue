<template>
    <div class="directive">
      <input type="text" v-model="value" placeholder="我是局部自定义指令" v-focus>
      <span>{{value}}</span>
    </div>
</template>
<script>
	export default {
	  name:'directive',
		data() {
	    return{
        value:''
      }

		},
    directives:{
		  focus:{
		    inserted:function (el) {
          el.focus();
        }
      }
    },
		components: {}
	}
</script>
<style scoped lang="less">

</style>
