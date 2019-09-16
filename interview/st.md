

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