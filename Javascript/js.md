
## JavaScript基础

### 执行上下文/作用域链/闭包

* 执行上下文：又称执行环境（Execution context）分为三种：全局执行环境，函数执行环境，eval()执行环境
* js为每一个执行环境关联了一个变量对象，环境中定义的所有变量和函数都保存在这个对象中


### js内存机制
因为js有自动垃圾回收机制，所以内存空间并不是一个经常提的概念
内存空间分为栈内存（stack）与堆内存（heap）, js不允许直接访问堆内存
栈内存一般存储基础数据类型：Number、String、Null、Undefined、Boolean，还有ES6引入一种的新的数据类型，Symbol，其仅有的目的是Symbol()的值能作为对象属性的标识符。

### 浏览器事件机制

![event loop](https://user-gold-cdn.xitu.io/2018/6/13/163f6b033cff7849?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
浏览器环境中执行函数的时候，会创建一个执行栈，栈里的函数在执行的时候，可能会遇到异步操作（比如dom操作，ajax请求，定时器），这些异步操作会放在回调队列里面，等执行栈里面
所有的程序执行完之后，执行栈再去任务队列中读取事件，将队列中的事件放到执行栈中依次执行，这个过程是循环不断的。
* 所有同步任务都在主线程上执行，形成一个执行栈
* 主线程之外，有一个任务队列，只要异步任务有了执行结果，就在任务队列中防止一个事件
* 一旦执行栈中所有的同步任务执行完毕，系统就会去读取任务队列，将队列中的事件放到执行栈中依次执行
* 主线程从任务队列中读取事件，这个过程是循环不断的


### macrotask & microtask
* 在浏览器环境中，microtask的任务队列是每隔macrotask执行完成之后执行
* 在nodejs中，microtask会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕就会去执行microtask任务队列
```
console.log('1');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('2');

// 1 2 promise1 promise2 setTimeout

```
* 浏览器内部为了能够使得JS内部的宏任务和DOM任务能够有序的执行，会在一个宏任务执行开始前，对页面进行重新渲染（macrotask -> refresh -> macrotask）
所以第一个宏任务里面有 1， 2。
* 微任务是需要在宏任务执行之后，立即执行的，比如一系列的反馈，简单来说就是需要异步执行，但是不需要分配一个宏任务，这样可以减小一点性能开销，如果微任务执行期间
有新的微任务加入，会将新的微任务加入队列尾部，之后也会被执行，微任务包括mutation observe的回调，还有接下来的promise回调
* 一旦一个promise有了结果，或者早已有了结果，他就会为他的回调产生一个微任务，这就保证这回调异步执行，所以 会打印  promise1 promise2 然后再打印 setTimeout 
因为微任务总会在下一个宏任务执行前全部执行完毕

### js垃圾回收
* 标记清除，变量进入执行环境标记为 `进入环境`，当变量离开执行环境时标记为 `离开环境`
* 引用计数：统计引用类型变量声明后被引用的次数，当次数为0时，该变量将被回收，有缺点，循环引用
现代浏览器都用标记清除，不用担心引用循环

### js内存泄漏
1. 全局变量造成内存泄露 `a = 4; console.log(4)`
2. 未销毁的定时器和回调函数造成内存泄露
3. 闭包造成的内存泄露 内部函数，有权访问包含其他外部函数中的变量
4. DOM引用造成内存泄露 
```
var elements = {
  txt: document.getElementById("test")
}
function fn() {
  elements.txt.innerHTML = "1111"
}
function removeTxt() {
  document.body.removeChild(document.getElementById('test'));
}
fn();
removeTxt()
console.log(elements.txt)
```

### cookie/session/local 区别
* 相同点：
  1. 目的，解决http请求无状态的，下一次请求并不知道你已经登陆了
  2. 都是存储数据，存在web端，并且都是同源
* 不同点
  1. cookie存储空间很小4kb，每一次请求都会戴上cookie，体验不好，浪费带宽，document.cookie来存储，cookie数据还有路径(path)概念，可以限制cookie只属于某个路径下。
  2. sessionstorage 临时会话，当窗口被关闭的时候就清除，而local永久存在，cookie有过期时间
  3. cookie 和 localstorage 都可以支持浏览器多窗口共享，而session不支持多窗口共享，但是都支持a链接跳转
  4. sessionStorage 和localStorage 不会自动把数据发送给服务器，仅在本地保存

### 跨域
* 为什么会出现跨域？
处于浏览器同源策略，浏览器会拒绝跨域请求，实际上拒绝跨越读操作
  - 浏览器允许跨域写操作(cross-orign writes)，如链接，重定向
  - 浏览器允许跨域资源嵌入(cross-origin embedding)，如img、script标签
  - 浏览器不允许跨域读操作(cross-origin reads)
* 为什么会有跨域需求？
工程服务化后，不同职责的服务分散在不同的工程中，这些工程域名是不同的，但一个需求需要调用不同的服务接口，因此会出现跨域。
* 如何实现跨域？
1. JSONP，因为同源策略的影响，不能通过XMLHttpRequest请求不同域名上的数据，但是在页面上嵌入不同js脚本可以，可以js文件载入完毕后，触发回调，可以将data作为参数传入
```
<script type="text/javascript">
    function dosomething(data){
        //处理获得的数据
    }
</script>
<script src="http://example.com/data.php?callback=dosomething"></script>
<?php
$callback = $_GET['callback'];//得到回调函数名
$data = array('a','b','c');//要返回的数据
echo $callback.'('.json_encode($data).')';//输出
?>
```
2. CORS Cross-Origin Resource Sharing
W3C新的官方方案，能使服务器支持XMLHttpRequest的跨域请求，请求报文中表明请求来源 `Origin: http://foo.example`, 服务端相应报文设置 `Access-Control-Allow-Origin: *`
有时候需要跨域发送凭证信息，如HTTP Cookies验证信息，默认不会跨域发送，如果需要可以
```
var xhr = XMLHttpRequest()
xhr.withCredentials = true;

服务端必须响应头中 Access-Control-Allow-Credentials 字段存在且为 true 时，浏览器才会将响应结果传递给客户端程序。另外，Access-Control-Allow-Origin 必须指定请求源的域名，否则响应失败。
```
3. postMessage

HTML5新加入的特性，可以使用它来向其他window 对象发送发送消息，无论是否同源
