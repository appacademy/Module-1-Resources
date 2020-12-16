
let superAdd = function (num1, num2, cb) {
  let sum = num1 + num2;
  let res = cb(sum);
  return res;
}

let res = superAdd(3, 2, function(n) {
    return 2 * n;
})

console.log(res);

console.log(Math.sqrt);         // function
console.log(Math.sqrt(100));    // 10

/** 
 * Invoke `superAdd` with the `Math.sqrt` (Alvin does at 3:17)
*/
console.log(/* your code here */)


let foo = function(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

foo('alpha', 'bravo', 'charlie')    // ?
foo('alpha', 'bravo', )             // ?
foo('alpha', 'bravo', 'charlie', 'delta')    // ?
