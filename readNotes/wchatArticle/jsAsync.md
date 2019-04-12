#### JS 异步处理那些事儿
关键字：callback、 Generator、 Promise 、async/await


1. 异步处理在JS里面是非常重要的一部分，也是面试必考的一部分，今天就来唠唠js异步处理那些事儿！有很长一段时间，处理异步请求，都是用的回调函数，callback，多层回调就用多个callback，这就是常说的回调地狱，但不知道为什，我个人感觉如果回调不是很多的情况下，使用callback来处理回调，也没什么不妥~~~捂脸~~~， 找来的回调地狱的缺点：不难想象，如果依次读取两个以上的文件，就会出现多重嵌套。代码不是纵向发展，而是横向发展，很快就会乱成一团，无法管理。因为多个异步操作形成了强耦合，只要有一个操作需要修改，它的上层回调函数和下层回调函数，可能都要跟着修改。这种情况就称为"回调函数地狱"（callback hell）。

2. Generator函数的一个重要实际意义就是用来处理异步操作，改写回调函数。
3. Promise是异步编程的一种解决方案，比传统的解决方案--回调函数和事件--更合理和强大。所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息，promise对象有两个特点：

* 对象的状态不受外界影响。promise对象代表一个异步操作，有三种状态：pending(进行中)、fulfilled(已成功)和rejected(已失败)。

* 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

promise也有一些缺点，首先，无法取消promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚开始还是即将完成）

基本用法：ES6规定，Promise对象是一个构造函数，用来生成Promise实例

```
const promise = new Promise(function(resolve, reject){
    // ... some code

    if (/* 异步操作成功 */) {
        resolve(value);
    } else {
        reject(error);
    }
})
```

resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

**promise创建后会立即执行：**

```
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
```


参考链接：
[js异步编程1](https://www.cnblogs.com/learninpro/p/9166356.html "js异步编程1")

[js异步编程2](https://www.cnblogs.com/learninpro/p/9271813.html "js异步编程2")

[js执行机制](https://juejin.im/post/59e85eebf265da430d571f89 "js执行机制")

[阮一峰ES6](http://es6.ruanyifeng.com/#docs/async "阮一峰ES6")

[异步编程六种方案](https://mp.weixin.qq.com/s/AP1OQAMowQNa75uwdsI79w "异步编程六种方案")

**async/await**

[async/await](https://juejin.im/post/5c98ca366fb9a0710f47f1e5 "async/await")

 [async/await讲解](https://juejin.im/post/5ab60c606fb9a028bc2db1d4 "async/await")

 [async/await的好处](https://zhuanlan.zhihu.com/p/26505825 "async/await")
