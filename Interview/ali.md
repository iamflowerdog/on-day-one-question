### nodeJS 单线程多进程？

1. NodeJS本质上是单线程，但可以在后台使用多个线程来执行异步代码


### 浏览器从输入 url 到页面渲染？
1. 解析URL 
  * "http" 开头 使用HTTP协议
  * "/"  请求的是资源主页(index)
2. 判断输入的是URL还是搜索的关键字？
3. 检查[HSTS](https://zh.wikipedia.org/wiki/HTTP%E4%B8%A5%E6%A0%BC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8)列表


```
  DNS 解析：浏览器首先解析 URL，将其解析为 IP 地址，这个过程叫做 DNS 解析。浏览器会先查询本地缓存，如果没有找到，就会向 DNS 服务器发出请求，获取 IP 地址。

  建立 TCP 连接：浏览器根据获取到的 IP 地址和端口号，与服务器建立 TCP 连接。TCP 连接建立后，浏览器可以向服务器发送 HTTP 请求。

  发送 HTTP 请求：浏览器向服务器发送 HTTP 请求。请求包括请求头和请求体。请求头包括请求方式、URL、请求参数等信息。请求体包括提交的数据。

  服务器响应：服务器接收到请求后，根据请求信息，返回相应的响应。响应包括响应头和响应体。响应头包括状态码、响应类型、编码方式等信息。响应体包括请求结果数据。

  解析响应数据：浏览器接收到响应后，根据响应类型，对数据进行解析。如果响应类型是 HTML 页面，浏览器会对 HTML、CSS、JS 等文件进行解析。

  构建 DOM 树：浏览器解析 HTML 文件，将 HTML 文件中的标签、属性等信息构建为 DOM 树。这个过程叫做 DOM 树构建。

  构建 CSSOM 树：浏览器解析 CSS 文件，将 CSS 文件中的样式信息构建为 CSSOM 树。

  合并 DOM 树和 CSSOM 树：将 DOM 树和 CSSOM 树合并成一颗渲染树。

  布局和绘制：根据渲染树，浏览器进行布局和绘制。布局指定元素的位置和大小，绘制则是将元素的内容绘制到屏幕上。

  页面显示：经过布局和绘制后，页面被显示在浏览器窗口中，用户可以看到页面内容。

  以上就是浏览器从输入 URL 到页面渲染的主要过程。

```


### react 父子组件相互调用？


### 用过什么样的布局？


### ES6 genarator 是干什么的？

GitHub Copilot: ES6 generator 是 JavaScript 中的一种特殊函数，它可以在执行过程中暂停和恢复。它们是一种强大的工具，用于控制迭代过程的流程。

Generator 函数使用 `function*` 语法进行定义，并使用 `yield` 关键字来暂停函数的执行并返回一个值。当调用 generator 函数时，它会返回一个迭代器对象，可以使用 `next()` 方法来逐步执行函数体内的代码。

下面是一个简单的示例，展示了如何使用 generator 函数来生成一个简单的迭代器：

```javascript
function* myGenerator() {
  yield 'Hello';
  yield 'World';
  yield '!';
}

const iterator = myGenerator();

console.log(iterator.next().value); // 输出: 'Hello'
console.log(iterator.next().value); // 输出: 'World'
console.log(iterator.next().value); // 输出: '!'
console.log(iterator.next().value); // 输出: undefined
```

在上面的示例中，`myGenerator` 是一个 generator 函数，它定义了一个简单的迭代器。每次调用 `iterator.next()` 方法时，函数会从上一次暂停的地方继续执行，直到遇到下一个 `yield` 关键字为止。

Generator 函数的一个重要特性是它们可以无限次地生成值，而不需要事先知道要生成多少个值。这使得它们非常适合处理大量数据或需要逐步生成结果的场景。

除了 `yield` 关键字，generator 函数还可以使用 `return` 关键字来结束迭代过程，并返回一个最终的值。

总而言之，ES6 generator 是一种强大的工具，用于控制迭代过程的流程，并且可以逐步生成值。它们在处理异步操作、迭代大量数据或需要逐步生成结果的情况下非常有用。ES6 generator 是 JavaScript 中的一种特殊函数，它可以在执行过程中暂停和恢复。它们是一种强大的工具，用于控制迭代过程的流程。

Generator 函数使用 `function*` 语法进行定义，并使用 `yield` 关键字来暂停函数的执行并返回一个值。当调用 generator 函数时，它会返回一个迭代器对象，可以使用 `next()` 方法来逐步执行函数体内的代码。

下面是一个简单的示例，展示了如何使用 generator 函数来生成一个简单的迭代器：

```javascript
function* myGenerator() {
  yield 'Hello';
  yield 'World';
  yield '!';
}

const iterator = myGenerator();

console.log(iterator.next().value); // 输出: 'Hello'
console.log(iterator.next().value); // 输出: 'World'
console.log(iterator.next().value); // 输出: '!'
console.log(iterator.next().value); // 输出: undefined
```

在上面的示例中，`myGenerator` 是一个 generator 函数，它定义了一个简单的迭代器。每次调用 `iterator.next()` 方法时，函数会从上一次暂停的地方继续执行，直到遇到下一个 `yield` 关键字为止。

Generator 函数的一个重要特性是它们可以无限次地生成值，而不需要事先知道要生成多少个值。这使得它们非常适合处理大量数据或需要逐步生成结果的场景。

除了 `yield` 关键字，generator 函数还可以使用 `return` 关键字来结束迭代过程，并返回一个最终的值。

总而言之，ES6 generator 是一种强大的工具，用于控制迭代过程的流程，并且可以逐步生成值。它们在处理异步操作、迭代大量数据或需要逐步生成结果的情况下非常有用。


### 浏览器dom渲染 和 js 加载顺序



### cookie 存储


### nodeJS 在实际项目开发中的好处？


### webpack的优缺点？



### 移动端 解决一像素边框问题


### setTimeout((), 0) 为什么是异步的，任务队列的原理？


### 项目做过哪些性能优化?


### 按需加载



