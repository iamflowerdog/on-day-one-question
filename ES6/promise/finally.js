let p1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error('error'))
  }, 1000)
})

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(123)
  }, 1000)
})


// p1
//   .catch((res) => {
//     console.log(res)
//   })
//   .finally(() => {
//     console.log('p1 finnally execute')
//   })

// p2
//   .then((res) => {
//     console.log(res)
//   })
//   .finally(() => {
//     console.log('p2 finnally execute')
//   })

// p1 和 p2 的 finnaly都执行了

// polyfill



Promise.prototype.yyhFinally = function (callback) {
  let P = this.constructor
  return this.then(
    (value) => P.resolve(callback()).then(() => value),
    (error) => P.reject(callback()).then(() => { throw error})
  )
}

p1
  .catch((data) => {
    console.log(data)
  })
  .yyhFinally((data) => {
    console.log(data)
  })

Promise.resolve(2).then((data) => {}, () => {}).then(res => {console.log(res)}) // undefined
Promise.resolve(2).finally((data) => {}).then(res => {console.log(res)}) // 2