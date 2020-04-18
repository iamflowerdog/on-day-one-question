// 1. ES5的构造函数的原型对象的属性和方法可以遍历/ES6不行
class Ergodic6 {
  constructor(x) {
    this.x = x;
  }
  foo() {
    console.log('fuck!')
  }
}

function Ergodic5(x) {
  this.x = x;
  this.sayHi = function() {}
}

Ergodic5.prototype.sayHello = function() {};

let ergodic5 = new Ergodic6();

for (let prop in ergodic5) {
  // console.log(prop);
}

// 2. ES6的类必须通过new调用，构造函数则可以不用
// ergodic5 = Ergodic6(); // Class constructor Ergodic6 cannot be invoked without 'new'
// console.log(Ergodic5());

// static 静态属性指的是Class本身的属性，即Class.propName，
// static 静态属性声明后，

class Person {
  static a = 1;
  sayHi() {};
}

Person.b = 3;
console.log(Person)