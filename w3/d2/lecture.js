
/*



  Call Stack
    * The call stack is a structure that js uses to keep track of evaluation of function calls
    * function that is at the top of the stack is the function currently being executed
      * first in last out
      * last in first out
    * stack of plates
    * when a function is called - it gets pushed to the top
    * when a function is returned - it gets popped off the stack
      * if a function does not have a return, it will still return and just to default its value to undefined

*/

// Observe stack
// * Can watch stack using debugger

function foo() {
  console.log("a");
  debugger;
  bar();
  console.log("e");
  return 'foo function popped off stack'
}

function bar() {
  console.log("b");
  debugger;
  baz();
  console.log("d");
  return 'bar function popped off stack'
}

function baz() {
  debugger;
  console.log("c");
  return 'baz function popped off stack'
}

// foo();


// function evaluates to return
// passing return values down the stack

function myFunc(num){
  console.log('whats happening?')

  // base case
  if(num === 0) {
    return;
  };

  return myFunc();


};

// myFunc(5);

function example(n){


  function inner() {

  };

  // return return value of invoking function innner
  return inner();
  // return the value that the inner variable holds - [function]
  return inner;
  // if(n > 0) {
  //   return 'do this'
  // } else {
  //   return 'do that'
  // }

  // if(n > 0) {
  //   return 'do this'
  // }
  //   return 'do that';

}


// console.log(example);
// [Function: example]
// console.log(example());// do that
// [Function (anonymous)]




/*
start - 5
stop - 0;
step - -1
*/

// for(let i = 5; i >= 0; i--){
//   console.log(i);
// }


function recursion(num) {
  debugger;
  console.log(num);
  if(num === 0) return 0;

  debugger;
  //recursive step
  return recursion(--num);
};

// console.log(recursion(5));// undefined

/*
! return the return value of invoking recursion passing the num - 1
! we cannot get the return value until we call the function
! remember what ever is on the top of the call stack is what js will focus on
recursion(4) => recursion(3)
recursion(3) => recursion(2)
recursion(2) => recursion(1)
recursion(1) => recursion(0)
recursion(0) => true <-- base case -  and this is NOT a function call
! down the stack
recursion(1) => true
recursion(2) => true
recursion(3) => true
recursion(4) => true
recursion(5) => true
*/




  // recursive step
  // let popped = arr.pop();
  // let shift = arr.shift();

  // recursive call
  // return recurseArr(arr.slice(1));
  // let ex = arr.slice(1);





for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
  if(arr[i] === 6) return arr[i];
}


// add edge base case
function recurseArr(arr) {
  debugger;

  // base case
  if(arr.length === 0) return 'hit base case';
  // console.log(arr);
  if(arr[0] === 6) return arr[0];

  arr.shift();
  debugger;

  return recurseArr(arr);

};

// console.log(recurseArr([1,2,3]));
console.log(recurseArr([5,6,7]))
/*
recurseArr([1,2,3]) => 'hit base case'
recurseArr([1,2])   => 'hit base case'
recurseArr([1])     => 'hit base case'
recurseArr([])      => 'hit base case'

recurseArr([5,6,7])  => 6
recurseArr([6,7])    => return 6
*/
