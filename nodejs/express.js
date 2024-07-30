async function fetchPage(pageNumber) {
    // 模拟每页有3个项目，总共10个项目
    const totalItems = 10;
    const itemsPerPage = 3;
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
  
    if (start >= totalItems) {
      return { items: [], hasMore: false };
    }
  
    const items = Array.from({ length: itemsPerPage }, (_, i) => start + i + 1).filter(item => item <= totalItems);
    return { items, hasMore: end < totalItems };
}
  

  async function* fetchPages() {
    let page = 1;
    while (true) {
      const { items, hasMore } = await fetchPage(page);
      if (items.length === 0) {
        break;
      }
      yield items;
      if (!hasMore) {
        break;
      }
      page++;
    }
  }


(async () => {
const pages = fetchPages();
for await (const items of pages) {
    console.log('Received items:', items);
}
})();



// 简易版本
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = simpleGenerator();

console.log(gen.next().value); // 输出: 1
console.log(gen.next().value); // 输出: 2
console.log(gen.next().value); // 输出: 3
console.log(gen.next().done);  // 输出: true
  
  