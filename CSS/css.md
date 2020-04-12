
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