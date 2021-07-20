let fs = require('fs');
let fetch = require('node-fetch-npm')


let readFile = function (filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf-8', function (error, data) {
      if (error) reject(error)
      resolve(data)
    })
  })
}



readFile('./chain.json')
  .then(function(json) {
    json = JSON.parse(json);
    return fetch(json.url)
  }).then(function(res) {
    return res.json()
  }).then(function(data) {
    console.log(data)
  })