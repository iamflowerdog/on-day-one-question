// 参考链接 https://zhuanlan.zhihu.com/p/196671665

Promise.yyhAll = function (array) {
  let result = [];
  return new Promise((resove, reject) => {
    if (!Array.from(array)) {
      return
    }
    
    array.forEach((element, index) => {
      Promise.resolve(element).then((data) => {
        result[index] = data;
        if (index === array.length -1) {
          resove(result)
        }
      }, error => {
        reject(error)
      })
    });
  })
}


// 返回第一个失败的结果 error
Promise.yyhAll([Promise.reject('error'), 2, Promise.reject('失败')])
  .then(array => {
    console.log(array)
  })
  .catch(error => {
    console.log(error)
  })

// 返回整个array [ '1', 2, '2' ]
Promise.yyhAll([Promise.resolve('1'), 2, Promise.resolve('2')])
  .then(array => {
    console.log(array)
  })
  .catch(error => {
    console.log(error)
  })