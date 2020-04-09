* [react hooks入门](http://www.ruanyifeng.com/blog/2019/09/react-hooks.html "react hooks入门")
- react类组件的缺点：大型组件很难拆分和重构，也很难测试；业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑；组件类引入了复杂的编程模式，比如render props 和高阶组件。
- 函数组件，react团队希望，组件不要变成复杂的容器，最好只是数据流的管道，开发者根据需要，组合管道即可。组件的最佳写法应该是函数，而不是类。函数组件，必须是纯函数，不能包含状态，也不支持生命周期方法，因此取代类。
- Hook(钩子)的含义，React Hooks的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码“钩”进来。React Hooks就是那些钩子。所有的钩子都是为函数引入外部功能，所以React约定，钩子一律使用use前缀命名，便于识别。

* [一网打尽react重难点](https://mp.weixin.qq.com/s/4RrsfYpNZM5yJCO_yf9iWQ "一网打尽react重难点")

- 为什么要引入React？---下面的代码都没有用到React啊？！---本质上还是需要搞懂JSX，JSX只是为React.createElement(component, props, ...children)函数提供的语法糖。
```
import React from 'react'; // 如果把这句删掉，就会报错
function A() {
    return <h1>前端桃李</h1>
}
```
- 为什么属性要用小驼峰？---因为JSX语法上更接近JavaScript而不是HTML，所以React DOM使用camelCase来定义属性的名称，而不使用HTML属性名称的命名约定。
- React的事件是合成事件，内部原理非常复杂，React在组件加载(mount)和更新(update)时，将事件通过addEventListener统一注册到document上，然后会有一个事件池存储了所有的事件，当事件触发的时候，通过dispatchEvent进行事件分发。
- 为什么React没有自动的把bind集成到render方法中？因为render多次调用每次都要bind会影响性能，所以官方建议你自己在constructor中手动bind达到性能优化。
- 为什么要setState，而不是直接this.state.xx = oo?setState做的事情不仅仅只是修改了this.state的值，另外最重要的是它会触发React的更新机制，会进行diff，然后将patch部分更新到真实dom里。如果直接this.state.xx = oo的话，state的值确实会改，但是改了不会触发UI的更新，那就不是数据驱动了。（vue修改状态是直接修改的，那为什么 Vue 直接修改 data 可以触发 UI 的更新呢？因为 Vue 在创建 UI 的时候会把这些 data 给收集起来，并且在这些 data 的访问器属性 setter 进行了重写，在这个重写的方法里会去触发 UI 的更新。如果你想更多的了解 vue 的原理，可以去购买染陌大佬的剖析 Vue.js 内部运行机制。）
- setState是同步还是异步？---我的回答是执行过程代码是同步的。**只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”**，所以表现出来有时是同步，有时是“异步”。在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout/setInterval等原生API中都是同步的。简单的可以理解为被React控制的函数里面就会表现出"异步"，安之变现为同步。
- 为什么会出现异步的情况？---为了性能优化，将state的更新延缓到最后批量合并再去渲染对于应用的性能优化是有极大好处的，如果每次的状态改变都去重新渲染真实dom，那么它将带来巨大的性能消耗。
- 表现出异步的原理是怎样的？---在 React 的 setState 函数实现中，会根据 isBatchingUpdates(默认是 false) 变量判断是否直接更新 this.state 还是放到队列中稍后更新。然后有一个 batchedUpdate 函数，可以修改 isBatchingUpdates 为 true，当 React 调用事件处理函数之前，或者生命周期函数之前就会调用 batchedUpdate 函数，这样的话，setState 就不会同步更新 this.state，而是放到更新队列里面后续更新。这样你就可以理解为什么原生事件和 setTimeout/setinterval 里面调用 this.state 会同步更新了吧，因为通过这些函数调用的 React 没办法去调用 batchedUpdate 函数将 isBatchingUpdates 设置为 true，那么这个时候 setState 的时候默认就是 false，那么就会同步更新。

* [从0手写redux](https://mp.weixin.qq.com/s/XDVAN-GQcxlJvg8jjGqyLw "从0手写redux")