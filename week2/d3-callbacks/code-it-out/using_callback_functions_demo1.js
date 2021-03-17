let superAdd = function (num1, num2, cb) {
  let sum = num1 + num2;
  let res = cb(sum);
  return res;
}

let doubler = function (n) {
  return 2 * n;
}

let negate = function (n) {
  return -1 * n;
}

console.log(superAdd(2,3,doubler));

//---------------------------------------------

let res = superAdd(3,2, function(n) {
  return 2 * n
})
console.log(res)