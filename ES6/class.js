// class A {
//   constructor(x) {
//     this.x = x;
//   }
//   foo() {
//     console.log('fuck!')
//   }
// }

// let a = new A('a');

// console.log(a);

class B {
  foo(baz) {
    console.log('foo run');
    bar.call(this, baz)
  }
  fn() {
    console.log('fuck')
  }
}

function bar(baz) {
  return this.snaf = baz;
}

B.prototype.foo();
