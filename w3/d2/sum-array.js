function sumArray(arr) {
  if (!arr.length) return 0;

  return arr[0] + sumArray(arr.slice(1));
}

// console.log(sumArray([1, 2, 3])); // 6

function math(n) {
  return n + 2;
}

// console.log(math(2) + 2);

// sumArray([1,2,3]) => 1 + sumArray([2,3])
// sumArray([2,3])   => 2 + sumArray([3])
// sumArray([3])     => 3 + sumArray([])
// sumArray([])      =>  return 0 <- top of the call stack
// sumArray([3])     => 3
// sumArray([2,3])   => 5
// sumArray([1,2,3]) => 6

// harolds
function sumArray2(arr) {
  if (!arr.length) return 0;

  return arr.pop() + sumArray(arr);
}

// console.log(sumArray2([1, 2, 3]));//6

// spread and rest
function sumArray3(arr) {
  if (!arr.length) return 0;

  let [first, ...rest] = arr;

  return first + sumArray3(rest);
}

// console.log(sumArray3([1, 2, 3]));// 6

// default param
// * allows us to default a variable to a value if an argument isnt passed
// *  if an argument is passed use that value

function sumArray4(arr, sum = 0) {
  // console.log(sum);
  // if(!sum) sum = 0;

  debugger;
  if (!arr.length) return sum;

  debugger;
  sum += arr.pop();

  debugger;
  return sumArray4(arr, sum);
}

console.log(sumArray4([1, 2, 3])); //

// sumArray4([1, 2, 3]  => sumArray4([1, 2], 3)
// sumArray4([1, 2], 3) => sumArray4([2], 5)
// sumArray4([2], 2)    => sumArray4([], 6)
// sumArray4([], 6)     => 6
// sumArray4([2], 2)    => 6
// sumArray4([1, 2], 3) => 6
// sumArray4([1, 2, 3]  => 6
