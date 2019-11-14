## ES6知识

#### 1. 在 ES6 中使用展开(spread)语法有什么好处? 它与剩余(rest)语法有什么不同? (2019年11月13日)
* spread可以轻松创建数组或对象的副本，无需用 Object.create, slice
* rest提供一种捷径，其中包括传递给函数的任意数量的参数 它将数据放入并填充到数组中，而不是展开数组
```
  function AddFive(...numbers) {
    return numbers.map(x => x + 5)
  }

  const [a, b, ...others] = [1, 2, 3, 4, 5]; // others [3, 4, 5]

  const { e, f, ...rest } = { e: 1, f: 4, g: 5, h: 7 }; // rest  {g: 5, h: 7}

```

#### 2. ES6 类和 ES5 函数构造函数有什么区别？
* 函数（Function）
* 函数也是一个对象（一等对象），函数中可以保存可以执行的代码，并且在需要时对其进行调用
* 函数中存储的是功能（代码）
```
  // es5 Function Constrctor
  function Person (name) {
    this.name = name;
  }

  // es6 Class
  class Person1 {
    constructor (name) {
      this.name = name;
    }
  }
```