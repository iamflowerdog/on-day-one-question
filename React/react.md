## React

#### 生命周期
1. 挂载时：constructor  getDerivedStateFromProps render componentDidMount
2. 更新时：getDerivedStateFromProps shouldComponentUpdate render getSnapshotBeforeUpdate componentDidUpdate    
3. 卸载时：componentWillUnmount

#### 虚拟DOM
* 它减少了同一时间内的页面多处内容修改所触发的浏览器reflow和repaint的次数，可能把多个不同的DOM操作集中减少到了几次甚至一次，优化了触发浏览器reflow和repaint的次数。