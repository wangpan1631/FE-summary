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

// 如何让(a==1 && a==2 && a==3)的值为true?
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

