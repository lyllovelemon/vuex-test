# vue面试
+ vue的mixin了解吗，执行顺序
在mixin中定义created方法，在组件中也定义created方法，哪个先执行
```
vue的mixin(混入)定义了一种非常灵活的方式，来分发vue组件的可复用功能，一个混入对象可以包含任何组件选项。
当组件使用混入对象时，它会被混合进组件本身的选项。

选项合并策略:
当组件和混入对象(mixin）选项冲突时，会优先使用组件选项。但是mixin的执行顺序是
早于组件的。

所以mixin的created方法会先执行

需要谨慎使用全局混入，因为它会影响每个创建的vue实例(包括第三方组件)
```
+ vue的指令有用过吗，优缺点
常用指令:
1. v-text:更新元素的textContent
2. v-html:更新元素innerHTML
3. v-for：列表渲染
4. v-if:用于条件渲染
5. v-bind:当表达式改变，将产生连带影响，响应式作用于DOM
```
<!--完整写法-->
<a v-bind:href="url"></a>
<!--缩写-->
<a :href="url"></a>
<script>
var vm=new Vue({
    el:"#app",
    data(){
    return{
        url:"www.baidu.com"
    }
}
})
</script>
```
6. v-on:事件绑定

语法：v-on:click="say" or v-on:click="say('参数', $event)"
简写：@click="say"
7. v-model:实现数据双向绑定

### vue的事件修饰符了解吗
+ .stop:阻止冒泡,等于event.stopPropagation()
+ .prevent:阻止默认事件,等于event.preventDefault()
+ .once:事件只触发一次
+ .self:只在元素本身调用
+ .capture:事件捕获

###
+ vue的watch了解吗，有什么局限性
+ vue的指令
+ vue的父组件怎么拿到子组件的数据
+ 浏览器的渲染机制和加载机制
### 介绍下vuex
vuex是vue的状态管理库，它采用集中式存储管理应用中所有组件的状态，并以相应规则保证状态以一种可预测的方式变化
有5种属性:
+ store
> 用于存储数据和状态，根实例注册state后可以通过this.$store.state访问，对应vue的data，存储数据方式为响应式，
> vue从store读取数据，数据变化，组件对应会更新
+ getter
> store的计算属性，它的返回值会根据依赖缓存起来，只有依赖值发生变化会重新计算
+ mutation
> 用于更改store的状态，是同步操作
+ action：
> 通过提交mutations间接改变状态，是异步操作
+ module
> 将store分割成模块，每个模块都有store，getter，mutation，action，甚至是嵌套子模块
