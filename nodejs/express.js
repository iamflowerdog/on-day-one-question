function* generatorExample() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = generatorExample();
  
  console.log(gen.next().value); // 输出: 1
  console.log(gen.next().value); // 输出: 2
  console.log(gen.next().value); // 输出: 3
  console.log(gen.next().done);  // 输出: true
  