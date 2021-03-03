const ObserverStack = {
  stack: [],
  push(observer) {
    this.stack.push(observer);
  },
  pop() {
    return this.stack.pop();
  },
  top() {
    return this.stack[this.stack.length - 1];
  }
};



ObserverStack.push(0);
ObserverStack.push(1);


// console.log(ObserverStack.pop());
console.log(ObserverStack.top())
console.log(ObserverStack.stack)