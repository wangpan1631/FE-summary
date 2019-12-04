console.log('hello require!');
exports.hello = 'worls';
exports.add = function(a, b) {
    return a + b;
}
exports.dog = {
    name: 'jim',
    age: 2
}
// 外部引用修改了模块内容，会对内部造成影响
setTimeout(function(){
    console.log('--exports--', exports);
}, 200) 