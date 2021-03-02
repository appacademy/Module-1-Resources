// Here, we are using a function we previosuly defined to help with the logic of another function.
// This is a VERY common pattern and will become more and more relevant as we progress in the curriculum.
// NOTE:
  // When we define a function, that does not execute the logic we wrote.
  // The logic inside the functin will run when we invoke the function.



// we're going to be solving a problem that extracts even numbers from an array









debugger
let isEven = function (num) {
  debugger
  return num % 2 === 0;
};

debugger
isEven









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














// we're going to solving a problem that grabs all primes from an array








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

// console.log(pickPrimes([4, 7, 5, 12]));
// console.log(pickPrimes([31, 25, 9, 16]));