let isEven = function (num) {
  return num % 2 === 0;
};
/* 
In your own words, what does the isEven function do?


*/
let extractEvens = function (numbers) {
  let evens = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (isEven(num)) {
      evens.push(num);
    }
  }
  return evens;
};

let evensArr = [3, 5, 4, 7, 8];
console.log(extractEvens(evensArr));
/* 
Where is the helper function?

Why would a developer decide to use a helper function?

*/

let isPrime = function (num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/* 
In your own words, what is this function doing?


*/

let pickPrimes = function (nums) {
  let primes = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (isPrime(num)) {
      primes.push(num);
    }
  }

  return primes;
}

console.log(pickPrimes([4, 7, 5, 12]));
console.log(pickPrimes([31, 25, 9, 16]));

/* 
Where is the helper function?


*/