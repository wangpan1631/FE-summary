* ES5/ES6的继承除了写法以外还有什么区别？
```
// ES6
class Super {}
class Sub extends Super {}

const sub = new Sub();

Sub.__proto__ === Super; // true
// ES5
function Super() {}
function Sub() {}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

var sub = new Sub();

Sub.__proto__ === Function.prototype; // true

```
* 补充一点：ES5 和 ES6 子类 this 生成顺序不同。ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例，ES6 的继承先生成父类实例，再调用子类的构造函数修饰父类实例。这个差别使得 ES6 可以继承内置对象。