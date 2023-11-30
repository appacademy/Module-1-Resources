// your code here
//inputs: arr, target
//output: boolean

//PLAN IT OUT!!
//1. define the function with two params
//2. iterate through the array to capture our first num
//3. interat througth the array with another loop to get the second num || start at i =1
//4. user a conditional to see if those two nums add up to the target === target
//5. return false

function twoSum(arr,target){

    // [1, 7, 3, 0, 2]
    for(let i = 0; i < arr.length; i++){

        let num1 = arr[i];

      // console.log('outer loop :', num1)

      for(let j = i+1; j < arr.length; j++){

          let num2 = arr[j]

          // console.log('     inner loop :',num2)
          // console.log(num1, num2)
          if (num1 + num2 === target){
              return true
          }
      }
    }
    return false

  }



  console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
  console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
  console.log(twoSum([4, 6, 2, 3], 8)); // true
  console.log(twoSum([4, 6, 2, 3], 11)); // false
