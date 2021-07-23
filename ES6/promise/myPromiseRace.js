// 参考链接 https://zhuanlan.zhihu.com/p/196671665

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


// 返回 1 一旦迭代器中的某个 promise 完成(resolved)或失败(rejected)，返回的 promise 就会 resolve 或 reject
Promise.yyhRace([Promise.resolve('1'), 2, Promise.resolve('2')])
  .then(array => {
    console.log(array)
  })
  .catch(error => {
    console.log(error)
  })


// 返回第一个失败的结果 error
Promise.yyhRace([Promise.reject('error'), 2, Promise.reject('失败')])
  .then(data => {
    console.log(data + 'data')
  })
  .catch(error => {
    console.error(error + 'error')
  })

