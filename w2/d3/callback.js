


// check the datatype of your paramaters and make sure they are functions!

function add(num1, num2, cb) {

  console.log(num1, num2, cb);

  if(cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1  + num2);
  }
};


// console.log(add(9, 40, Math.sqrt));// 7
// console.log(add(9,40));// 49


// array methods take in callbacks
// * callback
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// console.log(isPrime(11)); // true

let numbers = [1,2,3,4,5,6,7,8];

let primes = numbers.filter(isPrime);
// console.log(primes);// [ 2, 3, 5, 7 ]

let timesTwo = num => num * 2;


console.log(numbers.map(timesTwo));
// [
//   2,  4,  6,  8,
//   10, 12, 14, 16
// ]
