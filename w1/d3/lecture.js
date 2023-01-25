/*


  Function expression syntax!
  - just another way to write a function
  - we learned about function declaration
  - storing anonymous function in variable

*/

//function declaration
//can be hoisted
function sayHello() {
  console.log("hello");
}

//function expression
//storing anonymous function in variable
//cannot be hoisted
let sayHello2 = function () {
  console.log("hello 2");
};

//Invoked the same
//achieve the same result
sayHello();
sayHello2();

let printFives = function (max) {
  for (let i = 0; i < max; i += 3) {
    console.log(i);
  }
};

printFives(20);

// console.log(printFives)//[Function: printFives]
// console.log(printFives(20))

//functions are first class objects
/*
1. It can be stored in a variable - learned today
2. It can be passed as an argument to a function - learn next week
3. It can be returned from a function - learned next week
*/
