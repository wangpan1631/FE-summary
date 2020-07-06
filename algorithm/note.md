* 常见的**时间复杂度(Big O notation)**
- O(1): Constant Complexity常数复杂度  --- 程序只会执行一次
- O(log n): Logarithmic Complexity对数复杂度
- O(n): Linear Complexity线性时间复杂度
- O(n^2): N square Complexity平方
- O(n^3): N cubic Complexity立方
- O(2^n): Exponential Growth指数
- O(n!): Factorial阶乘
* [如何理解算法时间复杂度？](https://www.zhihu.com/question/21387264 "如何理解算法时间复杂度？")

* 根据代码判断时间复杂度
- 直接看这个函数或者说这段代码，它根据n的不同情况会运行多少次

```
console.log(1);
console.log(2);
// 上面代码时间复杂度是O(1)

for(var i=0; i<n; i++){  // n不同，执行的次数就不同
    console.log(i);
}
// 上面这段代码时间复杂度是O(N)

for(var s=0; s<n; s++){
    for(var t=0; t<n; t++){
        console.log(s + t);
    }
}
// 上面代码时间复杂度是O(N^2); 如果是三层循环嵌套就是O(N^3)

```


* **空间复杂度**
- 数组的长度就是空间复杂度
- 递归的深度（特殊说明）是空间复杂度






算法小白，通过学习对时间复杂度和空间复杂度有了一定的了解，学会通过代码分析时间复杂度和空间复杂度。

通过代码分析时间复杂度
下意识的养成分析自己所写程序的时间复杂度和空间复杂度
二分查找是log(n)时间复杂度
二叉树时间复杂度是O(n)