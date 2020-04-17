
var r = /^[0-9]*[1-9][0-9]*$/;

function fn(n) {
  if (typeof n === 'number' && r.test(n)) {
    if (n == 1) return 1
    else return fn(n - 1) + fn(n - 2)
  } else {
    return 0;
  }
}

