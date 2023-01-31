/*

  Rest and Spread Operator

  - The rest operator allows us to accept any arbitrary number of arguments inside a function
  - rest will gather any additional arguments and places them in a array

  - we know that function can take fewer args than expected
    - param will be undefined if no args is passed

  - a function can accept additional arguments
    - using rest

*/

//example using rest
let sumNums = (...nums) => {
  // console.log(num1)//1
  // console.log(nums)//we are gathering the rest of the args passed and putting then an array
  //[ 2, 3, 4, 5 ]
  let sum = 0;
  for (let num of nums) {
    // console.log(num)
    sum += num;
  }

  return sum;
};

// console.log(sumNums(1, 2, 3, 4, 5));

let sentenceMaker = (...words) => words.join(' ') + '!';
// console.log(sentenceMaker(['lets', 'make', 'a', 'sentence']))


//spread!
//allows us to spread values of a obj/arr into another obj/arr
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [0, arr1, arr2];
// console.log(arr3)//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]

//use spread!
//position matters
//this will create a shallow copy
let arr4 = [...arr1, ...arr2];
// console.log(arr4);

let copy = [...arr4];//how you would make a shallow copy just like copy = arr1.slice()

//objects
let obj1 = { name: 'brandon'};
let obj2 = {pet: 'cat', favColor: 'red'};
let obj3 = { obj1, obj2, city: 'brooksville'};

/*
{
  obj1: { name: 'brandon' },
  obj2: { pet: 'cat', favColor: 'red' },
  city: 'brooksville'
}
not want we want
*/
// console.log(obj3);

let obj4 = {...obj1, ...obj2, city: 'brooksville'};
// console.log(obj4)//{ name: 'brandon', pet: 'cat', favColor: 'red' }

//spread an object into array
//cant spread obj into array -  will throw error
let obje = { 'this': 1, 'an': 2};
// let arre = [...obje]; //TypeError: obje is not iterable
// console.log(arre)

//if you spread array into obj, it will use index as keys, and values as values
let arr5 = [5,6,7];
let obj5 = {...arr5};
// console.log(obj5);
//if you spread array into object => { '0': 1, '1': 2, '2': 3 }


//destructuring
let numArray = [10,20,30,40];

//unpacking the array values into separate variables
//use the let keyword, the the literal you will destructuring out of, then a equal sign, then the data type you will be destructuring from

//If you want to skip an element when destructing use a comma,
let [firstEl, secondEl,  ,fourthVal] = numArray;

// console.log(firstEl, secondEl, fourthVal)

//we can swap values

let num1 = 17;
let num2 = 12;

//this syntax will swap values
[num1, num2] = [num2, num1]

// console.log(num1, num2)//12 17

//object destructuring
let obj = {name: 'brandon', age: 27, nestedObj: { pet: 'cat'}};

//can destruct out of an object
//use let keyword, the the literal were destructing out of in this case a {}, then provide they key in which we want the value,
//if we want to access nestedobj, we must destructure out of them as well using the same syntax
let { name, nestedObj: { pet } } = obj;
console.log(name)
console.log(pet)
