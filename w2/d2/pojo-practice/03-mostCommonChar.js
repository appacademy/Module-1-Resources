const sentence = "What is the most common character in this sentencee";

const mostCommonChar = sentence => {
  //count every letter
  //store letter:count as k:v pair
  //find letter with highest count (highest value)
  const count = {}
  for (let x of sentence) { //iterate through string, x holds the values of the string
    let char = x.toLowerCase() //ensure all lowercase
    //if (char !== " ") { //exclude spaces
    if (!count[char]) { //check if char in count
      count[char] = 0 //initialize char to count of 0 if not in count obj
    }
    count[char]++ //increment count of char
    //}
  }
  console.log(count)
  delete count[' '] //delete ' ' key:value, ALSO EXCLUDES SPACES
  console.log(count)

  let maxKey
  let maxValue = 0

  for (let key in count) {
    if (count[key] > maxValue) { //if higher count, update
      maxKey = key
      maxValue = count[key]
    }
    else if (count[key] == maxValue && key < maxKey) { //if tie AND smaller lexicographically, update
      maxKey = key
      maxValue = count[key]
    }
  }

  return maxKey
}

console.log(mostCommonChar(sentence));           //  "t"