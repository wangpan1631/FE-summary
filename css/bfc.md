#### BFC

[参考资料](https://blog.csdn.net/sjn0503/article/details/56005148 "BFC")

**概念：**是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

**触发条件**
* 根元素（root）, 即html
* position为absolute或fixed
* table-cell, table-caption, inline-block,flex, 或者 inline-flex中的其中一个
* overflow值不为visible
* float值不为none

**BFC特性**
* BFC内部，盒子由上至下按顺序进行排列，其间隙由盒子的外边距决定，并且，当同一个BFC中的两个盒子同时具有相对方向的外边距时，其外边距还会发生叠加(Margin Collapse) 
* BFC内部，无论是浮动盒子还是普通盒子，其左总是与包含块的左边相接触（从右到左的的格式，否则为与右边框相接触） 
* BFC 区域不会与float box区域相叠加 
* BFC内外布局不会相互影响 
* 计算BFC高度的时候，浮动元素的高度也计算在内

**BFC可以解决的问题（详细的可以参见参考资料）**
* 解决外边距重叠（给其中一个盒子外面再包一层，然后给这一层设置样式overflow: hidden, 产生一个BFC）
* 清除浮动（设置overflow: hidden, 计算BFC高度的时候，浮动元素的高度也计算在内）
* 实现两栏布局
