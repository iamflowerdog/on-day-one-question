// 参考链接 https://zhuanlan.zhihu.com/p/196671665


// Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用的Promise.resolve方法

// Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例

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