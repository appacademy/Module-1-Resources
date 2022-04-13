/* isPrime
 Define a function isPrime(number) that returns
 true if number is prime. Otherwise, false.
 A number is prime if it is
 only divisible by 1 and itself.
 Better definition: a prime number has exactly two distinct
 factors, 1 and itself, or that a prime is a whole number
 greater than 1 that is only divisible by 1 and itself.
*/

/* 1. Understand the problem
a. define a function isPrime
b. accept a parameter of num
b.5. conditional to check if num is === 2
c. Iterate through nums
d. determine if max num is divisible by i
e. return true if that number is prime
d. return false if number is not prime
*/
/* 2. Make a plan (pseudo code here)
- declare a function of single param that is an integer
- iterate/loop through all number, starting at two,
    and going up to the number provided
- Each time we iterate check (conditional) if each value is a factor of the number
- if the number is divisible by a value, return false
- after completely all nums up to num return true if we did not find any factors

*/
// 3. Carry out the plan (write your code here)

// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     let i = 2;
//     while(i < num) {
//         if (num % i === 0) {
//             return false;
//         }
//         i++
//     }
//     return true;
// }

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(9));
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(13));
console.log(isPrime(2017));

// 4. Look back and improve your solution (refactor)