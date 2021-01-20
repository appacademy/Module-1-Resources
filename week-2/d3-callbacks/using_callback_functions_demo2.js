let superAdd = function (num1, num2, cb) {
  let sum = num1 + num2;
  let res = cb(sum);
  return res;
}

console.log(superAdd(6,3,Math.sqrt));

//---------------------------------------------
let foo = function(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

foo('alpha', 'bravo', 'charlie')    // ?
foo('alpha', 'bravo', )             // ?
foo('alpha', 'bravo', 'charlie', 'delta')    // ?
//---------------------------------------------
let superAdd = function (num1, num2, cb) {
  if (cb === undefined){
    return num1 + num2;
  }
  let sum = num1 + num2;
  let res = cb(sum);
  return res;
}

console.log(superAdd(6,3,Math.sqrt));
console.log(superAdd(80,1));

