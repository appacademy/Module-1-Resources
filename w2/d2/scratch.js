








// function sentenceMaker(...restOfWords){
//   console.log(restOfWords);

//   // return word1 + ' '+ word2;
//   let sentence = '';
//   for(let word of restOfWords) {
//     sentence += ' ' + word;
//   };

//   return sentence;
// }


// console.log(sentenceMaker('hello', 'world'));
// console.log(sentenceMaker('taking','in','three arguemnts'));
// console.log(sentenceMaker('hello'));

// num1 = 10
// num2 = 10

//num1 = 10
//restOfNumbers = [10]

//num1 = 10
//restOfNumbers = [2, 3]
// function product(num1, ...restOfNumbers) {
//   // console.log(num1,restOfNumbers)
//   // return num1 * num2;
//   return restOfNumbers.reduce((acc, num) => acc *= num ,num1)
// }


// console.log(product(10, 10));//100
// console.log(product(10, 2, 3));//






let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [arr1, arr2, 7,8,9];
// console.log(arr3);// [ [ 1, 2, 3 ], [ 4, 5, 6 ], 7, 8, 9 ]

let arr4 = [0, ...arr1, 'middle',...arr2, 7,8,9, ...arr1.reverse()];
// console.log(arr4);
// [
  // 1, 2, 3, 4, 5,
  // 6, 7, 8, 9
// ]
//[ 1, 2, 3 , 4, 5, 6 , 7, 8, 9 ]

// use spread to make a copy
let copy = arr4.slice();
console.log(copy);
copy[0] = true;

// console.log(arr4);
// console.log(copy);

// let copy1 = [...arr4]
// console.log(copy1);
