let fs = require('fs');


let readFile = function (filename) {
  return new Promise(function(resolve, reject) {
    fs.readFiles(filename, 'utf-8', function(error, data) {
      if (error) reject(error)
      resolve(data)
    })
  })
}

// readFile('./1.json').then(res => {
//   console.log(res)
// }, 
// error => console.log(error)
// )

// readFile('./2.json').then(res => {
//   console.log(res)
// },
//   error => console.log(error)
// )

// Promise.all([readFile('./1.json'), readFile('./2.json')]).then(([a, b]) => {
//   console.log(a)
//   console.log(b)
// })

// Promise.race([readFile('./1.json'), readFile('./2.json')]).then(data => {
//   console.log(data)
// })

//

async function order () {
  const f1 = await readFile('./1.json');
  let { url } = JSON.parse(f1);
  console.log(f1)
  const f2 = await readFile(url);
  
  console.log(f2);
}

order()