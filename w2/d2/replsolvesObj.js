//Check if key is in object


//includedInObject
const includedInObject = (obj, key) => {
  if(obj[key] !== undefined) return true;
  return false;

  //return key in obj
  //return Object.keys(obj).includes(key);
}

//OR
const includedInObject2 = (obj, key) => {
  if(obj.hasOwnProperty(key)) return true;
  return false;
}

//--------------------------------------------------
///Check if value is in object
//valInObject
const valInObject = (obj, value) => {
  for(let key in obj) {
      if(obj[key] === value) {
          return true;
      }
  }
  return false;
  //return Object.values(obj).includes(value);
}

// if (counter[letter] === undefined) {
//   counter[letter] = 1;
// } else {
//   counter[letter]++;
// }

//----------------------------------------------------
//Frequency counter
//mostCommonChar
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


//-----------------------------------------------
//nested array of objects
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



//-------------------------------------------------
//nested objects
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
