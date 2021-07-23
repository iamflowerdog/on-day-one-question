// 参考链接 https://zhuanlan.zhihu.com/p/196671665

let fetch = require('node-fetch-npm')

Promise.yyhRace = function (array) {
  let hasError = false;
  let hasSuccess = false;
  return new Promise((resove, reject) => {
    if (!Array.from(array)) {
      return
    }

    array.forEach((element, index) => {
      Promise.resolve(element).then((data) => {
        if (!hasError && !hasSuccess) {
          resove(data)
        }
      }, error => {
        if (!hasError && !hasSuccess) {
          reject(error)
        }
      })
    });
  })
}


// // 返回 1 一旦迭代器中的某个 promise 完成(resolved)或失败(rejected)，返回的 promise 就会 resolve 或 reject
// Promise.yyhRace([Promise.resolve('1'), 2, Promise.resolve('2')])
//   .then(array => {
//     console.log(array)
//   })
//   .catch(error => {
//     console.log(error)
//   })


// // 返回第一个失败的结果 error
// Promise.yyhRace([Promise.reject('error'), 2, Promise.reject('失败')])
//   .then(data => {
//     console.log(data + 'data')
//   })
//   .catch(error => {
//     console.error(error + 'error')
//   })


// 利用Promise的race方法可以，可以设置一些api封装的请求的超时时间，比如当某个请求超过5秒，就返回error

const get = function (url, interval) {
  return Promise.race([
    fetch(url).then(res => res.json()),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('request timeout'))
      }, interval * 1000)
    })
  ])
}

// 当我们设置为1秒的时候，很大概率就返回 request timeout
// get('https://api.github.com/users/iamflowerdog', 1)
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

// 当我们设置为2秒的时候，很大概率就能返回正确的信息了
get('https://api.github.com/users/iamflowerdog', 10)
  .then(data => console.log(data))
  .catch(error => console.error(error))

