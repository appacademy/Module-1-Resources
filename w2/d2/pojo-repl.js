/*

Given a sentence string, sentence, write a function that returns the most
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one (e.g. if 'a' and 'b' are both the most common, return 'a' because it is closest to the beginning of the alphabet). Be sure to exclude spaces when counting
characters.


*/
const sentence = "What is the most common character in this sentence";

const mostCommonChar = (sentence) => {
  let counterObj = {};//populate counter obj
  // { W:1 a:2, h:3 } { letter: occurrence }
  // this allows us to track how many time each letter occurs

  let newSentence = sentence.split(" ").join("");//remove the spaces

  for (let letter of newSentence) {//iterate through string
    if (letter in counterObj) {//check if letter is in counterObj
      counterObj[letter] += 1;//if it is add 1 to the value
    } else {
      counterObj[letter] = 1;//if its not, create a k:v pair
      //with the letter as the key, and the occurrence as the value
    };
    // console.log(counterObj);
  };

  console.log(counterObj);
  //{ W: 1, h: 3, a: 2, t: 3, i: 1, s: 2, e: 1, m: 3, o: 3, c: 2, n: 1 }

  let highest = -Infinity;// placeholder value to compare, gets overwritten after first iteration
  let currentKey;
  // we need to find the letter that occurred the most
  // we need to gain access to all the keys and values
  for(let key in counterObj) {//{ W: 1, h: 3, a: 2, t: 3, i: 1, s: 2, e: 1, m: 3, o: 3, c: 2, n: 1 }

    let value = counterObj[key];

    if(value > highest) {
      highest = value;
      currentKey = key;
    } else if(value === highest) {//to check if the values are the same , we need to compare lexicographically
      if(key < currentKey) {//this will compares the letters 'a' < 'b'; a is greater
        currentKey = key;
      }
    }
    // console.log(highest, currentKey);
  }
  return currentKey;
}

// console.log(mostCommonChar(sentence));//t
