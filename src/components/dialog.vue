<template>
<div class="dialog">
  <div class="chat-area">
    <div class="scroll-wrapper">
      {{txt}}
    </div>
    <v-chateditor
      :recordState="false"
      @sendMsg="sendMsg()"
    />
  </div>

</div>
</template>
<script>
    export default {
        name: "dialog",
        data(){
          return{
              txt:''
          }
        },
        methods:{
          sendMsg(e){
          this.txt=e;
          },

        }
    }
</script>

<style lang="less">
  .dialog{
    .chat-area{
      width: 720px;
      position: relative;
      background-color: #eee;
      .scroll-wrapper{
        width: 100%;
        height: 220px;
        bottom: 180px;
        overflow: hidden;
        cursor: pointer;
      }
      .chatEditor_{
        border-top: 1px solid #333333;
        padding-bottom: 20px;
        padding-right: 10px;
      }
      /*.box-footer{*/
        /*height: 130px;*/
        /*margin-right: 19px;*/
        /*border-top: 1px solid #d6d6d6;*/
        /*position: relative;*/
        /*.emoj-panel{*/
          /*width: 100%;*/
          /*height: 174px;*/
          /*background: #FFFFFF;*/
          /*position: absolute;*/
          /*z-index: 99;*/
          /*top: -181px;*/
          /*.expression::before{*/
            /*content: "";*/
            /*position: absolute;*/
            /*left: 16px;*/
            /*top: 100%;*/
            /*margin-left: -7px;*/
            /*border: 7px solid transparent;*/
            /*border-top-color: #cfcfcf;*/
          /*}*/
          /*.expression{*/
            /*.top{*/
              /*padding: 8px 20px 0;*/
              /*list-style: none;*/
              /*display: flex;*/
              /*justify-content: flex-start;*/
              /*background: #f2f2f2;*/
              /*li{*/
                /*list-style: none;*/
                /*color: #333;*/
                /*padding: 5px 20px;*/
                /*font-size: 14px;*/
                /*cursor: pointer;*/
              /*}*/
              /*.active{*/
                /*background: #FFFFFF;*/
              /*} }*/

          /*}*/
        /*}*/
        /*.toolbar{*/
          /*height: 30px;*/
          /*padding: 5px 17px;*/
          /*.icon-wrapper{*/
            /*display: inline-block;*/
            /*margin: 0 5px;*/
          /*}*/
        /*}*/
        /*.content{*/
          /*pre{*/
            /*height: 58px;*/
            /*overflow-y: auto;*/
            /*overflow-x: hidden;*/
            /*padding-left: 20px;*/
            /*outline: none;*/
            /*border: 0;*/
            /*font-size: 14px;*/
          /*}*/
        /*}*/
        /*.action{*/
          /*text-align: right;*/
          /*margin-top: 5px;*/
          /*.send-btn{*/
            /*background-color: #fff;*/
            /*color: #222;*/
            /*padding-left: 30px;*/
            /*padding-right: 30px;*/
          /*}*/
        /*}*/
      /*}*/
    }
  }

</style>
