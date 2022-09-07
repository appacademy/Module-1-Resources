//Check if key is in object
const obj = {
    first: "1",
    second: 2,
    third: "three"
}

const includedInObject = (obj, key) =>{
	for (let banana in obj){
        // let val = obj[banana]
    	if (banana === key) return true
    }
	return false
}
// key in obj
// {
//     // Write your solution here.
//   // if (key in obj) {
//   // 	return true
//   // } return false
//   // if (obj[key] === undefined) return false
//   // return true
//   let keys = Object.keys(obj)
//   // return keys.includes(key)
//   for (let banana of keys){
//   	if (banana === key) return true
//   }
//   return false
// }

console.log(includedInObject(obj, 'first'));      // true
console.log(includedInObject(obj, 'second'));     // true
console.log(includedInObject(obj, 'fourth'));     // false

// check if value in object
const obj = {
    item1: "jar",
    item2: "pot",
    item3: "spatula",
    item3: "whisk"
}
console.log(obj)

const valInObject = (obj, value) => {
    // Write your solution here.
	// let values = Object.values(obj)
	// console.log(values)
	// console.log(value)
	// return values.includes(value)
    for (let key in obj){
    	if (obj[key] === value) return true
    }
    return false
}

console.log(valInObject(obj, "jar"));             // true
console.log(valInObject(obj, "pot"));             // true
console.log(valInObject(obj, "cup"));             // false
console.log(valInObject(obj, "fork"));            // false

// frequency counter 
const sentence = "What is the most common character in this sentence";

const mostCommonChar = sentence => {
    // Write your solution here.
	let count = {}
    for (let  i = 0; i  < sentence.length; i++){
        // console.log(count)
    	let char = sentence[i]
        if (char === " ") continue;
        if (count[char] !== undefined) {
        	count[char]++
        } else {
        	count[char] = 1
        }
    }
   let mostFrequent = ""
   for (let char in count){
   	  if (mostFrequent === ""){
      	 mostFrequent = char;
      } else if (count[char] >= count[mostFrequent]){
      	if (count[char] === count[mostFrequent] && char < mostFrequent){
        	mostFrequent = char
        } else if(count[char] > count[mostFrequent]) {
        	mostFrequent = char
        }
      }
   }
   return mostFrequent
}

console.log(mostCommonChar(sentence));           //  "t"