// Function Expression Syntax
// There's another way that we can write functions. Rather than using what we've
// used before (also called function declaration syntax), we can instead declare
// variables to hold our function in. Compare:

// function declaration syntax
function sayHello1() {
    console.log('hello');
    console.log('bye');
  }
  // function expression syntax
  let sayHello2 = function() {
    console.log('hello');
    console.log('bye');
  };

sayHello1()
sayHello2()
// Both functions accomplish the same tasks, we've just set about defining them
// differently. 

// Here's another example: 
let sumArr = function (arr) {
  // create a variable to track the sum
  let sum = 0;

  // loop over the array and add each element to the sum
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
  }

  // return our sum
  return sum;
}

// console.log(sumArr); // [Function: sumArr]
console.log(sumArr([1,2,3])); // 6

// You'll see functions defined using either syntax, it's good to get a strong
// grasp of either on sight. 

// But what does this all mean? This brings us around to the concept of first 
// class objects. A first class object is defined as:
// 1. It can be stored in a variable
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)

// We've just seen that functions can be stored in variables, as the course goes
// on we'll explore the other facets of functions as first-class objects