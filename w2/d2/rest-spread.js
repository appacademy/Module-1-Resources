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
// console.log(arr4);//[ 1, 2, 3, 4, 5, 6 ]

let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksvile" };
//we dont values to be nested, use spread!
// console.log(obj3)

//add a key-value pair to a object
//spread values obj1 and obj2 into new obj literal and also add on a new key-value pair city: 'brooksville'
let obj4 = { ...obj1, ...obj2, city: "brooksville" };
console.log(obj4)
