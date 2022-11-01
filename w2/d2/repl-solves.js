
//includedInObject
const includedInObject = (obj, key) => {
  if(obj[key] !== undefined) return true;
  return false;
}
// OR
// const includedInObject = (obj, key) => {
//   if(obj.hasOwnProperty(key)) return true;
//   return false;
// }

//valInObject
const valInObject = (obj, value) => {
  for(key in obj) {
      if(obj[key] === value) {
          return true;
      }
  }
  return false;
}

//mostCommonChar
const mostCommonChar = sentence => {
  let charMap = {};
  let max = 0;
  let maxChar = sentence[0];
  for(let char of sentence) {
      if(char === ' ') continue;
      char = char.toLowerCase();
      if(charMap[char]) {
          charMap[char]++;
      } else {
          charMap[char] = 1;
      }
      if(charMap[char] > max) {
          max = charMap[char];
          maxChar = char;
      } else if(charMap[char] === max) {
          maxChar = char < maxChar ? char : maxChar;
      }
  }
  return maxChar;
}

//getSecondObjValues
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
//printDepthOfTwo
const printDepthOfTwo = obj => {
  for(let val of Object.values(obj)) {
      if(typeof val === 'object') {
          for(let nestedVal of Object.values(val)) {
              console.log(nestedVal)
          }
      }
  }
}

//isPalindrome
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
