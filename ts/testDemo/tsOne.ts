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

// this is interface style
interface labelValue {
    label: string
}
function printLabel2 (labelObj: labelValue) {
    console.log(labelObj.label)
}
let myObj2 = {size: 20, label: 'size 20 object'};
printLabel2(myObj2);

// 枚举
const enum Color {
    RED,
    GREEN,
    PINK
}
const color1: Color[] = [Color.RED, Color.GREEN, Color.PINK];
console.log('====', color1);

// 类
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
function getValue<T>(arg:T):T { 
    return arg;
}
// 多个参数 泛型
function getValue2<T, U>(arg: [T, U]):[T, U] {
    return arg;
}
