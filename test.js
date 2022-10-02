"use strict";

// -------------------------------------
// Test calss inheritance.
// -------------------------------------

/*
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    say() {
        return `Hello, ${this.name}!`;
    }
}
*/

function Animal(name) {
    this.name = name;
}

function Cat(name) {
    Animal.call(this, name);
}

// One way of inherit.
// in this way, should remove [Cat.prototype.name].
// Cat.prototype = new Animal('x');

// Two way of inherit.
// function F() { }
// F.prototype = Animal.prototype;
// Cat.prototype = new F();
// Cat.prototype.constructor = Cat;

// Three way of inherit.
// equel to Cat.prototype.__proto__ = Animal.prototype;
Object.setPrototypeOf(Cat.prototype, Animal.prototype);

Cat.prototype.say = function () {return `Hello, ${this.name}!`;}

function classInheritTest() {
    // 测试:
    let kitty = new Cat('Kitty');
    let doraemon = new Cat('哆啦A梦');
    if ((new Cat('x') instanceof Animal)
        && kitty 
        && kitty.name === 'Kitty'
        && kitty.say
        && typeof kitty.say === 'function'
        && kitty.say() === 'Hello, Kitty!'
        && kitty.say === doraemon.say)
    {
        printResult('测试通过!');
    } else {
        printResult('测试失败!');
    }
    printContent(kitty.say());
}


// -------------------------------------
// common function
// -------------------------------------

class TestMain {
    static run() {
        classInheritTest();
    }
}

function printResult(val) {
    printout(val, 'printout_result');
}

function printContent(val) {
    printout(val, 'printout_content');
}

function printout(val, target) {
    console.log(val);
    let resultElement = document.getElementById(target);
    if (resultElement) {
        resultElement.innerHTML = val;
    }
}