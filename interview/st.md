

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