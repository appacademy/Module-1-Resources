/*


  Rest and Spread Operator!
  - ...

  Rest Operator
  - the rest operator allows us to accept any arbitrary number of arguments inside of a function
  - rest will gather any additional arguments and place them in a array


  * rest must be last in the parameters!


  * We know that a function can take fewer args then expected
    - a parameter will be undefined if no argument is passed

  * a function can accept additional arguments
      - if we don't provide a parameter for our arguments, we wont have access to args
      - use Rest! allows us to gather all the additional arguments
*/

//use rest!
//so if there is not a parameter to represent all the arguments passed, if we use rest it will gather the REST of the elements and put them in a array
let sumNums = (num1, ...restOfNums) => {
  // console.log(num1, restOfNums); //2 [ 3, 4, 5 ]
  let sum = num1;
  for (let num of restOfNums) {
    sum += num;
  }
  return sum;
};

// console.log(sumNums(2, 3, 4, 5)); //14
//out all the arguments in the words array
let sentenceMaker = (...words) => words //.join(' ')

//great for varying amount of arguments
// console.log(sentenceMaker('lets', 'make', 'a sentence', 10, 3));
// console.log(sentenceMaker('hello', 'world'));


//spread!!!
//allows us spread value of an data type into another data type
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [0, arr1, arr2];
// console.log(arr3);//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]
//not what we want we can use spread to do this easily

//spread
//spread all the values of this array, into another array
let arr4 = [0, ...arr1, -1 , ...arr2, 7];
// console.log(arr4)

//can spread objects as well
let obj1 = { name: 'brandon'};
let obj2 = { pet: 'cat', favColor: 'red'};
let obj3 = { obj1, obj2, city: 'brooksville' };
console.log(obj3)
// {
//   obj1: { name: 'brandon' },
//   obj2: { pet: 'cat', favColor: 'red' },
//   city: 'brooksville'
// }
let obj4 = { ...obj1, ...obj2, city: 'brooksville'} //can add k:v pairs when spreading
console.log(obj4);//{ name: 'brandon', pet: 'cat', favColor: 'red', city: 'brooksville' }

//spread can be used to create a shallow copy
let shallow = { name: 'yoseph'};
let copy = {...shallow};

let sameReference = shallow;
console.log(shallow === sameReference);//true -  same reference in memory
console.log(shallow === copy)//false - new reference - used spread to create a shallow copy
//shallow copy will only make new reference one deep, if there are nested objects they will hold there reference


