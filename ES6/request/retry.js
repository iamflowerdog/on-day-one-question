

// 参考链接 https://lihautan.com/retry-async-function-with-callback-promise/

const fetch = require('node-fetch-npm');



const get1 = function (url) {
  return function () {
    return new Promise((resolve, reject) => {
      fetch(url).then(res => {
        if (res.status == 200) {
          resolve(res.json())
        } else {
          reject(res.statusText)
        }
      })
    })
  }
}

// get('https://api.github.com/users/iamflowerdog')
//   .then(res => console.log(res, 'success'))
//   .catch(error => console.error(error, 'error'))

function retry(fn) {
  const promise3 = fn() // returns a promise (promise#1)
    .catch(() => fn()) // returns a new promise (promise#2)
    .catch(() => fn()); // returns yet a new promise (promise#3)

  return promise3.then(
    data => data, // resolved with the result from `fn()`
    () => {
      // reject with the max retry error
      throw new Error('Failed retrying 3 times');
    }
  );
}

retry(get1('https://api.github.com/users/iamflowerdog'))
  .then(res => console.log(res, 'success'))
  .catch(error => console.error(error, 'error'))










