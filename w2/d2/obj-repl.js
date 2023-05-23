//Check if key is in object


//includedInObject
const includedInObject = (obj, key) => {
  // Write your solution here.
// console.log(obj, key)
// if(obj[key] !== undefined) return true;
// return false;
//   for(let keys in obj) {

//    if(keys.includes(key)) return true
//   }
//   return false;
// return key in obj
// let keysArr = Object.keys(obj);

return Object.keys(obj).includes(key);
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
const sentence = "What is the most common character in this sentence";

const mostCommonChar = sentence => {
  // console.log(sentence);//What is the most common character in this sentence

  let newSentence = sentence.split(' ').join('');//removes empty spaces
  // console.log(newSentence);//Whatisthemostcommoncharacterinthissentence

  //we need the most common character
  //how can we track how many time each characters appears? With a obj
  let countObj = {};//{a:3,b:1,c:4}
  //poulate the countObj
  for(let i = 0; i < newSentence.length; i++) {//iterate through newSentence
   let letter = newSentence[i];
   // console.log(letter);

    if(countObj[letter] === undefined) {//check if letter exists in countObj
      countObj[letter] = 1; //if letter does not exists in countObj
      						//create a key of the current letter and set the value to 1 -> {W:1}
    } else {
      countObj[letter] += 1;//if letter does exsits, increment the value by one -> {W:2}
    };
  }

  // console.log(countObj);
  let highest = -Infinity;//use as comparison of first iteration, placeholder to compare
  let currentKey;
  //we need to check all the keys and values
  for(let letter in countObj) {//letter is the key, occurence is the value {letter:occurences}
    // console.log('letter', letter);
    let occurence = countObj[letter]
    // console.log('value', occurence)
    if(occurence > highest) {
     highest = occurence;
     currentKey = letter; //a:4 same occurence as b:4 so compare a < b
    } else if(occurence === highest){//if occurence is the same we need to find the lexi graphically smaller
      if(letter < currentKey){//if the current letter is lexigrahpically smaller, do something
        currentKey = letter;
      }
    }
  }
 return currentKey;
}


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


