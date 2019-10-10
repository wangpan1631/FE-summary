# 极客时间
* 为什么需要构建工具？
- 转换ES6语法
- 转换JSX
- CSS前缀补全/预处理器
- 压缩混淆
- 图片压缩

* 为什么选择webpack?
- 社区生态丰富
- 配置灵活和插件化扩展
- 官方更新迭代速度快

* webpack默认配置文件是webpack.config.js
- entry 打包的入口文件
- output 打包的输出
- mode 环境
- module - rules- Loader
- plugins 插件

* 4.0webpack0配置包含entry output两个配置，其它都没有配置

* 环境配置，可以通过nvm安装(先安装nvm)，nvm install v10.15.3(安装Node)
* 创建空目录和package.json
- mkdir my-project
- cd my-project
- npm init -y
* 安装webpack和webpack-cli(npm i webpack webpack-cli --save-dev)
* 检查是否安装成功：./node_modules/.bin/webpack -v

* 通过npm script运行webpack,**通过npm run build运行构建，原理就是模块局部安装会在node_modules/.bin目录创建软连接**
```
{
    "name": "hello-webpack",
    "version": "1.0.0",
    "scripts": {
        "build": "webpack"
    },
    "keywords": []
}
```

* webpack核心概念之entry，指定的打包的入口
- 单入口：entry是一个字符串
```
module.exports = {
    entry: './path/to/my/entry/file.js'
}
```
- 多入口：entry是一个对象
```
module.exports = {
    entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js'
    }
}
```

* output 指定打包的输出
- 单入口配置
```
module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    }
}
```
- 多入口配置
```
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js', // 通过占位符确保文件名称的唯一
        path: __dirname + '/dist'
    }
}
```

* 核心概念之loaders, webpack开箱即用只支持JS和JSON两种文件类型，通过loaders去支持其它文件类型并且把它们转化成有效的模块，并且可以添加到依赖图中。loaders本身是一个函数，接受源文件作为参数，返回转换的结果。
* 常见的loaders有哪些？
- babel-loader -> 转换ES6、ES7等JS新特性语法
- css-loader -> 支持.css文件的加载和解析
- less-loader -> 将less文件转换成css
- ts-loader -> 将TS转换成JS
- file-loader -> 进行图片、字体等的打包
- raw-loader -> 将文件以字符串的形式导入
- thread-loader -> 多进程打包JS和CSS

* loaders的用法
```
const path = require('path');
module.exports = {
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/, // test指定匹配规则
                use: 'raw-loader' // use指定使用的loader名称
            }
        ]
    }
}
```
* 核心概念之plugins——增强webpack的功能，任何Loaders无法完成的事情，都可以通过plugins来完成，plugins用于bundle文件的优化，资源管理和环境变量注入，作用于整个构建过程。
* 常见的plugins有哪些？
- CommonsChunkPlugin 将chunks相同的模块代码提取成公共js
- CleanWebpackPlugin 清理构建目录
- ExtractTextWebpackPlugin 将CSS从bundle文件里提取成一个独立的CSS文件
- CopyWebpackPlugin 将文件或者文件夹拷贝到构建的输出目录
- HtmlWebpackPlugin 创建html文件去承载输出的bundle
- UglifyjsWebpackPlugin 压缩JS
- ZipWebpackPlugin 将打包出的资源生成一个zip包

* plugins的用法
```
const path = require('path');
module.exports = {
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}) // 放到plugins数组里
    ]
}
```

* 核心概念之Mode——webpack4才出现的，mode用来指定当前的构建环境是production、development还是none，设置mode可以使用webpack内置的函数，默认值为production
* mode的内置函数功能
- development ，设置process.env.NODE_ENV的值为development，开启NamedChunksPlugin和NamedModulesPlugin
- production ,设置process.env.NODE_ENV的值为production，开启FlagDependencyUsagePlugin、FlagIncludedChunksPlugin、ModuleConcatenationPlugin、NoEmitOnErrorsPlugin，OccurrentceOrderPlugin、SideEffectsFlagPlugin和TerserPlugin
- none 不开启任何优化选项

* 资源解析：解析ES6
- 使用babel-loader，babel的配置文件是：.babelrc
```
{
    "presets":["@babel/preset-env"], // 增加ES6的babel preset配置，presets是一系列babel plugin的集合
    "plugins": ["@babel/proposal-class-properties"] // 一个plugin对应一个功能
}
```
* 安装依赖，npm i @babel/core @babel/preset-env babel-loader -D

* 看到15小节解析ES6和React JSX处