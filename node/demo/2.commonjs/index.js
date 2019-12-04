/**
 * 暴露模块：module.exporst = value or exports.xxx = value
 * 引入模块：require(xxx),如果是第三方模块，xxx为模块名；如果是自定义模块，xxx为模块文件路径
 * CommonJS暴露的模块到底是什么？CommonJS规范规定，每个模块内部，Module变量代表当前模块。这个变量是一个对象。
 * 它的exports属性(即module.exports)是对外的接口。加载某个模块，其实是加载该模块的module.exports模块
 * require命令的基本功能是，读入并执行一个JS文件，然后返回该模块的exports对象，如果没有发现指定模块，会报错。
 * CommonJS模块的加载机制是，输入的是输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。这点
 * 与ES6模块化有重大差异
 * CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用
 * CommonJS模块是运行时加载，ES6模块是编译时输出接口
 * 第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
 * 而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
 */
console.log('start require');
const lib = require('./lib.js');
console.log('end require', lib);
lib.addTest = 'test';