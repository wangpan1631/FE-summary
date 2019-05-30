###读winter的重学前端
####建立自己的知识架构、对知识要追本溯源

#### 05节

1. **数据类型（内置类型）**
JS有7种内置类型，分为两大类型：基本类型和对象Object

* 基本类型：string  number  boolean null  undefined symbol

* 对于**undefined**, 有的编程规范要求用void 0代替undefined, 为什么呢？因为JavaScript的代码undefined是一个变量，而并非是一个关键字，这是JavaScript语言公认的设计失误之一，所以，我们为了避免无意中被篡改，建议使用viod 0来获取undefined值。
* 对于**null**, 表示的是“定义了但是为空”，它的语义表示空值，与undefined不同，null是JavaScript关键字，所以在任何代码中，我们都可以放心使用null关键字来获取null值。
* 对于**String**, 用于表示文本数据，一旦字符串构造出来，无法用任何方式改变字符串的内容。String有最大长度是2^53 - 1，但这个所谓的最大长度，并不完全是我们理解的字符数，因为String的意义并非“字符串”，而是字符串的UTF16编码，我们字符串的操作charAT、charCodeAt、length等方法针对的都是UTF16编码。所以，字符串的最大长度，实际上是受字符串的编码长度影响。
* 对于**Number**，需要注意几个特殊值，NaN、Infinity(无穷大)、-Infinity(负无穷大)，JavaScript中有+0和-0，在加法类运算中他们没有区别，但是除法的场合则需要特别留意区分，“忘记检查除以-0，而得到负无穷大”的情况经常会导致错误，而区分+0和-0的方式，正式检测1/x是Infinity还是-Infinity。
* 0.1 + 0.2 == 0.3 结果是false，这个错误的不是结论，而是比较的方法，正确的比较方法是使用JavaScript提供的最小精度值：console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON>)，检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法。这段代码结果就是true了。

* Symbol， 是ES6中引入的新类型，它是一切非字符串的对象Key的集合，在ES6规范中，整个对象系统被用Symbol重塑，它的最大特点就是**独一无二**。
* Symbol 的用途就是如此：Symbol 可以创建一个独一无二的值（但并不是字符串）（Symbol 生成一个全局唯一的值。）
* Symbol迭代器: Symbol.Iterator，对象的Symbol.Iterator属性，指向这个对象的默认遍历器：
```
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]); // [1, 2, 3]
```

[Symbol使用场景举例](https://zhuanlan.zhihu.com/p/22652486 "Symbol使用场景举例")

* Object, 对象的定义是“属性的集合”。属性分为数据属性和访问器属性，二者都是key-value结构，key可以是字符串或者Symbol类型。JavaScript中的“类”， 仅仅是运行时对象的一个私有属性，而JavaScript中是无法自定义类型的。
* JavaScript中的几个基本类型，都在对象类型中有一个“亲戚”，它们是：Number String Boolean Symbol, 所以，我们必须认识到3与new Number(3)是完全不同的值，前者是Number类型，后者是Object类型，Number String Boolean，三个构造器是两用的，当跟new搭配时，它们产生对象，当直接调用时，它们表示强制类型转换。Symbol函数比较特殊，直接用new调用它会抛出错误，但它们仍然是Symbol对象的构造器。
* 为什么给对象添加的方法能用在基本类型上？答案：.运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。

#### 06节 JavaScript面向对象，面向对象还是基于对象？ 看的优点晦涩，没有学习到非同寻常的知识点，也可能是没理解

#### 07节 JavaScript面向对象，我们真的需要模拟类吗？
