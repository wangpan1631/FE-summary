# 收集的一些js小技能

* 测试JS执行的性能用到console.time()和console.timeEnd()
* [测试JS性能的网站](https://jsperf.com/testing-foreach-vs-for-loop "测试JS性能的网站")

# js精粹
* js是弱类型的语言
- null 根本就不存在
- undefined，只声明没有赋值
- typeof可以用来判断数据类型，是一个操作符，返回一个字符串。但并非返回的所有结果都符合预期。最准确的判断类型的方法是Object.prototype.toString.call()

* 变量声明提升
* call apply bind 不能改变箭头函数的this指向，因为箭头函数的this在词法阶段就已经确定了。