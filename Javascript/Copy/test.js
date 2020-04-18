const deepCopy = require('./deepCopy.js');

let source = {
  a: 1,
  obj: {
    name: 'invoker',
    sayHi() {
      console.log('hello')
    }
  }
}

let b = deepCopy(source);
console.log(b);