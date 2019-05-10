#### 日常遇到的问题，及解决方法
#### npm 安装依赖系列问题
1. npm install的时候出现unexpected end of file错误
> 解决方法：npm cache clean --force 清空npm 缓存即可解决这个问题
2. npm 装包时的区别 -D -S
> npm i name --save简写（npm i name -S）自动把模块和版本号添加到dependencies dep是在生产环境中要使用到的（仅在生产环境存在的包，比如：gulp 、webpack）。
> npm i name --save-dev简写（npm i name -D）自动把模块和版本号添加到devdependencies dev是在开发环境中要使用到的（仅在开发环境存在的包，比如：elment ui 、echarts）。