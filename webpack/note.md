# 极客时间webpack
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
[npm and nvm](https://www.jianshu.com/p/401b02f4fb30 "npm and nvm")
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

* 解析CSS
* css-loader 用于加载.css文件，并且转换成commonjs对象
* style-loader 将样式通过<style>标签插入到head中
* less-loader 将less转换成css
* **注意：webpack里面loader是链式调用，是从右往左执行的，如下要解析less文件的loader配置**
```
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}
```

* 资源解析：解析图片
* file-loader 用于处理文件(图片、字体)
* url-loader 也可以处理图片和字体，可以设置较小资源自动base64(注：base64需要设置阈值，base64可以减少http请求，但是会使css文件体积变大，需要在两者之间做个权衡)
**注意：解析图片时候，使用上面两个loader，需要配置options(name、publicPath)，图片才能正常显示**

* webpack中的文件监听(文件监听是在发现源码发生变化时，自动重新构建出新的输出文件)
* webpack开启监听模式，有两种方式：
- 启动webpack命令时，带上--watch参数(唯一缺陷：每次需要手动刷新浏览器)
```
// package.json里面配置
{
    "name": "hello-webpack",
    "version": "1.0.0",
    "scripts": {
        "build": "webpack",
        "watch": "webpack --watch" // 在terminal里执行npm run watch
    }
}
```
- 在配置webpack.config.js中设置watch:true
```
module.exports = {
    watch: true, // 默认false，也就是不开启
    watchOptions: { // 只有开启监听模式，watchOptions才有意义
        ignore: '/node_modules' // 不监听node_modules
    }
}
```

* 文件监听的原理分析：轮询判断文件的最后编辑时间是否变化，某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等aggregateTimeout

* webpack中的热更新及原理分析(webpack-dev-server)，只有开发环境需要热更新。
- WDS 不刷新浏览器
- **WDS 不输出文件，而是把打包好的文件放在内存中**
- **需要配合使用HotModuleReplacementPlugin插件**
1. package.json里面配置
```
{
    "dev": "webpack-dev-server --open" // '--open'是在每次构建完成之后开启一个浏览器
}
```
2. webpack.dev.js里配置
```
const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contenBase: '/dist',
        hot: true
    }
}
```

* 热更新：使用webpack-dev-middleware
- WDM将webpack输出的文件传输给服务器，适用于灵活的定制场景

* 热更新的原理分析

* 什么是文件指纹？打包后输出的文件的后缀
* 常见的文件指纹和文件指纹如何生成的？
- Hash: 和整个项目的构建相关，只要项目文件有修改，整个项目构建的hash值就会更改。
- Chunkhash: 和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值。
- Contenthash: 根据文件内容来定义hash, 文件内容不变，则contenthash不变。（通常用于CSS文件）

1. JS的文件指纹设置，设置output的filename，使用[chunkhash]
```
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name]_[chunkhash:8].js',
        path: __dirname + '/dist'
    }
}
```
2. css的文件指纹设置，设置MiniCssExtractPlugin的filename, 使用[contenthash]
```
module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name][chunkhash:8].js',
        path: __dirname + '/dist'
    },
    modules: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader', // 作用是把样式传入到head里面，而MiniCssExtractPlugin作用是把css抽取成一个独立的文件，所以两者的作用是互斥的，用了MiniCssExtractPlugin，就不能使用style-loader了
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name][contenthash:8].css`
        })
    ]
};
```
3. 图片的文件指纹设置，设置file-loader的name, 使用[hash]。以下是占位符名称和对应的含义
- [ext] ------ 资源后缀名
- [name] ------ 文件名称
- [path] ------ 文件的相对路径
- [folder] ------ 文件所在的文件夹
- [contenthash] ------ 文件的内容hash，默认是md5生成
- [hash] ------ 文件内容的Hash, 默认是md5生成
- [emoji] ------ 一个随机的指代文件内容的emoj
```
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(.png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name][hash:8].[ext]'
                    }
                }]
            }
        ]
    }
};
```

* HTML、CSS和JavaScript代码压缩
- JS文件的压缩，webpack内置了uglifyjs-webpack-plugin(mode设置为production,默认打包的文件js就是压缩过的)，如果需要额外的配置，可以单独安装uglifyjs-webpack-plugin
- CSS文件的压缩，使用optimize-css-assets-webpack-plugin，同时使用cssnano
```
module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name][chunkhash:8].js',
        path: __dirname + '/dist'
    },
    plugins: [
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        })
    ]
}
```
- html文件的压缩，需改html-webpack-plugin，设置压缩参数
```
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'), // 模板所在位置
            filename: 'search.html', // 打包输出的html文件
            chunks: ['search'], // 指定生产的Html要使用哪些chunk
            inject: true, // 打包输出的js、css的chunk自动注入html
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        })
    ]
}
```

**第三章 webpack进阶用法**
* 自动清理构建目录产物，避免构建前每次都需要手动删除dist，使用clean-webpack-plugin, 默认会删除output指定的输出目录
```
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name][chunkhash:8].js',
        path: __dirname + '/dist'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}
```

* CSS3的属性为什么需要前缀？因为浏览器标准没有统一，市场上有四种浏览器内核，同样的样式，不同的浏览器渲染出来会有差异，考虑到兼容性问题，需要添加前缀(PostCSS插件和autoprefixer自动补齐css3前缀， Can I Use?上可以查询)
* （css前置处理器是打包前进行处理，后置处理器是打包后进行处理）
```
module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    // ['兼容最近两个浏览器版本', '版本使用的人数比例', 'IOS 7以上的版本']
                                    browers: ["last 2 version", ">1%", "IOS 7"]
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
```
[postcss-loader配合autoprefixer解决CSS3兼容问题](https://www.cnblogs.com/hellowoeld/p/10571792.html "postcss-loader配合autoprefixer解决CSS3兼容问题")

* 第24小节移动端CSS px自动转换成rem(参考：[webpack之css自动转rem](https://blog.csdn.net/scorpio_h/article/details/92754859 "webpack之css自动转rem"))
* W3C对rem的定义：font-size of the root element
* rem和px的对比：rem是相对单位；px是绝对单位

* css 媒体查询实现响应式布局，通过给不同尺寸的设备添加不同的样式

1. **使用px2rem-loader**
2. 页面渲染时计算根元素的font-size值，可以使用**手淘的lib-flexible库**([手淘lib-flexible](https://github.com/amfe/lib-flexible) "手淘lib-flexible")
* npm i px2rem-loader -D
* npm i lib-flexible -S
```
module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'px2rem-loader', // 配置了会报错
                        options: {
                            remUnit: 75,
                            remPrecision: 8
                        }
                    }
                ]
            }
        ]
    }
}
```

* 静态资源内联 (项目中配置了不行，构建出现问题，需要进一步尝试)
* 资源内联的意义：
- 代码层面：页面框架的初始化脚本、上报相关打点、css内联避免页面闪动
- 请求层面：减少HTTP网络请求数，小图片或者字体内联(url-loader)

* HTML和JS内联：
- raw-loader内联html(比如，很多Html页面可能都需要大量的meta信息，我们可以把这些Meta片段抽取出来，然后内联到页面里面)
```
<script>${require('raw-loader!babel-loader!./meta.html')}</script>
```
- raw-loader内联JS
```
<script>${require('raw-loader!bebel-loader!../node_modules/lib-flexible')}</script>
```
* CSS内联
- 方案一：借助style-loader
- 方案二：html-inline-css-webpack-plugin



* 多页面应用打包通用方案。（多页应用：每一次页面跳转的时候，后台服务器都会给返回一个新的html文档，这种类型的网站也就是多页网站，也叫做多页应用）
- 多页面应用的好处：页面之间是解耦的、对SEO更加友好
* 每个页面对应一个entry, 一个html-webpack-plugin，缺点：每次新增或删除页面需要改webpack配置
```
module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    }
}
```
* 多页面打包通用方案，动态获取entry和设置html-webpack-plugin数量，利用glob.sync
* entry: glob.sync(path.join(__dirname, './src/*/index.js'))
```
module.exports = {
    entry: {
        index: './src/index/index.js',
        search: './src/search/index.js'
    }
}
```

* source-map，开发环境使用，便于排错调试。
```
module.exports = {
    entry: '',
    output: '',
    devtool: 'source map 类型' // eval、source-map、inline-source-map等
}
```
- eval
- source-map
- inline-source-map

* 公共资源分离
- 基础库分离，比如做react开发，将react, react-dom基础包通过cdn引入，不打入bundle中，使用html-webpack-externals-plugin
```
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
module.exports = {
    plugins: [
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'react',
                    entry: '//11.url.cn/now/lib/15.1.0/react-with-addons.min.js?_bid=3123',
                    global: 'React'
                },
                {
                    module: 'react-dom',
                    entry: '//11.url.cn/now/lib/15.1.0/react-dom.min.js?_bid=3123',
                    global: 'ReactDOM'

                }
            ]
        })
    ]
}
```
- 利用SplitChunksPlugin进行公共脚本分离，Webpack4内置的，替代CommonsChunkPlugin插件
```
module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'async', // async-异步引入的库进行分离(默认)、initial-同步引入的库进行分离、all-所有引入的库进行分离(推荐)
            minSize: 30000, // 分离的包体积的大小
            maxSize: 0,
            minChunks: 1, // 设置某一个方法最小的使用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    }
}

module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /(react\react-dom)/, // 匹配出需要分离的包
                    name: 'vendors', // 分离出来的文件名称
                    chunks: 'all'
                }
            }
        }
    }
}
```

* tree shaking(摇树优化)
- 概念：1个模块可能有多个方法，只能其中的某个方法使用到了，则整个方法都会被打到bundle里面去，tree shaking就是只把用到的方法打入bundle，没用到的方法会在uglify阶段被擦除掉。
- 使用：webpack默认支持，在.bablerc里设置modules: false即可；production mode的情况下默认开启
- 要求：必须是ES6的语法，CJS的方式不支持
* DCE(dead code elimination)
- 代码不会被执行，不可到达
- 代码执行的结果不会被用到
- 代码只会影响死变量（只写不读）
* tree-shaking原理
- 利用ES6模块的特点：只能作为模块顶层的语句出现、import的模块名只能是字符串常量、import binding是immutable的
- 代码擦除：uglify阶段删除无用代码

* Scope Hoisting使用和原理分析
- 现象：构建后的代码存在大量闭包代码。会导致的问题有：大量函数闭包包裹代码，导致体积增大（模块越多越明显）、运行代码时创建的函数作用域变多，内存开销变大
- scope hoisting原理：将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防变量名冲突。对比：通过scope hoisting可以减少函数声明代码和内存开销
- scope hoisting使用 webpack mode为production默认开启，必须是ES6语法，CJS不支持

* 代码分割和动态import
- 代码分割的意义：对于大的web应用来讲，将所有的代码都放在一个文件中显然是不够有效的，特别是当你的某些代码块是在某个特殊的时候才会被使用到，webpack有一个功能就是将你的代码库分割成chunks(语块)，当代码运行到需要它们的时候再进行加载。
- 适用的场景：抽离相同代码到一个共享块、脚本懒加载，使得初识下载的代码更小
- 懒加载JS脚本的方式：CommonJS: require.ensure; ES6:动态import(目前还没有原生支持，需要babel转换)
* 如何使用动态import?
- 安装babel插件 npm i @babel/plugin-syntax-dynamic-import --save-dev
- ES6: 动态import(目前还没有原生支持，需要babel转换)
```
{
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

* 在webpack中使用ESLint
- Airbnb: eslint-config-airbnb、eslint-config-airbnb-base
- ESLint如何执行落地：和CI/CD系统集成（放到pipleline里面）、和webpack集成
- 本地开发阶段增加precommit钩子，安装husky npm i husky --save-dev, 然后增加npm script,通过lint-staged增量检查修改的文件
```
"scripts": {
    "precommit": "lint-staged"
},
"lint-staged": {
    "linters": {
        "*.{js,scss}": ["eslint --fix", "git add"]
    }
}
```

* webpack打包组件和基础库，webpack除了可以用来打包应用，也可以用来打包js库
- 如何只对.min压缩，通过include设置只压缩min.js结尾的文件
```
module.exports = {
    mode: "none",
    entry: {
        "large-number": "./src/index.js",
        "large-number.min": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        library: "largeNumber",
        libraryTarget: "umd"
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
}
```
- npm publish发布一个包，前提需要有个npm账号，登录进去

* webpack实现SSR打包
- 服务端渲染(ssr)是什么？渲染：HTML + CSS + JS + Data -> 渲染后的HTML
- 服务端：所有模板等资源都存储在服务端、内网机器拉取数据更快、一个HTML返回所有数据
- SSR的优势：减少白屏时间、对于SEO比较友好
- 客户端渲染vs服务端渲染
![alt text](./client_server_render.jpeg "box model")

* SSR代码实现思路
- 服务端：使用react-dom/server的renderToString方法将React组件渲染成字符串；服务端路由返回对应的模板。
- 客户端：打包出针对服务端的组件

* webpack ssr打包存在的问题
- 浏览器的全局变量(Node.js中没有document, window)，组件适配-将不兼容的组件根据打包环境进行适配；请求适配：将fetch或者ajax发送请求的写法改成isomorphic-fetch或者axios
- 样式问题(Node.js无法解析css)，方案一：服务端打包通过ignore-loader忽略掉css的解析；方案二：将style-loader替换成isomorphic-style-loader