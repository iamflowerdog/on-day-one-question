### 原型链
* 我们在访问一个对象的属性的时候，实例对象没有的话，js会尝试往原型对象上找，原型对象上没有，就往原型对象的_proto_(Object.prototy)上找
最终会找到原型链的终点null，找到就返回对应的值，没有就返回undefined
* `person = new Person()` person是构造函数Person的实例