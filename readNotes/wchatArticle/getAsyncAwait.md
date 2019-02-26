#### 掌握async 和 await的使用
callback、promise、async

Async是Promise(原理还不是很理解)的语法糖, Async函数是通过在函数声明之前加上单词async来创建的
```
const asyncFun = async () => {
    // code
}
```
Async函数可以使用await暂停，该关键字只能在Async函数中使用。Await返回async函数完成是返回的任何内容
~~~不完整，后面再接着写