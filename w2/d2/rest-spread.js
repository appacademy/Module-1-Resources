/*




  Rest and Spread Operator
  - The rest operator allows us to accept any arbitrary number of arguments inside a function
  - rest will the gather any additional arguments and place them in a an array

  * We know that a function can take fewer args that expected
    - params will be undefined if no args is passed

  * a function can accept additional arguments
    - using rest!

*/

let sumNums = (num1, ...nums) => {
  // console.log(nums);//[ 2, 3, 4 ]

  let sum = num1;
  for (let num of nums) {
    // console.log(num)
    sum += num;
  }
  return sum;
};

// console.log(sumNums(1,2,3,4))
// console.log(sumNums(1,2,3,4,5,6,7,8,89))

let sentenceMaker = (...words) => words.join(" ") + "!";

// console.log(sentenceMaker('lets', 'make', 'a', 'sentence'));//lets make a sentence!

//spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
// console.log(arr3);//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]
//not what we want, we should use spread

//so we can add all the elements of a collection and spread them into another collection
//we can also add values to the literal
//spread makes a shallow copy
let arr4 = [0, ...arr1, ...arr2, 7];
// console.log(arr4);//[ 0, 1, 2, 3, 4, 5, 6, 7 ]

let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksvile" };
//we dont values to be nested, use spread!
// console.log(obj3)

//add a key-value pair to a object
//spread values obj1 and obj2 into new obj literal and also add on a new key-value pair city: 'brooksville'
let obj4 = { ...obj1, ...obj2, city: "brooksville" };
// console.log(obj4)


//can also be to overwrite values
//just provide the key, and the new value
let obj5 = {...obj1, ...obj2, city: 'brooksville', name:'krandon'}
// console.log(obj5)
//we overwrote the city and name values

// function x(){
// console.log(arguments)
// }
// x(true, 'hey', 2)
// let obj6 = {...obj2, pet: 'dog'}


//destructuring an array
let numArray = [10, 20, 30];

//unpack the values from the arrays into variables

let [firstEl, secondEl, thirdEl] = numArray;
// console.log(firstEl, thirdEl);//10 20

// let [firstEl, , thirdEl] = numArray;
// console.log(firstEl, thirdEl);//10 30
//use a comma to skip in element you dont want to unpack



//swap the values of two variables
let num1 = 17;
let num2 = 9;


[num1, num2] = [num2, num1];

// console.log(num1, num2); //9 17



let arr5 = [10,20,30];
// console.log(arr5);//[ 10, 20, 30 ]
[arr5[1], arr5[2]] = [arr5[2], arr5[1]];
// console.log(arr5)//[ 10, 30, 20 ]


//object destructuring
// let brandonObj = { name: 'brandon', age: 27, nestedObj: { pet: 'cat', nested: { name2: 'jazz '}}};
//provide the key of what you want to destructure
// let { nestedObj: { nested: { name2} } } = brandonObj

// console.log(name2);

// let { name } = brandonObj;
// console.log(name)

//when you combine rest parameter with spread you can get some interesting reactions
let brandonObj = { name: 'brandon', age: 27, nestedObj: { pet: 'cat'}};
// let { name, ...restOfObject } = brandonObj;
//destruct out of the brandonObj, the name, and also the rest of the object and store it in restOfObject
// console.log(restOfObject);

//on the right we are saying lets spread the brandonObj key-value pairs into this obj literal {}
//on the left of the =  were saying, destruct the name out of the object, and put the rest of the values in this variable called restOfObject
let { ...banana } = { ...brandonObj, name: 'krandon' };
console.log(banana);
