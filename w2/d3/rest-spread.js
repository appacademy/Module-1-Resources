/*


  Rest and Spread



  /*

  Rest and Spread Operator

  What is the rest parameter?
    * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
     ** Represent variadic function
    * The rest parameter will the gather any additional arguments and place them in a an array

  Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

*/

// rest parameter
// num1 = 10
// num2 = 12
// nums = [13, 15]
function myFunc(num1, num2, ...nums) {
  console.log(num1, num2, nums)

}


// console.log(myFunc(10, 12, 13, 15));// 10 12 [ 13, 15 ]
// myFunc(1,2,3)
// myFunc(10,12,143,35,35);
// myFunc(12)


// let sum = (...nums) => nums.reduce((acc, num) => acc + num);
// console.log(sum(1,2,3,4));



/*

Rest operator

Destructuring with rest
* we can use rest outside of function parameters
* the premise is the same, gather the REST of the elements and store them in a data type.
* we can use destructuring to in combination with rest to create some interesting behaviors

*/


let numbers = [1,2,3];

// [num1, num2, num3] = numbers

// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];

let [num1, ...nums] = numbers
// console.log(num1, nums);// 1 [ 2, 3 ]



// destructure objects
let user = {
  name: "John",
  address: {
    street: "123 Street Rd",
    city: "Orlando",
  },
  age: 30,
};


// let name = user.name;
// let address = user.address;
// let age = user.age;

let { name, address: {street, city}, ...rest } = user;

console.log(name, street, city, rest);// John 123 Street Rd Orlando { age: 30 }
