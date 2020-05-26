* rgba()和opacity的透明效果有什么区别？
- opacity作用于元素以及元素内的所有内容（包括文字）的透明度
- rgba()只作用于元素自身的颜色或其背景色，子元素不会继承透明效果

* css属性content有什么作用？
- content属性专门应用在before/after伪元素上，用于插入额外内容或样式

* input[type=search]搜索框右侧小图标如何美化？
```
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 8px;
    background: url("images/searchicon.png") no-repeat 0 0;
    background-size: 15px 15px;
}
```

* 设置元素浮动后，该元素的display值会如何变化？
- 设置元素浮动后，该元素的display值自动变成block

* display:inline-block什么时候会显示间隙？
- 相邻的inline-block元素之间有换行或空格分隔的情况下会产生间距
- 非inline-block水平元素设置为inline-block也会有水平间距
- 可以借助vertical-align:top消除垂直间隙
- 可以在父级加font-size:0；在子元素里设置需要的字体大小，消除垂直间隙。