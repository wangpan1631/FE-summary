### interview map

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

#### JavaScript

1. 数据类型（内置类型）
JS有7种内置类型，分为两大类型：基本类型和对象Object

* 基本类型：string  number  boolean null  undefined symbol
* 对象：function array regx object

四则运算符号：
只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。其他运算只要其中一方是数字，那么另一方就转为数字

```
'a' + + 'b' //aNaN
[1, 2] + [3, 4] // 1, 23, 4
```

2. js箭头函数和普通函数的区别
* this指向不一样，普通函数的this是谁调用指向谁（佳佳说不要这样说~但目前不知道更深入的），不然就指向window，可以通过把this赋值给一个变量解决，也可以通过bind(this)解决；箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值
* 在箭头函数里面使用call apply对this没有影响，由于this已经在词法层面完成了绑定，通过call apply调用一个函数是，只是传入了一个参数而已
* 箭头函数不绑定arguments，取而代之用rest参数解决
* 箭头函数是匿名函数不能用作构造器，和new一起用会抛出错误
* 箭头函数没有原型属性
* 箭头函数当方法使用的时候没有定义this绑定
```
var obj = {
  value:1,
  add:() => console.log(this.value),
  double:function(){
    console.log(this.value * 2)
  }
}

obj.add();  //undefined
obj.double(); //2
```
* 箭头函数不能换行
* 箭头函数不能当做Generator函数,不能使用yield关键字

**总结：**
*  箭头函数的 this 永远指向其上下文的  this ，任何方法都改变不了其指向，如 call() ,  bind() ,  apply() 
*  普通函数的this指向调用它的那个对象

todo :看一下es 箭头函数的讲解


3. call apply bind区别
* apply参数是数组形式

4. HTTP协议
HTTP协议是Hyper Text Transfer Protocol(超文本传输协议)的缩写，是用于从万维网服务器传输超文本到本地浏览器的传送协议。HTTP是基于TCP/IP协议通信协议来传递数据（HTML文件、图片文件、查询结果等）。它不涉及数据包（packet）传输，主要规定了客户端和服务器之间的通信格式，默认使用80端口。



