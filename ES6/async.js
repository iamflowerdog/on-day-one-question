let fs = require('fs');


let readFile = function (filename) {
  return new Promise(function (resolve, reject) {
    fs.readFiles(filename, 'utf-8', function (error, data) {
      if (error) reject(error)
      resolve(data)
    })
  })
}

// 1. async内部return语句 返回值， 用 成为 then 方法回调函数的参数
async function foo () {
  return 'hello world'
}

foo().then(res => console.log(res))

// 2. async函数内部抛出的异常，会导致返回的Promise对象变为 reject状态，抛出的错误对象会被 catch 方法捕获

async function bar () {
  throw new Error('error a')
}

bar().then(
  data => console.log(data),
  error => console.log(error)
)

// 使用 async 函数实现 两个异步函数，等待一个请求的结果返回后，再请求另外一个
async function order() {
  const f1 = await readFile('./1.json');
  let { url } = JSON.parse(f1);
  console.log(f1)
  const f2 = await readFile(url);

  console.log(f2);
}

order()