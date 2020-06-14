#### 极客时间Nodejs
* 课件和demo地址：https://github.com/geektime-geekbang/geed-nodejs
* nodejs是最适合做BFF层的，让前端有能力自由组装后台数据，这样可以减少大量的业务沟通成本。加快业务的迭代速度
* RPC调用，进程调用，系统运维
# 基础
* nodejs是一个基于chrome v8引擎的js运行环境，nodejs使用了一个事件驱动、非阻塞式I/O的模型。
* nodejs BFF层
* 学习Nodejs需要补充后台开发知识，和系统运维知识
* 在chrome里运行Js和在node里运行js有什么区别？其实没有太大区别，在nodejs里面没有控制浏览器的api，并且添加了Nodejs API；对于开发者来说nodejs，在chrome里写js控制浏览器，而nodejs让你用类似方式，控制整个计算机。

# nodejs应用场景
* 用在web服务
- 搜索引擎优化+首屏速度优化=服务端渲染
- 服务端渲染+前后端同构=Nodejs
* 使用Nodejs开发构建工具
* 开发 开发工具，如vscode
* 开发游戏（大型应用需要给使用者自定义模块的能力）
* 直播网站

# 技术预研究
* BFF层---backend for frontend
* 对用户侧提供HTTP服务
* 使用后端RPC服务 
* nodejs里面没有requestAnimationFrame()方法(指浏览器的下一帧)，用setImmediate()方法替代

# nodejs内置模块
* EventEmitter
- 观察者模式---addEventListener/removeEventListener

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
- **要了解一个框架，最好的方法是：了解它的关键功能；推导出它要解决的问题是什么；**
- 强大的路由系统，一个请求包进来，进到服务器 ，服务器根据请求包的内容去分发(在后台，路由就是根据不同的路径执行不同的逻辑)

* koa
- 由于express洋葱模型中间件的不完善，社区就推出了koa(为了弥补express的缺陷而诞生的)
- 核心功能，比express更极致的request/response简化
```
 ctx.status = 200;
 ctx.body = 'hello world;
 ```
- 使用async function实现的中间件，有“暂停执行”的能力，在异步的情况下也符合洋葱模型。
- 精简内核，所有额外功能都移到中间件里实现。

* Express vs Koa
- express门槛更低，koa更强大优雅。
- express封装更多东西，开发更快速，koa可定制性更高。
- express适合小型应用，koa更适合大型应用。

* RPC通信
- Remote Procedure Call(远程过程调用)
- 和Ajax有什么相同点？都是两个计算机之间的网络通信；需要双方约定一个数据格式；
* RPC VS Ajax
- Ajax是浏览器与服务器之间通信，RPC是服务器与服务器之间通信；
- Ajax使用DNS作为寻址服务，而RPC主要是内网里面互相请求，用DNS不划算
- 应用层协议一般不使用http,而是使用二进制协议来取代http
- 使用TCP或者UDP

* TCP通信方式：单工通信、半双工通信(同一时间内只有一端能往另外一端发送通信)、全双工通信
* 二进制协议：更小的数据包体积、更快的编解码速率（二进制0101更适宜计算机理解，json，key-value更适合人类理解）

* Buffer 编解码二进制数据包
- buffer库 protocol-buffers

* net建立多路复用的RPC通道

* 实战前的技术预研之Node.js基础
- 一方面向前提供HTTP服务
- 另一方面向后进行RPC通信

**nodemon插件可以监听文件变化，自动重启服务**

* 使用ES6模板字符串实现模板引擎，是所有模板引擎里面性能最高的。
- 通过nodejs里面的vm模块编译js形成函数，要实现xss过滤、模板helper函数，也要实现include子模板

* http接口模式分为restful和graphQL
- API服务-RESTful---简单易懂(根据路由的method来决定)；可以快速搭建；在数据的聚合方面有很大劣势
- API服务 - GraphQL---专注数据聚合，前端要什么就返回什么
* graphQL官网写的比npmjs好一些

* 前后端同构的难点在于数据处理，所有出来了Next.js服务端渲染框架
- axios也是可以前后端兼容使用的

**前后端同构的关键是注重职责的分离**

* HTTP服务性能测试
- 压力测试工具：ab(apache bench); webbench

- nodejs自带的性能分析工具profile
$ node --prof youfilename

- chrome devtool来调试nodejs  
chrome:inspect

- Clinic.js库

尽量把中间里面的一些计算移出去，移动到上面，程序启动的时候去执行。

* Javascript代码性能优化
- 计算性能优化的本质---减少不必要的计算； 空间换时间
- 思考：在用户能感知到的时间里，这个计算是不是必要的？
- nodejs http服务性能优化准则：提前计算（启动阶段 <-- 服务阶段）

* 垃圾回收机制
- 内存优化管理
- 新生代：容量小，垃圾回收更快
- 老生代：容量大，垃圾回收更慢

- nodejs Buffer的内存分配策略

* nodejs子进程与线程
- 进程---操作系统挂载运行程序的单元，拥有一些独立的资源，如内存等。
- 线程---进行运算调度的单元，进程内的线程共享进程内的资源

- Node.js的事件循环：主线程运行v8与javascript；多个子线程通过事件循环被调度

* node.js子进程与线程
- 使用子进程或线程利用更多cpu资源

- node.js里cluster模块

nodejs的稳定性是一个比较严重的问题，node.js进程守护