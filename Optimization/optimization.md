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

#### 函数节流和防抖
* 函数防抖debounce 在一定时间内再次触发，则从新计时，直到停止时间大于或者等于t才执行函数。
`clearTimeout(timer) fn.call(this);`
* 函数节流throttle 等时间间隔执行函数，侧重于一段时间只执行依次
`if (timer) { return }` `fn.apply(this, arguments); timer = null;`