
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

// Using rest
// * create a function that takes in varying amounts of words and creates a sentence out of them
// * Rest is gather the REST of the arguments and placing them an a array

function sentenceMaker(word1, ...words) {
  console.log(word1, words); //lets ["make", "a", "sentence"]
  let sentence = word1;

  // concatenate on to the sentence string the current word as we iterate
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    sentence += " " + word;
  }

  return sentence;
  // return words.join(' ') + '!';
}

// * Are functions can now be more dynamic in accepting varying different arguments
console.log(sentenceMaker("lets", "make", "a", "sentence")); //
console.log(sentenceMaker("hello", "world")); //
console.log("varying", "amount", "arguments"); //

// Example 2
function product(...numbers) {
  // console.log(numbers);// [1,2,3,4]
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    total *= number;
  }
  return total;
}

console.log(product(1, 2, 3, 4)); // 24
console.log(product(1, 2, 3)); // 6
console.log(product(2)); // 2

/*

  Spread Operator

  What is the Spread Operator?
    * The spread operator allows you to break down a data type into the elements that make it up.
  Two Basic Behaviors
    * Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
    * Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.

    * Create a shallow copy

*/

// Spread with Arrays
// * spread values of array into another array
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [0, arr1, arr2];
console.log(arr3); // [ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ];
// * not what we want, we want the values not as nested arrays

// * Use spread instead
let arr4 = [0, ...arr1, arr2];
// * spread into an array literal the number 0, the elements of arr1 and the elements of arr2 and store in the variable arr4
console.log(arr4); //  [ 0, 1, 2, 3 , [4, 5, 6]];

// * Spread can be used to create a shallow copy
// *  old way to make copy
let copy1 = arr1.slice();
// *  new way to make copy using spread
let copy2 = [...arr1];

// Spread with Objects
// * spread key:value pairs of object into another object
// ! avoid spread between different data types
let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksville" };
console.log(obj3); // end up with nested object

// * use spread instead
let obj4 = { ...obj1, ...obj2, city: "tampa" };
// *  spread into an object literal all the key:value pairs of obj1 and obj2, while also adding the key:value pair of city:'tampa' and store it in the variable obj4
console.log(obj4);


// rest sum

// * 1. RestSum
const restSum = (...otherNums) => {
  let sum = 0;
  for (let num of otherNums) {
    sum += num;
  }
  return sum;
};

// * 2. spreadItOut
const spreadItOut = (array1, array2) => {
  return [...array1, ...array2];
};

// * 3. breakDownObj
const breakDownObj = (obj) => {
  return [...Object.keys(obj), ...Object.values(obj)];
};



// ! SKIP
// * 4. copy array
//right hand is gathering rest
//left is spreading into

const arrSpread = [...arr]; //spreading elements into array literal
const [...arrRest] = arr; //gather the rest of the arguments in the arrRest variable
const objSpread = {
  ...obj,
};
const { ...objRest } = obj;

// * 5. clone object
//clone the obj into new obj while also grabbing value for green

// on right; spreading old object, adding new key-value pair
// on left; destructure out the green key, and spread the rest of the key:value pairs into the objClone variable
const { green, ...objClone } = { ...obj, yellow: "pentagon" };

console.log(objClone); // { red: "circle", blue: "square", yellow: "pentagon" }
console.log(green); // hexagon
