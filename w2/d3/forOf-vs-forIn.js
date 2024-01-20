

//for of

let numbers = [1,2,3];

for(let number of numbers){
  console.log(number);
}


let obj = {name:'brandon', age: 28};
//! cant use for of on object
// for(let ele of obj) {
//   console.log(ele);
// }
// TypeError: obj is not iterable


// for in
// ! on objects!
for(let key in obj) {
  console.log(key);// name | age
}
let array1 = ['HELLO', 'WORLD', true];

let array2 = {
  0:'HELLO',
  1:'WORLD',
  2: true,
  lengthW: Object.keys(this).length
}

// console.log(array2[0]);//HELLO
// console.log(array1[0]);//HELLO
console.log(array2.lengthW)

// for(let index in numbers) {
//   console.log(index, typeof index);
// // }


// FOR OF ONLY ON ARRAYS
// FOR IN ONLY OBJECTS
