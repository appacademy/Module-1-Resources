/*

 Nested Loops
  * Sometimes a single loop is not enough to access a nested array
//[ 'what', 'a', 'wonderful', 'life' ]
*/

// for(let i = 0; i < 3; i++){
//   console.log('i:',i);// outer loop controlled by i

//   for(let j = 0; j < 2; j++){
//     console.log('j: ',j)// inner loop controlled by j
//   }
// }

// outer loop pauses until inner loop can complete
// Since our inner loop is defined within the bounds of our outer
// loop, the full cycle of our inner loop is part of each individual iteration
// of our outer loop. Let's explore how we can use this a bit more practically

let arr = ["what", "a", "wonderful", "life"];

for (let i = 0; i < arr.length; i++) {
  let word = arr[i];

  for (let j = 0; j < word.length; j++) {
    // let letter = word[j];
    // console.log(i, j);
    let letter = arr[i][j];
    // console.log(letter);
  }
}

// console.log(arr);// [ 'what', 'a', 'wonderful', 'life' ]
// console.log(arr[0])// what
// console.log(arr[0][0])// w
// console.log(arr[0][0])

// console.log(arr[0]);//'what'
// console.log(arr[0][0]);//w
// console.log(arr[0][1]);//h
// console.log(arr[0][2]);//a
// console.log(arr[0][3]);//t

// console.log(arr[1][0]);// a
// console.log(arr[1][1]);// undefined

// console.log(arr[2][0]);// w
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

for (let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];
  console.log(subArr);// [ 'a', 'b', 'c' ]
  // console.table(subArr);
  for(let j = 0; j < subArr.length; j++){
    let letter = subArr[j]
   console.log(letter);
  }
}





// for (let i = 0; i < matrix.length; i++){
//   let subArr = matrix[i];
//   // console.log(subArr)
//   for (let j = 0; j < subArr.length; j++){
//     let word = subArr[j];
//     // console.log(word)
//     for(let k = 0; k < word.length; k++) {
//      let letter = word[k];
//      console.log(letter)
//     }
//   }
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = [[1,2,3],[4,5,6]]
for (let i= 0; i < arr.length; i++) {
  let subArr = arr[i];
  // console.log(num)

  for (let j = 0; j < subArr.length; j++) {
    // let num = arr[i][j];
    let ele = subArr[j];
    console.log(subArr, ele)
  }

};

// console.log(matrix[0][1][2])
