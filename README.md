### learning map
#### 思维导图，形成自己的知识体系非常重要

#### 基础知识
#### CSS
1. [盒模型](./css/boxModel.md "盒模型")

2. [BFC](./css/bfc.md "BFC")

3. 层叠上下文

4. 居中布局：详见centerLayout代码

* 水平居中 - 行内元素: text-align: center - 块级元素: margin: 0 auto - absolute + transform - flex + justify-content: center
* 垂直居中 - line-height: height - absolute + transform - flex + align-items: center - table
* 水平垂直居中- absolute + transform - flex + justify-content + align-items

5. 选择器优先级（选择器从右往左解析，这样的好处是尽早的过滤掉一些无关的样式规则和元素）
* !important > 行内样式 > #id > .class > tag > *(通配符选择器) > 继承 > 默认
* !important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

**css三大特性：**
* 继承：即子类元素继承父类的样式
* 优先级：不同类别样式的权重比较
* 层叠：是说当数量相同时，通过层叠（后者覆盖前者）的样式

6. 去除浮动影响，防止父级高度塌陷
* 通过增加尾元素清楚浮动- :after/:clear:both
* 创建父级BFC
* 父级设置高度

7. link与@import的区别
* link功能较多，可以定义RSS，定义Rel等作用，而@import只能用于加载css
* 当解析到link时，页面会同步加载所引的CSS，而@import所引用的css会等到页面加载完才被加载
* @import需要IE5以上才能使用
* link可以使用js动态引入，@import不行

8. css动画

#### JS
1. **数据类型（内置类型）**
JS有7种内置类型，分为两大类型：基本类型和对象Object

* 基本类型：string  number  boolean null  undefined symbol

* 对于**undefined**, 有的编程规范要求用void 0代替undefined, 为什么呢？因为JavaScript的代码undefined是一个变量，而并非是一个关键字，这是JavaScript语言公认的设计失误之一，所以，我们为了避免无意中被篡改，建议使用viod 0来获取undefined值。
* 对于**null**, 表示的是“定义了但是为空”，它的语义表示空值，与undefined不同，null是JavaScript关键字，所以在任何代码中，我们都可以放心使用null关键字来获取null值。
* 对于**String**, 用于表示文本数据，一旦字符串构造出来，无法用任何方式改变字符串的内容。String有最大长度是2^53 - 1，但这个所谓的最大长度，并不完全是我们理解的字符数，因为String的意义并非“字符串”，而是字符串的UTF16编码，我们字符串的操作charAT、charCodeAt、length等方法针对的都是UTF16编码。所以，字符串的最大长度，实际上是受字符串的编码长度影响。
* 对于**Number**，需要注意几个特殊值，NaN、Infinity(无穷大)、-Infinity(负无穷大)，JavaScript中有+0和-0，在加法类运算中他们没有区别，但是除法的场合则需要特别留意区分，“忘记检查除以-0，而得到负无穷大”的情况经常会导致错误，而区分+0和-0的方式，正式检测1/x是Infinity还是-Infinity。
* 0.1 + 0.2 == 0.3 结果是false，这个错误的不是结论，而是比较的方法，正确的比较方法是使用JavaScript提供的最小精度值：console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON>)，检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法。这段代码结果就是true了。

四则运算符号：
只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。其他运算只要其中一方是数字，那么另一方就转为数字

```
'a' + + 'b' //aNaN
[1, 2] + [3, 4] // 1, 23, 4
```
* 对象Object









1. 梳理自己的前端知识架构
* css
* html
* javascript
* nodejs
* react
* vue
* angular
打包工具：webpack、rollup、parcel
前端工程化
后面再慢慢补充

#### 优质资料汇总

1. [手摸手带你完成vue后台管理系统](https://github.com/PanJiaChen/vue-element-admin "vue")

2. [js开发者应懂的33个概念](https://github.com/stephentian/33-js-concepts "")
3. [es6完全使用手册](https://juejin.im/post/5bfe05505188252098022400 "es6手册")
4. [web前端学习资源分享](https://juejin.im/post/5a0c1956f265da430a501f51 "学习资源")
5. [react、redux、双向数据绑定、函数式编程、手写promise、手写状态管理](https://juejin.im/post/5c1f01fef265da61587723f4 "五星好文")

**async/await系列**
6. [async/await](https://juejin.im/post/5c98ca366fb9a0710f47f1e5 "async/await")

7. [async/await讲解](https://juejin.im/post/5ab60c606fb9a028bc2db1d4 "async/await")

8. [async/await的好处](https://zhuanlan.zhihu.com/p/26505825 "async/await")

   
9. [vue-router](https://mp.weixin.qq.com/s/EJ7a4J6kJlZgc7Ars3Fxgw "vue-router")

10. [js 面向对象](https://mp.weixin.qq.com/s/cULis5W_y0Lu5Z3c-1sRhQ "js 面向对象")

**nodejs**

* [nodejs博客](http://blog.fens.me/series-nodejs/ "nodejs博客")

* [nodejs优缺点](https://www.cnblogs.com/sysuys/p/3460614.html "nodejs优缺点")

* [nodejs应用场景](https://www.cnblogs.com/gassnake999/p/7044583.html "nodejs应用场景")


#### 查漏补缺
##### day 5-16
**路由**
[前端路由](https://www.zhihu.com/question/53064386 "前端路由")
路由，简单说就是根据不同的URL地址展示不同的内容或页面，路由分为兼容性更好的hash实现和H5 history实现。二者区别就是url中是否带有“#”，带“#”的就是hash实现，history模式更加符合标准（hash路由不会导致重定向，在hybrid app中打包html，js到app内的时候非常有用）

**单页SPA和多页MPA的区别**
[单页应用和多页应用](https://juejin.im/post/5a0ea4ec6fb9a0450407725c "单页应用和多页应用")
[单页和多页的区别](https://blog.csdn.net/qq_16546829/article/details/81534724 "单页和多页的区别")
* 单页应用：顾名思义，就是只有一张web页面的应用，浏览器一开始会加载必须的HTML CSS JS, 之后所有的操作都在这张页面上完场，这一切都由js来控制。因此，单页web应用会包含大量的js代码，复杂度可想而知，模块化开发和设计的重要性不言而喻。
