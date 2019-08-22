#### react学习笔记
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
