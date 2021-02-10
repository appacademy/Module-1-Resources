/* 
Instructions:
Take the array defined below and
  1. Remove the first dog
  2. Add "Biff" and "Buster" to the end
  3. Add "Luna" to the beginning
  4. Remove Buster

Then print the array
*/

//Code Below this line

let dogs = ['Rosie', 'Copper']

dogs.shift();
dogs.push('Biff', "Buster");
dogs.unshift('Luna');
dogs.pop();

console.log(dogs)