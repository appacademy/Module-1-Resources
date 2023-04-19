
/*
	Polyas
    Understand the problem
    * return a new array with every element from the old array, doubled
    input: a array -> [1, 2, 3, 4]
    output: a array -> [2, 4, 6, 8]
    * how do we get from our input to our output?

    Make a plan
    1. define a function
    2. create a new array
    3. iterate through the array
    	a. as we iterate, create a variable for array[i]] call it oldNum
        b. take oldNum times it by 2 and store the result in a var called newNum
        c. how do we get newNum into newArr??
        	- .push, .concat, arr[i] = oldNum
    4. return new array
    Execute the plan
    Refactor
*/
//  1. define a function
function doubler(numbers) {
  // console.log(numbers)

    // 2. create a new array
  let newArr = [];
    // 3. iterate through the array
  for(let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
    // 	a. as we iterate, create a variable for array[i]] call it oldNum
    let oldNum = numbers[i];
    let newNum = oldNum * 2;
    // console.log(newNum);
    //     b. take oldNum times it by 2 and store the result in a var called newNum
    //     c. how do we get newNum into newArr??
    //     	- .push, .concat, arr[i] = oldNum
    // newArr.push(newNum); //1st way
     // newArr = newArr.concat(newNum); //2nd way
    newArr[i] = newNum; //3rd way
    // newArr.push(numbers[i] * 2); 4th way
  }


    // 4. return new array
  return newArr;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
// console.log(doubler([7, 1, 8])); // => [14, 2, 16]
