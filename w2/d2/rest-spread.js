/*

  Rest and Spread Operator!

  - The Rest operator allows us to accept any arbitary number
    of arguments inside a function

    - We know function can take fewer args than expected,
      - param will be undefined if no args is passed
    - javascript can also accept extra arguments
      - using rest
*/

//rest operators
//grab the rest of the values and store them an a array
//delinated by ...
let sumNums = (num, ...nums) => {
  // console.log(num, nums);//nums hold the rest of the args passed
  let sum = 0;
  for(let num1 of nums) {
    // console.log(num)
    sum += num1;
  }

  return sum + num;
}

// console.log(sumNums(1,2,3,4))//10

//
let sentenceMaker = (...words) => {
  // console.log(words);
  return words.join(' ') + '!'
}

// console.log(sentenceMaker('lets', 'make', 'a', 'sentence'))

//spread operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [0, arr1, arr2];
// console.log(arr3);//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]


//use spread!
//get rid of the arr, and spread the values into the new arr
let arr4 = [0, ...arr1, ...arr2];
// console.log(arr4)

//spread the key value pairs into a new object
let obj1 = {name: 'brandon'};
let obj2 = {pet: 'cat', favColor: 'red'};
let obj3 = {city: 'brooksville', obj1, obj2};
// console.log(obj3)
let obj4 = {city:'brooksville', ...obj1, ...obj2};
console.log(obj4)
