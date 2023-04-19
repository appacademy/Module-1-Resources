//Inclusive
//Num can be added to itself
// 1. Loop through the array and keep track of num1
// 2. Loop through the array and keep track of num2
// 3. If the sum of num1 and num2 is the target we can return true
// 4. return false once we exit both for loops meaning we didn't find a match


function twoSum(arr, target){

  for(let i = 0; i < arr.length; i++){
     // let num1 = arr[i];

      for(let j = i; j < arr.length; j++){
         // let num2 = arr[j];

          if(arr[i] +  arr[j] === target){
             return true;
          }
      }
  }

return false;
}

// console.log(twoSum([1, 7, 3, 0, 2], 6)); // true
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false
// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true




//Exclusive
//Num cannot be added to itself
// 1. Loop through the array and keep track of num1
// 2. Loop through the array and keep track of num2
// 3. If the sum of num1 and num2 is the target we can return true
// 4. return false once we exit both for loops meaning we didn't find a match


function twoSum(arr, target){

  for(let i = 0; i < arr.length; i++){
     let num1 = arr[i];

      for(let j = i + 1; j < arr.length; j++){
         let num2 = arr[j];


          if(num1 + num2 === target){
             return true;
          }
      }
  }

return false;
}
