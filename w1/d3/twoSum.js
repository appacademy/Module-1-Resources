//Inclusive
//Num can be added to itself
// 1. Loop through arr keeping track of n1
// 2. Loop through arr keeping track of n2 resetting it to the position of n1
// 3. Check if n1 plus n2 is equal to the target
// 4. If it is we will return true
// 5. Otherwise we want to return false once we come out of the for loop

//[1, 7, 3, 0, 2]
function twoSum(arr, target){

  for(let i = 0; i < arr.length; i++){
     let n1 = arr[i];

      for(let j = i; j < arr.length; j++){
       let n2 = arr[j];

        if(n1 + n2 === target){
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
//  0  1  2  3  4
// [1, 7, 3, 0, 2] target = 5
//  n1
//  n2


//Exclusive
//Num cannot be added to itself

function twoSum(arr, target){

  for(let i = 0; i < arr.length; i++){
     let n1 = arr[i];

      for(let j = i + 1; j < arr.length; j++){
       let n2 = arr[j];

        // if(n1 === n2){
        //  continue;
        // }

        if(n1 + n2 === target){
           return true;
        }
      }
  }

  return false;
}


// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false
