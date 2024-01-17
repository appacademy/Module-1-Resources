
/*

  Destructuring
  * Allows us to move and and access values within an array or object
  * We can use destructuring behavior to extract elements of an array or object

*/

let fruitObj = { fruit1: "apple", fruit2: "pear", fruit3: "strawberry"};
//OLD VERSION
//let fruit1 = fruitObj.fruit1
//let fruit1 = fruitObj[fruit1]
//let fruit2 = fruitObj.fruit2
//NEW VERSION USING DESTRUCTURING
let { ...restOfTheFruits } = fruitObj;
//console.log(fruit1)
//console.log(restOfTheFruits)
let veggieArr = ["tomato", "lettuce", "celery"]
//OLD VERSION
//let tomato = veggieArr[0]
//NEW WAY
let [ pickle, ...bananas ] = veggieArr;
console.log(bananas)

// ! Destructuring with Arrays
let array = [1, true, "hello word"];

// Unpacking array values into variables
// * we can use destructuring to unpack!
let [num, bool, str] = array;
// extracting from the array to the right of the equal sign
// the values from the array turned into variables positionally

console.log(num); // 1
console.log(bool); // true
console.log(str); // hello world

// can skip elements
let array2 = ["blue", 100, false];

let [color, , boolean] = array2 // we want just "blue" and false

console.log(color);
console.log(boolean)

// Destructuring with rest
// * we can use rest outside of function parameters
// * the premise is the same, gather the REST of the elements and store them in a data type.
// * we can use destructuring to in combination with rest to create some interesting behaviors

let numbers = [1, 2, 3];

let [num1, ...restOfNums] = numbers
// console.log(num1, restOfNums); // 1 [ 2, 3 ]
// * destruct the first arg into num1, and then take the rest and store in a variable called restOfNums

// Using both rest and spread with destructuring

let [firstNum, ...rest] = [ ...numbers, 4]
// to the right [1, 2, 3, 4]
// the left [ declaring a variable called firstNum - 1, 2, 3, 4 ]

// we are saying to the RIGHT, SPREAD all of the elements of the numbers into this array literal, but also add the number 4
// on the left, store the first element of the array literal to the right of the = sign in firstNum
// store the REST of the elements in an array called rest
// console.log(firstNum, rest) // 1 [2,3,4];

// Destructuring With Objects
let user = {
    name : "John",
    address: {
        street: "123 Street Rd",
        city: "San Francisco"
    },
    age: 30
};

// lets destructure some values out of the user object

// "name" cannot be bananable because we have to ref an existing key within the user obj
// let { name, ...restOfObject  } = user

// this will not work :(
// let [ name, ...restOfObject ] = user


// console.log(name)// john
// console.log(restOfObject) // { address: { street: '123 Street Rd', city: 'San Francisco' }, age: 30}
// console.log(user) // user obj is not affected by our destructuring

// lets take this one step further
// to get the values with in the original object
let {name, address : { street, city }} = user

// console.log(street)
// console.log(city)

// destructuring within a loop!
for (let [key,value] of Object.entries(user)) {
    console.log("key -> ",key)
    console.log("value -> ", value)
}


// destructuring a function argument
function destructure({ name }){
    console.log(name)
}


destructure({ name : "maica"})
