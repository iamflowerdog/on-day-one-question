### 百度
1. 请分析以下代码执行结果 （2019年10月30日）
`['1', '3', '10'].map(parseInt);`
* answer: 具体参看map.js
2. 请分析以下代码执行结果 （10月31日）

```
var number = 10;
function fn() {
  console.log(this.number);
}
var obj = {
  number: 2,
  show: function(fn) {
    this.number = 3;
    fn();
    arguments[0]();
  }
};
obj.show(fn);

```

* this 函数执行的上下文对象 相当于obj.show(fn) 传进去一个实参，然后这个实参调用fn()
* 这样就打印两个undefined