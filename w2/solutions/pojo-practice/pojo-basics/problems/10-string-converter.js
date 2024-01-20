/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  //!!START
  let stringObject = {};
  // iterate through the string one letter at a time
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    // if the letter doesn't exist in the object already the we add it
    if (stringObject[currentLetter] === undefined) {
      stringObject[currentLetter] = 1;
    } else {
      // otherwise we increment the count of the letter in the object
      stringObject[currentLetter] += 1;
    }
  }
  return stringObject;
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
