
// 先创建一个判断数据类型的函数
function typeOf (x) {
  let res;
  if (typeof x !== 'object') {
    res = typeof x;
  } else {
    if (x === null) {
      res = 'null';
    } else if (x instanceof Array) {
      res = 'array';
    } else {
      res = 'object'
    }
  }
  return res;
}

// 深拷贝
function deepCopy (e) {
  let result;
  // 先判断数据类型
  if (typeOf(e) === 'array') {
    result = []
  } else if (typeOf(e) === 'object') {
    result = {}
  } else {
    return e;
  }

  // 再根据不同类型遍历
  if (typeOf(e) === 'array') {
    for (let i = 0; i < e.length; i++) {
      result.push(deepCopy(e[i]))
    }
  } else if (typeOf(e) === 'object') {
    for (let key in e) {
      result[key] = deepCopy(e[key]);
    }
  } 
  return result;
}
let testObj = { a: 1, b: { c: 4 } }
let x = deepCopy(testObj)
console.log(x)

