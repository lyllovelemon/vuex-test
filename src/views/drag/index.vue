<template>
  <div class="object" @mousedown="move">
    {{positionX}}
    {{positionY}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
         positionX:0,
         positionY:0
        }
      },
    methods:{
      move(e){
       let oDiv=e.target;
       // console.log('oDiv',oDiv);
       let disX=e.clientX-oDiv.offsetLeft;
       let disY=e.clientY-oDiv.offsetTop;
       // console.log('disX:',disX,'disY:',disY);
       document.onmousemove=(e)=>{
         let left=e.clientX-disX;
         let top=e.clientY-disY;

         this.positionX=top;
         this.positionY=left;

         oDiv.style.left=left+'px';
         oDiv.style.top=top+'px';
       };
       document.onmouseup=(e)=>{
         document.onmousemove=null;
         document.onmouseup=null;
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
