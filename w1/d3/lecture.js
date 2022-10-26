/*
Function Expression Syntax
  -Just another way to write functions
  -we learned yesterday about function delcaration

//example
*/


//function declaration
function sayHello() {
  console.log('hello')
}

sayHello();

let res = sayHello;
console.log('res',res())

//function expression
//storing an anonymous function in a variable
//anonymous functions do not have a name
//syntax

let sayHello2 = function() {
  console.log('hello');
  return 'hello'
}

console.log(sayHello2)//[Function: sayHello2]
//notice how it logs a function
//that means we can invoke it
//function declaration and expression are invoked the same
console.log(sayHello2());//
console.log(sayHello2());//

//example
//sum all the numbers of an array
let sumArr = function(arr) {
  //create a variable to track the sum
  //gain acces each element of the arr
  //well loop
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
  //  sum = 0;
    // console.log(i)//these are indexes
    let num = arr[i];//explicit with out naming convention, for clarity

    //0 + 1
    //1 + 2 = 3
    //3 + 3
    sum += num;
    // sum += arr[i];
    // return sum;//if we return in a for loop, the function is finished exectuing

  }
  return sum;
}

console.log(sumArr([1,2,3]))

//functions are first class objects
// class objects. A first class object is defined as:
// 1. It can be stored in a variable
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)
