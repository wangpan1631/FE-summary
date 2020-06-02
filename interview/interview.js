// 作用域、闭包、变量声明提升
test();
var j = 100;
function test(){
    if (false) {
        var i = 10;
    } else {
        var t = 100;
    }
    console.log(i, t, j); // test()执行位置不一样，得出的j值不一样
}