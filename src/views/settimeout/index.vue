<template>
   <div>
	   <h1 v-show="isShow">Hi,lemon</h1>
	   <h2>change</h2>
	   <button @click="openShow">open show</button>
   </div>
</template>

<script>
import { setTimeout } from 'timers';
	export default {
		name: "index",
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			openShow(){
             console.log('show');
			}
		},
		mounted(){
			function set(e){
				var a=123;
				return a;
			}
			this.isShow=set('e');
			console.log('out',this.isShow)
			console.log(typeof(this.isShow));
		}
	}
</script>

<style scoped>

</style>
