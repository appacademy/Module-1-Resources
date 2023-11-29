
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
