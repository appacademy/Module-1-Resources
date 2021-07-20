// your code here
/* 
Write a function that intakes two numbers and 
returns the sum of those two numbers.
*/
// function sum(num1, num2){ //function declaration syntax
//   return num1 + num2;
// }
// let name = 'Mylo';

// let sum = function (num1, num2){
//   return num1 + num2;
// };

// console.log(sum(5, 12));

//Mutability //Arrays and Objects

//Mutable
// let arr = [1, 2, 12, 4];

// console.log(arr);

// arr[2] = 3;

// console.log(arr);

// //Immutable Types
// let str = "bark";

// console.log(str);

// str[0] = 'p';

// str = str + "p";

// str = "park";

// console.log(str);

// Nested Loops

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log("     ", j);
//   }
// }

// let nestedArr = [  [1, 2, 3], [4], [5, 6]   ]

// for (let i = 0; i < nestedArr.length; i++) {
//   let subArr = nestedArr[i];

//   for (let j = 0; j < subArr.length; j++) {
//     let num = subArr[j];
//     console.log(num);
//   }
// }

let dogs = ["belka", "strelka", "laika", "dezik"];

// for(let i = 0; i < dogs.length; i++) {
//   let dog1 = dogs[i];

//   for(let j = 0; j < dogs.length; j++) {
//     let dog2 = dogs[j]
//     console.log(dog1, dog2)
//   }
// }

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];

  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];

    console.log(dog1, dog2);
  }
}
