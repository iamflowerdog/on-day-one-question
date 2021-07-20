const fetch = require('node-fetch-npm')


// fetch('http://192.168.1.67:8009/omni-license/get-device-id')
//   .then(res => res.json())
//   .then(body => console.log(body));

fetch('http://domain.invalid/')
  .catch(err => console.error(err));