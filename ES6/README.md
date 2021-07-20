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

#### 2. ES6 类和 ES5 函数构造函数有什么区别？ ./class.js
1. ES5的构造函数的原型对象的属性和方法可以遍历/ES6不行
2. ES6的类必须通过new调用，构造函数则可以不用
3. 类不存在变量提升
4. ES6的类没有私有方法和私有属性（可以通过_say(){}, 把方法写在外面，里面方法通过call调用，还可以利用Symbol值的唯一性，将私有方法的名命名为一个Symbol值）
5. class多了一个静态方法，里面的this指向类本身，静态方法可以被子类继承

#### ES6静态属性和方法
* 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。实例不能访问

#### 3. ES6数组去重
1. Set + Array.from(); 
`let temp = [1, 2, 3, 3]; let set = new Set(temp); Array.form(set)`
2. ... + Set
`let tt = [...new Set([5, 5, 6, 8])];`

#### 4. Promise
1. 

#### 5. 利用 async 函数 实现异步