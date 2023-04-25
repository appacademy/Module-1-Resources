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
let sentenceMaker = (...words) => words; //.join(' ')

//great for varying amount of arguments
// console.log(sentenceMaker('lets', 'make', 'a sentence', 10, 3));
// console.log(sentenceMaker('hello', 'world'));

//spread!!!
//allows us spread value of an data type into another data type
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
// console.log(arr3);//[ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ]
//not what we want we can use spread to do this easily

//spread
//spread all the values of this array, into another array
let arr4 = [0, ...arr1, -1, ...arr2, 7];
// console.log(arr4)

//can spread objects as well
let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksville" };
// console.log(obj3)
// {
//   obj1: { name: 'brandon' },
//   obj2: { pet: 'cat', favColor: 'red' },
//   city: 'brooksville'
// }
let obj4 = { ...obj1, ...obj2, city: "brooksville" }; //can add k:v pairs when spreading
// console.log(obj4);//{ name: 'brandon', pet: 'cat', favColor: 'red', city: 'brooksville' }

//spread can be used to create a shallow copy
let shallow = { name: "yoseph" };
let copy = { ...shallow };

let sameReference = shallow;
// console.log(shallow === sameReference);//true -  same reference in memory
// console.log(shallow === copy)//false - new reference - used spread to create a shallow copy
//shallow copy will only make new reference one deep, if there are nested objects they will hold there reference

//shallow copy is just one reference deep
let brandonObj = { name: "brandon", nestedObj: { last: "laursen" } };
// console.log(brandonObj);

let shallowBrandonCopy = { ...brandonObj };
// // console.log(brandonObj);
// console.log(brandonObj === shallowBrandonCopy);//false
// console.log(brandonObj.nestedObj === shallowBrandonCopy.nestedObj);//true

// let deepCopy = JSON.parse(JSON.stringify(shallowBrandonCopy));
// console.log(deepCopy.nestedObj === brandonObj.nestedObj);//false

//destructuring

let numArray = [10, 20, 30];

//were gonna unpack the values of this array into a variables
//use the let keyword, provide the literal we want to destructure - [] , {}
//inside the literal put the variable names that you want to represent what were destructuring out
//we set equal to whatever we want to destructure out of
let [firstEl, , secondEl] = numArray; //use a comma to skip elements
// console.log(firstEl, secondEl);//10

//swap values of two variables
let num1 = 20;
let num2 = 40;

[num1, num2] = [num2, num1];

// console.log(num1);//40
// console.log(num2);//20

//can swap element at an index in a array
let arr5 = [10, 20, 30];
// console.log(arr5);
[arr5[1], arr5[2]] = [arr5[2], arr5[1]];
// console.log(arr5);

//array destructuring with rest
let arr6 = [1, 2, 3];
[var1, ...rest] = [...arr6]; //we want to destructure the first element into var1, and i want the REST of the elements to be put in to the rest variable
// console.log(var1, rest);//1 [ 2, 3 ]
//so were saying to the right, SPREAD  all the elements of arr6 into this new array literal
//on the left, store the first element of arr6, in var1, store the REST of the elements in an array called rest


let personObj = { name: "brandon", age: 27, pets: { cat: 'mochi' } };
//destruct object
//provide the key of what you want the value of
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


