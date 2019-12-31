

1. 下面代码的输出是什么？
```
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};
shape.diameter(); // 20，普通函数的this指向它的调用者，谁调用就指向谁
shape.perimeter(); // NaN，箭头函数this指向它所在上下文（定义时的位置）的环境，与普通函数不同
```
2. 下面代码输出什么？
```
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
    }
    consturctor({ newColor = 'green' } = {}) {
        this.newColor = newColor;
    })
}
const freddie = new Chameon({ newColor: 'purple' });
freddie.colorChange('orange');
```
* 解：输出TypeError，colorChange方法是静态的，静态方法仅在创建它们的构造函数中存在，并且不能传递给任何子级，因为freddie是一个子级对象，函数不会传递，所以在freddie实例上不存在freddie方法，抛出TypeError

3. 下面代码的输出是什么？
```
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```
* 解：0 2 2 

4. 
```
function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}
const person = 'Lydia';
const age = 21;
getPersonInfo`${person} is ${age} years old`;
```
* 解：["", "is", "years old"] Lydia 21，如果使用标记的模板字符串，则第一个参数的值始终是字符串值的数组。其余参数获取传递到模板字符串中的表达式的值！
5. cool_secret可以访问多长时间？
```
sessionStorage.setItem("cool_secret", 123)'
```
* 解： 关闭选项卡后，将删除存储在sessionStorage中的数据。如果使用localStorage，数据将永远存在，除非例如调用localStorage.clear()。

6. 下面代码的输出是什么？
```
const obj = { 1: "a", 2: "b", 3: "c"};
const set = new Set([1, 2, 3, 4, 5]);
obj.hasOwnProperty("1"); // true
obj.hasOwnProperty(1); // true
set.has("1"); // false
set.has(1); // true
```
* 解： 所有对象键（不包括Symbols）都会被存储为字符串，即使你没有给定字符串类型的键。不过这个说法不适用于Set，在我们的Set中没有"1"

* 性能优化
多使用内存、缓存，减少CPU计算，减少网络请求
减少I/O操作，对硬盘的读写 输入输出
加载页面和静态资源
页面渲染
加载资源优化：静态资源合并压缩、静态资源缓存、使用CDN让资源加载更快、使用SSR后端渲染，数据直接输出到HTML中（不再需要ajax发送请求）
渲染优化：懒加载（图片懒加载、下拉加载更多）、减少DOM查询，对DOM查询做缓存、减少DOM操作，多个操作尽量合并在一起执行、事件节流、尽早执行操作（如：DOMContentLoaded）
事件节流
```
var textarea = document.getElementById('text');
var timeoutId;
textarea.addEventListener("keyup", function(){
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function(){
        // 触发change事件
    }, 100)
})

```
* 下面代码的输出是什么？
```
const obj = { a: 'one', b: 'two', a: 'three'};
console.log(obj);
```
* 解：输出{ a: 'three', b: 'two'}，如果对象有两个具有相同名称的键，则将替换前面的键。它仍将处于第一个位置，但具有最后指定的值。

* 下面代码的输出是什么？
```
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
```
* 解：输出456，对象键自动转换为字符串。我们试图将一个对象设置为对象a的键，其值为123。
但是，当对象自动转换为字符串化时，它变成了[Object object]。 所以我们在这里说的是a["Object object"] = 123。 然后，我们可以尝试再次做同样的事情。 c对象同样会发生隐式类型转换。那么，a["Object object"] = 456。
然后，我们打印a[b]，它实际上是a["Object object"]。 我们将其设置为456，因此返回456。

* ("") 是true，(" ")是false

* 下面代码的输出是什么？
```
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```
* 解：输出[1, 2, 0, 1, 2, 3]。[1,2]是我们的初始值。 这是我们开始执行reduce函数的初始值，以及第一个acc的值。 在第一轮中，acc是[1,2]，cur是[0,1]。 我们将它们连接起来，结果是[1,2,0,1]。然后，acc的值为[1,2,0,1]，cur的值为[2,3]。 我们将它们连接起来，得到[1,2,0,1,2,3]。

7. 
```
function yideng(){
    console.log(1);
}
(function(){
    if(false){
        function yideng(){
            console.log(2);
        }
    }
    yideng();
})()
// 报错 yideng is not a function
// 不同浏览器上表现不一样
```

8. what's the output?
```
let person = { name: 'Lydia' };
const members = [person];
person = null; // 即便是给person赋一个正常的对象值，结果都是一样
console.log(members); // 输出结果是 [{ name: "Lydia" }]
```

9. what's the value of num ?
```
const num = parseInt("7*6", 10); // 你是不是觉得输出 42，不，结果是输出 7
```

10. what's the output?
```
// counter.js
let counter = 10;
export default counter;

// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
// 结果输出：Error
// An imported module is read-only: you cannot modify the imported module. Only the module that exports them can change its value. When we try to increment the value of myCounter, it throws an error: myCounter is read-only and cannot be modifed.

```

11. what's the output?
```
const name = "lily";
age = 22;
console.log(delete name); // false
console.log(delete age); // true
```
> delete操作符删除成功的时候返回true，否则返回false，但是由var, const, let声明的变量不能使用delete删除。

12. what's the output?
```
const person = { name: "Lydia" };
Object.defineProperty(person, "age", { value: 21 });
console.log(person); // { name: "Lydia", age: 21 }
console.log(Object.keys(person)); // ["name"] Object.defineProperty添加的属性，默认情况下是不可以修改的。
```

13. what's the output?
```
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1); // 10
console.log(num2); // 10
```
> The unary operator ++ first returns the value of the operand, then increments the value of the operand. The value of num1 is 10, since the increaseNumber function first returns the value of num, which is 10, and only increments the value of num afterwards; num2 is 10, since we passed num1 to the increasePassedNumber. number is equal to 10(the value of num1. Again, the unary operator ++ first returns the value of the operand, then increments the value of the operand. The value of number is 10, so num2 is equal to 10.

14. what's the output?
```
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```
> 输出结果是running sum.js  running index.js  3
> 所有的import模块是提前解析的，这意味着import模块会提前执行，在CommonJS里require()是不一样的，require是同步执行的，如果这道题改成require输出结果是running index.js   running sum.js   3

15. what's the output?
```
function addToList(item, list){
    return list.push(item);
}
const result = addToList('apple', ['banana']);
console.log(result);  // 2
```
* push()方法返回数组的长度, 会修改原来数组。

16. what's the output?
```
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10)); // Calculated! 20
console.log(addFunction(10)); // From cache! 20
console.log(addFunction(5 * 2)); // From cache! 20
```
* 这道题里面的num很容易被迷惑，对象的key可以是字符串，可以是数字

17. what's the output?
```
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus()) // "🥑" 这里的this指data
  console.log(data.getStatus.call(this)) // "😎" 这里的this指window 
}, 0)
```

18. what's the output?
```
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21)) // ReferenceError const {} 块级作用域，return message 没有声明
```

19. what's the output?
```
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange") // Uncaught SyntaxError: Rest parameter must be last formal parameter
```

20. what's the output?
```
let name = 'Lydia';
function getName(){
  console.log(name);
  let name = 'Sarah';
}
getName(); // ReferenceError: Cannot access 'name' before initialization
```
21. what will happen?
```
let config = {
  alert: setInterval(() => {
    console.log('Alert');
  }, 1000)
};
config = null
// The setInterval callback will still be called every second
```
22. 输出以下代码的执行结果并解释为什么？
```
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x); // undefined
console.log(b.x); // {n: 2}
// 首先，a和b同时引用了{n: 2}对象，接着执行到a.x = a = {n: 2}语句，尽管赋值是从右到左的没错，但是.的优先级比=要高，所以这里首先执行a.x，相当于为a(或b)所指向的{n: 1}对象新增了一个属性x, 即此时对象将变为{n: 1; x: undefined}。之后按正常情况，从右到左进行赋值，此时执行a = {n: 2}的时候，a的引用改变，指向了新对象{n: 2}, 而b依然指向的是旧对象。之后执行a.x = {n: 2}，并不会重新解析一遍a，而是沿用最初解析a.x时候的a，也即旧对象，故此时旧对象的x的值为{n: 2}, 旧对象为{n: 1, x: {n: 2}}，它被b引用着。后面输出a.x的时候，又要解析a了，此时的a是指向新对象的a，而这个新对象是没有x属性的，故访问时输出undefined，而访问b.x的时候，将输出旧对象的x的值，即{n: 2}
```
23. a.b.c.d和a['b']['c']['d']哪个性能更高？
* 应该是a.b.c.d比a['b']['c']['d']性能高点，后者还要考虑 [] 中是变量的情况，再者，从两种形式的结构来看，显然编译器解析前者要比后者容易些，自然也就快一点。