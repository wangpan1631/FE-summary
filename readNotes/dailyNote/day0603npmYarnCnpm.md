前端核心工具: yarn npm cnpm三者如何优雅的在一起使用？


**Day 0612**
1. **时下热门的前端技术**
* **热门框架：Vue React**，两个都要会！所以学习这两个框架，开始时可以跟着文档或者视频，从demo做起。随着做的demo越来越复杂，渐渐地接触到更高级的概念后再尝试去理解它们背后的原理，阅读源码。如果阅读源码存在困难，在网上是可以找到解析框架源码的视频的。
* **Typescript** ，它最大的特点就是它的强类型系统和接口功能，这两个特点在很大程度上弥补了js在开发时因其弱类型给开发者带来的过bug的困扰。
* **Flutter与dart**，Flutter是Google开发的移动UI框架，用以构架IOS和Android上通用的原生用户界面。**Flutter和现有的React Native和weex的区别是Flutter不需要js引擎，它不需要桥接，运行的就是原生代码，所有速度很快，多段适配也很容易。**

2. **Hybrid**（混合应用是指同时使用前端技术与原生技术开发的 App。通常由前端负责大部分界面开发和业务逻辑，原生负责封装原生功能供前端调用，二者以 WebView 作为媒介建立通信，从而既拥有 Web 开发的速度优势，又能拥有强大的原生能力）
[参考资料一](https://www.cnblogs.com/dailc/p/5930231.html "参考资料一")
[参考资料二](https://blog.csdn.net/valada/article/details/81639658 "参考资料二")
* 作为一种混合开发的模式，Hybrid App底层依赖于Native提供的容器(UIWebview)，上层使用Html&Css&JS做业务开发，底层透明化、上层多样化，这种场景非常有利于前端介入，非常适合业务快速迭代。
* 将静态资源打包至Native中，Native提供js调用原生应用的能力。
* Hybrid优点：Hybrid开发效率高、跨平台、底层本；Hybrid从业务开发上讲，没有版本问题，有BUG能及时修复。
* ① Hybrid中Native与前端各自的工作是什么
② Hybrid的交互接口如何设计
③ Hybrid的Header如何设计
④ Hybrid的如何设计目录结构以及增量机制如何实现
⑤ 资源缓存策略，白屏问题......
看到这个文章了：http://developer.51cto.com/art/201511/496000.htm
[Hybrid App原理解析](https://www.cnblogs.com/peakleo/p/10572749.html "Hybrid App原理解析")

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

**Day0708**
[需求分析和开发时间评估](https://mp.weixin.qq.com/s/zi1Af8UXiWq_pXc-yDt50g "需求分析和开发时间评估")
1. 需求评审和时间评估，用自己评估的工作日乘以一个系数，就属于这种类型。有一篇文章《我在淘宝做前端的这三年——第二年》里也介绍了一种方法也属于这种类型：

* 需求非常明确而且经常这样做：评估的工作日*1.5
* 需求不清晰，有可能变，但代码和技术方案熟悉：评估的工作日*2
* 需求不清晰，代码和技术方案也不熟悉需要探索：评估的时间*2.5
* 越不确定的事，未知的东西越多，风险越高，所以需要留有更多的时间以备不测。

**Day0726**
最近忙的跟狗似的，都没时间学习新东西了记笔记了！
* [一个可以测试js方法性能的网站](https://jsperf.com/ "一个可以测试js方法性能的网站")

**Day0815**
在线工具和文档收集：
[腾讯开发者手册](https://cloud.tencent.com/developer/devdocs "腾讯开发者手册")
前端技术栈中文文档，最好没有之一，[印记中文](https://docschina.org/ "印记中文")
[learn git](https://learngitbranching.js.org/ "learn git")
[babel在线编译](https://babeljs.io/repl "babel在线编译")
* polyfill online 
https://polyfill.io/v3/   https://polyfill.alicdn.com/polyfill.min.js
[browserlist](https://browserl.ist/ "browserlist")
[gitignore](https://www.gitignore.io/ "gitignore")
* webpack config
* https://www.nkgr.app/webpack-config-generator/
* https://doug2k1.github.io/webpack-generator/

* TypeSearch:typescript的类型文件搜索
* https://github.com/DefinitelyTyped/DefinitelyTyped
* https://microsoft.github.io/TypeSearch/

[TypeScript starter](https://www.tslang.cn/samples/index.html "TypeScript starter")

* wapm(webassenbly package manager) https://wapm.io/

* WasmExplorer(wa在线编译器)   http://mbebenita.github.io/WasmExplorer/
* draw.io   https://www.draw.io/
[sql.js](http://kripken.github.io/sql.js/examples/GUI/ "sql.js")
[uTools](https://u.tools/ "uTools")
[online tools](http://tool.oschina.net/ "online tools")
[js反编译混淆过的代码](http://jsnice.org/ "js反编译混淆过的代码")
[online javascript beautifier](https://beautifier.io/ "online javascript beautifier")
[在线工具](https://tool.lu/index.html "在线工具")
* cssdb
* https://cssdb.org/
* https://preset-env.cssdb.org/features

* css playground
* https://preset-env.cssdb.org/playground

* stylelint    https://stylelint.io/demo
* cssnano    https://cssnano.co/guides/optimisations/

* node green
[node green](https://node.green/ "node green")

[ecmascript-compat-table](http://kangax.github.io/compat-table/es6/ "ecmascript-compat-table")
[dom lint](https://kangax.github.io/domlint/ "dom lint")
* es-checker   http://ruanyf.github.io/es-checker/index.cn.html
* htmlhint https://htmlhint.io/
* htmllint  http://htmllint.github.io/
* redis http://try.redis.io/