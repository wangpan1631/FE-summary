#### react学习笔记(一个Component拯救世界的react，没有dom这个概念)
> 使用react有2年多了，但是来到qtt之后就没有写过了，感觉很多东西都忘掉了，加上之前使用react只是搬运堆积业务，没有去了解学习底层原理知识，导致现在都没什么印象了，可悲！现如今为了面试还得重头学学react！！！

* react是一个用于构建用户界面的js库，主要用于构建UI。
* React有如下特点：
- 声明式设计 -react采用声明范式，可以轻松描述应用。
- 高效 -react通过对DOM的模拟，最大限度地减少与DOM的交互
- 灵活 -react可以与已知的库或框架很好地配合
- JSX -JSX是js语法的扩展。react开发不一定使用JSX,但我们建议使用它。
- 组件 -通过react构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- 单向相应的数据流 -react实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

* react合成事件与原生事件的区别
[详解react原生事件与合成事件](https://juejin.im/post/5d7678b06fb9a06b2b47a03c "详解react原生事件与合成事件")
[合成事件和原生事件的区别](https://juejin.im/post/59db6e7af265da431f4a02ef "合成事件和原生事件的区别")
> 合成事件执行晚于原生事件
> react合成事件一套机制：react并不是将click事件直接绑定在dom上面，而是采用事件冒泡的形式冒泡到document上面，然后react将事件封装给正式的函数处理运行和处理。
> react合成事件理解，如果DOM上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。react为了避免这类DOM事件滥用，同时屏蔽底层不同浏览器之间的事件系统差异，实现了一个中间层——SyntheticEvent
1. 当用户在为onClick添加函数时，React并没有将Click事件绑定在DOM上面
2. 而是在document处监听所有支持的事件，当事件发生并冒泡到document处时，react将事件内容封装交给中间层SyntheticEvent(负责所有事件合成)
3. 所以当事件触发的时候，对使用统一的分发函数dispatchEvent将指定函数执行。

* react生命周期可以参见[菜鸟教程](https://www.runoob.com/react/react-component-life-cycle.html "菜鸟教程")

* react and vue,参考资料[react和vue的区别](http://caibaojian.com/vue-vs-react.html "react和vue的区别")
> react推广了virtual DOM，并创造了JSX语法。
> vue致力解决的问题与react一致，但提供了另外一种解决方案。Vue使用模板系统而不是JSX，使其对现有应用的升级更加容易。模板用的就是普通的HTML，所以更加容易上手。
> 二者相似之处，她们都是js的UI框架，专注于创造前端的富应用，只有框架的骨架，其他的功能如路由、状态管理是框架分离的组件。二者都使用Virtual DOM






# Vuex、Flux、Redux、Redux-saga、Dva、MobX(把组件之间需要共享的状态抽取出来，遵循特定的约定，统一来管理，让状态的变化可以预测)
# Store
> 组件不允许直接修改属于store实例的state，**组件必须通过action来改变state，**也就是说，组件里面应该执行action来分发(dispatch)事件通知store去改变。
# Flux(是一种思想，就像MVC，MVVM之类的)
> Flux把一个应用分成了4个部分：View Action Dispatcher Store(View不光是用来看的，一般都会有用户操作，用户点击个按钮，改个表单啥的，就需要修改store，Flux要求，View要修改store，必须经过一套流程，有点像刚才Store模式里面说的那样。视图先要告诉Dispatcher，让Dispatcher dispatch一个action，Dispatcher就像是个中转站，收到View发出的action，然后转发给Store，比如新建一个用户，View会发出一个叫addUser的action通过Dispatcher来转发，Dispatcher会把addUser这个action发给所有的store，store就会触发这个action，来更新数据，数据一更新，那么view就跟着更新了，这里需要注意的是：Dispatcher的作用是接收所有的action，然后发给所有的store；store的改变只能通过action，不能通过其他方式)
# Redux
- Redux是一个纯函数，对于相同的输入，永远都只有相同的输出，不会影响外部的变量，也不会被外部变量影响，不得改写参数。
> 
