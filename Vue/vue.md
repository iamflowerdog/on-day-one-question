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
* 为什么数组的push方法能改变页面，因为vue自己做了一层封装

#### vm.nextTIck()
* 异步更新队列，Vue只要侦听到数据变化，Vue将开启一个队列，并缓存在同一事件循环中发生中，发生所有数据变更，如果同一个watcher被多次触发
只会被推入到队列中依次，这样可以避免重复操作DOM，内部用Promise.then、mutationObserve 如果执行环境不允许，则采用setTimeout(fn, o)来代替
* 如果我们想等待DOM更新后做点什么，可以使用vm.nextTick()，React通过this.setState({}, () => {})来获取异步更新后的动作

#### Vue响应式原理
* 非侵入性的响应式系统，数据模型仅仅是普通的Javascript对象，当你修改时候，视图会进行更新，使得它的状态管理非常简单和直接
>如何追踪变化？
* 把一个普通的Javascript对象传入Vue实例作为date选项，Vue遍历此对象的所有属性，并使用Object.defineProperty把这些属性全部转为getter/setter。
每一个组件实例都对应一个watcher实例，他会在组件渲染过程中，把接触过的数据属性记录为依赖，之后当依赖项的setter触发时，会通知watcher，从而使它关联
组件重新渲染

#### Vue双向绑定原理
* vue2.0 采用数据劫持结合发布者-订阅者模式的方式，Object.defineProperty()来劫持各个属性的setter，在数据变动时，发布消息给订阅者，触发相应的回调
  1. 对需要observe的数据对象进行遍历，包括子属性也为对象的属性，都加上setter/getter，这样的话，给某个对象赋值，就会触发setter，那么就能监听到数据的变化
  2. compile解析模版指令，将模版中的变量替换成数据，然后初始化页面，并且将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
  3. watcher(订阅者)是observe和compile直接的桥梁

#### Vue菜单权限
1. 菜单权限
  1. 本地配置一套路由，登陆成功后，会从服务器返回一个菜单列表，然后在beforeEach里面把返回的菜单列表和本地配置的路由进行对比，如果存在则有访问权限。
  2. 用了一段时间，发现比较难用，本地配置一整套路由，还得做几个页面来把这些路由信息写入到服务器，容易出错
  3. 最后解决思路是完全不再本地做任何路由配置，登陆页面单独弄，登陆成功后从后台抓去菜单列表，抓取成功后，再配置到路由表里面，然后实例话vue
  4. 这种把路由配置全部放到服务器上还有一个难点，路由对应相应的组件。我就将组件放到一个对象里面，服务器返回菜单列表里面，会有一个字段配置组件名称，
      抓取成功后，router[menuName]
  ```
    conponentConfigs: {
      common: {
        Admin: require('../common/Admin.vue')
      }
    }

    [
      {
        "path": "\/admin\/index",
        "component": "common.Admin", // conponentConfigs[component]
        "meta": {
          "hadnleAuth": {
            "add": true, "edit": false
          }
        }
      }
    ]
    写一个鉴权vue插件，所有操作放到methods里面， 所有操作@click里面调用鉴权函数，如果有则调用this[authName].apply(null, arg)

  ```

#### Vue解决跨域
1. 在config文件夹下的index.js中进行如下修改
```
// 使用http-proxy-middleware 代理解决（项目使用vue-cli脚手架搭建）
proxyTable:{
     "/api":{
         target:"后端提供服务的前缀地址",
         changeOrigin:true,
         pathRewrite:{
              '^/api':''
         }
     }
}
```
2. 在main.js添加一个代理
`Vue.prototype.HOST='/api'`
 声明：此种跨域只适用于测试开发阶段，项目正式上线并不实用，需要后端去处理跨域问题

 #### Vuex
 * vue.js中管理数据状态的一个库，创建一个集中的数据存储，供程序中所有组件访问
 * 通过普通的数据传递，一个数据被多个组件使用
 * getter 访问stroe访问数据，muttation 传递状态 修改数据
 * muttation : 同步修改数据 this.$store.mutation.reducePrice（其原理是通过，computed计算属性，获取getter数据的时候，会触发数据修改）
 * action: 和mutation作用是一样的，但是可以异步调用，并且可以自定义参数 (this.$store.dispatch('reduce', 4)) 
  `action: { reduce(context, payload) {context.commit('reduce', payload)}}`