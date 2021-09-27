/* 
Instructions:

Initialize a variable called zoo that is equal
to an array of 3 of your favorite animals.

Then, print your zoo.
*/

// Code below this line
function doubler(numbers) {
    // your code here...
  for (let i = 0; i < numbers.length; i++) {
   numbers[i] *= 2;
  }
  return numbers;
}

console.log(doubler([1,2,3]))