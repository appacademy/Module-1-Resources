
/*

	Polya's Framework
    1. Understand the problem
    	* Return the average of the values in the array
    	Input: [5, 10]
        Output: 7.5
        * 5 + 10 = 15 / 2 = 7.5
        * 15 / 5 = 3

    2. Make a plan
    	a. define a function avgVal
        b. make a variable to store the sum
        c. find the sum by iterating through the array
        	a. as we iterate add the current to the sum variable
        d. once were done iterating, divide are sum by the length of the array
    3. Execute the plan
    4. Refactor

*/
// a. define a function avgVal
function avgVal(numbers){
  //   console.log(numbers);

  //   console.log(numbers.length)
    if(numbers.length === 0) return null;

    // b. make a variable to store the sum
    let sum = 0;
     // c. find the sum by iterating through the array
    // console.log('before the loop')
    for (let i = 0; i < numbers.length; i++) {
        // console.log('i:',i, 'value: ',numbers[i])
        // let number = numbers[i]
          // console.log(number)
          // a. as we iterate add the current to the sum variable
          sum += numbers[i];
      // console.log('sum after each iteration', sum)

    };
    // once were done iterating, divide are sum by the length of the array
    // console.log('after the loop',sum / numbers.length)
    return sum / numbers.length
  }

  console.log(avgVal([5, 10]));         // 7.5
  console.log(avgVal([3, 7, 2, 1, 2])); // 3
  console.log(avgVal([]));              // null





  // Your code here
/*

	polyas framework

    1. understand the problem
    	* we need to check if the array has three consective numbers
        input: [3, 2, 11, 12, 13, 2, 4]
        output: true
        input [1, 2, 4, 5, 2, 7, 8]
        output: false

    2. make a plan
    	a. define a function
        b. loop through the array of numbers
        	a. as we iterate
            	a. grab the value current index
                b. grab the value next index
                c. grab the value at the 2nd index away from the current
                d. check are these three values increasing consectively
                	a. if they are the, return true
        c. return false
    3. execute the plan
    4. refactor
*/
// . define a function
function threeIncreasing(numbers) {
  // console.log(numbers)// [ 3, 2, 11, 12, 13, 2, 4 ]
  // b. loop through the array of numbers
  for(let i = 0; i < numbers.length; i++) {
    // console.log('index:',i, 'value:', numbers[i])

    // a. grab the value current index
    let number1 = numbers[i]
    // b. grab the value next index
    let number2 = numbers[i + 1];
    // c. grab the value at the 2nd index away from the current
    let number3 = numbers[i + 2];
    // console.log(number1, number2, number3)

    // d. check are these three values increasing consectively
    // a. if they are the, return true
    if(number1 + 1 === number2 && number2 + 1 === number3){
      return true;
    }

  };

  //c. return false
  return false;

}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
