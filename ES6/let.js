// 1. 不存在变量提升

console.log(a);

let a = 2;


// 2. 暂时性死区 temporal dead zone
// 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

var tmp = 'ass';
if (true) {
  tmp = '123';
  let tem;
}

var b = 6;
let b = 6;

// 3. 不允许重复声明 let不允许在相同作用域内，重复声明同一个变量

function func() {
  let a = 10;
  var a = 10;
}

// 4. 块级作用域

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

// 5. 块级作用域与函数声明

function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());


// 上面代码在 ES5 中运行，会得到“I am inside!”，因为在if内声明的函数f会被提升到函数头部，实际运行的代码如下。

