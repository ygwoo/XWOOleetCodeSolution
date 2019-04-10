/**
 * 第四章 变量、作用域和内存问题
 */

//4.1.2
var num_1 = 5,
    num_2 = num_1;
console.log(num_2);

var obj_1 = new Object(),
    obj_2 = obj_1;
obj_1.name = "yiguang woo";
console.log(obj_2.name);

/**
 * 第六章 面向对象程序设计
 */

//6.1.1 属性类型
var person = new Object();
Object.defineProperty(person, "name", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: "yiguang woo"
});

console.log(person.name);
person.name = "fucker xia";
console.log(person.name);

//访问器属性
var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        this._year = newValue;
        this.edition += newValue - 2004;
    }
});

book.year = 2005;
console.log(book.edition);

/**
 * 6.1.2 定义多个属性
 */
var book = {};
Object.defineProperties(book, {
    _year: {
        writable: true,
        value: 2004
    },
    edition: {
        writable: true,
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

book.year = 2005;
console.log(book.edition);

/**
 * 6.1.3 读取属性的特性
 * >> 接6.1.2代码
 */
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor);

/**
 * 6.2.1 工厂模式
 */
function createPerson(name, age, job) {
    var person = new Object();
    person.name = name;
    person.age = age;
    person.job = job;
    person.sayName = function () {
        console.log(this.name);
    }
    return person;
};
var person_1 = createPerson("yiguang_woo", 28, "Software Engineer");
var person_2 = createPerson("kun_xia", 29, "Test Engineer");

/**
 * 构造函数：
 * >> 1.非显示创建对象；
 * >> 2.直接将属性和方法赋予this对象；
 * >> 3.无return语句。
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHello = function () {
        console.log("Helo, my name is " + this.name + " , " + this.age + " years old, and now I am a " + this.job + ".");
    }
}

var person_3 = new Person("yiguang_woo", 28, "Software Engineer");
console.log(person_3.sayHello());
var person_4 = new Person("kun_xia", 29, "Test Engineer");
console.log(person_4.sayHello());
//console.log(person_3.sayHello === person_3.sayHello);

console.log(person_3 instanceof Person);
console.log(person_4 instanceof Object);

/**
 * 6.2.3 原型模式
 */
function PrototypePerson() { };

PrototypePerson.prototype.name = "yiguang_woo";
PrototypePerson.prototype.age = 28;
PrototypePerson.prototype.job = "Software Engineer";
PrototypePerson.prototype.sayHello = function () {
    console.log("Helo, my name is " + this.name + " , " + this.age + " years old, and now I am a " + this.job + ".");
};

var person_5 = new PrototypePerson();
var person_6 = new PrototypePerson();
person_5.name = "kun_xia";

console.log(Object.getPrototypeOf(person_5));

//delete person_5.name;
console.log(person_5.hasOwnProperty("name"));
console.log(person_5.name + "||" + person_6.name);

function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}
console.log(hasPrototypeProperty(person_6, "name"));

/**
 * 6.3.1 原型链
 */
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

//继承了 SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.subproperty;
};
var instance = new SubType();

console.log(instance.getSuperValue());