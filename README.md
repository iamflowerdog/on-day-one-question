## 百度
### 1. 请分析以下代码执行结果 （2019年10月30日）
`['1', '3', '10'].map(parseInt);`
* answer: 具体参看map.js
### 2. 请分析以下代码执行结果 （10月31日）

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

### 3. 请写出 inner 的实际高度。
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
* margin-top 同理也是一样，当value为percentage时候，是和本身包含的元素宽度有关。

### 4. 手写一个深拷贝函数。
* 答案参考js/deepCopy.js
* 先创建一个函数，区分object和array的类型
* 然后进行迭代

### 5. HTTP 状态码 301 302 304 403。
* 301 重定向，请求的url已经转移走
* 302 状态吗，临时跳转url 和301一样，只不过这个是临时的，301是永久的
* 304 位修改，客户端缓存的资源是最新的，要求客户端使用缓存
* 403 禁止访问，请求服务器被拒绝

### 6. 手写发布订阅模式 EventEmitter. (11月11日)
* 答案：js/eventEmitter.js
* 实现的关键要素
  1. 发布者有一个订阅者的缓存队列
  2. 发布者有增加和删除订阅者的方法
  3. 发布者状态改变，需要notify方法通知所有订阅者
  4. js中采用事件回调的方式更新订阅者，因此订阅者不需要update方法
* 课后延伸：
  - [javascript异步编程的4种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)
  - [Understanding the Publish/Subscribe Pattern](https://docs.microsoft.com/en-us/previous-versions/msdn10/hh201955(v=msdn.10))
  
### 7. delete 数组的 item，数组的 length 是否会 -1 (11月12日)
