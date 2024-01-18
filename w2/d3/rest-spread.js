/*


  Rest and Spread



  /*

  Rest and Spread Operator

  What is the rest parameter?
    * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
     ** Represent variadic function
    * The rest parameter will the gather any additional arguments and place them in a an array

  Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

*/

// rest parameter
// num1 = 10
// num2 = 12
// nums = [13, 15]
function myFunc(num1, num2, ...nums) {
  console.log(num1, num2, nums)

}

console.log(myFunc(10, 12, 13, 15));// 10 12 [ 13, 15 ]
// myFunc(1,2,3)
// myFunc(10,12,143,35,35);
// myFunc(12)
