/*
	Polyas!
	1. Define the problem -  what is the prompt asking?
    * return a boolean - true or false if the number passed in to our function, is a prime number
    * A number is prime if it is only divisible by 1 and itself.
    INPUT: a number - 10
    OUTPUT: a boolean - false
    *How do i get from my input to my output?

    2. Make a plan
    	1. define a function that takes in a number
        2. conditional to check if num is less that 2, if its is return false
        3. Iterate up the the number(exclusive) in increments of 1, but we can start from 2 instead of 0- because anything less than 2 is not a prime
        	a. as we iterate well have every number up to the number passed in
            b. run a conditional to check, if the number can be divivded evenly (use modulo) by any number we come across as we iterate
            	- if it can, return false - found a number that can divide into our argument
      	4. if we exit the loop, return true, its implied that if we iterated throuh every number up to the arugment and non of the return false, then it must be a prime
    3. Execute the plan
    4. Refactor

*/
//prerefactor
function isPrime(number) {
  if(number < 2) {
   return false;
  }

  for(let i = 2; i < number; i++) {
    // console.log(i)
    if(number % i === 0) {
      return false;
    }
  }
 return true;
}

//function expression
//one line if statement - can omit curlys if logic is only one line
let isPrime = function(number) {
  if(number < 2) return false;


  for(let i = 2; i < number; i++) {
    // console.log(i)
    if(number % i === 0) return false;

  }
 return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
