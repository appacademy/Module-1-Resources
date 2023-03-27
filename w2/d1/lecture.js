/*


  Arrow Functions!
  - more concise way to declare out functions
  - allows to create one liners using implicit return

  Difference
  - this value - learnt about 4

*/

//function expression
//an anon function stored in a variable
let sayHello = function(name) {
  return 'hello ' + name;
};

// console.log(sayHello('brandon'));

//lets use a fat arrow!
//replace the function keyword with =>
//if you only have one parameter, you can omit the parenthesis
let sayHello2 = name => {
  return 'hello ' + name;
};
//implict return
// let sayHello3 = name => 'hello ' + name;


// console.log(sayHello2('brandon'));

//another with twos args
//without the implicit return
//cannot omit parentheses
let addNums = (num1, num2) => {
  return num1 + num2;
};

//with implicit return
//in order to be implicit, you must omit the curlys, the statement must be on one line, and you must omit the return
//if the logic cannot be done in one line, then do not sure a implict return
let addNums2 = (num1, num2) => num1 + num2;

// console.log(addNums2(2, 10))


//cant do this
//cant return implicit because logic is two lines!
let addNums3 = (num1, num2) => {
  let res = num1 + num2;
  return res
}

//if you need to return a obj just wrap the obj in parenthesis w implict returns!
let returnObj = () => ( { name: 'brandon' })
