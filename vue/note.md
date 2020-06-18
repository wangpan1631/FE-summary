# 面试题
* [vue面试题](https://mp.weixin.qq.com/s/6J6nUMRAmUD_hsKue2oltg "vue面试题")
* [你要的vue面试题都在这里](https://copyfuture.com/blogs-details/20200602163344464l9gte6xucqvm5cd "你要的vue面试题都在这里")
* [58道vue常见面试题](https://mp.weixin.qq.com/s/JJq3MkVaZZRPkKFWcQNGCQ "58道vue常见面试题")
https://zhuanlan.zhihu.com/p/92407628


* vue3.0中为何使用proxy?
- 参考：https://www.jianshu.com/p/a4cd58652c78
- https://blog.csdn.net/weixin_34343000/article/details/88038578

# vue3.0新特性
- https://www.cnblogs.com/it-Ren/p/10976095.html
- https://www.cnblogs.com/it-Ren/p/10976095.html

* 响应式数据的原理
- 核心就是Object.defineProperty()

* 为何vue采用异步渲染？
- vue是组件级更新，当前组件变了，就要重新更新
- 因为如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染，所以为了性能考虑。vue会在本轮数据更新后，再去异步更新试图！

* nextTick实现原理？
- 理解异步方法（宏任务和微任务）
-  nextTick方法主要是使用了宏任务和微任务，定义了一个异步方法，多次调用nextTick会通过这个异步方法清空当前队列。所以这个方法是异步方法。

* computed watch method区别
- method只有用到模板上了，每次有变化就会重新渲染，性能开销比较大
- coputed 是具备缓存的，渲染的时候，如果依赖的属性没有变化，就直接从缓存获取, 内部原理是一个watcher
lazy: true
dirty: true 实现了缓存
- watch 原理，内部也是一个watcher，不过它的watcher是具有缓存的

* watch中的deep: true是如何实现的。--- 递归
- 当用户指定了watch中的deep属性为true时，如果当前监控的值是数组类型。会对对象中的每一项进行求值，此时会将watcher存入到对应属性的依赖中，这样数组中对象发生变化时也会通知数据更新。

* vue组件中的声明周期
* 要掌握每个声明周期什么时候被调用
- beforeCreate在实例初始化之后，数据观测(data observer)之前被调用。
- create实例已经创建完成之后被调用。在这一步，实例已完成一下的配置：数据观测(data observe)，属性和方法的运算，watch/event事件回调，这里没有$el
- beforeMount在挂载开始之前被调用：相关的render函数首次被调用
- mounted el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。
- beforeUpdate 数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前。
- updated 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
- beforeDestroy实例销毁之前调用。在这一步，实例仍然完全可用
- destroyed Vue实例销毁后调用，调用后，vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务端渲染期间不被调用。

* 要掌握每个生命周期内可以做什么事情
- created 实例已经创建完成，因为它是最早触发的原因可以进行一些数据，资源的请求
- mounted 实例已经挂载完成，可以进行一些DOM操作
- beforeUpdate可以在这个钩子中进一步更改状态，这不会触发附加的重渲染过程
- updated 可以执行依赖于DOM的操作，然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务端渲染期间不被调用。
- beforeDestroy 可以执行一些优化操作，清空定时器，解除绑定事件。

* ajax请求放在哪个生命周期中
- 在created的时候，试图中的dom并没有渲染出来，所以此时如果直接去操作dom节点，无法找到相关的元素
- 在mounted中，由于此时dom已经渲染出来了，所以可以直接操作dom节点
- 一般情况下都放在mounted中，保证逻辑的统一性，因为生命周期是同步执行的，ajax是异步执行的
- 服务端渲染不支持mounted方法，(因为服务端渲染的是字符串，不是真正的dom) 所以在服务端渲染的情况下统一放在created中。

* 何时需要使用beforeDestroy
- 可能在当前页面中使用了$on方法，那需要在组件销毁前解绑
- 清除自己定义的定时器
- 解除事件的绑定scroll mouseover...


将模板转化成ast 虚拟dom 用Js对象模拟实现dom
```
{
    tag: 'div',
    type: 1,
    children: [
        {
            tag: 'p',
            type: 1,
            children: [Array],
            attrs: [],
            parent: [Circular],
        }
    ],
    attrs: [{name: 'id', value: 'container'}],
    parent: null
}
```
优化树
将ast树生成代码
js的元编程

* vue中v-if和v-show的区别
- v-if如果条件不成立不会渲染当前指令所在节点的dom元素
- v-show只是切换当前dom的显示或者隐藏

* slot 面试题

* 为什么v-for和v-if不能连用
- 还是要从编译角度回答，v-for的优先级比v-if更早一些
- 用计算属性comouted来解决v-for和v-if连用的问题

* 用v-node描述dom diff
- $createElement

* template -> 虚拟dom
- 将template转换成ast -> codegen -> 转化成render函数 -> 内部调用的就是_c方法 -> 虚拟dom

* diff算法的时间复杂度
- 两个树的完全的diff算法是一个时间复杂度为O(n3), Vue进行了优化O(n3)复杂度的问题转换成O(n)复杂度的问题(只比较同级不考虑跨级问题)在前端当中，你很少会跨越层级地移动dom元素，所以virtual dom只会对同一层级的元素进行对比。

* 简述vue中diff算法原理
1. 先同级比较，再比较子节点
2. 先判断一方有儿子一方没儿子的情况
3. 比较都有儿子的情况
4. 递归比较子节点

* v-for中为什么要用key
- 主要是用于dom diff的
- dom diff的时候会就地复用

* 描述组件渲染和更新过程
- 渲染组件时，会通过Vue.extend方法构建子组件的构造函数，并进行实例化，最终手动调用$mount()进行挂载，更新组件时会进行patchVnode流程，核心就是diff算法

* 组件中的data为什么是一个函数？
- 同一个组件被复用多次，会创建多个实例。这些实例用的是同一个构造函数，如果data是一个对象的话，那么所有组件都共享了同一个对象。为了保证组件的数据独立性要求每个组件必须通过data函数返回一个对象作为组件的状态。
```
// 可能是伪代码，但是能说明情况
function VueComponent(){

}
VueComponent.prototype.$options = {
    data: {name: '111'},
    data2 () => ({name: '111'})
}
let vc1 = new VueComponent();
vc1.$options.data = '222';
vc1.$options.data2();
let vc2 = new VueComponent(); 
console.log(vc2.$options.data);
```

* **vue中事件绑定的原理**
- vue的事件绑定分为两种：一种是原生的事件绑定，还有一种是组件的事件绑定
- 原生dom事件的绑定，采用的是addEventListener实现，组件绑定事件采用的是$on方法

* v-model实现原理及如何自定义v-model
- v-model可以看成是value+input方法的语法糖
```
<el-checkbox :value="" @input=""></el-checkbox>
<el-checkbox v-model="check"></el-checkbox>
```

* vue中v-html会导致那些问题？
- 可能会导致xss攻击
- v-html会替换掉标签内部的子元素

* vue组件如何通信？
- 父子间通信 父 -> 子通过props、子 -> 父$on、$emit
- 获取父子组件实例的方式$parent、$children
- 在父组件中提供数据子组件进行消费 Provide、inject
- Ref获取实例的方式调用组件的属性或方法
- Event Bus实现跨组件通信
- Vuex状态管理实现通信

* vue中相同逻辑如何抽离
- Vue.mixin用法 给组件每个生命周期，函数等混入一些公共逻辑

* 生命周期怎么合并

* 为什么要使用异步组件？
- 如果组件功能多打包出的结果会变大，我可以采用异步的方式来加载组件。主要依赖import()这个语法，可以实现文件的分割加载。
```
components: {
    AddCustomerSchedule: (resolve) => import("../components/AddCustomer")
}
```
图表非常多的情况下，不需要一下子全部加载处理，可以使用异步组件，把组件变成函数。
异步组件一定是个函数，新版本提供了返回对象的写法

import ** from  es6语法
import()  es7语法

* 什么是作用域插槽？
- 插槽：创建组件虚拟节点时，会将组件的儿子的虚拟节点保存起来，当初始化组件时，通过插槽属性将儿子进行分离
- 渲染组件时会拿对应的slot属性的节点进行替换操作（插槽的作用域为父组件）
- **作用域插槽**，作用域插槽在解析的时候，不会作为组件的孩子节点，会解析成函数，当子组件渲染时，会调用此函数进行渲染（插槽的作用域为子组件）

* 谈谈你对keep-alive的了解？
- keep-alive可以实现组件的缓存，当组件切换时不会对当前组件进行卸载，常用的2个属性include/exclude，2个生命周期activated, deactivated

* vue中的优化
1. 编码优化：
- 不要将所有的数据都放在data中，data中的数据都会增加getter和setter，data中的数据尽量扁平化，会收集对应的watcher
- vue在v-for时给每项元素绑定事件需要用事件代理
- SPA页面采用keep-alive缓存组件
- 拆分组件(提高复用性、增加代码的可维护性，减少不必要的渲染)
- v-if当值为false时内部指令不会执行，具有阻断功能，很多情况下使用v-if替代v-show
- key保证唯一性（默认vue会采用就地复用策略）
- object.freeze 冻结数据
- 合理使用路由懒加载、异步组件
- 尽量采用runtime运行时版本
- 数据持久化的问题（防抖 节流）
2. vue加载性能优化：
- 第三方模块按需导入(babel-plugin-component)
- 滚动到可视区域动态加载
- 图片懒加载
3. 用户体验：
- app-skeleton骨架屏
- app-shell app壳
- pwa
4. SEO优化
- 预渲染插件prerender-spa-plugin (纯静态页，不实时)
- 服务端渲染ssr

* vue3.0你知道有哪些改进？
mixin的缺陷也解决了
代码条理性更好了

- vue3.0采用了ts来编写
- 支持composition API
- vue3中响应式数据原理改成proxy  提升性能  data已初始化就会递归拦截 比对
- vdom的对比算法更新，只更新vdom的绑定了动态数据的部分

* 实现hash路由和history路由
- onhashchange
- history.pushState

* vue-router中导航守卫(导航钩子)有哪些？
- 完整的导航解析流程：runQueue
- 导航被触发
- 在失活的组件里调用离开守卫
- 调用全局的beforeEach守卫
- 在重用的组件里调用beforeRouteUpdata守卫（2.2+）
- 在路由配置里调用beforeEnter
- 解析异步路由组件
- 在被激活的组件里调用beforeRouteEnter
- 调用全局的beforeResolve守卫(2.5+)
- 导航被确认
- 调用全局的afterEach钩子
- 触发DOM更新
- 用创建好的实例调用beforeRouter守卫中传给next的回调函数。


* action 和 mutation区别
- action是异步操作，可以获取数据后调用mutation提交最终数据
- mutation是同步更新数据(内部会进行是否为异步方式更新数据的检测) 核心$watch 严格模式下会报错



