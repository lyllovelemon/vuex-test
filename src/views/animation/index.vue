<template>
    <div id="animated-number-demo">
        <input v-model.number="number" type="number" step="28">
        <p>{{animatedNumber}}</p>
    </div>
</template>

<script>
import '../../utils/tweenMax';
export default {
    data(){
        return{
            number:0,
            tweenedNumber:0
        }
    },
    computed:{
        animatedNumber(){
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch:{
        number(newValue){
            TweenLite.to(this.$data,0.5,{tweenedNumber:newValue})
        }
    },
    methods(){
      test(){

      }
    }
}
</script>
<style lang="less">

</style>


