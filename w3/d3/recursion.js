/*



  Call Stack!
    - The call stack is a structure that js uses to keep track of evaluation of function calls
    - stack data structure
    - first in last out
    - add to a stack, youre pushing to the top
    - if you remove from the stack, you are popping off

    Notes about the call stack!
    - when a function is called, it is pushed on the call stack
    - when a function is returned, it is popped off the call stack
    - function is at the top stack, it is the function currently being executed

*/

function foo() {
  console.log("a");
  bar();
  console.log("e");
}

function bar() {
  console.log("b");
  baz();
  console.log("d");
}

function baz() {
  console.log("c");
}

// foo(); //a,b,c,d,e

/*


    Recursion!
      - What is recursion?
        - The process of a function calling a function within itself
        - A function that calls itself, till it reaches a specific condition
        - A recursive function has two cases - base case and a recursive case
          - base case - tells the functions to stop recursing
          - recursive case - tells the function to keep recursing

          Recursive step - step towards the base case

          If we dont tell the function to stop recursing, we will get a stack overflow!

          For a recursive function you need a base case/recursive case and a recursive step
*/

//goal: print  out all the numbers starting from num to 0

function recurse(num) {
  // base case -  this tells our function to stop recursing
  if (num === 0) return;
  console.log(num);

  //recursive step -  this steps our function towards our base case
  return recurse(num - 1); //return recurse, we are calling the function we are withing, this is what makes this function recursive
}

//recursive case is the opposite of the base case,
function recurseWrecursiveCase(num) {
  if (num > 0) {
    console.log(num);
    return recurseWrecursiveCase(num - 1); //recursive step
  } else {
    return;
  }
}

// console.log(recurseWrecursiveCase(5))

// console.log(recurse(5))//undefined
//recurse(5) => return a function recurse(4)
//recurse(4) => return a function recurse(3)
//recurse(3) => return a function recurse(2)
//recurse(2) => return a function recurse(1)
//recurse(1) => return a function recurse(0)
//recurse(0) => return undefined
//recurse(1) => return undefined
//recurse(2) => undefined
//recurse(3) => undefined
//recurse(4) => undefined
//recurse(5) => undefined

//lets reverse a string recursively

function reverse(string) {
  //base case
  if(!string.length) return '';

  let first = string[0];

  //recursive step - slicing the string till it reaches a length of 0
  let res = reverse(string.slice(1)) + first;

  return res;
};

// function reverse(string) {
//   //recursive case
//   if (string.length > 0) {
//     let first = string[0];

//     //recursive step - slicing the string till it reaches a length of 0
//     return reverse(string.slice(1)) + first;
//   } else {
//     return "";
//   }
// }

console.log(reverse("cat")); //tac
//reverse('cat') => reverse('at') + c
//reverse('at') => reverse('t') + a
//reverse('t') => reverse('') + t
//reverse('') => return ''
//reverse('t') => " " + t ==> 't'
//reverse('at') => 't' + a ==> 'ta'
//reverse('cat') => 'ta + c ==> tac
