
// 求数组里面所有值的和
let array = [0, 1, 2, 3, 4]

let sum = array.reduce((previous, current, index) => {
  return previous + current
})

console.log(sum) // 10

var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);

// 求一个数组中，每一个元素是对象，且id 最大的元素

let max = array.reduce((previous, item, index) => {
  return Math.max(previous, item)
}, -Infinity)


console.log(max) // 4


let maxArray = [
  {name: 'yyh', value: 1},
  {name: 'yyh1', value: 5},
  {name: 'yyh2', value: 3},
]

let maxItem = maxArray.reduce((previous, item, index) => {
  if (previous.value > item.value) {
    return previous
  } else {
    return item
  }
})

console.log(maxItem) // { name: 'yyh1', value: 5 }

// 累加对象数组里的值

let array1 = [
  {x: 1}, {x: 2}, {x: 3}
]

let sum1 = array1.reduce(((previous, item) => previous + item.x), 0)

console.log(sum1) //6

// 二维数组转成一维数组

let array2 = [[1, 2], [3, 4]];

let flat = array2.reduce((previous, current) => [...previous, ...current])

console.log(flat)

// 计算数组中每个元素出现的次数

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce((previous, current) => {
  
  if (current in previous) { // 对象提供的方法
    previous[current]++
  } else {
    previous[current] = 1
  }
  return previous
}, {})

console.log(countedNames) // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }


// 按属性对object分类

var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];


function groupByAge(array, property) {
  return array.reduce((previous, current) => {
    let key = current[property];
    if (!previous[key]) {
      previous[key] = []
    }
    previous[key].push(current)
    return previous
  }, {})
}

console.log(groupByAge(people, 'age'))


// 使用扩展运算符和initialValue绑定包含在对象数组中的数组

var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

let allbooks = friends.reduce((previous, current) => {
  return [...previous, ...current.books]
}, [])

console.log(allbooks)

// 数组去重
let array3 = ['2', 'undefined', undefined, null, 'null', null, undefined, 1, 2]
console.log(array3)

let result = array3.reduce((previous, current) => {
  if (!previous.includes(current)) {
    previous.push(current)
  }
  return previous
}, [])

console.log(result) //  ['2', 'undefined', undefined, null, 'null', 1, 2 ]

let set = new Set(array3);

set = Array.from(set)

console.log(set) //  ['2', 'undefined', undefined, null, 'null', 1, 2 ]

