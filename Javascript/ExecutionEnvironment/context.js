console.log(1) // 同步
let promise = new Promise(function (resolve, reject) {
  console.log(3)
  resolve(100)
}).then(function (data) {
  console.log(data)
})
setTimeout(function () {
  console.log(4);
})
console.log(2)

// 上面这个demo的结果值是 1 3 2 100 4

setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function () {
    console.log('promise2')
  })
}, 0)