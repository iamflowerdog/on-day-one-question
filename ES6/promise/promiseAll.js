const fs = require('fs')

let readFileWithPromise = function (fileName) {
  let promise = new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, data) => {
      if (error)  reject (error);
      resolve(data)
    })
  })
    .then(data => data)
    .catch(e => e);

  return promise
}

// readFileWithPromise('./test1.json')
//   .then(data => {
//     console.log(data)
//   })
  

const url = ['./test1.json', './test22.json', './test3.json', './test4.json',]

const promiseList = url.map(item => readFileWithPromise(item))

Promise.all(promiseList)
  .then(([a, b, c, d]) => {
    console.log(a, b, c, d)
  })
  .catch(error => console.log(error))

// 1. 所有 promise 都是 fullfilled Promise.all 的状态才是 fullfilled, 返回一个数组
/**
 * {
  "name": "test1",
  "url": "./test1.json"
} {
  "name": "test2",
  "url": "./test2.json"
} {
  "name": "test3",
  "url": "./test3.json"
} {
  "name": "test4",
  "url": "./test4.json"
}
 */

// 2. 只要有一个被rejected Promise.all 的状态就变成rejected, 此时第一个被 rejected的实例返回值会传递给回调函数
/**
 * [Error: ENOENT: no such file or directory, open './test22.json'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: './test22.json'
}
 */

// 3 注意，如果作为参数的Promise实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法
/**
 * {
  "name": "test1",
  "url": "./test1.json"
} [Error: ENOENT: no such file or directory, open './test22.json'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: './test22.json'
} {
  "name": "test3",
  "url": "./test3.json"
} {
  "name": "test4",
  "url": "
 */

// polyfill


