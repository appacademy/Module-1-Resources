/*


  Function expression syntax!
  - just another way to write a function
  - we learn about function declaration yesterday
  - storing an anonymous function in a variable therefore giving a nate
  * what is anonymous function?
    - just a function with no name
      ex: function() {

      }

  * Why would you use function expression?
      - arrow functions
*/

// sayHello();//function declaration will not throw an error when you try to access it before its defined
// sayHello2();//this will throw an error - ReferenceError: Cannot access 'sayHello2' before initialization

//function declaration
function sayHello(){
  console.log('hello');
}


//function expression
//we store the anon portion in a variable
//giving it a name that we can reference
//as soon as we give it name, its no longer anonymous, because we can reference by its name now
let sayHello2 = function() {
  console.log('hello from sayHello2')
}

//is no different
// let firstName = 'brandon'

//they have the same outcome
//so if we log the function without invoking we, well see the function itself
// console.log(sayHello2);//[Function: sayHello2]
// console.log(sayHello);//[Function: sayHello]
// //the example belows, calls the function runs the console.log inside the function 'hello from sayHello2'
// //log for the return value of calling sayHello2 - undefined because there is no return
// console.log(sayHello2());//undefined


// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// 1. It can be stored in a variable 
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)
