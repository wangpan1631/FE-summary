/**
 * mvvm双向数据绑定
 * mvvm实现数据绑定有三种方式：发布-订阅模式、脏值检查、数据劫持
 * 比较流行的vue采用的就是数据劫持和发布-订阅模式，通过劫持es5提供的Object.defineProperty()中各个属性的get, set方法，
 * 数据更新时触发消息给订阅者，实现数据绑定功能。
 */

// 实现mvvm比较复杂，还没整理好代码

// 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key, value)和getItem(key)
var instance = null;
class Storage {
  static getInstance() {
    if (!instance) {
      instance = new Storage();
    }
    return this.instance;
  }
  setItem = (key, value) => localStorage.setItem(key, value);
  getItem = key => localStorage.getItem(key)
}

// ----------如何让(a==1 && a==2 && a==3)的值为true?
// 利用隐式类型转换，推测a不可能是基本数据类型，而是复杂数据类型object

// 方法一，利用数据劫持(Proxy/Object.defineProperty)
let i = 1;
let a = new Proxy({}, {
  i: 1,
  get: function () {
    return () => this.i++;
  }
});

// 方法二，数组的toString接口默认调用数组的join方法，重写join方法
let a = [1, 2, 3];
a.join = a.shift;

// ----------实现一个uniq函数，实现数组去重
// 方法一，利用ES6新增数据类型Set
function uniq(arr) {
  return [...new Set(arr)];
}

// 方法二，利用indexOf
function uniq(arr){
  var result = [];
  for (let i of arr) {
    if (result.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}

// 方法三，利用includes，其实和indexOf差不多
function uniq(arr){
  var result = [];
  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

// 方法四 reduce
function uniq(arr) {
  return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}

// ----------jsonp的实现原理
function jsonp({url, params, callback}) {
  return new Promise((resolve, reject) => {
    // 创建script标签
    let script = document.createElememt('script');
    window[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    }
    params = {...params, callback};
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join('&')}`;
    document.body.appendChild(script);
  });
}

// 使用
function show(data) {
  console.log(data);
}
jsonp({
  url: 'http://localhost:3000/show',
  params: {
    // code
  },
  callback: 'show'
}).then(data => {
  console.log(data);
})

/**
 * 服务端代码(node)
 */
// express启动一个后台服务
let express = require('express');
let app = express();

app.get('/show', (req, res) => {
  let { callback } = req.query; // 获取传来的callback函数名，callback是key
  res.send(`${callback}('Hello!')`);
});
app.listen(3000);



