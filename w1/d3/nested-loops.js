/*


  Nested Loops!
  - Sometimes a single loop is not enough to access every element
  - so you'd write a loop within a loop
*/

for (let i = 0; i < 4; i++) {
  //outer loop controlled by i
  // console.log('i:', i)
  for (let j = 0; j < 3; j++) {
    //inner controlled by j
    // console.log('j:',j, 'i', i);
  }
  //j must complete its iteration before i increments
  //as i stays the same, j is changing
}

let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];
// console.log(matrix.length)

for (let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i]; //the nested arrays
  // console.log(subArr);//this is an array therefore we can loop
  for (let j = 0; j < subArr.length; j++) {
    let letter = subArr[j];
    // console.log(letter)
  }
}

//lets make a function that sums all numbers of a matrix

// console.log(matrix2.length)

//Talk about polya's framework
// Understand the problem
// Make a Plan
// Execute the plan
// Refactor

/*

Understand the problem!
- we want to find the sum of all number in a matrix
- input: an 2d array - [[1,2,3],[4,5,6],[7,8,9]];
- output: a number - 45
- how do i get from my input to my output?

Make a plan
  1. Define a function that takes in a matrix
  2. create a variable to hold our sum
  3. Iterate through the matrix, to gain access to the nestedArrays
    a. create a variable to hold the subArrays
  4. Iterate through subArr to gain access to the each number
    a. create a variable to hold the numbers
    b. add our number to our sum as we iterate
  5. when we finish iterating, return the sum
*/

let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix2.length)

//Execute the plan
//1. Define a function that takes in a matrix
function sumMatrix(matrix) {
  // console.log(matrix)
  // 2. create a variable to hold our sum
  let sum = 0;
  //3. Iterate through the matrix, to gain access to the nestedArrays
  for(let i = 0; i < matrix.length; i++) {
    let subArr = matrix[i];
    console.log('subArr:', subArr);

    //4. Iterate through subArr to gain access to the each number
    for(let j = 0; j < subArr.length; j++) {
      let number = subArr[j]
      console.log('number:', number);
      sum += number
      console.log('sum after adding', sum)
    }
  }

  // 5. when we finish iterating, return the sum
  return sum;
}

console.log(sumMatrix(matrix2))//45
