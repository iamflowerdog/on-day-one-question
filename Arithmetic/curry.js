// https://github.com/sl1673495/javascript-codes/blob/6ff027f396296b5708afa01ecbe9859254aba74a/curry-add.js
function add(...nums) {
  let res = sum(nums);

  queueMicrotask(() => {
    console.log(res)
  })

  function sum(nums) {
    return nums.reduce((a, b) => a + b);
  }

  return function addCurry(...nums) {
    if (nums.length === 0) return res;

    res += sum(nums);

    return addCurry;
  };
}

add(5, 4)(3, 2)(1)(3);


// 2

// function add(...args) {
//   let init = args.reduce((pre, cur) => pre + cur)

//   function sum(...sumArgs) {
//     init = sumArgs.reduce((pre, cur) => pre + cur, init)
//     return sum
//   }

//   sum.toString = () => init

//   return sum
// }

// console.log('执行一次：', add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log('执行二次：', add(1)(2))
// console.log('执行三次：', add(1, 2)(3)(4))
// console.log('执行四次：', add(1)(2)(3)(4)(5));

// https://github.com/yuyongyu08/JavaScript/blob/d7d19b09d0ffcd68f21da3d8f77ffe0d9d3cc24e/interview/2020/Array/curry.js
var curry = fn =>
  judge = (...args) =>
    args.length === fn.length
      ? fn(...args)
      : (arg) => judge(...args, arg)

// function curry(fn) {
//   let calledCount = 1;
//   return function (...args) {
//     calledCount++
//     if (calledCount % 2 == 0) {

//     } else {

//     }
//   }
// }


let add = curry((a, b) => a + b)

console.log('执行一次：', add(1))
console.log('执行二次：', add(1)(2))
console.log('执行三次：', add(1)(2)(3)(4))
console.log('执行四次：', add(1)(2)(3)(4)(5));


// https://cjting.me/2016/01/17/javascript-infinite-currying/


/**
 *  // 定义一个函数 add，满足如下性质：
    add(1) == 1
    add(1)(2) == 3
    add(1)(2)(3) == 6
    ...
    var g = add(1)(2)
    g(100) == 103
    g(200) == 203
 * 
 */



function total(args) {
  return [].slice.call(args).reduce((t, c) => t + c, 0)
}

function add() {
  function factor(value) {
    var result = function () {
      return factor(value + total(arguments))
    }
    result.value = value
    result.valueOf = function () { return this.value }

    return result
  }

  return factor(total(arguments))
}

// add(1) == 1; true

// add(1) --> function () { return factor(value, + total(arguments))}

// add(1)(2) == 3;
