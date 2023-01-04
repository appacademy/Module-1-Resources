//check if key is in object
const includedInObject = (obj, key) => {
  if (obj[key] !== undefined) return true;
  return false;
};

//check if value is in object
const valInObject = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
};

//Frequency counter
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

//nested array of objects
const getSecondObjValues = arr => {
  for(let nestedArr of arr) {
      if(nestedArr[1]) {
          for(let key in nestedArr[1]) {
              console.log(nestedArr[1][key])
          }
      } else {
          console.log(null);
      }
  }
}

//nested objects
const printDepthOfTwo = obj => {
  for(let val of Object.values(obj)) {
      if(typeof val === 'object') {
          for(let nestedVal of Object.values(val)) {
              console.log(nestedVal)
          }
      }
  }
}

//palindrome challenge
const isPalindrome = seq => {
  let map = {};
  for(let char of seq) {
      if(char === ' ') continue;
      if(map[char]) {
          delete map[char];
      } else {
          map[char] = 1;
      }
  }
  return Object.keys(map).length < 2;
}
