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
  for(let word of restOfWords) {
    // console.log(word);
    sentence += ' ' + word;
    };
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
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [0, arr1, arr2];
// console.log(arr3);//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]
//Not what we want

//use spread!
//can add values when spreading
// like extracting the values from an array and spreading them into a new one
let arr4 = [0, ...arr1, ...arr2, 7,8,9];
// console.log(arr4);//[ 1, 2, 3, 4, 5, 6 ]

//spread can be used to make copies
let copy = arr4.slice();
let copy2 = [...arr4];
//both will make a shallow copy


// spread with objects
let obj1 = {name: 'brandon'};
let obj2 = {pet:'cat',favColor:'red'};
let obj3 = {obj1, obj2, city:'brooksville'}
// console.log(obj3);
// not what we want , end up with nested objects
//can add key:value pairs when spreading as well well

let obj4 = {...obj1, ...obj2, city: 'brooksville'};
// console.log(obj4);//{ name: 'brandon', pet: 'cat', favColor: 'red', city: 'brooksville' }

//spreading with objects make a shallow copy
let copyObj = {...obj4}
// console.log(copyObj);


//destructuring
let numArr = [10,20,30,40];

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
let arr = [20,10,30];
console.log(arr);
[arr[0], arr[1]] = [arr[1], arr[0]];
//[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; swap values while iterating
console.log(arr);//[ 10, 20, 30 ]
//swap values in an array
