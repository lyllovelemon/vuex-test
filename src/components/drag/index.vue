<template>
  <div class="object" v-drag>

  </div>
</template>
<script>
  export default {
    data() {
      return {

        }
      },
    directives:{
      drag:{
        bind:function (el) {
          let oDiv=el;
          oDiv.onmousedown=(e)=>{
            //算出鼠标相对元素的位置
            let disX=e.clientX-oDiv.offsetLeft;
            let disY=e.clientY-oDiv.offsetTop;

            document.onmouseout=(e)=>{
              //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
              let left=e.clientX-disX;
              let top=e.clientY-disY;

              this.positionX=top;
              this.positionY=left;

              oDiv.style.left=left+"px";
              oDiv.style.top=top+"px";
            };

            document.onmouseup=(e)=>{
              document.onmousemove=null;
              document.onmouseup=null;
            }
          }
        }
      }
    }

  }
</script>

<style lang="less">
.object{
  position: relative;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  background: #666;
}

</style>
