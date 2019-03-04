### learning map
#### 思维导图

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
1. 数据类型（内置类型）
JS有7种内置类型，分为两大类型：基本类型和对象Object

* 基本类型：string  number  boolean null  undefined symbol

四则运算符号：
只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。其他运算只要其中一方是数字，那么另一方就转为数字

```
'a' + + 'b' //aNaN
[1, 2] + [3, 4] // 1, 23, 4
```
* 对象









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


