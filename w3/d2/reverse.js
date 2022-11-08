//sum to n
//adding up all the numbers prior to n

// let sumToN = n => {
//   let sum = n;
//   if(n < 0) return null;//base case
//   else sum += sumToN(n - 1);
//   return sum;
// }

// console.log(sumToN(3))//6


function sumToN(num){
  if (num === 0) return null //null is equal to 0 base case
  //recursive case would be num > 0
  //only need base case or recursive case
  return num + sumToN(num - 1)//num - 1 recursive step
}

console.log(sumToN(3));//6
//sumToN(3) ==> 3 + return of a function sumToN(2)
  //sumToN(2) ==> 2 + sumToN(1);
    //sumToN(1) ==> 1 + sumToN(0);
      //sumToN(0) ==> return null/0
    //sumToN(1) ==> 1 + 0 ==> 1
  //sumToN(2) ==> 2 + 1 ==> 3
//sumToN(3) ==> 3 + 3 ==> 6
