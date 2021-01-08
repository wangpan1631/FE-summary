# NPM
* npm包管理工具，在npm资源库中注册用户（使用邮箱注册）：
```
$ npm adduser
Username: mcohd
Password:
Email: (this IS public) mcmohd@gmail.com
```
* 用一下命令可以发布模块：$ npm publish
* 版本号，npm使用语义版本号来管理代码，语义版本号分为X.Y.Z三位，分别代码主版本号、次版本号和补丁版本号。

# 原生NODE(可以看菜鸟教程简答入门)
* events模块只提供了一个对象：events.EventEmitter，EventEmitter的核心就是事件触发与事件监听器功能的封装。

* [程序猿小卡的博客](https://www.chyingp.com/ "程序猿小卡的博客")
* [node学习笔记](https://github.com/chyingp/nodejs-learning-guide "node学习笔记")
* [小卡的github](https://github.com/chyingp/blog "小卡的github")


# nodejs官方文档阅读笔记
* 有多种方法可以终止Node.js应用程序，当在控制台中运行程序是，可以使用ctrl-c将其关闭；可以使用process.exit()，在编程方式中退出node.js程序。**process不需要require，它是自动可用的**

* 从Node.js读取环境变量，process核心模块提供了env属性，该属性承载了在启动进程时设置的所有环境变量。访问 NODE_ENV 环境变量, 该环境变量默认情况下被设置为 development。process.env.NODE_ENV默认情况下为development

* npm全局安装和本地安装：本地安装-软件包被安装在当前文件树中的node_modules子文件夹下。全局安装-使用-g标志进行全局安装，这种情况下，npm不会将软件包安装在本地文件夹下，而是使用全局的位置，那么全局位置在哪里呢，npm root -g命令会告知在计算机上的确切位置。macOS和window会有所差别

* http://nodejs.cn/learn/the-nodejs-event-loop  2021-01-08看到事件循环这里
