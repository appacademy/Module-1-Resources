const includedInObject = (obj, key) => {
  for (let x in obj) {
  	if (x == key) return true
  }
  return false
    //return key in obj
}

const valInObject = (obj, value) => {
  for (let k in obj) {
  	if(obj[k] == value) return true
  }
  return false
  /**
  let valuesArr = Object.values(obj)
  return valuesArr.includes(value)
  //return Object.values(obj).includes(value)
  */
}

const mostCommonChar = sentence => {
    /*
    use object to keep track of char and counts using k-v pairs
      key: char
      value: count of char
      iterate through sentence
      check if char is in obj
      initiate if not
      increment if it is

    iterate through object and find char with highest count
    i.e. find key with highest value
    */
  let count = {}
  for (let char of sentence) {
    let lower = char.toLowerCase()
    if(lower != ' ') {
		if(!count[lower]) count[lower] = 0
    	count[lower]++
    }
  }
  let maxChar = null;
  let maxCount = 0
  for (let char in count) {
  	if (count[char] >= maxCount) {
      if (count[char] > maxCount || !maxChar || char.localeCompare(maxChar) < 0){
  		maxChar = char
      	maxCount = count[char]
      }
    }
  }
  return maxChar
}

const mostCommonCharAlt = (sentence) => {
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

const getSecondObjValues = arr => {
    /**
    iterate through the arr
    check for nested array
    check nested array for second object
    if second object, print value
    */
  let ans = []
  for(let inner of arr) {
  	if (inner.length > 1) {
      ans.push(Object.values(inner[1])[0])
      //console.log(...Object.values(x[1]))
    } else {
      ans.push(null)
      //console.log(null)
    }
  }
  return ans
}

const printDepthOfTwo = obj => {
    /**
    iterate through obj's values
    if value is nested obj, look through those values
    collect values of nested obj
    */
  let ans = []
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      for (let key2 in obj[key]) {
        ans.push(obj[key][key2])
      }
    }
  }
  return ans
}
