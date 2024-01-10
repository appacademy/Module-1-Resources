
/*

	Understanding the problem
    Input: array and a string => ['a', 'b', 'c', 'e'], 'c'
    Output: a boolean => true
    * How do we get from our input to the the output?

    Make a plan
    1. define a function hasElement
    2. iterate through the array
    	a. make a variable for the element at the index call it letter
        b. conditionally check if the curent letter is the target element use ===
        c. if the element is the target ele; return true
  	3. if we exit the for loop return false

    executing the plan
    refactor

    Tools:
    	loops
        conditionals
        functions
        methods

*/

  // 1. define a function hasElement
  function hasElement(array, targetElement) {
    //2. iterate through the array

//   for(let i = 0; i < array.length; i++) {
//       //a. make a variable for the element at the index call it letter
//     let letter = array[i];
//     // console.log('index', i, 'letter', letter, targetElement);
//       //b. conditionally check if the curent letter is the target element use ===
//      if(letter === targetElement){
//       //c. if the element is the target ele; return true
//        return true;
//      }
//   };
//     // 	3. if we exit the for loop return false
//   return false;
  // console.log(array.indexOf(targetElement) !== -1)
  // return array.indexOf(targetElement) !== -1
  return array.includes(targetElement)
//   console.log('===>',array.includes(targetElement))
//   if(array.includes(targetElement)) {
//     return true;
//   };

//   return false;
}

console.log('return value =>',hasElement(['a', 'b', 'c', 'e'], 'c')); // true
console.log(hasElement(['a', 'b', 'c', 'e'], 'a')); // true
console.log(hasElement(['a', 'b', 'c', 'e'], 'z')); // false
console.log(hasElement([43, -7, 11, 13], 11));      // true
console.log(hasElement([43, -7, 11, 13], 1));       // false
console.log(hasElement([], 3));                     // false






/*


	Understanding the problem
    input: ['a', 'b', 'c', 'e'], 'c')
    output: an index 2

    Make a plan
    1. define a function getIndexOF
    2. iterate through the array
    	a. create a variable for element at i
        b. use if statement to check if the current element is the target element
        	a. if it is return the index
    3. if we exit the loop return -1

    exectuing the plan
    refactor
*/

//  1. define a function getIndexOF
function getIndexOf(array, targetEle) {
  return array.indexOf(targetEle)
  //     2. iterate through the array
  for(let i = 0; i < array.length; i++) {
    //  a. create a variable for element at i
    let element = array[i];
//   b. use if statement to check if the current element is the target element
    // a. if it is return the index
    if(array[i] === targetEle) return i;
  };

  // 3. if we exit the loop return -1
  return -1;
}

console.log(getIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(getIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(getIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(getIndexOf([43, -7, 11, 13, 43], 43));  // 0
console.log(getIndexOf([43, -7, 11, 13], 1));       // -1
console.log(getIndexOf([], 3));                     // -1
