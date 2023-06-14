/*


  Polya's Framework

  Understand the Problem
  Make a plan
  Carry out the plan
  Look back and improve your solution


*/


/*

  Understand the Problem
  Input: an array of numbers ->  [1, 2, 3, 4]
  Output: a new array of numbers -> [2, 4, 6, 8]
  * How do we get from the input to the output?
  * Try to reason with logic in your head
  * We need to return a new array of all the numbers from the previous array doubled

  Make a plan
  1. define a function doubler takes in numbers
  2. create a new array call it doubledNums
  3. Iterate through the array to gain access to all the elements
  	a. start - 0
    b. end - array.length - 1 - account for the 0th index - so we do not go out of bounds
    c. increment - 1 = increment by 1 so we hit every element
  	- start - 0; stop - 3; increment - 1
    d. create a variable for the number at i -> number[i] - number
    e. take the old number and double it and store it a variable call it doubledNum
    d. How do we get the doublednum into the new array?
    	1. push the doublednum into the new array
        2. concat
        3. index
    e. return newArray

  Carry out the plan
  Look back and improve your solution

*/
// let doubler = function(numbers) {
//   // console.log('og array',numbers);//[ 1, 2, 3, 4 ]
//   let doubledNums = [];//array to store doubled nums, this is what well return

//   //array [ 1, 2, 3, 4 ]
//   //index   0  1  2  3
//   //start - 0   we want to stop at 3
//   //end - numbers.length = 4
//   // 0 < 4 - increment by 1
//   // we stop at the comparsion 4 < 4
//   for(let i = 0; i < numbers.length; i++) {//iterate through the numbers array
//     let number = numbers[i];//just so we know that numbers[i] is a number
//     // console.log('current index:', i, 'current number:', number);
//     let doubledNum = number * 2;
//     // console.log('doubled',doubledNum)
//     // doubledNums.push(doubledNum);
//     // doubledNums = doubledNums.concat(doubledNum)
//     doubledNums[i] = doubledNum;
//     // console.log('new array', doubledNums)
//   }

//   return doubledNums;
// }

function doubler(numbers) {
  let doubledNums = [];

for (let i = 0; i < numbers.length; i++) {

 let number = numbers[i];
 let doubledNum = number * 2;
 doubledNums = doubledNums.concat(doubledNum)//<---this is the line where the errors lie
 // console.log('here', doubledNums);

	}
  return doubledNums;
};

// console.log('the return value:',doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]



function pigLatinWord(word) {
  let vowels = 'aeiou';

  //'aeiou'.includeds('a')
  if(vowels.includes(word[0])) return word + 'yay';

  //gain access to every letter
  for(let i = 0; i < word.length; i++){
   let letter = word[i];
   //check if letter is a vowel
   if(vowels.includes(letter)){
     //we need everything up to the vowel
     let second = word.slice(0,i);

     //we need everything after the vowel
     let first = word.slice(i);

     // break;//<-use this how to debug, stop the loop
     return first + second + 'ay'
   }

  }
  return word;
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
