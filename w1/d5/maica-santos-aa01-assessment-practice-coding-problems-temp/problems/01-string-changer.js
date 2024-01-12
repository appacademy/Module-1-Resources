/*
Build a function called stringChanger that takes in two arguments: a word
and an operation. Based on the operation, your function will return the word
modified in some way. The operations are:


1. isolate the first letter - slice
  - upper case it! using toUpperCase()
2. the second half of the word
  - return the first (mod) + second
  "capitalize": Capitalize the first letter in the word.

3. return the word uppercased using
  "uppercase": Capitalize every letter in the word.


4. return the word + word
  "double": Return the word twice in a row.

5. Plan for reverse
  - declare a var = ""
  - iterate through the word backwards using a reverse for loop
  - concat each letter to our var
  - return the var

  "reverse": Return the string with the letters in reverse order.

  If the operation is invalid, return the word, unchanged.
*/

function stringChanger(word, operation) {
  // Your code here
  if (operation === "capitalize") {
    let first = word.slice(0,1).toUpperCase()
    let second = word.slice(1)
    // console.log(first)
    // console.log(second)
    return first + second
  }

  if (operation === "uppercase") {
    return word.toUpperCase()
  }

  if (operation === "double") {
    return word + word
  }


  if (operation === "reverse"){
    // let res = ""

    // for (let i = word.length - 1; i >= 0; i--){
    //   let char = word[i]
    //   // console.log(char)
    //   res += char
    // }

    // return res

    return word.split("").reverse().join("")
  }

  if (operation === "unknown") return word

}

// console.log(stringChanger('foo', 'capitalize')); // 'Foo'
// console.log(stringChanger('foo', 'uppercase'));  // 'FOO'
// console.log(stringChanger('foo', 'double'));     // 'foofoo'
// console.log(stringChanger('foo', 'reverse'));    // 'oof'
// console.log(stringChanger('foo', 'unknown'));    // 'foo'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = stringChanger;
