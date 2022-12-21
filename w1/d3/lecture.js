/*


Function expression?
  - just another way to write a function
  - we have learned about function declaration
*/


//function declaration
function sayHello() {
  console.log('hello')
  return 'example 1'
}

//storing the return value in function
// let res = sayHello()
// console.log(res)

//function expression
//storing an anonymous function in a variable
//an anonymous function is a function with no name
let sayHello2 = function() {
  console.log('hello')
  return 'example 2'
}

// console.log(sayHello2())//[Function: sayHello2]

//sumArray
//we are given an array of numbers
//we want to sum all the numbers the numbers array


let numbers = [1,2,3]

function sumArr(array) {
  let sum = 0; //declare sum to track sum, we are going to add to this number as we iterate, when were done iterating, we will return the sum
  console.log('starting sum:,', sum )
  //write a for loop to gain access to all numbers in the array
  //we start at i at 0, because we want to start from the first index, arrays are indexed, starting from 0
  //we want to continue iterating as long as i is less then array.length, array.length evaluates to 3, i < 3 keep iterating
  //i ++, this tells our loop to go up in increments of 1
  for(let i = 0; i < array.length; i++) {
    let num = array[i];//here we are storing the current number in a variable,as the the index changes when iterate, so does the number, accessing a value at a index
    console.log('current num:', num)
    //as we iterate we are adding the current num to the sum, using the assignment operator +=
    //we are reassign sum to be a different number each time
    sum += num;
    console.log('current sum:', sum)
  }

  //after we've completed our iteration we return the sum
  return sum;
};

console.log('return value of our function', sumArr(numbers))//6

// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// 1. It can be stored in a variable
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)
