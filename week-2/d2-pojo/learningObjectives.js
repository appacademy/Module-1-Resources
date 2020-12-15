// Pair programming readings:

  // https://open.appacademy.io/learn/js-py---may-2020-online/week-1-may-2020-online/pair-programming-the-a-a-way
  // https://open.appacademy.io/learn/js-py---may-2020-online/week-1-may-2020-online/empathetic-communication
  



// --------------------------------------------------------------------


// 1. Label variables as either Primitive(P) vs.Reference(R)

// Boolean - P
// Null - P
// Undefined - P 
// Number - P
// String - P
// Array - R
// Object - R




// --------------------------------------------------------------------


// 2. Identify when to use . vs [] when accessing values of an object

let obj = { "1": 1, "two": 2 };


// console.log(obj[keyName]);
// console.log(obj.keyName);

// console.log(obj);




// --------------------------------------------------------------------


// 3. Write an object literal with a variable key using interpolation
let keyName = "two";

let obj2 = { [keyName]: 2 } // ob2 => {"two": 2}
console.log(obj2);




// --------------------------------------------------------------------


// 4. Use the obj[key] !== undefined pattern to check if a given variable 
//    that contains a key exists in an object

function doesKeyExist(obj, key) {
  return obj[key] !== undefined;
}

let course = { bootcamp: 'App Academy', course: 'Bootcamp Prep' }
// console.log(doesKeyExist(course, 'course')); // => true
// console.log(doesKeyExist(course, 'name')); // => false




// --------------------------------------------------------------------


// 5. Utilize Object.keys and Object.values in a function

function printKeys(object) {
  return Object.keys(object);
}

function printValues(object) {
  return Object.values(object);
}

// console.log(printKeys({ dog: "Strelka", dog2: "Belka" }));
// console.log(printValues({ dog: "Strelka", dog2: "Belka" }));



// --------------------------------------------------------------------


// 6. Iterate through an object using a for in loop

let obj3 = { name: "Sergey", skill: "hockey" };

// for (let key in obj3) {
//   console.log(key);
// }

// console.log(Object.entries(obj3));



// --------------------------------------------------------------------


// 7. Define a function that utilizes ...rest syntax to accept an 
//    arbitrary number of arguments

function restSum(...otherNums) {
  let sum = 0;
  // console.log(num1);

  console.log(otherNums);

  otherNums.forEach(function (num) {
    sum += num;
  });

  return sum;
}

// console.log(restSum(3, 5, 6)); // => 14
// console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
// console.log(restSum(0)); // => 0




// --------------------------------------------------------------------


// 8. Use ...spread syntax for Object literals and Array literals

let numArray = [1, 2, 3];
let moreNums = [...numArray, 4, 5, 6]

// console.log(moreNums);

let shoe = { color: "red", size: 10 };
let newShoe = { ...shoe, brand: "Nike", size: 12 };
// console.log(newShoe);
newShoe.color = "black";

// console.log(newShoe);
// console.log(shoe);




// --------------------------------------------------------------------


// 9. Destructure an array to reference specific elements

let animalArray = ["tiger", "hippo"];

let animal1, animal2;

[animal1, animal2] = ["tiger", "hippo"];

// console.log(animal1); //=> "tiger"
// console.log(animal2); //=> "hippo"




// --------------------------------------------------------------------


// 10. Destructure an object to reference specific values

let obj5 = { apple: "red", banana: "yellow" };
let { apple: newApple, banana: newBanana } = obj5;

// console.log(newApple); // "red"
// console.log(newBanana); // "yellow"

let object = { animal: { name: "Fiona", species: "Hippo" } };

let {
  animal: { species: newHippo }
} = object;

// console.log(newHippo); // => 'Hippo'




// --------------------------------------------------------------------


// 11. Write a function that accepts a string as an argument and returns  
//     an object representing the count of each character in the array


function stringConverter(string) {
  let stringObject = {};
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    if (stringObject[currentLetter] === undefined) {
      stringObject[currentLetter] = 1;
    } else {
      stringObject[currentLetter] += 1;
    }
  }
  return stringObject;
}

// console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
// console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}