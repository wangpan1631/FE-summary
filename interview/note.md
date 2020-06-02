### interview map

#### CSS
1. [盒模型](./css/boxModel.md "盒模型")

2. [BFC](./css/bfc.md "BFC")

3. 层叠上下文

4. **居中布局：详见centerLayout代码**

* 水平居中 - 行内元素: text-align: center - 块级元素: margin: 0 auto - absolute + transform - flex + justify-content: center
* 垂直居中 - line-height: height - absolute + transform - flex + align-items: center - table
* 水平垂直居中- absolute + transform - flex + justify-content + align-items

5. **选择器优先级（选择器从右往左解析，这样的好处是尽早的过滤掉一些无关的样式规则和元素）**
* !important > 行内样式 > #id > .class > tag > *(通配符选择器) > 继承 > 默认
* !important > 行内样式> ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

**css三大特性：**
* 继承：即子类元素继承父类的样式
* 优先级：不同类别样式的权重比较
* 层叠：是说当数量相同时，通过层叠（后者覆盖前者）的样式

6. **去除浮动影响，防止父级高度塌陷**
* 通过增加尾元素清楚浮动- :after/:clear:both（使用伪元素清除浮动，给浮动元素的父容器添加一个clearfix的class，然后给这个class添加一个:after伪元素，实现元素末尾添加一个看不见的块元素来清理浮动。）
* 创建父级BFC ，给父元素使用overflow:hidden
* 父级设置高度（扩展性不好）
* clear:both;  在最后一个子元素新添加最后一个冗余元素(必须是块级元素)，然后将其设置clear:both，这样就可以清除浮动。
* br标签清浮动，br标签存在一个属性：clear，这个属性就是能够清除浮动的利器。在br标签中设置属性clear，并赋值all，即能清除掉浮动。
```
<div id="wrap">
  <div id="inner"></div>
  <br clear="all" />
</div>

#wrap {
  border: 1px solid;
}
#inner {
  float: left;
  width: 200px;
  height: 200px;
  background: pink;
}


```

7. **link与@import的区别**
* link功能较多，可以定义RSS，定义Rel等作用，而@import只能用于加载css
* 当解析到link时，页面会同步加载所引的CSS，而@import所引用的css会等到页面加载完才被加载
* @import需要IE5以上才能使用
* link可以使用js动态引入，@import不行

8. **用css实现一个箭头向上的三角形**
```
.triangel {
	width: 0;
	height: 0;
	border-width: 20px;
	border-style: solid;
	border-color: transparent transparent red transparent;
}
```

9. **display:none与visibility:hidden的区别？**
> display:none 不显示对应的元素，在文档布局中不再分配空间（会引起回流和重绘）
> visibility:hidden 隐藏对应元素，在文档布局中仍保留原来的空间（会引起重绘）
> 所以，从性能优化方面来说，应该使用visibility: hidden

10. **元素竖向的百分比设定是相对于容器的高度吗**
> 当按百分比设定一个元素的**宽度**时，它是**相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如padding-top/padding-bottom/margin-top/margin-bottom等，当按百分比设定它们时，依据的也是父容器的宽度**，而不是高度。按照百分比设定一个元素的**高度**时，它是依据父容器的高度来计算的。

11. **HTML标签语义化**，就是用包含语义的标签恰当地表示文档结构
> 语义化的好处，简述对语义化的理解
* 用正确的标签做正确的事情
* html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析
* 即使在没有样式css情况下也以一种文档格式显示，并且是容易阅读的
* 搜索引擎的爬虫也依赖于HTML来确定上下文和各个关键字的权重，利于SEO
* 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

**用自己的话总结如下：**
html语义化就是用正确的标签做正确的事情，可以是页面结构清晰，利于阅读理解，利于团队协作维护，对SEO比较友好

12. Doctype作用？标准模式与兼容模式有什么区别？
> doctype位于HTML文档的第一行，处于html标签之前，**告知浏览器的解析器用什么文档标准解析这个文档**，doctype不存在或格式不正确会导致文档以兼容模式呈现
> 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作

13. li和li之间有看不见的空白间隙是什么原因引起的？有什么解决办法？
> li排列受到中间空白（回车/空格）等的影响，因为空白也属于字符，会被应用样式占据空间，产生间隙
> 解决方法：在ul设置font-size=0，在li上设置需要的文字大小。

14. 全屏滚动的原理，用到了那些CSS属性？
> 原理类似图片轮播原理，超出隐藏部分，滚动式显示，用到的CSS属性：overflow:hidden;tranform: translate(100%, 100%); display: none;

15. 轮播图，无缝轮播，手写轮播图 TODO

16. 什么是响应式？基本原理是什么？怎么兼容版本的IE?
> 响应式设计就是网站能够兼容多个终端，而不是每个终端做一个特定的版本
> 基本原理是利用css媒体查询，为不同尺寸的设备适配不同样式
> 对于低版本的IE，可采用JS获取屏幕宽度，然后通过resize方法来实现兼容

17. 网站图片文件，如何点击下载？而非点击预览？
```
<a href="logo.jpg" download>下载</a>
<a href="logo.jpg" download="网站Logo">下载</a>
```
18. ios safari 如何阻止”橡皮筋效果“？
```
  $(document).ready(function(){
      var stopScrolling = function(event) {
          event.preventDefault();
      }
      document.addEventListener('touchstart', stopScrolling, false);
      document.addEventListener('touchmove', stopScrolling, false);
  });
```

19. 设置元素浮动后，该元素的display值会如何变化？设置元素浮动后，该元素的display值自动变成block

20. 如果需要手动写动画，你认为最小时间间隔是多久？
> 16.7ms多数显示器默认频率是60HZ,即1秒刷新60次，所有理论上最小间隔：1s / 60 * 1000 = 16.7ms

**css动画**
* animation/keyframe/

#### JavaScript

1. 数据类型（内置类型）
JS有7种内置类型，分为两大类型：基本类型和对象Object

* 基本类型：string  number  boolean null  undefined symbol
* symbol, [symbol学习笔记](https://www.cnblogs.com/zczhangcui/p/6435652.html "symbol学习笔记")
* 对象：function array regx object

四则运算符号：
只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。其他运算只要其中一方是数字，那么另一方就转为数字

```
'a' + + 'b' //aNaN
[1, 2] + [3, 4] // 1, 23, 4
```

[彻底搞懂JS==运算](https://segmentfault.com/a/1190000006012804 "彻底搞懂JS==运算")

[相关primitive操作](https://blog.csdn.net/suxuelengyin/article/details/82759437 "相关primitive操作")

* 介绍JS有哪些内置对象？
> 数据封装类对象：Object Array Boolean Number String
> 其他对象：Function Arguments Math Date RegExp Erro
> ES6新增对象：Symbol Map Set Promise Proxy Reflect

* W3C事件的target与currentTarget的区别？
> target只会出现在事件流的目标阶段
> currentTarget可能出现在事件流的任何阶段
> 当事件流处于目标阶段时，二者的指向相同
> 当事件流处于捕获或冒泡阶段时，current指向当前事件活动的对象（一般为父级） 

* base64为什么要设置阈值？
> base64 本身就是为了减少 http 请求的，但是如果为了减少 http 请求，反而影响了css 大小，就需要在网络请求和css文件大小之间做一个权衡
> 图片资源进行base64编码转码并不能压缩文件；只有较小的图片资源适合进行base64编码转换，因为进行base64编码转换的图片资源往往是放在css中，过大的图片资源转换后导致css文件膨胀，进而影响页面加载效率（css会阻塞页面的渲染，而图片则不会），而较小的图片转换后虽然css大小略有增加，但可以减少一个http请求。
* 观察值模式和发布订阅模式的区别？
* 进程和线程是什么关系？

#### webpack相关面试题
* webpack的loader有哪些设计规范？


2. js箭头函数和普通函数的区别
* this指向不一样，普通函数的this是谁调用指向谁（佳佳说不要这样说~但目前不知道更深入的），不然就指向window，可以通过把this赋值给一个变量解决，也可以通过bind(this)解决；箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值
* 在箭头函数里面使用call apply对this没有影响，由于this已经在词法层面完成了绑定，通过call apply调用一个函数是，只是传入了一个参数而已
* 箭头函数不绑定arguments，取而代之用rest参数解决
* 箭头函数是匿名函数不能用作构造器，和new一起用会抛出错误
* 箭头函数没有原型属性prototype
* 箭头函数当方法使用的时候没有定义this绑定
* 无法使用new实例化对象，因为普通构造函数通过new实例化对象的this指向实例对象，而箭头函数没有this值，同时箭头函数也没有prototype
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

todo :看一下es6 箭头函数的讲解


3. call apply bind区别
* 三者都是改变函数调用时的this指向，call参数是逐个传递的，apply参数是以数组形式；**bind和二者唯一的区别就是不会立刻调用函数，而是返回一个能够以后调用的新函数**
```
function greet (lang1, lang2, lang3) {
  alert(`Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"

```

4. HTTP协议
HTTP协议是Hyper Text Transfer Protocol(超文本传输协议)的缩写，是用于从万维网服务器传输超文本到本地浏览器的传送协议。HTTP是基于TCP/IP协议通信协议来传递数据（HTML文件、图片文件、查询结果等）。它不涉及数据包（packet）传输，主要规定了客户端和服务器之间的通信格式，默认使用80端口。

5. JS原型是个理解难点，每次看都是晕的，怎么办？

6. 关于this，记好下面几个规则就行了(多刷点关于this的面试题)
* 指向调用函数前的对象（也就是谁调用就指向谁）
```
function foo() {
		console.log(this.a)
	}
	var a = 3
	foo() // 3  this -> window
	var a = 2;
	var obj = {
		a: 2,
		foo: foo
	}
	obj.foo() // 2 this -> obj
```
* 优先级最高的一种this，就是通过new 声明实例的时候，会自动绑定this到声明的实例上，不会被任何方式修改this指向，如下代码:
```
var c = new foo();
c.a = 3;
console.log(c.a);
```
上面的例子不太好，看不出怎么new的优先级就最高了
* 利用call, apply, bind改变this，这个优先级仅次于new
* 箭头函数的this

7. **执行上下文之函数和变量的提升**，通常提升的解释是说将声明的代码转移到了顶部，这其实没有什么错误，便于大家理解，但是更准确的解释应该是：在生产执行上下文时，会有两个阶段，第一个阶段是创建的阶段（具体步骤是创建vo），JS解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为undefined，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用，**在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升**
```
  console.log(b()); // call b second
  console.log(b); // 打印出来是最后声明的b的函数体，这里体现了函数优先于变量提升的原则
	function b(){
		console.log('call b first');
	}

	function b(){
		console.log('call b second');
	}


	var b = 'hello world';

```
8. 在ES6中引入了const let，const let不能在声明前使用（如果在声明前使用了，会报错），但是这并不是常说的let/const不会提升，let/const提升了但没有赋值，因为临时死区导致了并不能在声明前使用。**const声明的常量一定要赋值，否则会报语法错误！**, 对于非匿名的立即执行函数需要注意以下一点：
```
var foo = 1;
(function foo(){
  foo = 10;
  console.log(foo);
})() // -> f foo(){ foo = 10; console.log(foo)}

var a=1;          
(function a(){
    console.log(1,a); // 打印a函数体
    a=2;
    console.log(2,a); // 打印a函数体
    delete a;
    console.log(3,a); // 打印a函数体
})();
console.log(4,a); // 1
```

因为当JS解释器在遇到非匿名的立即执行函数时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到foo, 但是这有个值是**只读**的，所有对它的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。

9. **闭包**：闭包的定义很简单：函数A返回了一个函数B，并且函数B中使用了函数A的变量，函数B就被称为闭包。（可以把闭包简单理解成 定义在一个函数内部的函数。闭包最大的特点就是它可以记住诞生的环境，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁）
- 闭包形成条件：函数嵌套、内部函数引起外部函数的局部变量
- **每个函数都是闭包，每个函数天生都能够记忆自己定义时所处的作用域环境。不管函数走到哪里，定义时的作用域就带到了哪里**。
* 闭包的内存泄漏
- 全局作用域---只有当页面关闭的时候全局作用域才会销毁；私有的作用域---只有函数执行才会产生
- 一般情况下，函数执行会形成一个新的私有作用域，当私有作用域中的代码执行完成后，我们当前作用域都会主动的进行释放和销毁，但当遇到函数执行返回了一个引用类型的值，并且在函数的外面被一个其他的东西给接收了，这种情况下一般形成的私有作用域都不会销毁。
- 划重点了！！！所谓内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。闭包不能滥用，否则会导致内存泄漏，影响网页的性能。**闭包使用完了后，要立即释放资源，将引用变量指向null**
下面是经典面试题：
```
	for (var i=1; i<=5; i++) {
		setTimeout(function timer(){
			console.log(i);
		}, i*1000)
	}
```
首先因为 setTimeout 是个异步函数，所有会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。解决方法如下：
```
// 法一，使用闭包
for (var i=1; i<=5; i++) {
  (function(j){
    setTimeout(function timer(){
      console.log(j);
    }, j*1000)
  })(i)
}
// 法二 ，使用setTimeout的第三个参数(setTimeout的第三个参数会作为第一个函数的参数)
	for (var i=1; i<=5; i++) {
		setTimeout(function timer(){
			console.log(i);
		}, i*1000, i)
	}
// 法三：使用let定义i，let会创建一个块级作用域
	for (let i=1; i<=5; i++) {
		setTimeout(function timer(){
			console.log(i);
		}, i*1000)
	}
```
[从闭包到setTimeout第三个参数](http://caibaojian.com/settimeout-pram3.html "从闭包到setTimeout第三个参数")

* setTimeout第三个参数作为它里面的第一个函数的参数！！！

10. 深拷贝和浅拷贝，面试必考题，一定要搞清楚，并且要知道每种方法的优缺点，达到可以手写的程度，方能应对面试
> 深拷贝和浅拷贝是只针对Object和Array这样的引用数据类型的。**浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存，但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象**
```
var obj1 = {
  name: 'wangpan',
  age: 29
}
var obj2 = Object.assign({}, obj1);
var obj2 = {...obj1};
// 对于像obj1这种属性值都是基本类型的对象，使用上面两种方法可以实现深拷贝，但是如果属性值是引用类型，这种方法就不行了。
```
> 要考虑数组的情况，各种深拷贝的实现方法，及其优缺点
[彻底说清深拷贝和浅拷贝](https://segmentfault.com/a/1190000012828382 "彻底说清深拷贝和浅拷贝")

[深拷贝与浅拷贝](https://www.cnblogs.com/echolun/p/7889848.html "深拷贝与浅拷贝")

[ljianshu 深拷贝与浅拷贝](https://github.com/ljianshu/Blog/issues/5 "ljianshu 深拷贝与浅拷贝")

11. JS new对象的四个过程(new实现原理)
* 先理清楚 new 关键字调用函数的具体过程，那么写出来就很清楚了
* 首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
* 把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
* 如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象
```
function Person(name, age){
  this.name = name;
  this.age = age;
}
var person = new Person('Alice', 23);
```
1. 创建一个空对象
```
var obj = new Object();
```
2. 让Person中的this指向obj，并执行Person的函数体
```
var result = Person.call(obj);
```
3. 设置原型链，将obj的__ptoto__成员指向了Person函数对象的prototype成员对象
```
obj.__proto__ = Person.prototype;
```
4. 判断Person的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。
(**注意：若构造函数中返回this或返回值是基本类型（number、string、boolean、null、undefined）的值，则返回新实例对象；若返回值是引用类型的值，则实际返回值为这个引用类型。**)
```
if (result && (typeof(result) == 'object' || typeof(result) == 'function')) {
  person = result;
} else {
  person = obj;
}
```

12. instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的prototype。使用举例：
```
[1] instanceof Array

class Person {
		constructor(name){
			this.name = name;
		}
		say () {
			return this.name;
		}
}
const wang = new Person('pandora');
console.log('---data--', wang instanceof Person);
```

13. 防抖和节流，防抖是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。
* 防抖(debounce)：就是指触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。
* 节流(throttle)：就是指连续触发事件但是在n秒中只执行一次函数。节流会稀释函数的执行频率。

[防抖与节流](https://www.jianshu.com/p/c8b86b09daf0 "防抖与节流")
[JS奇淫巧技之防抖与节流](https://www.cnblogs.com/chenqf/p/7986725.html "JS奇淫巧技之防抖与节流")
 * [debounce and throttle](https://github.com/ljianshu/Blog/issues/43 "debounce and throttle")

14. JS中的继承


#### collect urls

* [10个前端必会面试题](https://juejin.im/post/5cd10e69f265da03563247e7?utm_source=wechat "10个前端必会面试题")

* 说出两个在JS中很重要的编程范式吗？---原型继承(js通过原型继承实现面向对象编程)、函数式编程
* 什么是函数式编程---函数式编程，可以归结为面向过程的程序设计，但是结合了更多的数学计算的思想。函数式编程就是一种抽象程度很高的编程范式，纯粹的函数式编程语言编写的函数没有变量，因此，任意一个函数，只要输入是确定的，输出就是确定的，这种纯函数我们称之为没有副作用。（函数式编程就是一种抽象程度较高的编程范式，主要是纯函数，没有副作用。函数语言的例子：Lisp, ML, Haskell, Erlang, Elm等......; 函数式编程的功能：一等函数，高阶函数，函数作为参数/值）

* 类继承和原型继承有什么区别？---1.类继承：js本来是没有类继承的，我们可以通过关键词New来将构造函数实例化，call和apply方法为类式继承提供了支持，改变this的作用域环境，使得子类本身具有父类的各种属性。当然，我们现在拥有了ES6的class，也可以用class来实现类继承。2.原型继承：实例直接从其他对象继承，实例通过工厂函数或"Object.create()"实例化。实例可以由许多不同的对象组成，从而可以方便地选择继承。（类继承：紧密耦合或基于层级的分类；原型继承：提供了原型委托，功能继承，对象组合，比类继承更简单、更灵活）

* 什么是双向数据绑定和单向数据流，它们有何不同？---双向数据绑定意味着view层数据变化，model层的数据页会相应变化，反之亦然。单向数据流意味着Model层数据变化会引起view层数据变化，但view层数据变化无法引起model层的数据变化，数据总是朝着一个方向流动（就像react里的store）

* 单体架构和微服务架构的优缺点？---单体架构就是把所有的业务模块编写在一个项目中，最终会打包成一个war包，然后进行部署；(优点：可以共用很多东西，例如日志记录，速率限制以及审计跟踪等，还有性能优势，因为共享内存访问比进程间通信ipc更快。缺点：随着程序扩大发展，往往会紧密耦合，使得难以将服务隔离并独立扩展出来，且代码可维护性也会变差)    微服务架构意味着应用程序由许多较小的独立应用程序组成，这些应用程序能够在自己的内存空间中运行，并且可能在许多不同的机器上相互独立地进行扩展和协作。（优点：微服务体系结构通常组织得更好，因为每个微服务都有一个非常特定的任务，且不关心其他组件的任务。缺点：微服务部署在虚拟机或容器上，导致VM争用工作激增，运维复杂度提供）----优秀回答：微服务架构一开始成本较高，但微服务从长远来看往往会表现更好并且规模更大。关于微服务和单片应用程序的实用性，要看两者在不同情况下的使用选择

15. XSS 和 CSRF

[XSS参考资料](https://mp.weixin.qq.com/s/bVlCdg4H75VhhI_h-OOhCA "XSS参考资料")
[文章的掘金地址](https://juejin.im/post/5cfdc5c7f265da1b8a4f10f3 "文章掘金地址")

1. 自己作答：
* XSS 跨站脚本攻击 在一些博客的评论区域，注入一段js脚本，在进行攻击——对用户的输入进行编码
* CSRF 跨站请求伪造，诱导用户点击，伪造支付——增加令牌，token验证
2. 网答：
* XSS(Cross-Site Scripting，跨站脚本攻击)是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取cookie、session tokens、或者其它敏感的网站信息，对用户进行钓鱼欺诈，甚至发起蠕虫攻击等。  XSS的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，利用这些信息冒充用户向网站发起攻击者定义的请求。
* XSS分类，根据攻击的来源，XSS攻击可以分为存储型（持久性）、反射型（非持久性）和DOM型三种。
1. 反射型：当用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。Web服务器将注入脚本，比如一个错误信息，搜索结果等，未进行过滤直接返回到用户的浏览器上。**防范：对字符串进行编码**
2. DOM型：实际上是前端js代码不够严谨，把不可信的内容插入到了页面，在使用.innerHTML、.outerHMTL、.appendChild、document.write()等API时要特别小心，不要把不可信的数据作为HTML插入页面上，尽量使用.innerText、.textContent、.setAttribute()等。**防范 DOM 型 XSS 攻击的核心就是对输入内容进行转义(DOM 中的内联事件监听器和链接跳转都能把字符串作为代码运行，需要对其内容进行检查)。**
3. 存储型XSS: 恶意脚本永久存储在目标服务器上。这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。**防范：前后端都需要对数据进行转义/过滤**

16. Promise
[promise](https://juejin.im/post/5ab20c58f265da23a228fe0f "promise")

17. JavaScript reduce()方法，可以参考菜鸟教程

18. H5和客户端的交互方式有哪些？TODO
- [参考资料](https://www.cnblogs.com/yexiaochai/p/4921635.html "参考资料)
- [jsBridge](https://www.jianshu.com/p/fc835051e616 "jsBridge")
- [jsBridge的原理和使用](https://blog.csdn.net/yuzhengfei7/article/details/93468914 "jsBridge的原理和使用")

19. 什么是Ajax? 如何创建一个Ajax？
> AJAX(Asynchronous JavaScript And XML) = 异步javascript + XML在后台与服务器进行异步数据交换，不用重载整个网页，实现局部刷新
```
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.send(data);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
		fn.call(this, xhr.responseText);
	}
};
```

20. http状态码
* 100  Continue   继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
* 200  OK         正常返回信息
* 201  Created    请求成功并且服务器创建了新的资源
* 202  Accepted   服务器已接受请求，但尚未处理
* 301  Moved Permanently  请求的网页已永久移动到新位置。
* 302 Found       临时性重定向。
* 303 See Other   临时性重定向，且总是使用 GET 请求新的 URI。
* 304  Not Modified 自从上次请求后，请求的网页未修改过。（数据是从缓存读取的），对客户端有缓存情况下服务端的一种响应。

* 400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
* 401 Unauthorized 请求未授权。（表示发送的请求需要有通过http认证的认证信息）
* 403 Forbidden   禁止访问。（表示请求资源的访问被服务器拒绝）
* 404 Not Found   找不到如何与 URI 相匹配的资源。

* 500 Internal Server Error  最常见的服务器端错误。
* 503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。

21. 一个页面从输入URL到页面加载显示完成，这个过程都发生了什么？（说的越详细越好）
[HTTP](https://github.com/poetries/FE-Interview-Questions/blob/master/HTTP.md "HTTP")

22. SPA，是指用户在浏览器加载单一的HTML页面，后续请求都无需再离开此页，缺点不利于SEO

23. 模块化开发：commonjs，主要适用于服务器端nodejs;
* AMD由requireJS推广产出，提前执行，推崇依赖前置
* CMS由seaJS推广产出，延迟执行，推崇依赖就近
* ES6模块  Impot,export

24. 移动端最小触控区域是多大？44 * 44px

25. 移动端的点击事件的延迟时间是多长，为什么会有延迟？如何解决这个延时？
> 移动端click有300ms延迟，浏览器为了区分”双击“（放大页面）还是”单击“而设计
> 解决方案：禁用缩放（对safari无效），使用指针事件，使用zepto的tap事件，使用fastclick插件(体积大,压缩后8k)

26. TCP和UDP的区别
> [面试tcp和udp的区别](https://blog.csdn.net/sifanchao/article/details/82285018 "面试tcp和udp的区别")
> https://github.com/ljianshu/Blog/issues/61

27. 浏览器存储：cookie、localStorage、sessionStorage
> cookie, [聊聊cookie](https://segmentfault.com/a/1190000004556040 "聊聊cookie")

28. 浏览器缓存机制，参考[深入理解浏览器缓存机制](https://github.com/ljianshu/Blog/issues/23 "深入理解浏览器缓存机制")
* 从缓存位置上看分为：service worker 、memory cache 、disk cache 、push cache
* 缓存策略：通常浏览器缓存策略分为两种：强缓存和协商缓存，并且缓存策略都是通过设置HTTP Header来实现的。
* **强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的Network选项中可以看到该请求返回200的状态码，并且Size显示from disk cache或from memory cache。强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control。**
* **碎碎念**：这块知识每次看完就忘，看过就忘，得想个办法记住。
29. 模块化详解，参考[前端模块化](https://github.com/ljianshu/Blog/issues/48 "前端模块化")
- commonJS，主要node应用采用commonJS模块规范。module变量代表当前模块，是一个对象，它的exports属性(即module.exports)是对外的接口。**加载某个模块，其实是加载该模块的module.exports属性。equire命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。** commonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。commonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。
- AMD模式可以用于浏览器环境，并且允许非同步加载模块，也可以根据需要动态加载模块。
- CMD规范专门用于浏览器，模块的加载是异步的，模块使用时才会加载执行。在Sea.js中，所有js模块都遵循CMD模块定义规范。
- ES6模块化的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。commonJS和AMD模块，都只能在运行时确定这些东西。
* **ES6与commonJS模块的差异**
- commonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
- commonJS模块是运行时加载，ES6模块是编译时输出接口。
- 第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
- ES6 模块的运行机制与 CommonJS 不一样。ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。
* [require和import区别](https://www.zhihu.com/question/56820346 "require和import区别")

30. 数据类型，分为基本数据类型和引用数据类型
> 基本数据类型，undefined null boolean number string symbol; **基本数据类型的值是不可改变的；**原始数据类型直接**存储在栈(stack)中**的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。
> 引用数据类型，**值是可变的；**引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。**故引用数据类型同时保存在栈内存和堆内存**
> 检测数据类型常用方法：Object.prototype.toString.call()
> 检测数据类型的终极方法：Object.prototype.toString.call(target).slice(8, -1)

31. 数据类型转换
> [1,2,3].toString() --> '1,2,3' 数组转成字符串
> parseInt(要转换的数, 2) --> 第一个参数是要转换的数值，第二个参数是基数

32. 作用域-作用域就是一个独立的地盘，让变量不会外泄、暴露出去。也就是说作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。
> ES6之前js没有块级作用域，只有全局作用域和函数作用域。ES6的到来，为我们提供了块级作用域，可通过新增命令let和const来体现。
> 作用域是分层的，内层作用域可以访问外层作用域的变量，反之则不行。
> let不能在同一个作用域内重复声明。否则会报错！
> 作用域链-如果父级也没有，再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是作用域链。
> JS属于解释型语言，JS的执行分为：解释和执行两个阶段，这两个阶段所做的事并不一样。**解释阶段：**词法分析、语法分析、作用域规则确定；**执行阶段：**创建执行上下文、执行函数代码、垃圾回收
> 执行上下文在运行时确定，随时可能改变；作用域在定义时就确定，并且不会改变。

33. JS执行上下文和执行栈
> 当遇到函数和变量同名且都会被提升的情况，函数声明优先级比较高，因此变量声明会被函数声明所覆盖，但是可以重新赋值。 
```
alert(a);//输出：function a(){ alert('我是函数') }
function a(){ alert('我是函数') }//
var a = '我是变量';
alert(a);   //输出：'我是变量'

function a(){alert('我是函数')} 
var a;    //hoisting
alert(a);    //输出：function a(){ alert('我是函数') }
a = '我是变量';//赋值
alert(a);   //输出：'我是变量'
```
> 确定this指向，**this的值是在执行的时候才能确认，定义的时候不能确认！**——因为this是执行上下文环境的一部分，而执行上下文需要在代码执行之前确定，而不是定义的时候。
> this指向
- 对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是 window
- 对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象
- 在构造函数模式中，类中(函数体中)出现的this.xxx=xxx中的this是当前类的一个实例
- call、apply和bind：this 是第一个参数
- 箭头函数this指向:箭头函数没有自己的this，看其外层的是否有函数，如果有，外层函数的this就是内部箭头函数的this，如果没有，则this是window

34. 细说数组常用遍历的方法: forEach、map、filter、find、every、some、reduce，它们有个共同点：不会改变原始数组。（原始数组的元素是基本类型不会改变，如果是引用类型就会被改变）
- 参考[参考](https://github.com/ljianshu/Blog/issues/31 "参考")
- forEach
```
const colors = ['red', 'blue', 'green'];
colors.forEach(i => {
	console.log(i);
})
// 再来个例子，遍历数组中的值，并计算总和
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(num => sum += num)
console.log(sum); // 15
```

- map将数组映射成另一个数组，map通过指定函数处理数组的每个元素，并返回处理后新的数组，map不会改变原始数组。forEach和map的区别在于，forEach没有返回值。map需要返回值，如果不给return，默认返回undefined
```
const numbers = [1, 2, 3];
const doubleNumbers = numbers.map(i => {
	return i * 2;
})
console.log(doubleNumbers); // [2, 4, 6]

// 假定有一个对象数组(A)，将A数中对象某个属性的值存储到B数组中
var cars = [
  {model:"Buick",price:"CHEAP"},
  {model:"BMW",price:"expensive"}
];
var prices = cars.map(function(car){
    return car.price;
})
console.log(prices); // ["CHEAP", "expensive"]
```

- filter: 从数组中找出所有符合指定条件的元素。filter()检查数值元素，并返回符合条件所有元素的数组。filter()不会改变原始数组。
```
// 假定有一个对象数组(A)，获取数组中指定类型的对象放到B数组中
var porducts = [
  {name:"cucumber",type:"vegetable"},
  {name:"banana",type:"fruit"},
  {name:"celery",type:"vegetable"},
  {name:"orange",type:"fruit"}
];
var filtered2 = porducts.filter(function(product){
  return product.type === "vegetable";
})
console.log(filtered2);

// 假定有一个对象数组(A)，过滤掉不满足以下条件的对象 ，条件：蔬菜 数量大于0， 价格小于10
var products = [
  {name:"cucumber",type:"vegetable",quantity:0,price:1},
  {name:"banana",type:"fruit",quantity:10,price:16},
  {name:"celery",type:"vegetable",quantity:30,price:8},
  {name:"orange",type:"fruit",quantity:3,price:6}
];
products = products.filter(function(product){
    return product.type === "vegetable" 
    && product.quantity > 0 
    && product.price < 10
})
console.log(products); // [{name:"celery",type:"vegetable",quantity:30,price:8}]
```
- find：返回通过测试（函数内判断）的数组的第一个元素的值，它的参数是一个回调函数，所有数组成员一次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
```
// 假定有一个对象数组(A)，找到符合条件的对象(找到符合条件的元素)
var users = [
  {name:"Jill"},
  {name:"Alex",id:2},
  {name:"Bill"},
  {name:"Alex"}
 ];
var user;
user = users.find(i => {
	return i.name === 'Alex';
})
console.log(user); // {name: 'Alex', id:2}
```
- every&some: every-数组中是否每个元素都满足指定的条件；some-数组中是否有元素满足指定的条件
```
var computers = [
 {name:"Apple",ram:16},
 {name:"IBM",ram:4},
 {name:"Acer",ram:32}
];
var every = computers.every(i => {
	return i.ram > 16;
})
console.log(every); // false
var some = computers.some(i => {
	return i.ram > 16;
})
console.log(some); // true
```
**一言以蔽之：some一真即真；every一假即假**

- reduce: 将数组合成一个值, reduce()方法接收一个方法作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值。
```
// 使用场景1 计算数组中所有值的总和
var numbers = [10, 20, 30];
var sum = 0;
var sumValue = numbers.reduce(function(sum2,number2){
	return sum2 + number2;
}, 0); // sum2初始值为0
console.log(sumValue);
// 使用场景2：将数组中对象的某个属性抽离到另外一个数组中
var primaryColors = [
   {color:"red"},
   {color:"yellow"},
   {color:"blue"}
 ];
 var colors = primaryColors.reduce(function(previous, primaryColor){
	 previous.push(primaryColor.color);
	 return previous;
 },[]);
 console.log(colors); // ['red', 'yellow', 'blue']
```
* **另外ES6数组的扩展---Array.from() Array.of()**
- Array.from()：将伪数组对象(典型的类似数组的对象有函数的arguments对象，以及大多数DOM元素集，还有字符串)或可遍历对象转换为真数组。
```
Array.from('abc'); // ['a', 'b', 'c']
[...'abc']; // ['a', 'b', 'c']
```
- Array.of()：将一系列值转换成数组
- 当调用 new Array( )构造器时，根据传入参数的类型与数量的不同，实际上会导致一些不同的结果， 例如：
```
let items = new Array(2) ;
console.log(items.length) ; // 2
console.log(items[0]) ; // undefined
console.log(items[1]) ;

let items = new Array(1, 2) ;
console.log(items.length) ; // 2
console.log(items[0]) ; // 1
console.log(items[1]) ; // 2
```
- ES6引入了Array.of()方法来解决这个问题。Array.of()方法总会创建一个包含所有传入参数的数组，而不管参数的数量和类型 。
```
let items = Array.of(1, 2);
console.log(items.length); // 2
console.log(items[0]); // 1
console.log(items[1]); // 2
items = Array.of(2);
console.log(items.length); // 1
console.log(items[0]); // 2
```

35. this指向
- 函数执行时首先看函数名前面是否有“.”，有的话，“.”前面是谁，this就是谁；没有的话this就是window
- 自执行函数(IIFE)中的this永远是window
- 给元素的某一个事件绑定方法，当事件触发的时候，执行对应的方法，方法中的this是当前的元素。
- 在构造函数模式中，类中（函数体中）出现的this.xxx=xxx中的this是当前类的一个实例。
- call/apply bind
> call和apply方法的作用是一模一样的，都是用来改变方法的this关键字并且把方法执行，两者唯一的区别：call在给fn传递参数的时候，是**一个个**的传递值的，而apply不是一个个传，而是把要给fn传递的参数值统一的放在一个**数组**中进行操作；bind也是用来改变this指向的，但是和前面两者有明显区别---bind体现了预处理思想：事先把fn的this改变为我们想要的结果，并且把对应的参数值也准备好，以后要用到了，直接的执行即可。call和apply直接执行函数，而bind需要再一次调用。
- 箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this。箭头函数的this看外层的是否有函数，如果有，外层函数的this就是内部箭头函数的this，如果没有，则this就是window。（由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略）

36. 原型与原型链
> 在JS中，每当定义一个函数数据类型（普通函数、类）时候，都会天生自带一个prototype属性，这个属性指向函数的原型对象，并且这个属性是一个对象数据类型的值。
> 每一个对象数据类型（普通的对象、实例、prototype....）也天生自带一个属性__proto__, 属性值是当前实例所属类的原型(prototye)，原型对象中有一个属性constructor, 它指向函数对象。
> 在js中万物都是对象，对象和对象之间也有关系，并不是孤立存在的。对象之间的继承关系，在JS中是通过prototype对象指向父类对象，直到指向object对象为止，这样就形成了一个原型指向的链条，专业术语称之为原型链。
> 当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用，如果没有则去原型的原型中寻找，直到找到object对象的原型，object对象的原型没有原型，如果在object原型中依然没有找到，则返回undefined。

36. [js常见的六种继承方式](https://github.com/ljianshu/Blog/issues/20 "js常见的六种继承方式")

37. 浏览器与node的事件循环（event loop）有何区别？
- [参考](https://github.com/ljianshu/Blog/issues/54 "参考")
> 答：microtask任务队列的执行时机不同，node端，microtask在事件循环的各个阶段之间执行；浏览器端，microtask在事件循环的macrotask执行完之后执行。
* 在chrome浏览器中，每打开一个tab页，其实就是创建了一个进程，一个进程可以有多个线程，比如渲染线程、JS引擎线程、HTTP请求线程等等。当发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。

38. 垃圾回收
> 垃圾回收有两种方法：标记清除、引用计数，其中标记清除是最常用的垃圾回收方式。垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。
> 容易引起内存泄漏的情况：意外的全局变量、被遗忘的计时器或回调函数、闭包

39. 几种遍历方式比较
- for of 循环不仅支持数组、大多数伪数组对象，也支持字符串遍历，此外还支持 Map 和 Set 对象遍历。
- for in循环可以遍历字符串、对象、数组，不能遍历Set/Map
- forEach 循环不能遍历字符串、对象,可以遍历Set/Map

40. 异步解决方案-Promise与Async/Await
- Promise.all接受一个promise对象的数组，待全部完成之后，统一执行success; Promise.race接受一个包含多个promise对象的数组，只要有一个完成，就执行success
- Async/Await错误处理---await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。try...catch错误处理也比较符合我们平常编写同步代码时候处理的逻辑。
```
async function myFuntion () {
  try {
    await somethingThatReturnsPromise();
  } catch (e) {
    console.log(e);
  }
}
```

* 写博客是件挺费精力的事，特别是你有想写出一篇好博客的初衷,本文前后花了不止五六个小时，但我却常常乐此不疲！一方面是看了很多博客，自己不手动敲一遍整理一遍，就感觉没掌握一样;另一方面，分享学习心得是件很快乐的事，愿与诸君共同成长进步！如果觉得本文还不错，记得点赞关注喔！因为往往是普通人才最需要别人的鼓励和支持！

41. 响应式布局
* rem响应式布局
- 一般不要给元素设置具体的宽度,但是对于一些小图标可以设定具体宽度值
- 高度值可以设置固定值,设计稿有多大,我们就严格写多大
- 所有设置的固定值都用 REM 做单位(首先在 HTML 中设置一个基准值：PX 和 REM 的对应比例,然后在效果图上获取 PX 值,布局的时候转化为 REM 值)
- JS 获取真实屏幕的宽度,让其除以设计稿的宽度,算出比例,把之前的基准值按照比例进行重新的设定,这样项目就可以在移动端自适应了

* 什么是rem, 它与em有何区别？
> rem: 当前页面中元素的REM单位的样式值都是针对于HTML元素的font-size的值进行动态计算的；
> em: 表示父元素的字号的倍数。

42. 实现三栏布局的几种方法
> [参考](https://github.com/ljianshu/Blog/issues/14 "参考")

43. Ajax原理
* Ajax是一种异步请求数据的web开发技术，对于改善用户的体验和页面性能很有帮助。（Ajax的目的就是提高用户体验，减少网络数据的传输量）
* Ajax原理：与“领导委托**秘书**想找小李汇报工”类似，(领导告诉秘书把小李叫过来 -> 领导接着干别的事情 -> 秘书去叫小李 -> 秘书领小李过来 -> 秘书告诉领导小李来了 -> 小李跟领导汇报工作了)，其中核心的依赖是浏览器提供的**XMLHttpRequest**对象。它扮演的角色相当于“秘书”

44. fetch
* fetch语法简洁，更加语义化，业务逻辑更清晰；**基于标准promise实现，支持async/await**；同构方便。

45. 懒加载和预加载（性能优化的点）
* 懒加载也叫延迟加载，指的是在长网页中延迟加载图像，是一种很好的优化网页性能的方式。（懒加载主要用于长网页，加载多个图片的情况，多见电商网站场景）用户滚动到它们之前，可视区域外的图像不会加载。
* 懒加载的好处：提升用户体验；减少无效资源的加载；防止并发加载的资源过多会阻塞js的加载
* 懒加载的原理：首先将页面上的图片的src属性设为空字符串，而图片的真实路径则设置在data-original属性中，当页面滚动的时候监听scroll事件，在scroll事件的回调中，判断我们的懒加载的图片是否进入可视区域，如果图片在可视区域将图片的src属性设置为data-original的值，这样就可以实现延迟加载。

* 预加载：简单来说是将所有所需的资源提前请求加载到本地，这样后面在需要到时就直接从缓存中获取资源。(也像是针对图片加载的)
* 为什么要用预加载：在网页全部加载之前，对一些主要内容进行加载，以提供给用户更好的体验，减少等待的时间。否则，如果一个页面的内容过于庞大，没有使用预加载技术的页面就会长时间的展现为一片空白，直到所有内容加载完毕。
* 实现预加载的方法：
```
<img src="http://pic12.jpg" style="display:none" />
or use PreloadJS库
```

**懒加载和预加载的对比：两者都是提高页面性能有效的方法，主要区别是一个是提前加载，一个是延迟甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力**

46. 分析比较opcity:0、visibility:hidden、display:none的优劣和适用场景
* 结构：display:none 会让元素完全从渲染树中消失，渲染的时候不占据任何空间，不能点击，visibility:hidden不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击，
opaciy:0不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，**可以点击**
* 继承：display:none和opacity:0，是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。visibility:hidden是继承属性，子孙节点消失由于继承了hidden，通过设置visibility:visible ，可以让子孙节点显示。
* 性能：display: none，修改元素会造成文档回流，读屏器不会读取display: none元素内容，性能消耗较大 visibility: hidden,修改元素只会造成本元素的重绘，性能消耗较少，读屏器可以读取visibility:hidden内容。opacity: 0修改元素会造成重绘，性能消耗较少。
* 联系： 它们都能让元素不可见。

47. var,let和const区别，及实现原理是什么？
* var声明的变量可以修改，存在变量提升和初始化，而let和const只完成了声明，没有初始化那一步，此时如果在此作用域提前访问，则报错xx is not defined，这就是暂时性死区的由来。
* var的话会直接在栈内存里预分配内存空间，然后等到实际语句执行的时候，再存储对应的变量，如果传的是引用类型，那么会在堆内存里开辟一个内存空间存储实际内存，栈内存会存储一个指向堆内存的指针。  let的话，是不会在栈内存里预分配内存空间，而且在栈内存分配变量时，做一个检查，如果已经有相同变量名存在就会报错。  const的话，也不会预分配内存空间，在栈内存分配变量时也会做同样的检查。不过const存储的变量时不可修改的。**对于基本类型来说无法修改定义的值，对于引用类型来说你无法修改栈内存里分配的指针，但是你可以修改指针指向的对象里面的属性**。
* var声明的变量是挂载到window上面的，而let const声明的不是挂载在window上面的, 而是存在一个块级作用域内。
* let const声明的变量的作用域是块级的。var声明的不是

48. js中的map some every forEach用法总结：https://blog.csdn.net/weixin_36934930/article/details/81061063

49. [JS中slice,splice,split的区别](https://www.cnblogs.com/mangoWeb/p/3517801.html "sllice/splice/split")

50. 写出下列代码的执行结果
```
async function async1() {
   console.log('async1 start')
   await async2()
   console.log('async1 end')
}
async function async2() {
   console.log('async2')
}
console.log('script start')
setTimeout(function () {
   console.log('settimeout')
})
async1()
new Promise(function (resolve) {
   console.log('promise1')
   resolve()
}).then(function () {
   console.log('promise2')
})
console.log('script end')
```
* 结果：script start --> async1 start --> async2 --> promise1 --> script end --> async1 end --> promise2 --> settimeout
* [详解](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7 "详解")

51. 数据类型的判断
- typeof 返回一个表示数据类型的字符串。返回结果包括：number、boolean、string、symbol、object、undefined、function等7种数据类型，但不能判断null、array等。
- instanceof 是用来判断A是否为B的实例，表达式为：A instanceof B，如果A是B的实例，则返回true，否则返回false。
instanceof运算符用来测试一个对象在其原型链中是否存在一个构造函数的prototype属性，但它不能检测null和undefined
- constructor作用和instanceof非常相似。但constructor检测Object与instanceof不一样，还可以处理基本数据类型的检测。
- **Object.prototype.toString.call()是最准确常用的方法。**

52. osi模型---七层结构：物理层、数据链路层、网络层、会话层、表示层、应用层；tcp ucp属于传输层，http属于应用层。

53. babel原理---ES6、7代码输入 -> babylon进行解析 -> 得到AST（抽象语法树）-> plugin用babel-traverse对AST树进行遍历转译 -> 得到新的AST树 -> 用babel-generator通过AST树生产ES5代码

54. promise---Promise对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止，也即是说，错误总会被下一个catche语句捕获。

55. 前后端路由差别---后端每次路由请求都是重新访问服务器；前端路由实际上只是JS根据URL来操作DOM元素，根据每个页面需要的去服务器请求数据，返回数据后和模板进行组合。

56. setTimeout倒计时为什么会出现误差？---setTimeout只能保证延时或间隔不小于设定的时间。因为它实际上只是将回调添加到了宏任务队列中，但是如果主线程上有任务还没有执行完成，它必须要等待。

57. Number.isNaN() 方法确定传递的值是否为 NaN，并且检查其类型是否为 Number。它是原来的全局 isNaN() 的更稳妥的版本。(isNaN---当我们向isNaN传递一个参数，它的本意是通过Number()方法尝试将这参数转换成Number类型，如果成功返回false，如果失败返回true，所以isNaN只是判断传入的参数是否能转换成数字，并不是严格的判断是否等于NaN。Number.isNaN判断传入的参数是否严格的等于NaN也就是===。二者最大的区别是，Number.isNaN不存在类型转换的行为。Number.isNaN方法，只是严格的判断传入的参数是否全等于NaN(eg: '测试' === NaN，输出false))。
- [isNaN()和Number.isNaN()的区别](https://www.cnblogs.com/Mrrabbit/p/10990218.html "isNaN()和Number.isNaN()的区别")

58. ES6模块与CommonJS模块有什么区别？
- ES6 Module和CommonJS模块的区别：CommonJS是对模块的浅拷贝，ES6 Module是对模块的引用,即ES6 Module只存只读，不能改变其值，具体点就是指针指向不能变，类似const
import的接口是read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向,可以对commonJS对重新赋值（改变指针指向），但是对ES6 Module赋值会编译报错。
- ES6 Module和CommonJS模块的共同点：CommonJS和ES6 Module都可以对引入的对象进行赋值，即对对象内部属性的值进行改变。
- [参考](https://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82 "参考")

59. 函数柯里化---在一个函数中，首先填充几个参数，然后再返回一个新的函数的技术，成为函数的柯里化。

60. 事件代理/委托---事件委托是指将事件绑定目标元素的父元素上，利用冒泡机制触发该事件。优点：可以减少事件注册，节省大量内存占用，可以将事件应用于动态添加的子元素上。缺点：使用不当会造成事件在不应该触发时触发。

61. TCP三次握手---建立连接前，客户端和服务端需要通过握手来确认对方：
- 客户端发送syn(同步序列编号)请求，进入syn_send状态，等待确认
- 服务端接收并确认syn包后发送syn + ack包，进入syn_recv状态
- 客户端接收syn + ack包后，发送ack包，双方进入established状态

62. TCP四次挥手
- 客户端 -- FIN --> 服务端，FIN -- WAIT
- 服务端 -- ACK --> 客户端， CLOSE -- WAIT
- 服务端 -- ACK, FIN --> 客户端，LAST -ACK
- 客户端 -- ACK --> 服务端，CLOSED