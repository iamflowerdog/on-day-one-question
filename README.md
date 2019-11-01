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
* nodejs环境这样就打印两个undefined，浏览器var一个变量，可能会执行不一样，打印10

3. 请写出 inner 的实际高度。
```
<style>
  .outer {
    width: 200px;
    height: 100px;
  }
  .inner {
    width: 60px;
    height: 60px;
    padding-top: 20%;
  }
</style>
<div class="outer"><div class="inner"></div></div>
```
* 当内边距（padding）是一个百分比的时候， 百分比是和包含块（containing block）的宽度有关的，同样一定不能为负数。