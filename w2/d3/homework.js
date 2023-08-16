let removeEWords = (sentence) =>
  sentence
    .split(" ")
    .filter((word) => !word.includes("e") && word)
    // .filter((word) => !word.includes("e") ? word : null)
    .join(" ");

// }

let removeEWords2 = (sentence) => {

  //return a NEW string that contans ONLY WORDS that dont have e in them
  // console.log('og sentence: ',sentence);
  let wordArr = sentence.split(' ');
  // .split - returns an array
  // console.log('wordsArr: ', wordArr);// [ 'What', 'time', 'is', 'it', 'everyone?' ]

  // console.log('word: ', wordArr)
  let removal = wordArr.filter(word => {
    // console.log(word)
    if (!(word.includes('e'))) { // you can directly target word here since we are looking for a specific letter in the word and the filter method helps w that
      return word
    }
  })

  // console.log('filtered Arr: ', removal);
  // .filter - returns a new arr of elements that meet a specific condition

  // .join - returns a string
  // console.log('Result: ',removal.join(' '));
  return removal.join(' ')

};

console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'
