
// sum every element in an array

function sumArray(numbers){
  // console.log(numbers);// [10,20,30]
  // console.log(numbers[0]);//10
  // console.log(numbers[1]);//20
  // console.log(numbers[2]);//30
  let sum = 0;
  // console.log(sum);
  for(let i = 0; i < numbers.length; i++){
    console.log('sum at start of loop', sum)
    let number = numbers[i];
    console.log('i: ', i, 'number:', number);
    sum += number
    console.log('sum at end of loop', sum);
  };

  return sum;
};


console.log(sumArray);// [Function: sumArray]

console.log('return value of sumArray',sumArray([10,20,30]));// 60
