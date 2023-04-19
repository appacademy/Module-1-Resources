/*

	Polyas framework

    Understand the problem
    Make a plan
    Execute the plan
    Refactor

    Understand the problem
    * a whole number greater than 1 that cannot be exactly divided by any whole number
      other than itself and 1 (e.g. 2, 3, 5, 7, 11).
    * is the number prime?
    Input: a number - 10
    Output: a boolean - false
    * how do we get from out input to our output??

    * check if the number is divisible by anthing other than itself and 1

    Make a plan
    1. Define a function isPrime takes in a number
    2. iterate up to the arg passed in
    	a. as we iterate, use a condtitional to check if the current i,
        	can be divided into the arg without a remainder using modulo
        	- if it can, return false - its not a prime
    3. return true, because no numbers divide into the arg passed in; other than 1 and itself
    Execute the plan
    Refactor

*/
// let isPrime = function(num){
//   if(num < 2) return false;

//   for(let i = 2; i < num; i++) {
//    if(num % i === 0) return false;
//   }
//   return true;
// }
function isPrime(num){

  for(let i = 2; i < num; i++) {
   // console.log(i);
  //	we change 0 to input value, 2 in the test case
  if(num % i === 0) {
    return false;
  }
}
return true;
}
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
