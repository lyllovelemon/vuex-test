<template>
  <div class="draw">
    <h2>幸运抽奖</h2>
    <div class="btn-group">
      <button class="btn" @click="start">开始</button>
      <button class="btn" @click="end">结束</button>
    </div>
    <transition-group class="draw-list" name="list-complete" tag="p">
            <span v-for="item in arrList" v-bind:key="item" class="list-complete-item" :class="{'draw-bg': item == value}">
                {{ item }}
            </span>
    </transition-group>
    <div class="lucky-list" v-if="lucky && lucky.length">
      <span class="lucky-title">中奖名单：</span>
      <span class="lucky-name" v-for="item in lucky">{{item}}</span>
    </div>
  </div>
</template>
<script>
  import '../../utils/lodash.min';
	export default {
		data() {
		  return{
        arrList: [
          "柠檬酱",
          "陈奕迅",
          "李现",
          "前田敦子",
          "生濑胜久",
          "洪一诺",
          "赵丽颖",
          "冯希瑶",
          "杨幂",
          "佐佐木希",
          "李宇春",
          "张浩",
          "谢娜",
          "何炅",
          "李湘",
          "石原里美",
          "新垣结衣",
          "赵四",
          "杨紫",
          "邓伦",
          "张一山",
          "周芷若",
          "赵敏",
          "张无忌"
        ],
        lucky: [],
        index: -1,
        timer: null,
        value: '',
        status: true
      }
		},
		components: {},
    mounted() {
      if (!localStorage.getItem('drawList')) {
        localStorage.setItem('drawList', JSON.stringify(this.arrList))//抽奖名单无缓存则把arrList存进缓存
      }
      else {
        this.arrList = JSON.parse(localStorage.getItem('drawList'))//抽奖名单有缓存则取缓存
      }
      if (localStorage.getItem('luckyList')) {
        this.lucky = JSON.parse(localStorage.getItem('luckyList'))//中奖名单缓存
      }
    },
    methods:{
      start() {
        if (this.status) {
          if (this.index != -1) {
            this.arrList.splice(this.index, 1)
            localStorage.setItem('drawList', JSON.stringify(this.arrList))
          }
          this.shuffle();
          setTimeout(() => {
            this.recursive()
          }, 800);
          this.status = !this.status
        }
      },
      randomIndex: function() {
        this.index = Math.floor(Math.random() * this.arrList.length)
        return this.index
      },
      remove: function() {
        this.arrList.splice(this.randomIndex(), 1)
      },
      shuffle: function() {
        this.arrList = _.shuffle(this.arrList)
      },
      recursive() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.value = this.arrList[this.randomIndex()]
          this.recursive()
        }, 200)
      },
      end() {
        if (this.status) {
          return
        }
        clearTimeout(this.timer);
        this.index = this.randomIndex();
        this.value = this.arrList[this.index];
        this.lucky.push(this.value);
        localStorage.setItem('luckyList', JSON.stringify(this.lucky));
        this.status = !this.status
      }
    }
  }
</script>
<style lang="less" scoped>
  .draw{

  h2{
    font-size: 30px;
  }
    .draw-list{
      display: flex;
      flex:1 1 auto;
      flex-wrap: wrap;
      margin:10px;
    }
  .list-complete-item {
    transition: all 1s;
    border: 1px solid #ddd;
    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin:2px;
    text-align: center;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .draw-bg {
    background-color: red;
    color: #fff;
    transform: scale(1.2);
    border: 1px solid #fff;
  }

  .list-complete-enter,
  .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }

  .draw {
    height: 100px;
  }
  .btn-group{
    display: flex;
    justify-content: center;
    align-items: center;
    .btn{
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2B73FB;
      color: #fff;
      border-radius: 10px;
      border: 0 none;
      margin: 0 5px;
      cursor: pointer;
    }
  }
  li {
    float: left
  }
  .lucky-list{
    margin-top: 20px;
    display:flex;
    justify-content: center;
    .lucky-title{
      font-size: 16px;
      color: #333333;
      font-weight: bold;
    }
    .lucky-name{
      margin: 0 5px;
      font-size: 16px;
      font-weight: bold;
      color: #333333;
    }
  }
  }
</style>
