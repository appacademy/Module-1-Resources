



function sumArray(arr) {

  if(!arr.length) return 0;

  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3])); // 6

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
