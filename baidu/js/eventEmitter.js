class EventEmitter {
  constructor() {
    this._events = {};//用对象的方式来缓存订阅者队列（事件名称：回调）
  }

  setMaxListeners(n) {
    this.maxListeners = n;
  }

  getMaxListeners() {
    return this.maxListeners ? this.maxListeners : EventEmitter.defaultMaxListeners;
  }

  on(eventName, listener) {
    if (typeof listener !== 'function') { return; }

    if (!this._events) {//如果只被继承了prototype，需要在继承的对象上添加_events属性
      this._events = Object.create(null);
    }

    this.emit('newListener', eventName, listener);//触发newListener事件回调

    if (!this._events[eventName]) {//事件队列不存在
      this._events[eventName] = []; // 有可能一个eventName绑定多个回调函数，所以需要用数组
    }

    this._events[eventName].push(listener);//添加观察者

    if (this._events[eventName].length > this.getMaxListeners()) {
      console.warn('超过最大数量，请修改maxListeners')
    }
  }

  once(eventName, listener) {
    function wrap(args) {
      listener.apply(this, args);
      this.removeListener(eventName, wrap);
    }

    wrap.cb = listener;//将回调存储起来用于删除时对比

    this.on(eventName, wrap);
  }

  addListener(eventName, listener) {
    this.on(eventName, listener);
  }

  removeListener(eventName, listener) {
    if (!this._events[eventName]) { return; }

    this._events[eventName] = this._events[eventName].filter(item => {
      return item !== listener && item.cb !== listener;
    });
  }

  emit(eventName, ...args) {//状态改变
    if (!this._events[eventName]) { return; }

    this._events[eventName].forEach(callback => {//通知所有的订阅者，发起回调
      callback.apply(this, args);
    });
  }
}



let event1 = new EventEmitter()

// 监听事件

function t2(text) {
  console.log(text + ' t2');
}

function t3(text) {
  console.log(text + ' t3');
}

function t4(text) {
  console.log(text + ' t4');
}

event1.on('message', function t1 (text) {
  console.log(text);
});
event1.on('click', t2);
event1.on('click', t3);

// 触发事件
event1.emit('message', 'message');
event1.emit('click', 'click');
event1.removeListener('click', t3);
event1.addListener('click', t4);
event1.emit('click', 'remove');
