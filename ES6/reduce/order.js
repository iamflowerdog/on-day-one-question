// 按顺序运行Promise 应用场景，当某一个请求的值，一次依赖上一个，比如，页面加载获取用户id，再根据用户id获取用户手机号，然后再根据手机号查到地址

let fs = require('fs');

let readFile = function (url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', (error, data) => {
      if (error) reject(error)
      else resolve(JSON.parse(data))
    })
  })
}


function runPromiseInSequence(arr, input) {
  return arr.reduce((previous, current) => {
    return previous.then(current)
  }, Promise.resolve(input))
}

let fetchNameByUserId = function (id) {
  return new Promise((reolve, reject) => {
    readFile(`./${id}.json`).then(res => {
      reolve(res.name)
    })
  })
  
}

let fetchPhoneUserName = function (name) {
  return new Promise((reolve, reject) => {
    readFile(`./${name}.json`).then(res => {
      reolve(res.phone)
    })
  })
}

let promiseList = [fetchNameByUserId, fetchPhoneUserName]

runPromiseInSequence(promiseList, 1)
  .then(res => {
    console.log(res) // 156xxxx1616
  })

