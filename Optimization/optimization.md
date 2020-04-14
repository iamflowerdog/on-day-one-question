## 打包优化
#### webpack
* loader dll happypack 压缩代码 tree shaking scope hoisting code spliting
* 小的图片用 base64，cdn

#### 网络优化
* dns cdn 缓存 preload/prefetch/懒加载 ssr


#### 代码优化
* loading/骨架屏
* webworker
* 虚拟列表
* 懒加载
* dom/style批量更新

#### web前端性能优化
* 减少页面的重绘和重排
  - 通过style属性改变节点的样式，每设置依次都会导致依次reflow，所以最好通过class去改变。
  - 如果有动画效果元素，postion属性应当设置成fixed或者absolute，不影响其他元素的布局
* 减少HTTP请求，懒加载js，合并图片 雪碧图
* 减少DOM操作
  - 查询DOM时可以将其赋值给局部变量
  - 减少循环对DOM操作，DOM循环中性能开销大，循环结束时候一次性写入
* JSON格式进行数据交换
* 使用开销较小的css选择器
* 使用CDN加速 内容分发网络 随时根据实时流量个节点的链接，负载情况，以及用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上


#### 函数节流和防抖
* 函数防抖debounce 在一定时间内再次触发，则从新计时，直到停止时间大于或者等于t才执行函数。
`clearTimeout(timer) fn.call(this);`
* 函数节流throttle 等时间间隔执行函数，侧重于一段时间只执行依次
`if (timer) { return }` `fn.apply(this, arguments); timer = null;`