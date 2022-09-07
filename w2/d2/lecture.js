// // //Check if key is in object
// // const obj = {
// //     first: "1",
// //     second: 2,
// //     third: "three"
// // }

// // const includedInObject = (obj, key) =>{
// // 	for (let banana in obj){
// //         // let val = obj[banana]
// //     	if (banana === key) return true
// //     }
// // 	return false
// // }
// // // key in obj
// // // {
// // //     // Write your solution here.
// // //   // if (key in obj) {
// // //   // 	return true
// // //   // } return false
// // //   // if (obj[key] === undefined) return false
// // //   // return true
// // //   let keys = Object.keys(obj)
// // //   // return keys.includes(key)
// // //   for (let banana of keys){
// // //   	if (banana === key) return true
// // //   }
// // //   return false
// // // }

// // console.log(includedInObject(obj, 'first'));      // true
// // console.log(includedInObject(obj, 'second'));     // true
// // console.log(includedInObject(obj, 'fourth'));     // false

// // // check if value in object
// // const obj = {
// //     item1: "jar",
// //     item2: "pot",
// //     item3: "spatula",
// //     item3: "whisk"
// // }
// // console.log(obj)

// // const valInObject = (obj, value) => {
// //     // Write your solution here.
// // 	// let values = Object.values(obj)
// // 	// console.log(values)
// // 	// console.log(value)
// // 	// return values.includes(value)
// //     for (let key in obj){
// //     	if (obj[key] === value) return true
// //     }
// //     return false
// // }

// // console.log(valInObject(obj, "jar"));             // true
// // console.log(valInObject(obj, "pot"));             // true
// // console.log(valInObject(obj, "cup"));             // false
// // console.log(valInObject(obj, "fork"));            // false

// // // frequency counter 
// // const sentence = "What is the most common character in this sentence";

// // // const mostCommonChar = sentence => {
// // //     // Write your solution here.
// // // 	let count = {}
// // //     for (let  i = 0; i  < sentence.length; i++){
// // //         // console.log(count)
// // //     	let char = sentence[i]
// // //         if (char === " ") continue;
// // //         if (count[char] !== undefined) {
// // //         	count[char]++
// // //         } else {
// // //         	count[char] = 1
// // //         }
// // //     }
// // //    let mostFrequent = ""
// // //    for (let char in count){
// // //    	  if (mostFrequent === ""){
// // //       	 mostFrequent = char;
// // //       } else if (count[char] >= count[mostFrequent]){
// // //       	if (count[char] === count[mostFrequent] && char < mostFrequent){
// // //         	mostFrequent = char
// // //         } else if(count[char] > count[mostFrequent]) {
// // //         	mostFrequent = char
// // //         }
// // //       }
// // //    }
// // //    return mostFrequent
// // // }

// // function mostCommonChar(sentence){
// //     let count = {}; // establish counter object
// //     let words = sentence.split(" "); // split sentence into array of words
// //     for (let word of words){  // use for...of loop to iterate through every word
// //         for (let char of word){ // use for...of loop to iterate through every character in word
// //             if (count[char] === undefined){ // check to see if our character is a key in our object,
// //                 count[char] = 1; // if not, establish it with a value
// //             } else { // otherwise,
// //                 count[char]++ // incremenet the count for that character
// //             }
// //         }
// //     }
// //     let chars = Object.keys(count); // after count is completed, create array of keys representing chars
// //     let highest = chars[0]; // use first character in array as starting point
// //     for (let i = 1; i < chars.length; i++){ // establish loop to iterate through
// //         let current = chars[i]; // establish variable to point to current character
// //         if (count[current] > count[highest] || count[current] === count[highest] && current < highest){
// //             // check to see if count for current character is higher than recorded highest, or, if they have the same count,
// //             // update if the current is sorted before the highest.
// //             highest = current;
// //         }
// //     }
// //     return highest;
// // }

// // console.log(mostCommonChar(sentence));           //  "t"

// let wayne = {
//     color: "black",
//     chonky: true,
//     cuddly: true,
//     hasTail: false
// }

// let wax = {...wayne};

// wax.color = "torty"
// wax.chonky = false
// wayne.fangs = true

// console.table(wayne)
// console.table(wax)

const sentence = "What is the most common character in this sentence";

function mostCommonChar(sentence){
	let words = sentence.split(" ")
    let count = words.reduce((counter, word) => {
    	// for (let  i = 0; i < word.length; i++){
    	// let char = word[i]	
        for (let char of word){
            if (counter[char] === undefined){
            	counter[char] = 1
            } else {
            	counter[char]++
            }
        }
       return counter;
    }, {})
    // console.log(count)
     return Object.keys(count).reduce((current, next) =>{
    	if (count[current] === count[next] && current < next || count[current] > count[next]){
        	return current
        } return next
    })
}

console.log(mostCommonChar(sentence));           //  "t"

const friends = [
    {
        name: "Albert",
        yearsOfFriendship: 3
    },
    {
        name: "Angela",
        yearsOfFriendship: 2
    },
    {
        name: "Freddy",
        yearsOfFriendship: 8
    },
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];

const totalYears = friends.reduce((acc, friend) => {
    // Write your solution here.
  	console.log(acc)
    console.log(friend)
    return typeof acc === "object" ? acc.yearsOfFriendship + friend.yearsOfFriendship : acc + friend.yearsOfFriendship
    return acc + friend.yearsOfFriendship;
});
console.log(totalYears);                        // 19