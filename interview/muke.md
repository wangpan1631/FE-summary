双越老师：
基础：
js的三座大山：原型 原型链；作用域 闭包 ；异步 单线程
一：原型和原型链
instanceof用于判断 引用类型 属于哪个 构造函数的方法
2-11 写一个贴近实际开发原型链继承的例子

二：作用域和闭包
三：异步和单线程
同步和异步区别: 同步会阻塞程序运行，异步不会
使用异步的场景：在可能发生等待的情况；等待过程中不能像alert一样阻塞程序运行；因此，所有的“等待的情况”都需要异步
等待的情况：
定时任务 setTimeout  setInterval; 
网络请求：ajax请求，动态img加载； 
事件绑定（我先把事件绑上，什么时候点击我不知道，这也是一种等待，异步）

js是单线程
https://www.cnblogs.com/woodyblog/p/6061671.html
JavaScript引擎是单线程运行的,浏览器无论在什么时候都只且只有一个线程在运行JavaScript程序.
浏览器才是实现异步的那个家伙

数组API
forEach  遍历所有元素
every   判断所有元素是否都符合条件, 返回boolean值
some    判断是否有至少一个元素符合条件，返回boolean值
sort   排序
map   对元素重新组装，生成新数组
filter   过滤符合条件的元素

对象API
for in 
hasOwnProperty

原生js实现ajax调用

浏览器渲染页面的过程
根据HMTL结构生成DOM Tree
根据CSS生成CSSOM
将DOM和CSSOM整合形成RenderTree
根据RenderTree 开始渲染和展示
遇到<script>时，会执行并阻塞渲染

window.onload and DOMContentLoaded 的区别
window.onload  页面的全部资源加载完才会执行，包括图片、视频等
DOMContentLoaded  DOM渲染完即可执行，此时图片 视频还可能没有加载完

从输入URL到得到HTML的详细过程
浏览器更加dns服务器得到域名的ip地址
向这个IP的机器发送HTTP请求
服务器收到、处理并返回HTTP请求
浏览器得到返回内容

性能优化
减少IO操作  就是输入输出
资源压缩
缓存
使用cdn让资源加载更快
懒加载
减少dom操作
减少请求
事件节流
尽早执行操作（如 domcontentloaded）

安全性
在前端来说 ，要求不是很高
面试问到的几率应该不大
应专门的安全组或后端来做安全性
特别是数据库层面

XSS  跨站请求攻击
例如：新浪博客写一篇文章，同时偷偷插入一段<script>，攻击代码中，获取cookie，发送自己的服务器。发布博客，有人查看博客内容，会把查看者的cookie发送到攻击者的服务器
 预防：前端替换关键字，例如 替换 < 为 &lt;   >为 &gt;
CSRF   跨站请求伪造
比如  你登录一个购物网站，正在浏览商品，该网站的付费接口是aaa.com/pay?id=100  但是没有任何验证， 
然后你收到一封邮件，隐藏着 <img src=aaa.com/pay?id=100>，你查看邮件的时候，就已经悄悄的付费购买了
预防：增加验证流程，输入指纹，密码  短信验证码

简历：简洁明了，重点突出项目经历和解决方案
把个人博客放在简历中
把个人的开源项目放在简历中，或者开源的小工具

高级：
1. ES6
新的语法浏览器不能解析，需要插件babel来做一层转换，转换为浏览器能够解析的语法

wangEditor   用的gulp+rollup

rollup简单配置
```
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
export default {
    entry: 'src/index.js',
    format: 'umd',
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: 'build/bundle.js'
}
```

模块化标准：AMD CMD
语法：import export (注意有无default)
2. Class和普通构造函数有和区别
* class在语法上更加贴合面向对象的写法
* class实现继承更加易读、易理解
* 更易于写Java等后端语言的使用
* 本质还是语法糖，使用prototype



```
class MathHandle {
    //构造器，跟php很像
    constructor(x, y){
        this.x = x;
        thix.y = y;
    }
    add () {
        return this.x = this.y;
    }
}
const m = new MathHandel(1, 2);
console.log(m.add());

```

```
function MathHandle (x, y) {
    this.x = x;
    this.y = y;
}
MathHandle.prototype.add = function(){
    return this.x + this.y;
}
const m = new MathHandel(1, 2);
console.log(m.add());
```
class 是语法糖，什么是语法糖，
双越对class语法糖的看法，这种语法糖形式，看起来和实际原理不一样的东西，我个人不赞同，形式上强行模仿java c# 却失去了它的本性和个性

3. promise
promise出现是为了解决callback hell

#### 7月8开始观看的笔记
1. 原型和原型链
* 所有的实例都有一个隐式原型属性__proto__，所有的函数都有一个显示原型属性prototype
* 所有的引用类型（数组，对象，函数），__proto__的属性值指向它的构造函数的prototype属性值。
* 当试图得到一个对象的某个属性是，如果这个对象本身没有这个属性，那么回去它的__proto__（即它的构造函数的prototype）中寻找。
* 闭包的使用场景：封装变量和收敛权限 (函数作为返回值，函数作为参数传递)
该看4-1小节了
