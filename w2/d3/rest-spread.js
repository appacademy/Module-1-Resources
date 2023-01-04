/*

  Rest and spread operator!

  - The rest operator allows us to accept any arbitrary number of arguments inside a function

  * We know functions can take fewer args than expected
    - parameter will be undefined

  * javascript can accept arguments using rest

*/

//example of using rest!

//rest will take any additional args passed to a function and put them into an array
let sumNums = (num, ...nums) => {
  // console.log(num, nums);
  sum = num;
  for(let number of nums) {
    sum += number;
  };

  return sum;
};

// console.log(sumNums(1, 2, 3, 4 6, 7, 8,));


let sentenceMaker = (...words) =>  words.join(' ') + '!'
// console.log(sentenceMaker('lets', 'make', 'a', 'sentence'))


//spread operator
// allows us to spread values of an array/object into another arr/obj

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [0, arr1, arr2];
// console.log(arr3)//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]

//use spread!
//position matters!
let arr4 = [...arr1, -2, ...arr2, 10];
// console.log(arr4)//


//objects work with spread
let obj1 = {name: 'brandon', pet: 'cat' };
let obj2 = {pet: 'dog', favColor: 'red'};
let obj3 = {obj1, obj2, city: 'brooksville'};
// console.log(obj3)

//works with spread
let obj4 = {...obj1, ...obj2, city: 'brooksville', age: 27};
// console.log(obj4)


//destructing
let numArray = [10,20,30,40];
//we wanted to gain access to these values without iterating we can use destructuring

//we want to unpack the two nums from the the array
//use a comma to skip elements when destructuring
// let [firstEl, secondEl,, fourthEl] = numArray;
// console.log(firstEl, secondEl, fourthEl)//10 20 40

let num1 = 17;
let num2 = 34;
//we can swap variables using destructing
//if you are using array destructing without let, make sure to have the semi colon on the previous line
// console.log(num1, num2);
//syntax
[num1, num2] = [num2, num1];
// console.log(num1, num2);


//object destructuring
let obj = { name: 'brandon', age: 2, nestedObj: { pet: 'cat'}};

//can destruct nested obj
let { name, age, nestedObj: { pet } } = obj;
console.log(name, age, pet)//brandon 27
