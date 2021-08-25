// 1. 动态访问多级对象。

var obj = {
  name: "salut",
  subobj: {
    subsubobj: {
      names: "I am sub sub obj"
    }
  }
};

var level = "subobj.subsubobj.names";
level = level.split(".");

var currentObjState = obj;

for (var i = 0; i < level.length; i++) {
  currentObjState = currentObjState[level[i]];
}

console.log(currentObjState);

// 

var obj = {
  arr: [
    { id: 1, name: "larry" },
    { id: 2, name: "curly" },
    { id: 3, name: "moe" }
  ]
};


function flatten(obj) {
  var root = {};
  (function tree(obj, index) {
    var suffix = toString.call(obj) == "[object Array]" ? "]" : "";
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      root[index + key + suffix] = obj[key];
      if (toString.call(obj[key]) == "[object Array]") tree(obj[key], index + key + suffix + "[");
      if (toString.call(obj[key]) == "[object Object]") tree(obj[key], index + key + suffix + ".");
    }
  })(obj, "");
  return root;
}

var flat = flatten(obj);
var moe = flat["arr[0].name"];//moe

console.log(moe)

// 3 reduce 

let test = {
  totoalBytes: {
    format: 123,
    origin: 123000
  },
  arr: [
    { name: '22'},
    { name: '44'}
  ]
}

let x = 'totoalBytes.origin'.split('.').reduce((a, v) => a[v], test)
let y = 'arr.1.name'.split('.').reduce((a, v) => a[v], test)
console.log(x,y)
