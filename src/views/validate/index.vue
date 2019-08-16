<template>
   <div class="container">
	   <span class="label">预定天数:</span>
     <input v-model="value" type="text" @change="validate">
   </div>
</template>

<script>
	export default {
		name: "validate",
		data(){
			return{
        sixtydays:{
          reg: /^[1-5][0-9]{0,2}|60$/,
          msg: '数值范围在1~60的整数'
        },
        value:''
			}
		},
		methods:{
      validate(){
        if(!this.sixtydays.reg.test(this.value)){
          alert(this.sixtydays.msg);
        }
        else {
          alert('成功',this.value);
        }
      }
		},
		mounted(){
		}
	}
</script>

<style scoped>

</style>
