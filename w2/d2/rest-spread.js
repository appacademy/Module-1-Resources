/*





  Rest and spread Operator

  What is the rest operator?
  - The rest operator allows us to accept an arbitrary amount of arguments inside of a function
  - rest will gather any additional arguments and place them in a array

  * we know a function can take fewer args than expected
    - params will be undefined

  * a function that can accept additional arguments
    - using rest

*/

//rest
// use three dots ...
// must be positioned last
// gather the rest of the arguments that do not have parameters to represent them
// and instead store them in array called restOfWords

let sentenceMaker = (word1, ...restOfWords) => {
  // console.log(word1, restOfWords);
  // return word1 + ' ' + word2;
  let sentence = word1;
  for (let word of restOfWords) {
    // console.log(word);
    sentence += " " + word;
  }
  return sentence;
  // return word1 + ' ' + restOfWords.join(' ')
};

// console.log(sentenceMaker('hello', 'world'));//hello world
// console.log(sentenceMaker('lets', 'make', 'a', 'longer', 'sentence'));//lets make

/*

  Spread Operator
  - the spread operator is used to SPREAD all elements of an object/array/string into another object/array/string
  - spread creates a shallow copy

*/

//spread with arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
// console.log(arr3);//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]
//Not what we want

//use spread!
//can add values when spreading
// like extracting the values from an array and spreading them into a new one
let arr4 = [0, ...arr1, ...arr2, 7, 8, 9];
// console.log(arr4);//[ 1, 2, 3, 4, 5, 6 ]

//spread can be used to make copies
let copy = arr4.slice();
let copy2 = [...arr4];
//both will make a shallow copy

// spread with objects
let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksville" };
// console.log(obj3);
// not what we want , end up with nested objects
//can add key:value pairs when spreading as well well

let obj4 = { ...obj1, ...obj2, city: "brooksville" };
// console.log(obj4);//{ name: 'brandon', pet: 'cat', favColor: 'red', city: 'brooksville' }

//spreading with objects make a shallow copy
let copyObj = { ...obj4 };
// console.log(copyObj);

//destructuring
let numArr = [10, 20, 30, 40];

// unpack the values from the array
let [firstEl, secondEl] = numArr;
// console.log(firstEl, secondEl, numArr);//10 20

//use a comma to skip elements
// let [firstEl, , thirdEl] = numArr;

// *  swapping
let num1 = 45;
let num2 = 12;

//this syntax will swap values
[num1, num2] = [num2, num1];
// console.log(num1, num2);//12 45

// can swap index in array
let arr = [20, 10, 30];
// console.log(arr);
[arr[0], arr[1]] = [arr[1], arr[0]];
//[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; swap values while iterating
// console.log(arr);//[ 10, 20, 30 ]
//swap values in an array

// array destructuring with rest
let arr5 = [1, 2, 3, 4, 5, 6, 7];

// let [n1, n2, ...restOfNums] = arr5;
// console.log(n1, n2, restOfNums);//[ 3, 4, 5, 6, 7 ]
// use n1 to represent the first num, use n2 to represent the second nums
// take the rest of the nums and put them into an array named rest of nums

//rest and spread!
let [n1, n2, ...restOfNums] = [...arr5, 8];
// so were saying to the right spread the values of arr 5into the array literal
// to the left destruct first num to n1 and second n2, and store the rest in the restOfNums
// console.log(n1, n2, restOfNums);//1 2 [ 3, 4, 5, 6, 7, 8 ]
// console.log(arr5);

//object destructuring

let obj = {
  name: "brandon",
  age: 27,
  location: { city: "tampa", state: "florida" },
};

// let {
//   name,
//   age,
//   location: { city },
// } = obj;
// console.log(name, age, city);//brandon 27 tampa
// let { city, state } = obj.location;
// console.log(city, state); //tampa florida

let { name, age, ...restOfObj } = { ...obj, favFood: "chicken" };
// so were saying to the right, spread the key:values pairs of the obj, and add a key:val pair of favFood
// to the left, destruct into variables name and age, the values assoicated with those keys
// and store the rest of the key values pairs in a variable called restOfObj
// console.log(name, restOfObj); //brandon { age: 27, location: { city: 'tampa', state: 'florida' } }



let obj5 = {
  name: "brandon",
  age: 27,
  location: { city: "tampa", state: "florida" },
};

for(let [key, value] of Object.entries(obj5)){
  // console.log(entry);
  // let [key, value] = entry;
  // console.log(key, value)
};

function destructure({ name }) {

  // console.log("obj:",   obj);
  // let { name } = obj;
  console.log(name);//brandon
}

destructure({ name: 'brandon'});
