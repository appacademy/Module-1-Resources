/*

  Rest Parameter

  What is the rest parameter?
    * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
     ** Represent variadic function
    * The rest parameter will the gather any additional arguments and place them in a an array

  Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

*/

// using rest
// * create a function that takes in a varying amount of words and creates a sentence out of them

function sentenceMaker(word1, ...words) {
  // console.log(word1, words);
  let sentence = word1;

  for (let word of words) {
    sentence += " " + word;
  }

  return sentence;
}

// console.log(sentenceMaker("hello", "world")); // hello world
// console.log(sentenceMaker("one")); // one undefined
// console.log(sentenceMaker("too", "many", "args")); //too many

function product(...numbers) {
  // console.log(numbers);
  let total = 1;
  for(let number of numbers) {
    // let number = numbers[i] - ! no need for of does for us
    // looping are done under the hood
    total *= number;
  };

  return total;
};


// console.log(product(12,12));
// console.log(product(1,2,3));
// console.log(product(34));


// Destructuring with rest
// * we can use rest outside of function parameters
// * the premise is the same, gather the REST of the elements and store them in a data type.
// * we can use destructuring to in combination with rest to create some interesting behaviors

let numbers = [1,2,3,4,5,6];

// let [num1, ...restOfNums] = numbers;
// console.log(num1, restOfNums);// 1 [ 2, 3, 4, 5, 6 ]
// * destruct the number 1 into the num1 variable, and put the REST of the numbers in an array and stored that in a variable called restOfNums

// use both rest and spread with destructing

let [firstNum, ...rest] = [...numbers, 4];
// console.log(firstNum, rest);// 1 [ 2, 3, 4, 5, 6, 4 ]
// * to the right of the equal sign - spread into an new array literal all the numbers from the numbres array, but also add the number 4
// -> [1,2,3,4,5,6,4];
// * to the left of the equal sign, destruct positionally into the firstNum variable the first element in the array to the right of the equal sign and store the rest of the numbers in a variable called rest
// -> 1 [2,3,4,5,6,4]



let names = ['brandon', 'maica','trevor', 'charles']

let [person1, ...people] = [...names, 'caleb'];

// let [person1, ...people] = ['brandon', 'maica','trevor', 'charles', 'caleb'];

// person1 = 'brandon';
// people = ['maica','trevor', 'charles', 'caleb']

// console.log(person1, people);
//brandon maica trevor charles
// brandon [ 'maica', 'trevor', 'charles', 'caleb' ]



// ! Destructuring with Objects

let user = {
  name: "John",
  address: {
    street: "123 Street Rd",
    city: "Orlando",
  },
  age: 30,
};


// Destructure some values out of an object by providing the key
// we want to destruct out the name

// let { name, address, address: { city } } = user;
// console.log(name, city, address);// John Orlando


// use rest!
let { name, ...restOfObj} = user;

// console.log(name, restOfObj);
// John { address: { street: '123 Street Rd', city: 'Orlando' }, age: 30 }


// destructure in a loop

let entries = Object.entries(user);
for(let [key, value] of Object.entries(user)){
  // console.log(entry);
  // console.log(key, value);
  // let key = entry[0];
  // let value = entry[1];
};

function destructure({ name }){
  // console.log(prop);// { name: 'brandon' }
  // let { name } = prop;
  console.log(name);
}


console.log(destructure({name: 'brandon'}))
console.log(destructure({name: 'caleb'}))
// console.log(destructure(12))
