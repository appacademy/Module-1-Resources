// Adjacent Sum

/*

Write a function adjacentSum that takes in an array of numbers and returns a new array containing the sums of adjacent
numbers in the original array. See the examples.

input: arr
output: arr

make a plan!
1. create a variable representing our result

2. iterate through numArray to gain access to the elements inside

3. make two variables:
    // currNum - the current ele we are looking
    // nextNum - will represent the adjecent ele

4. Define the logic to get to our expected out:
    4a.in the case where nextNum === undefined we can return the result array
    4b. result array push what the currNum + nextNum

*/

function adjacentSum(numArray) {
    // your code here
    let sumArr = [];

    for(let i = 0; i < numArray.length; i++) {

        // console.log('Hi!')
        let currNum = numArray[i];
        // console.log(currNum)
        let nextNum = numArray[i + 1]
        // console.log(nextNum)

        if (nextNum === undefined)  return sumArr;
        else sumArr.push(currNum + nextNum)
    }
}

// console.log(adjacentSum([3, 7, 2, 11])); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
// console.log(adjacentSum([2, 5, 1, 9, 2, 4])); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]

//**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// Triple Sequence

/*

Write a function tripleSequence that takes in two numbers, start and length.
The function should return an array representing a sequence that begins with start and is length elements long.
In the sequence, every element should be 3 times the previous element. Assume that the length is at least 1.

input: start, length
output: array

PLAN:

1. create a res variable = [start];
2. use iteration to execute a behavior/action how ever many times or 'length' times.
    // for loop

    // since we're starting with [start] we should off set the length by 1 // length - 1
3. Logic for multiplication
    // call the result array, use .push to add in elements, current * 3

4. return the result array
*/

function tripleSequence(start, length) {
    // your code here
    let numsArray = [start];

    for (let i = 0; i < length -1; i++ ){
        numsArray.push(numsArray[i] * 3)
        // console.log(numsArray)
    }
    return numsArray
}

// console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
// console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

//**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

// Fibonacci Sequence

/*

Write a function fibonacciSequence that accepts a number as an argument.
The function should return an array representing the fibonacci sequence up to the given length.
The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence,
we take the sum of the previous two numbers of the sequence.

*/



// Your code here
function fibonacciSequence(num){

    if (num === 0) return [];
    else if (num === 1) return [1]

    let fibArr = [1,1]

    let i = 1;

    while (fibArr.length < num) {

        let prev = i - 1

        fibArr.push(fibArr[i] + fibArr[prev])

        i++;

    }

    return fibArr
}



console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
