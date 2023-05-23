/*



  Rest and spread operator!

  What is rest operator!
  - The rest operator allows us to accept any arbitrary number of arguments inside of a function
  - rest will gather any additional arguments and place them in a array

  * we know the a function can take fewer args than expected
   - params will be undefined if no args is passed

  * a function that can accepts additional arguments
  - using rest!
*/


//examples using rest
// if you add a param, outside of rest, it will gather the rest of the elements in an array
let sumNums = (num1,...numbers) => {
  // console.log(num1, numbers);//rest will gather al elements in an array
  let sum = num1;
  for(let num of numbers) {
    sum += num;
  };
  return sum;
};


// console.log(sumNums(1,2,3,4))
// console.log(sumNums(2,3))
// console.log(sumNums(1,2,3,4,54,6,67))


let sentenceMaker = (...words) => words.join(' ') + '!'

// console.log(sentenceMaker('lets','make','a','sentence'))



/*

     Spread!
      - the spread operator is users to SPREAD all elements of an object/array into another object/array
      * it creates a shallow copy

*/


//spread with arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [0, arr1, arr2];
console.log(arr3);//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]
//not quite what we want

//use spread
//can also values when spreading
let arr4 = [0, ...arr2, ...arr1];//order matters whe you spread
// console.log(arr4);//[ 1, 2, 3, 4, 5, 6 ]

// let arr5 = arr1.concat(arr2);//two different ways to the same things
// spread can be used to create copies
// let copy = arr.slice();
// let copy2 = [...arr];

let obj1 = {name: 'brandon'};
let obj2 = {pet:'cat', favColor:'red'};
let obj3 = {obj1, obj2, city:'brooksville'};//not what we want, because we dont want nested objects!
// console.log(obj3);

// use spread if you dont want nested objects
// add key:value pairs when spreading
let obj4 = {...obj1, ...obj2, city:'broosville', city:'tampa', age: 27}
// console.log(obj4);

//spread adds the key:value pairs from one object to another, but does not nest the object


// DESTRUCTURING
// array
let numArray = [10,20,30];

// ! unpacking
// let keyword, the literal you want to destructure out of, and the array you are destructing from
// variables can named anything, they are positional
let [firstEl, secondEl, thirdEl] = numArray;
console.log(firstEl, secondEl, thirdEl);//10 20 30


// let [firstEl, , thirdEl] = numArray;
// Use comma to skip values
// console.log(firstEl, thirdEl);//10 30

// ! swapping
let num1 = 17
let num2 = 3;

//this syntax swap values of two variables


// let a = [2,1,3,4];
// let b = a.slice()
// let b  = [...a];

// // swapping -- take values from one spot in array, and move them to another
// console.table(a)
// console.log(a)

// let tmp = a[0];
// a[0] = a[1];
// a[1] = tmp;
// console.log(a);

let a = [2, 1, 3, 4];

// let [two, one, three, four] = a;
// //   [a[1], a[0]] = [a[0], a[1]];

// console.log(two);
// console.log(one);
// console.log(three);
// console.log(four);

// let wayne = {
//     furColor : "black",
//     hasTail: false,
//     isChonky: true,
//     isCuddly: true,
// };

// let wayneEntries = Object.entries(wayne);

// console.table(wayneEntries)
// console.log(wayneEntries)

// for (let entry of wayneEntries){
// for (let [key, value] of wayneEntries){
//     // console.log(entry)
//     console.log("at the key of", key,"we have the value", value)
// }


let wayne = {
    furColor: "black",
    hasTail: false,
    isChonky: true,
    isCuddly: true,
};
// let wax = wayne;
let wax = {...wayne};
// let wax = {};
// for (let key in wayne) {
//     wax[key] = wayne[key];
// }
wax.furColor = "torty";
wax.isChonky = false;
wayne.hasDraculaTeeth = true;
console.table(wayne);
console.table(wax);
// let {furColor:majesticCoat, isChonky:moreToLove} = wayne;

// console.log(majesticCoat);
// console.log(moreToLove);

let personObj = { name: "brandon", age: 27, pets: { cat: 'mochi' } };
// destruct object
// provide the key of what you want the value of
// let { name, age, pets: { cat } } = personObj;
// console.log(name, age, pets);//{ cat: 'mochi' }
// let { cat } = pets;
// console.log(cat);//mochi
// let { cat } = personObj.pets
// console.log(cat);

let { name, ...restOfObj} = { ...personObj, favFood: 'chicken'};
// to the right, spread all values of the personObj into the object literal, add a key value pair
// to the left, destructure out the name value, and store the rest of the object in the restofObj variable

console.log(name, restOfObj);
// console.log(personObj);

let newObj = { ...personObj, name: 'krandon', car:'challenger'}
// console.log(newObj);
