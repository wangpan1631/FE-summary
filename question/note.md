#### 日常遇到的问题，及解决方法
#### npm 安装依赖系列问题
1. npm install的时候出现unexpected end of file错误
> 解决方法：npm cache clean --force 清空npm 缓存即可解决这个问题
2. npm 装包时的区别 -D -S
> npm i name --save简写（npm i name -S）自动把模块和版本号添加到dependencies dep是在生产环境中要使用到的（仅在生产环境存在的包，比如：gulp 、webpack）。
> npm i name --save-dev简写（npm i name -D）自动把模块和版本号添加到devdependencies dev是在开发环境中要使用到的（仅在开发环境存在的包，比如：elment ui 、echarts）。

#### day-5.23
3. 早上本来想着赶紧学习ts呢，结果在安装ts的时候总是失败，后来就升级的npm版本，结果升级完又报错，**npm ERR! code MODULE_NOT_FOUND**, 网上查了一些资料，大部分都说是因为node和npm包版本的问题，但是npm已经坏了，没有办法升级node版本，后来就用了暴力方法，从官网下载了一个node包，重新安装了一下，结果就好了
> npm 的升级命令是 npm install npm@latest -g
> node 的升级命令是 
1) 先清除缓存 npm cache clean -f
2) 安装 n 模块 sudo npm install -g n
3) 安装最新的稳定版本 sudo n stable