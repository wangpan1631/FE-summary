# 设计模式
[菜鸟教程设计模式](https://www.runoob.com/design-pattern/singleton-pattern.html "菜鸟教程设计模式")

# 2020-0701
* 用了babel为什么还需要用polyfill
- babel默认只转换新的js语法,如箭头函数等，而不转换新的api，比如iterator、Generator、Set、Maps、Proxy、Promise等对象，以及一些定义在全局对象上的方法(比如Object.assign)都不会转码；因此我们需要polyfill，这个polyfill需要安装在上线依赖里

* promise.finally的使用
- 无论promise是成功态还是失败态都会执行的方法，一般用在发起请求前的Loading, 请求完成后的loading关闭

* vue nextTick的实现原理
- 先定义了一个callbacks 存放所有的nextTick里的回调函数，
然后判断一下当前的浏览器内核是否支持 Promise，如果支持，就用Promise来触发回调函数，
如果不支持Promise再看看是否支持MutationObserver，是一个可以监听DOM结构变化的接口，观察文本节点发生变化时，触发执行所有回调函数。如果以上都不支持就只能用setTimeout来完成异步执行了。