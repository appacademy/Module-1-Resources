/*

  Call Stack!!
    - The call stack is a structure that javascript uses to keep track of the evalualtion of function calls
    - it uses a stack data structure

    - adding to the stack as pushing on to the stack

    - removing from the stack as popping off the top of the stack

    - FIRST IN LAST OUT, LAST IN FIRST OUT

    Notes about call stack
     - when a function is called it is pushed on to the stack
     - when a function is returned, it is popped off of the stack
     - function is at the top of the stack, is the function being currently exectued

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
    - Recursion is the process of calling a function within itself

    Two cases:
      - base case - what tells our function when to stop recursing
      - recursive case - situation in which the function recurses, usually opposite of the base case

      - Recursive step - step towards reaching the base


      Two things you need in a recursive function are a base case/recursive case and a recursive step or you will get a stack overflow!

      well see what hapens when a function call itself in relation to the call stack
*/
//goal: print out all the numbers starting from the num to 0
function recurse(num) {
  if(num === 0) return 0;//base case - when to stop recursing
  console.log(num);
  return recurse(num - 1);//recursive step - step towards the base case
}

//noticed i did not show in example of a recursive case
//with recursive case
function recurse2(num) {
  if (num > 0) {//recursive case
    console.log(num)
    return recurse2(num - 1);//recursive step
  } else {
    return 0;
  }
}
//recurse(5) => return a function recurse(4)
  //recurse(4) => return a fucntion recurse(3)
    //recurse(3) => returns a function recurse(2)
      //recurse(2) => return a function recurse(1)
        //recurse(1) => return a function recurse(0)
          //recurse(0) => return 0; now we have a return value, we can start popping off funciton in our stack


console.log(recurse(5))//5,4,3,2,1
//when we calla function it is added to the call stack
//when we returna function it is removed from the call stack
//what if we return a function????
//we have to wait for the returned function, to return a value in order for it top pop off all the call stack
