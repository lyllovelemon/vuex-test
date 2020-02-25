<template>
<!--    <div class="directive">-->
<!--      <input type="text" v-model="value" placeholder="我是局部自定义指令" v-focus>-->
<!--      <span>{{value}}</span>-->
<!--    </div>-->
<div id="base-example">
  <p>Scroll</p>
  <p v-pin="500">stick me</p>
</div>
</template>
<script>
	export default {
	  name:'directive',
		data() {
	    return{
        value:'',
        direction:'left'
      }

		},
    directives: {
        pin: function (el, binding, vnode) {
            el.style.position = 'fixed'
            let s=(binding.arg==='left'?'left':'top')
            el.style[s]= binding.value + 'px'
        }

        // focus:{
        //   inserted:function (el) {
        //     el.focus();
        //   }
        // }
    },
		components: {},
	}
</script>
<style scoped lang="less">

</style>
