var p1 = new Promise(function(resolve, reject) {
  
  setTimeout(() => {
    console.log(p2) // pending  p1 的状态传递给了 p2
    resolve(123)
  }, 3000)
})

var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(p1) // pending
    resolve(p1)
  }, 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))


// p1 和 p2 都是 Promise 实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另外一个异步操作

// 注意，这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。

// 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。

new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
// 上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。



