

// three types of scope
// global, function/local/ block

// global scope - any variable declared in global name space - ie: not in a function
// ex:
let name = 'brandon';//<-- globally available
// console.log(name);


function test() {
  // function scope - all variables declared within a function
  // console.log(name)
  let age = 28;//<- only available to test function
  isHungry = true;//<-- declared globally no keyword(let, const, var) - so we can access outside of the function
}

test();

function test2(){
  // function scope
  // console.log(age);// age is scoped to a different function - threw an error
  console.log(isHungry);// true <-- its a global variable - no error!
}

test2();
