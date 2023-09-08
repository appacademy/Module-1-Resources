
// sum every element in an array

// function sumArray2(numbers){
//   // console.log(numbers);// [10,20,30]
//   // console.log(numbers[0]);//10
//   // console.log(numbers[1]);//20
//   // console.log(numbers[2]);//30
//   let sum = 0;
//   // console.log(sum);
//   for(let i = 0; i < numbers.length; i++){
//     console.log('sum at start of loop', sum)
//     let number = numbers[i];
//     console.log('i: ', i, 'number:', number);
//     sum += number
//     console.log('sum at end of loop', sum);
//   };

//   return sum;
// };


// console.log(sumArray);// [Function: sumArray]

// console.log('return value of sumArray',sumArray([10,20,30]));// 60


let sumArray = function(numbers) {
  console.log('loook here ===>',numbers);
  let sum = 0;

  let i = 0;
  console.log('am i entering loop before')
  // console.log(i < numbers.length);//false
  while (i < numbers.length){
    // console.log('am i entering loop after')
    let num = numbers[i];
    console.log(num);
    sum += num;
    console.log(sum);
    i++
  }
  return sum;
}

console.log('======>',sumArray([1,2,3]));
