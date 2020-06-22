# vue源码解析
- [github code](https://github.com/zhufengzhufeng/vue-source "github code")
- [vue源码解析文档](http://zhufengpeixun.com/jiagou/vue-analyse/two.html "vue源码解析文档")
 * 一般打包库是用rollup，一般项目开发涉及到图片、样式打包需要用webpack
数据监测
 * vue2.0 递归遍历 object.defineproperty()，进行数据劫持，性能低下

 * observer监测数据的时候，监测对象用的是object.defineproperty(),监测数组用的是重写数组的方法(push, pop, shift, unshift等)，函数劫持(函数重写)， 通过原型链向上查找的方式

 **不能监控，听过数组索引取值，但是可以监控到数组索引里对象的值，这个需要试一下**
 因为没有对数组索引添加object.defineproperty(),索引监测不到




模板编译
 虚拟dom可以跨平台

 * 面试题，模板编译，如何将模板template变成render函数， render函数返回的是虚拟节点
 1. 实现一个解析器，可以解析Html模板，把它变成ast抽象语法树，可以用一个树结构来描述，当前标签内容
 2. 虚拟节点是描述dom结构的，是使用对象来描述html；而ast语法树是描述html语法的，二者是不一样的； js语法也可以使用ast语法树来描述
 将html本身变成js语法，render函数

 模板编译原理
 - 1 先把我们的代码转化成ast语法树，parse解析(正则)
 - 2 标记静态树，树的遍历标记markup
 - 3 通过ast产生的语法树生成代码 => render函数 
 ```

let ast = parseHTML(template);
let code = generate(ast);
 ```

 如果同时传入template 和 render 默认会采用render抛弃template
 如果两个都没写，就用id="app"中的模板

 模板编译的核心就是正则匹配，不断截取

 * 常见的数据结构需要掌握：栈、队列、数组、链表、集合、hash表、树

 html 解析就是遇到一个解析一个，是深度优先