## Vue
#### 生命周期
1. beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed 
2. 数据监听，模版编译，将实例挂载到DOM，数据变化时候更新DOM

#### 介绍一下MVVM，和MVC区别，ViewModel有什么好处
* Model: 对应组件中的data和props属性
* View: 组件中的template的部分，也包括style
* ViewModel: 继承自Vue类的实例。
* 不是完全遵循MVVM，$refs可以访问实例内的，他绕过了VM来访问View，严格的说，MVVM要求View和Model不能直接通信

#### Vue Computed和Watch原理 ？
* Computed 模版中多次用到字符串反转，依赖其他数据的时候，Vue通过getter函数监听数据的变化，没有副作用，有利用测试，还可以缓存
只要所依赖的数据不变化，才会从新求值，也可以增加setter
* 监听器：用来监听Vue实例上一个属性的变化，回调函数得到的参数为新值和旧值，可以接收监督的键路径，还可以监听表达式，可以unwatch,deep

#### vm.$set
* 数据对象监听的时候，对象添加属性，数组改变长度，修改数组某一个值，不是响应式的，需要通过$set(),来更新
`this.$set(this.someObject,'b',2), vm.items.splice(indexOfItem, 1, newValue)`
* 由于Vue会在初始化实例的时候，对属性执行getter/setter转化，所以必须在date对象上存在才能Vue为他转换为响应式的。

#### vm.nextTIck()
* 异步更新队列，Vue只要侦听到数据变化，Vue将开启一个队列，并缓存在同一事件循环中发生中，发生所有数据变更，如果同一个watcher被多次触发
只会被推入到队列中依次，这样可以避免重复操作DOM，内部用Promise.then、mutationObserve 如果执行环境不允许，则采用setTimeout(fn, o)来代替
* 如果我们想等待DOM更新后做点什么，可以使用vm.nextTick()，React通过this.setState({}, () => {})来获取异步更新后的动作
