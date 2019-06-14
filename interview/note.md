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
* 通过增加尾元素清楚浮动- :after/:clear:both
* 创建父级BFC
* 父级设置高度

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
	border-color: transparent transparent transparent red;
}
```

9. **display:none与visibility:hidden的区别？**
> display:none 不显示对应的元素，在文档布局中不再分配空间（会引起回流和重绘）
> visibility:hidden 隐藏对应元素，在文档布局中仍保留原来的空间（会引起重绘）
> 所以，从性能优化方面来说，应该使用visibility: hidden

10. **元素竖向的百分比设定是相对于容器的高度吗**
> 当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如padding-top/padding-bottom/margin-top/margin-bottom等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

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





8. **css动画**
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

todo :看一下es6 箭头函数的讲解


3. call apply bind区别
* apply参数是数组形式

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
8. 在ES6中引入了const let，const let不能在声明前使用（如果在声明前使用了，会报错），但是这并不是常说的let/const不会提升，let/const提升了但没有赋值，因为临时死区导致了并不能在声明前使用。对于非匿名的立即执行函数需要注意以下一点：
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

9. **闭包**：闭包的定义很简单：函数A返回了一个函数B，并且函数B中使用了函数A的变量，函数B就被称为闭包。下面是经典面试题：
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

11. JS new对象的四个过程
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
if (typeof(result) == 'object') {
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

14. JS中的继承


#### cllect urls

* [10个前端必会面试题](https://juejin.im/post/5cd10e69f265da03563247e7?utm_source=wechat "10个前端必会面试题")

15. XSS 和 CSRF

[XSS参考资料](https://mp.weixin.qq.com/s/bVlCdg4H75VhhI_h-OOhCA "XSS参考资料")
[文章的掘金地址](https://juejin.im/post/5cfdc5c7f265da1b8a4f10f3 "文章掘金地址")

1. 自己作答：
* XSS 跨站脚本攻击 在一些博客的评论区域，注入一段js脚本，在进行攻击——对用户的输入进行编码
* CSRF 跨站请求伪造，诱导用户点击，伪造支付——增加令牌，token验证
2. 网答：
* XSS(Cross-Site Scripting，跨站脚本攻击)是一种代码注入攻击。攻击者在目标网站上注入恶意diam，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取cookie、session tokens、或者其它敏感的网站信息，对用户进行钓鱼欺诈，甚至发起蠕虫攻击等。  XSS的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信的，导致恶意脚本被执行。由于直接在用户的终端执行，恶意代码能够直接获取用户的信息，利用这些信息冒充用户向网站发起攻击者定义的请求。
* XSS分类，根据攻击的来源，XSS攻击可以分为存储型（持久性）、反射型（非持久性）和DOM型三种。
1. 反射型：当用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。Web服务器将注入脚本，比如一个错误信息，搜索结果等，未进行过滤直接返回到用户的浏览器上。**防范：对字符串进行编码**
2. DOM型：实际上是前端js代码不够严谨，把不可信的内容插入到了页面，在使用.innerHTML、.outerHMTL、.appendChild、document.write()等API时要特别小心，不要把不可行的数据作为HTML插入页面上，尽量使用.innerText、.textContent、.setAttribute()等。**防范 DOM 型 XSS 攻击的核心就是对输入内容进行转义(DOM 中的内联事件监听器和链接跳转都能把字符串作为代码运行，需要对其内容进行检查)。**
3. 存储型XSS: 恶意脚本永久存储在目标服务器上。这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。**防范：前后端都需要对数据进行转义/过滤**
