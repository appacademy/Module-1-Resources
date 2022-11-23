/*


  Nested loops!
  - Sometimes, one loop just isnt enough
  - Sometimes you may need to access values of a nester arr
*/

for(let i = 0; i < 4; i++) {//outer for loop controoled by i
  // console.log(i)
  for(let j = 0; j < 5; j++) {//inner for loop controlled by j
    // console.log(i, j)
    for(let k = 0; k < 2; k++) {
      // console.log(i, j, k)
    }
  }
}

//outer loop pauses untill the inner loop can complete
//since our inner loop is defined within the bounds of our outer loop The full cycle of our inner loop must complete before we increment the outer loop
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(matrix.length)//3

for(let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];
  console.log(subArr);
  for(let j = 0; j < subArr.length; j++) {
    let number = subArr[j];
    console.log(number)
  }
}
