/**
 * This is a test file about TypeScript
 * TS is neseccery now
 * 现在TS是必备技能了，还从来没有在一个项目里好好使用过TS 
 */
let isShow: boolean = true;
let age: number = 10;
let color: string = 'red';
let list: number[] = [1, 0, 9];
let menu: Array<string> = ['a', 'b', 'c'];
// 元组 Tuple, 允许定义一个已知元素数量和类型的数组
let x: [string, number];
x = ['Tom', 20];
// 任意值
let notSure: any = 'hello';

let u: undefined = undefined;
let n: null = null;

// interface --- normal style
function printLabel (lableObj: {label: string}) {
    console.log(lableObj.label);
}
let myObj = {size: 10, label: 'size 10 object'};
printLabel(myObj);

// 接口 interface 主要是给对象或者函数一定的约定和规范
interface LabelValue {
    label: string
}
function printLabel2 (labelObj: LabelValue) {
    console.log(labelObj.label)
}
let myObj2 = {size: 20, label: 'size 20 object'};
printLabel2(myObj2);

// interface 带? 表示可选属性
interface SquireConfig {
    color?: string;
    width?: number;
}

let domObj: SquireConfig = {color: 'red', width: 100};

// interface readonly 属性property  只能在对象刚创建的时候修改其值
interface Point {
    readonly x: number;
    readonly y: number;
}

// 枚举
const enum Color {
    RED,
    GREEN,
    PINK
}
const color1: Color[] = [Color.RED, Color.GREEN, Color.PINK];
console.log('====', color1);

// 类
/**
 * 派生类包含了一个构造函数，它必须调用 super()，它会执行基类的构造函数。 
 * 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
 * 在TS里，类的成员都默认为public, 当成员被标记为private时，成员就不能在声明它的类的外部访问;
 * protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问;
 * 类（class）通过 static 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用;
 */
class Person {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHi(): void {
        console.log(`Hi, This is ${this.name}`)
    }
}





// 联合类型，用|分隔，可以是其中的任一个类型
let count:string|number
count = 10;
count = '10';

// 交叉类型，所有类型都要存在
interface IpersonA {
    name: string,
    age: number
}
interface IpersonB {
    name: string,
    gender: string
}
let personW: IpersonA & IpersonB = {
    name: 'www',
    age: 40,
    gender: 'male'
}

// 泛型
/**
 * 
 * 不太好理解
 * https://www.51cto.com/article/702192.html
 * https://www.51cto.com/article/711526.html
 * https://juejin.cn/post/6844904184894980104
 * https://jkchao.github.io/typescript-book-chinese/typings/generices.html  
 * 
 */
function getValue<T>(arg:T):T { 
    return arg;
}
// 多个参数 泛型
function getValue2<T, U>(arg: [T, U]):[T, U] {
    return arg;
}

// 函数
// 可选参数和必选参数，可选参数必选在必选参数后面
function buildName (firstName: string, lastName?: string) {
    if (lastName) {
        return `${firstName}-${lastName}`;
    } else {
        return `${firstName}`;
    }
}


