function test(arg) { // 1 1 2 3 5

  if (arg % 1 === 1) {
    if (arg === 1) {
      return 1
    }
    return test(arg -2) + test(arg-1)
  } 
}

let arr = [1, 2, 3, 3]

let set = new Set(arr)

Array.from(set)

function removeDup (arr) {
  let arr = [];
  arr.forEach((element, index) => {
  if (!arr.indexOf[element]) {
      arr.push(element)
    }
  });
  return arr;
}

function test1(str) {
  
}

