const sentence = "What is the most common character in this sentence";
//	      	          ^
// {
//	W: 1,
//  h: 2,
//   : 1
// }

//o = 0
// a = 1
// b = 0
// c = 0
// d = 0

const mostCommonChar = sentence => {
    // 1. Remove The spaces
  	// 2. Itterate through sentence, 
  	//		As we itterate, incriment a value in a object
  	// 3. Itterate through object and save the highest value
  	// 4. return the highest value
  
  // 1.
  sentence = sentence.split(" ").join("");
  // console.log(sentence)
  
  // 2.
  let obj = {}
  for(let char in sentence){
    let letter = sentence[char]
    if(obj[letter] === undefined){
    	obj[letter] = 1;
    }
    else {
      obj[letter] += 1
    }
  }
  // console.log(obj)
  
  // 3.
  let finalChar = ""
  let frequencyCounter = 0
  for(let key in obj){
   	let value = obj[key];
    if(value > frequencyCounter){
      finalChar = key;
      frequencyCounter = value;
    }
  }
  
  // 4.
  return finalChar
  
}

console.log(mostCommonChar(sentence));           //  "t"



// Bonus approach
// for(let i = 0; i < sentence.length; i++){
  //   if(sentence[i] === " "){
  //     continue;
  //   }
  //   //Do the rest of logic
  // }