#### 盒模型

[盒模型详解](https://juejin.im/post/59ef72f5f265da4320026f76 "盒模型")

**什么是盒模型：**
盒模型又称为框模型（box-model），包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个元素。

![alt text](../imgs/box-model.png "box model")

**盒模型分为：IE盒模型和W3C标准盒模型**
二者区别是
* IE盒模型，属性width height包含border和padding，指的是content+padding+border
* **IE盒模型，border 和 padding不会影响我们给盒子宽度；而标准模型，border 和 padding会影响我们给盒子的宽度，盒子真正显示的宽度会变大**

![alt text](../imgs/ie-model.png "ie model")

* W3C盒模型，属性width height只包含content，不包含padding和border

![alt text](../imgs/w3c-model.png "w3c model")

使用css3属性box-sizing控制是哪种盒模型，默认是content-box
* content-box  w3c盒模型
* border-box   ie盒模型(怪异模式)
* padding-box  
* margin-box

padding可以改变盒子的大小