#### 极客时间Nodejs
* 课件和demo地址：https://github.com/geektime-geekbang/geed-nodejs
# 基础
* nodejs是一个基于chrome v8引擎的js运行环境，nodejs使用了一个事件驱动、非阻塞式I/O的模型。
* nodejs BFF层
* 学习Nodejs需要补充后台开发知识，和系统运维知识
* 在chrome里运行Js和在node里运行js有什么区别？其实没有太大区别，在nodejs里面没有控制浏览器的api，并且添加了Nodejs API；对于开发者来说nodejs，在chrome里写js控制浏览器，而nodejs让你用类似方式，控制整个计算机。

# nodejs应用场景
* 用在web服务
搜索引擎优化+首屏速度优化=服务端渲染
服务端渲染+前后端同构=Nodejs
* 使用Nodejs开发构建工具
* 开发 开发工具，如vscode
* 开发游戏（大型应用需要给使用者自定义模块的能力）
* 直播网站

# 技术预研究
* 对用户侧提供HTTP服务
* 使用后端RPC服务 

# nodejs的非阻塞I/O
* I/O即Input/Output, 一个系统的输入和输出
* 阻塞I/O和非阻塞I/O的区别就在于系统接收输入再到输出期间，能不能接收其他输入。

* super() 子类调用父类的构造函数
```
const EventEmitter = require('events).EventEmitter;
class GeekTime extends EventEmitter {
    constructor(){
        super(); // 子类调用父类的构造函数
    }
}
```

* nodejs异步编程-callback
- 回调函数格式规范：error-first callback or node-style callback
- 第一个参数是error，后面的参数才是结果。

* 事件循环

* Promise
- 当前事件循环得不到的结果，但未来的事件循环会给到你结果(promise是一个“渣男”)
- 是一个状态机pending ---->  成功变成fulfilled/resolved (失败变成rejected)
* .then和.catch
- resolved状态的Promise会回调后面的第一个.then
- rejected状态的Promise会回调后面的第一个.catch
- 任何一个rejected状态且后面没有.catch的Promise，都会造成浏览器/node环境的全局错误

* 执行then和catch会返回一个新Promise，该Promise最终状态根据then和catch的回调函数的执行结果决定
- 如果回调函数最终是throw，该Promise是rejected状态
- 如果回调函数最终是return，该Promise是resolved状态
- 但如果回调函数最终return了一个Promise，该Promise会和回调函数return的Promise状态保持一致。

* async/await
- async function是Promise的语法糖封装
- 异步编程的终极方案，可以以同步的方式写异步
- await关键字可以"暂停"async function的执行
- await关键字可以以同步的写法获取Promise的执行结果
- try-catch可以获取await所得到的的错误
- 一个穿越事件循环存在的function

* express
- 要了解一个框架，最好的方法是：了解它的关键功能；推导出它要解决的问题是什么；
- 强大的路由系统，一个请求包进来，进到服务器 ，服务器根据请求包的内容去分发(在后台，路由就是根据不同的路径执行不同的逻辑)