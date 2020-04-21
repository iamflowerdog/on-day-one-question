## 每天一道面试题，再也不怕面试官

### 先做一下自我介绍
您好，我是xxx，毕业于xxx大学，今天面试贵公司的web前端岗位，我想从以下三个方面介绍自己。

1. 项目经历。
  - 接触前端工作有四年时间了，前两年在一家法律互联网公司工作，在公司主要负责CRM销售服务系统，用的技术栈主要是React，UI组件使用的是antdesign
  ```
  hey,guys! My name is Yonghai, you guys can call me Yang, I come from Henan province, now live in Beijing District, I have now passed the quarantine period，I can start a new job immediately,
  I have been working in front-end development for four years. In the first two years, I worked in a legal Internet company. I was mainly responsible for the sales and service system. The technology stack used was React, and the UI components used antdesign.
  In the past two years, I have worked in a real estate company, The company has two front ends developer, I am the team leader, At this company, we used Vue and the UI components we used iView, this period I developed wechat mini progromer and  Company annual bill pages with h5
  ```
  - 最近这两年在一家房地产公司，在公司主要负责资产管理系统的开发，公司有两个前端，我是组长，这期间用的技术栈主要是Vue，UI组件使用的是iView，中间也做过小程序开发，H5页面，公司年度账单

2. 学习方面
  - 我平时喜欢逛github，业余时间创建了自己的个人网站，还有微信公众号，平时还会通过观看视频，书籍等渠道充实前端知识
  - I usually enrich my front-end knowledge by watching videos, books and other channels

3. 编程格言
  - 输出的是价值，不是代码，执行效率

### React 和 Vue 不同
1. 监听数据变化的实现原理不同
  - Vue通过getter/setter以及一些函数劫持，能精确的知道数据变化，不需要特别优化就能达到很好的性能，可变数据
  - React默认是通过比较引用的方式，如果不优化(Pure/shoulComponentUpdate)可能导致大量不必要的VDOM的重新渲染，抢到数据的不可变
  - MVVM 的变化检查是数据层面的，而 React 的检查是 DOM 结构层面的
2. 数据流不同
  - React 一直单向数据流，onChange/setState()模式 父组件->子组件->DOM
  - Vue2.x 组件和DOM之间双向绑定 Vue1.x 父组件<->子组件<->DOM
3. 跨组件通信HoC和mixins
  - React当初也是用mixins，最后考虑对组件入侵太严重产生很多问题，就放弃了，转而使用HoC，高进组件，存粹的函数
  - mixin混合，相当于Objec.assign(),Vue组件本身就是一个被包装的函数
  
4. 通信方式
  - Vue父组件通过props向子组件传递数据或者回调，虽然可以传回调，但是我们一般通过事件机制来处理子组件向父组件的通信，子组件向父组件通过this.$emit(),V2.2中新增了provide/inject实现跨层级通信
  - React通过向子组件传递数据或者回调，可以通过context进行跨层级通信，provider.consumer,不支持自定义事件，最大区别和Vue
5. 模版渲染方式不同
  - React 通过JSX渲染模版，而Vue通过扩展HTML语法进行渲染，
  - React 通过js实现模版中常见的语法，比如插值，条件虚幻，Vue实在组件和JS代码分离的单独模板中，通过js指令来实现的，比如条件语句v-if来实现
  - react中render函数支持闭包特性，import来的组件可以直接调用，但是在vue中不行，由于模版中使用的数据必须挂在this上进行依次中转，所以import一个组件后，还要在components 中声明
6. Vuex和Redux区别
  - Vuex中，$store直接被注入到组件实例中，比较灵活，使用dispatch和commit提交更新，通过mapState或者this.$store来读取数据
  - Redux，每一个组件都需要显示用connect把需要的props和dispatch链接起来
  - Redux使用的是不可变数据，而Vuex数据可变的，Redux每次更新都用state替换旧的state，而Vuex直接修改
  - Redux在检测数据变化的时候，而是通过diff方式比较差异，而Vue是通过getter/setter来比较的。
7. 虚拟dom diff不同
  - vue中，即便是同一个类型的节点，只要属性不同就执行删除，这与react不相同，react同一类型节点，只更新其节点的属性
  - updateChildren Vue首位两个子元素比较，由两端至中间的比较，React是从左至右依次进行比较，各有有点
  - 如果要把一个节点移到最后，react需要依次移动，vue可以直接移动
  * 二者都只比较同一层级变化，不比较跨层变化

### Virtual DOM
* 真实DOM很慢，一个简单的div元素的属性有很多，原生JS对象处理处理起来很快，用JS对象表达DOM树上的结构、属性信息
1. 用js对象创建一个DOM树结构，然后用这个树构建一个真正的DOM树，插到文档中
2. 当状态变更的时候，重新构造一个新的对象树，用的树和旧的树对比，记录差异
3. 把差异应用到dom树上，视图就更新了
* Virtual DOM本质上就是JS和DOM之间做了一个缓存，类似CPU和硬盘
* 比较两颗虚拟DOM树的差异，两颗树完全diff算法是一个时间复杂度为O(n^3)的问题，但前端中很少会跨层级移动DOM元素，同一个层级表算法复杂度就是O(n)
* DocumentFragment 文档片段接口，不是真实的DOM树一部分，变化不回出发DOM树的重新渲染，不会导致性能问题


### MVC MVVM  MVP(Presenter)
1. View -> Controller -> Modal -> View 单向的♻️的，
2. view <-> viewModel <=> Modal ViewModal和Model双向绑定
3. Model 模型，领域模型，面向对象，数据访问层，View 视图，用户屏幕上看到的结构，布局和外观，VM，视图模型，暴露公共属性和命令的视图抽象
绑定器在视图和数据绑定器进行通信
4. 绑定器，声明性数据和命令绑定隐含在MVVM模式中

### 浏览器输入url？ 
* [what happend](https://github.com/skyline75489/what-happens-when-zh_CN)
1. 重定向
  - DNS查询IP  浏览器检查一下域名是否在缓存中，如果缓存中没有就去调用一个 `gethostbyname`库函数
  - 获取到IP地址，加上URL中给出来的端口号(http协议默认端口号：80，https默认端口号443)，调用系统库函数 `socket`，请求一个TCP流套，三次握手后建立链接
2. 响应数据类型处理
  - 返回的状态吗：200，url正确，如果301/302，返回响应头中location字段中新的地址，就是告诉浏览器要重新导航到新的地址上
  - 返回的content-type：tyxt/html，告诉浏览器服务器返回的数据是html格式，你要开始渲染页面了，如果html里面有script标签需要等里面js文件执行过再进行下一步渲染
  - 如果是octet/stream，字节流类型，浏览器就准备开始下载了
3. 准备渲染进程
  - chorme浏览器会为每个页面分配一个渲染进程，也就是说，遇到 same-site （同一个根域名、同一个协议），会共享同一个渲染进程，此时文档还没有解析，下一步提交文档
4. 提交文档
  - 浏览器接收到网络进程的响应头数据之后，便向渲染进程发起 `提交文档`的消息，建立管道，传输完成之后，渲染进程会向浏览器进程一个确认提交的消息
  - 浏览器进程在收到确认提交消息后，会更新浏览器界面状态，包括安全状态，前进后退，地址栏url，并更新web
5. 开始渲染
  1. 构建DOM树
    - 计算样式 把CSS转换成浏览器能够理解的结构，
    - 渲染引擎接收到CSS文本时候，会执行一个转换操作，document.styleSheets
    - 转换样式表中的属性值，使其标准化 2em --> 32px blue --> (0, 0, 255)
    - 计算DOM树中每个节点的样式
  2. 布局阶段
    - 创建布局树
    - 布局计算


