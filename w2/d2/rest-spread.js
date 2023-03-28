/*


  Rest and Spread Operator - ...

  Rest Operator!
  - The rest operator allows us to accept any arbitrary number of argument's inside of a function
  - rest will gather any additional arguments and place them in a an array

  * We know that a function can take few args than expected
    - parameter will be undefined if no arg is passed

  * A function can accept additional arguments
    - use Rest!

*/

//using rest!
//SO If there is not a parameter to represent all the arguments passed, if we use rest, it will gather the REST of the elements and put them in a array
let sumNums = (num1, ...restOfNums) => {
  // console.log(num1)
  console.log(restOfNums); //[ 2, 3, 4 ]
  let sum = num1;
  for (let num of restOfNums) {
    // console.log(num);
    sum += num;
  }
  return sum;
};

//so youd use a  rest parameter when you dont know how many arguments are going to be passed
// console.log(sumNums(1,2,3,4));//10
// console.log(sumNums(1,2,3));
// console.log(sumNums(1,2,3,4,5,6,7))

//cannot omit the parenthesis when using rest if only one arg
let sentenceMaker = (...words) => words.join(" ") + "!";
// console.log(words);//[ 'lets', 'make', 'a', 'sentence' ]

// console.log(sentenceMaker('lets', 'make', 'a', 'sentence'));

//spread! - ...
//spread operator allows us to spread all the elements of what data type into another, array or object

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
console.log(arr3); //[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]  - we dont want nested arrays!
//we want to SPREAD the elements into arr 3 not nest a array
//we could use SPREAD!

//able to insert values into the arr, when spreading
//when you spread an array you are creating a shallow copy! .slice() let copy = [...arr]
let arr4 = [0, ...arr1, 40, ...arr2, 90];
// console.log(arr4);

let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksville" };
// console.log(obj3);we dont want nested object, so were gonna use spread to SPREAD all the key:value pair from our object into another object
/*
{
  obj1: { name: 'brandon' },
  obj2: { pet: 'cat', favColor: 'red' },
  city: 'brooksville'
}
*/

//so just like with arrays, we can add key:value pairs to our object literal when spreading if we need be
let obj4 = { ...obj1, ...obj2, city: "brooksville" }; //{ name: 'brandon', pet: 'cat', favColor: 'red', city: 'brooksville' }
// console.log(obj4);
//we can also overwrite values of an object, if the key already exists, then it will be overwritten
let obj5 = {...obj4, city: ['tampa', 'broosville'], nested: { pet: 'cat'}};//we have overwritten the key:value pair to be tampa instead of brooksville
// console.log(obj5)

//you can either add or overwrite when spreading, just depends on whether the key:value exists or not
let obj6 = { nested: { ...obj1}};
// console.log(obj6);


//destructuring an array!

let numArray = [10, 20, 30];

//unpack the value from the arrays into variables
let [firstEl, , secondEl] = numArray;

console.log(firstEl, secondEl);//10 20


// let [firstEl, , secondEl] = numArray;use comma to skip elements //10 30
