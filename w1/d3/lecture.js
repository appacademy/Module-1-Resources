/*


  Function expression syntax!
  - just another way to write a function
  - we learnt about function declaration yesterday
  - storing an anonymous function in a variable
  * what is anonymous function?
    - just a function with no name
    ex: function(){

    }

  * why would you use function expression?
    - arrow functions, callbacks, closure

*/


//function declaration
function sayHello() {
  console.log('hello');
};

// sayHello();


//function expression
//we store a anon function in a variable
//giving it a name, that we can reference
//as soon as we give a anon function a name, it is no longer anonymous because we can alias it

let sayHello2 = function () {
  console.log('hello')
}

// console.log(sayHello2 === sayHello2);//true
// console.log(sayHello2);//[Function: sayHello2]
// console.log(sayHello2());//undefined

let name = 'brandon';
// console.log(name);


// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// 1. It can be stored in a variable - learn today!
// 2. it can be passed as an argument to a function (coming up next week!)
// 3. It can be returned from a function (also coming up next week!)
/*



*/
