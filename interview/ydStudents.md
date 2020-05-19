### 高思教育
1. 快速排序(要看JS排序算法 https://www.jianshu.com/p/76098668a13e)
> 考察JS排序算法
> 参考[JS快速排序详解之递归与非递归](https://blog.csdn.net/xuyangxinlei/article/details/81062015 "JS快速排序详解之递归与非递归")
2. 无序数组找出大于10的数
> 考察数组的查用API
> arr.filter((i) => {return i > 10})
3. nodejs跨域通信
> 考察跨域，使用Node作为中间层来实现跨域请求
> node作为中间层请求服务端
4. vuex和localstorage区别
> 参考[vuex和localStorage区别](https://my.oschina.net/u/560237/blog/1797633 "vuex和localStorage区别")
5. 为什么要用vuex或者redux
https://blog.csdn.net/muzidigbig/article/details/83784037
6. http1.0，http1.1，http2区别
7. 函数柯里化
https://www.cnblogs.com/maoxiaodun/p/10035861.html
8. a，b变量交换
> 真是一道思维拓展题，很简单，就看你能想到多少方法[不借助第三个变量交换a,b两个变量值](https://blog.csdn.net/web_hwg/article/details/75045689 "不借助第三个变量交换a,b两个变量值")
9. 缓存有哪些，有什么区别
> 强缓存和协商缓存
10. vue双向绑定的原理
> 参考[vue双向绑定原理](https://www.jianshu.com/p/23180880d3aa "vue双向绑定原理")
11. 开发环境热更新优化方式
https://www.jb51.net/article/147367.htm
12. webpack打包优化做了哪些
13. 对MVC，MVVM，MVP的理解
> 参考[对MVC，MVVM，MVP的理解](https://www.jianshu.com/p/aeead9b020fb "对MVC，MVVM，MVP的理解")


# 腾讯应用宝（电话面试）

## let与var  变量提升

## 函数闭包

## css3动画 transform

## js 按需加载的原理
- 图片懒加载原理：https://blog.csdn.net/w1418899532/article/details/90515969

## https 为什么比http 安全

## localstorage加密

## import 与require 有什么不同

## setTimeout 与setInterval 区别

## 常见的状态码

## 事件冒泡  委托

## xss与xsf

## bind、call

## 客户端与服务端 过期时间

## 304页面的原理

## scrollview 在性能优化 （例如 page=100时，往上翻滚）

## 原形链实现calss的继承

## rn weex dart优缺点



[TOC]

# HTML
1. 语义化标签

# CSS
1. 什么事BFC，触发BFC的条件
2. 垂直居中的方法
3. flex布局
5. grid布局
6. css实现文字省略
7. 相邻选择器
8. 响应式布局用到的技术，移动端需要注意什么
9. 盒子模型

# JS
1. session和cookie
2. sessionStroage、localStroage、indexedDB的区别
3. 实现一个功能，发送请求5s时间后，如果没有数据返回，中断请求,提示错误
- https://www.cnblogs.com/itgezhu/p/11573410.html
4. proxy原理
5. event Loop
6. valueOf&toString的区别
7. js实现栈,push和pop
8. 同源策略
9. 什么事作用域链
10. 闭包
11. 事件冒泡、事件代理、事件捕获的关系
12. for..of和for...in是否可以直接遍历对象
13. 在map中和for中调用异步函数的区别
14. set和weakSet的区别，weakSet提供了遍历的API么
15. ES6中的变量交换
16. gennerator yield的作用
17. promise的状态有哪些
18. async,await的原理
19. 在ES6中有哪些解决异步的方法
18. es6类继承中super的作用
19. cros的简单请求和复杂请求的区别
20. es6数组去重
21. let和var的区别
22. 函数防抖和函数节流
23. addEventListener的第三个参数的作用
24. 上传文件的Content_Type什么，node如何拿到上传的文件内容(不适用第三方插件)？文件内容是一次行传输过去的么
25. 如果判断一个对象为null，不适用js提供的api
26. 使用原型链如何实现单继承
27. 如何获取一个对象的深度
28. 求数组的最大值
29. reduce函数的功能，以及实现
30. splice和slice的功能
31. 实现深克隆的方式
32. 面向对象的三大要素是啥，都是啥意思
33. 函数中的this有几种
35. 如何同时获取html中的h1,h2,h3,h4,h5,h6中的内容
36. js的执行流程
37. Promise.resolve(obj)，obj有几种可能
38. new Promise((resolve, reject) =>{
	reject("1")
    }).catch((e) =>{
   	console.log(1)
    }).then(res =>{
	console.log(2)
    });结果是啥
39. nextTick是在本次循环执行，还是在下次，setTimeout(() => {}, 0)呢？

# Vue
1. vue父子组件传参，子组件之间呢？
2. mvvm流程
3. vuex是啥，如何实现一个自定义的插件
4. vue3.0的了解
5. vue3.0 为什么要用代理
6. A、B两个条件组件，如何做到webpack只打包条件为true的组件，false的组件不打包
7. vm的原理
8. MVC和MVVM的区别
9. vue的生命周期以及每个阶段做的事
10. keep-alive的作用，actived和deactived
11. 子组件除了通过$emit的方式，如何跟父组件通信
12. 不同组件之间可以直接通信嘛
13. 子组件可以直接改变父组件的数据么，说明原因

# webpack
1. webpack的运行流程
2. webpack优化
3. webpack和gulp的优缺点
4. webpack怎么处理内联css的
5. ast的结构
6. 如何做异步加载

# HTTP和HTTP2
```
1. 什么是HTTP
2. 什么是HTTP2
3. HTTP/1.1和HTTP/2的区别
3. HTTP的工作流程
4. get和post的区别
5. HTTP2的工作流程
6. HTTP的缓存策略
7. 客户端如何发送POST请求呢
8. 客户端缓存有几种方式？浏览器出现from disk、from memory的策略是啥

# 前端性能优化
1. 前端性能优化的方法
2. 导致重排和重绘的原因
3. 重绘和重排的关系

# 正则
1. 去掉DOM中的内联样式
2. 匹配IP地址
3. 匹配htm标签

# typescript
1. 使用typescript的装饰器能实现函数调用前出现加载动画，调用后关闭，如果能，这个加载动画的控制代码是放在哪种装饰器上呢

# 其他
1. unicode和utf8的关系
2. pm2依据什么重启服务
3. nginx ~ ^ 表示什么意思
4. 什么是微服务，微服务跟单体应用的区别是啥，用微服务有啥好处？
5. IOC是啥，有啥好处用呢
6. 你是怎么学习的
7. 遇到问题怎么解决
8. 了解PWA嘛
9. 为啥离职?
10. 了解docker嘛，他能用来做啥子

