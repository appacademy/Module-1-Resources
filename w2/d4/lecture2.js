/*
  Other ways of declaring variables!

  Three other ways! Techincally 4!
    - let - weve been using let up to this point
      - can be reassigned
      - block scoped
    - const
      - cannot be reassgined
      - its a constant
      - block scoped
    - var
      - may be or may not reassgined/redeclared
      - function scoped!
    - no keyword - declare a variable globaly - stray away from doing this

    * A variable always evaluates to its value regardless of how to you declare it

    Should stick to const and let

    *Hoisting
      - Hoisting is when, you have a variable assigned in a scope,
        but only the variable delcaration is raised
*/

let variable; //variable declaration - only this is hoisted
variable = "string"; //variable assginment
let var2 = "string"; //variable initialization

//var
//when var is hoisted, only the variable declaration is hoisted
//but with var, its intial value is undefined
//because of that we do not get an error
function myfunc() {
  // var str = "laursen";
  console.log(str);//undefined
  // var str = "brandon";
  const str = 'brandon' //ReferenceError: Cannot access 'str' before initialization
  // str is in the termporal dead zone
  // neither let or const hoist an initial value when js parses the code, therefore an error is thrown
  // console.log(str)
  // a variable declared with let and const before
  // it is initializaed exist temporal dead zone
}

// myfunc();

//let, var, const
//let
//let cannot be redeclared;
let age = 27;
// let age = 28;//cannot redeclare block scope variables
//but we can reassgin with let
age = 2000;
console.log(age)

//const
//const cannot be redeclared
const favColor = 'red';
// const favColor = 'blue';cannot redeclare block scope variables
//cannot reassgin with const
//only mutate
// favColor = 'BLUE';
// console.log(favColor)//TypeError: Assignment to constant variable.

//var
//var can be reassgined and redeclared
var favFood = 'chicken';
var favFood = 'pizza';
//we can redelcare with var
// console.log(favFood)//throws no error, pizza
favFood = 'chicken';
//can reassign
console.log(favFood)//chicken
