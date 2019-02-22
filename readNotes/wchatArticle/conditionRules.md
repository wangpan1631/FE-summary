#### 写好js条件语句

1. 多重判断使用Array.includes()

```
function test (fruit) {
    if(fruit === 'apple' || fruit === 'strawberry'){
        console.log('red');
    }
}

```
**good**

```
function test(fruit){
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
    if(redFruits.includes(fruit)){
        console.log('red');
    }
}
```

2. 使用默认参数和解构

```
function test(fruit, quantity){
    if(!fruit) return;
    const q = quantity || 1;
    console.log(`we have ${q} ${fruit}!`)
}
//test results
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!
```

实际上我们可以通过声明默认参数来消除变量q

```
function test(fruit, quantity = 1){
    // 如果quantity参数没有传入，设置默认参数值1
    if (!fruit) return;
    console.log(`We have ${quantity} ${fruit}!`);
}
//test results
test('banana'); // We have 1 banana!
test('apple', 2); // We have 2 apple!
```

3. 倾向于对象遍历而不是Switch语句

让我们看下面这个例子，我们想根据 color 打印出水果:

```
function test(color) {
  // 使用条件语句来寻找对应颜色的水果
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}

// test results
test(null); // []
test('yellow'); // ['banana', 'pineapple']
```

上面的代码看起来没有错误，但是我找到了一些累赘。用对象遍历实现相同的结果，语法看起来更简洁:

```
const fruitColor = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum']
};

function test(color) {
  return fruitColor[color] || [];
}
```

或者你也可以使用 Map实现相同的结果:

```
  const fruitColor = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum']);

function test(color) {
  return fruitColor.get(color) || [];
}
```

4. 对 所有/部分 判断使用Array.every & Array.some

这最后一个建议更多是关于利用 JavaScript Array 的内置方法来减少代码行数。看下面的代码，我们想要检查是否所有水果都是红色:

```
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

function test() {
  let isAllRed = true;

  // 条件：所有水果都是红色
  for (let f of fruits) {
    if (!isAllRed) break;
    isAllRed = (f.color == 'red');
  }

  console.log(isAllRed); // false
}
```

代码那么长！我们可以通过 **Array.every**减少代码行数:

```
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

function test() {
  const isAllRed = fruits.every(f => f.color == 'red');

  console.log(isAllRed); // false
}
```

现在更简洁了，不是吗？相同的方式，如果我们想测试是否存在红色的水果，我们可以使用 **Array.some** 一行代码实现。

```
const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
];

function test() {
  // 条件：任何一个水果是红色
  const isAnyRed = fruits.some(f => f.color == 'red');

  console.log(isAnyRed); // true
}
```

