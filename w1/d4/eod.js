/**
 * https://open.appacademy.io/learn/js-py---apr-2023-cohort-1-online/week-1---intro-to-javascript/lucky-numbers----
 * Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and 
 * returns all lucky numbers in any order. A lucky number is the minimum element in its row and 
 * the maximum in its column.
 */

/**
 * New:
 * Math.min and Math.max
 * new Array syntax
 * Array.fill()
 */

function luckyNumbers(matrix) {
  let ans = []
  let mins = new Array(matrix.length)
  let transposed = transpose(matrix)

  for (let r = 0; r < matrix.length; r++) {
    let row = matrix[r];
    let min = Math.min(...row); //finding minimum in row
    mins[r] = new Array(matrix[r].length).fill(min); //assigning a row filled with min to at "r" row
  }

  for (let r = 0; r < transposed.length; r++) {
    let trow = transposed[r];
    let tmax = Math.max(...trow); //finding minimum in row
    transposed[r] = new Array(transposed[r].length).fill(tmax);
  }

  let maxes = transpose(transposed)

  for (let r = 0; r < mins.length; r++) {
    for (let c = 0; c < mins[r].length; c++) {
      let min = mins[r][c]
      let max = maxes[r][c]
      if (min === max) {
        ans.push(min)
      }
    }
  }

  return ans
}

function transpose(matrix) {
  let ans = []

  //making same number of rows as input's columns
  for (let i = 0; i < matrix[0].length; i++) {
    ans.push([])
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      ans[j].push(matrix[i][j])
    }
  }

  return ans
}


let matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15]
]

// transposed1 = [
//   [5, 9, 12],
//   [9, 19, 14],
//   [21, 6, 15]
// ]

let mins = [
  [5, 5, 5],
  [6, 6, 6],
  [12, 12, 12]
]

let maxes = [
  [12, 19, 21],
  [12, 19, 21],
  [12, 19, 21]
]

console.log(luckyNumbers(matrix)); // [12]

matrix = [
  [5, 10, 8, 6],
  [10, 2, 7, 9],
  [21, 15, 19, 10]
]

//mins of rows
mins = [
  [5, 5, 5, 5],
  [2, 2, 2, 2],
  [10, 10, 10, 10]
]

//maxes of columns
maxes = [
  [21, 15, 19, 10],
  [21, 15, 19, 10],
  [21, 15, 19, 10]
]

transposed2 = [
  [5, 10, 21],
  [10, 2, 15],
  [8, 7, 19],
  [6, 9, 10]
]

console.log(luckyNumbers(matrix)); // [10]
// console.log(transpose(matrix)); // [10]
