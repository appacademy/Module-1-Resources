
// * 1. Check if key is in object
const includedInObject = (obj, key) => {
  if (obj[key] !== undefined) return true;
  return false;

  //return key in obj
  //return Object.keys(obj).includes(key);
};

//OR
const includedInObject2 = (obj, key) => {
  if (obj.hasOwnProperty(key)) return true;
  return false;
};

// * 2. Check if value is in object
const valInObject = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
  //return Object.values(obj).includes(value);
};

// if (counter[letter] === undefined) {
//   counter[letter] = 1;
// } else {
//   counter[letter]++;
// }

// * 3. Frequency counter
const mostCommonChar = (sentence) => {
  let obj = {};

  let newSentence = sentence.split(" ").join("");

  for (let letter of newSentence) {
    if (letter in obj) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }

  let highest = -Infinity;
  let currentKey;

  for (let key in obj) {
    if (obj[key] > highest) {
      highest = obj[key];
      currentKey = key;
    } else if (obj[key] === highest) {
      if (key < currentKey) {
        currentKey = key;
      }
    }
  }
  return currentKey;
};

//or
// const mostCommonChar = sentence => {
//   let charMap = {};
//   let max = 0;
//   let maxChar = sentence[0];
//   for(let char of sentence) {
//       if(char === ' ') continue;
//       char = char.toLowerCase();
//       if(charMap[char]) {
//           charMap[char]++;
//       } else {
//           charMap[char] = 1;
//       }
//       if(charMap[char] > max) {
//           max = charMap[char];
//           maxChar = char;
//       } else if(charMap[char] === max) {
//           maxChar = char < maxChar ? char : maxChar;
//       }
//   }
//   return maxChar;
// }

// * 4. nested array of objects
const getSecondObjValues = (arr) => {
  for (let nestedArr of arr) {
    if (nestedArr[1]) {
      for (let key in nestedArr[1]) {
        console.log(nestedArr[1][key]);
      }
    } else {
      console.log(null);
    }
  }
};

// const getSecondObjValues = arr => {

//   for(let nestedArr of arr) {

//   if(nestedArr.length > 1) {
//   console.log(...Object.values(nestedArr[1]))

// } else {
//   console.log(null)
// }
//   }
// }

// * 5. nested objects
const printDepthOfTwo = (obj) => {
  for (let val of Object.values(obj)) {
    if (typeof val === "object") {
      for (let nestedVal of Object.values(val)) {
        console.log(nestedVal);
      }
    }
  }
};

//-------------BONUS---------------
// * 6. palindrome permutation
const isPalindrome = (seq) => {
  let map = {};
  for (let char of seq) {
    if (char === " ") continue;
    if (map[char]) {
      delete map[char];
    } else {
      map[char] = 1;
    }
  }
  return Object.keys(map).length < 2;
};
