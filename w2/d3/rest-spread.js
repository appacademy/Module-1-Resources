/*

  Rest and spread operators!

  - The rest operator allows us to accept any arbitrary number of arguments inside a function

  - We know function can take fewer args than expected
    - param wil be undefined in no arg is passed

  - javascript can also accept extra args
    - using rest!

*/

//examples using rest
//the rest param will take the rest of the arguments and put them in a array
let sumNums = (num, ...nums) => {
  // console.log(nums)//1 [ 2, 3, 4 ]
  let sum = 0;
  for(let num2 of nums) {
    sum += num2
  }
  return sum + num;
}

// console.log(sumNums(1,2,3,4))

let sentenceMaker = (...words) => {
  console.log(words)//[ 'lets', 'make', 'a', 'sentence' ]
  // return words.join(' ') + '!'
}


// console.log(sentenceMaker('lets', 'make', 'a', 'sentence', 1, 2,3 ,4))

//spread operator!
//spread operator allows us to spread values of an array into another array
let arr1 = [1,2,3];
let arr2 = [3,4,5];
let arr3 = [0, arr1, arr2];
// console.log(arr3);//[ 0, [ 1, 2, 3 ], [ 3, 4, 5 ] ]

//use spread!
//order matters in which use spread!
let arr4 = [0, ...arr2, ...arr1];
// console.log(arr4)

//use spread on in object!
let obj1 = { name: 'brandon' };
let obj2 = { pet: 'cat', favColor: 'red'};
let obj3 = { obj1, obj2, city: 'brooksvile'};
// console.log(obj3)

let obj4 = {...obj1, ...obj2, city:'brooksville'};
// console.log(obj4)//{ name: 'brandon', pet: 'cat', favColor: 'red', city: 'brooksville' }


//destructuring
let numArr = [10,20];

//unpack the array values into to separate variables
let [firstEl, secondEl] = numArr;
// console.log(firstEl, secondEl); //10 20

let num1 = 17
let num2 = 3;

//swap variables in an arr!
[num1, num2] = [num2, num1]

// console.log(num1, num2)//3 17
let obj23 = { name: 'apples', breed: ['tabby', 'short hair']};
let { name, breed } = obj23;

console.log(name, breed); //apples [ 'tabby', 'short hair' ]
