前端核心工具: yarn npm cnpm三者如何优雅的在一起使用？


**Day 0612**
1. **时下热门的前端技术**
* **热门框架：Vue React**，两个都要会！所以学习这两个框架，开始时可以跟着文档或者视频，从demo做起。随着做的demo越来越复杂，渐渐地接触到更高级的概念后再尝试去理解它们背后的原理，阅读源码。如果阅读源码存在困难，在网上是可以找到解析框架源码的视频的。
* **Typescript** ，它最大的特点就是它的强类型系统和接口功能，这两个特点在很大程度上弥补了js在开发时因其弱类型给开发者带来的过bug的困扰。
* **Flutter与dart**，Flutter是Google开发的移动UI框架，用以构架IOS和Android上通用的原生用户界面。**Flutter和现有的React Native和weex的区别是Flutter不需要js引擎，它不需要桥接，运行的就是原生代码，所有速度很快，多段适配也很容易。**

2. **Hybrid**
[参考资料一](https://www.cnblogs.com/dailc/p/5930231.html "参考资料一")
* 作为一种混合开发的模式，Hybrid App底层依赖于Native提供的容器(UIWebview)，上层使用Html&Css&JS做业务开发，底层透明化、上层多样化，这种场景非常有利于前端介入，非常适合业务快速迭代。
* 将静态资源打包至Native中，Native提供js调用原生应用的能力。
* Hybrid优点：Hybrid开发效率高、跨平台、底层本；Hybrid从业务开发上讲，没有版本问题，有BUG能及时修复。
* ① Hybrid中Native与前端各自的工作是什么
② Hybrid的交互接口如何设计
③ Hybrid的Header如何设计
④ Hybrid的如何设计目录结构以及增量机制如何实现
⑤ 资源缓存策略，白屏问题......
看到这个文章了：http://developer.51cto.com/art/201511/496000.htm

**Day0613**
1. **charles 手机抓包配置**
[charles手机抓包配置](https://www.cnblogs.com/kaibindirver/p/8615552.html "charles手机抓包配置")
[charles抓包配置一](https://www.cnblogs.com/shihao905/p/7865639.html "charles抓包配置一")
[charles配置二](https://www.jianshu.com/p/adcbc085fcae "charles配置二")
[手机信任证书](https://www.cnblogs.com/1-434/p/7871865.html "手机信任证书")
[windows安装信任证书](https://blog.csdn.net/qq_15017407/article/details/53634878 "windows安装信任证书")

**Day0615**
1. [Cookie 与session的产生过程](https://blog.csdn.net/nchu2020/article/details/50535379 "Cookie 与session的产生过程")
2. [好好了解一下Cookie](https://blog.csdn.net/zhangquan_zone/article/details/77627899 "好好了解一下Cookie")