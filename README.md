## 每天一道面试题，再也不怕面试官

### 先做一下自我介绍
您好，我是xxx，毕业于xxx大学，今天面试贵公司的web前端岗位，我想从以下三个方面介绍自己。

1. 项目经历。
  - 接触前端工作有四年时间了，前两年在一家法律互联网公司工作，在公司主要负责CRM销售服务系统，用的技术栈主要是React，UI组件使用的是antdesign
  - 最近这两年在一家房地产公司，在公司主要负责资产管理系统的开发，公司有两个前端，我是组长，这期间用的技术栈主要是Vue，UI组件使用的是iView，中间也做过小程序开发，H5页面，公司年度账单

2. 学习方面
  - 我平时喜欢逛github，业余时间创建了自己的个人网站，还有微信公众号，平时还会通过观看视频，书籍等渠道充实前端知识

3. 未来规划
  - 前端做好



### CSS基础

#### BFC 浮动
* float：CSS属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性（与绝对定位相反）
* 由于float意味着使用块布局，它在某些情况下修改display 值的计算值：
* inline --> block  flex-> flex 对flex不生效

#### flex 
* 是一个CSS的display 属性中新添加一个值,它将使它适用的元素成为一个flex container（伸缩容器），而这个元素的每个子元素将成为 flex item（伸缩项目）
* flex 属性是flex-grow, flex-shrink 和 flex-basis 属性的简写。
* flex-grow 属性定义弹性盒子项（flex item）的拉伸因子
* flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。
* flex-basis 属性 flex-basis 指定了 flex 元素在主轴方向上的初始大小。如果不使用  box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。

#### 1px
* 获取设备屏占比，然后通过设置 viewport transform scale()
*  ios 可以直接写 0.5px
* rem就是根元素的字体大小！<html>标签。网页<html>的默认字体大小是 16px。也就是浏览器默认的字号16px。
```


(function() {
 function autoRootFontSize() {
  document.documentElement.style.fontSize = Math.min(screen.width, document.documentElement.getBoundingClientRect().width) / 750 * 32 + 'px';}
  window.addEventListener('resize', autoRootFontSize);
  autoRootFontSize();
})();

```

### React 和 Vue 不同
1. 监听数据变化的实现原理不同
  - Vue通过getter/setter以及一些函数劫持，能精确的知道数据变化，不需要特别优化就能达到很好的性能，可变数据
  - React默认是通过比较引用的方式，如果不优化(Pure/shoulComponentUpdate)可能导致大量不必要的VDOM的重新渲染，抢到数据的不可变
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

