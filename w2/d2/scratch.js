








function sentenceMaker(...restOfWords){
  console.log(restOfWords);

  // return word1 + ' '+ word2;
  let sentence = '';
  for(let word of restOfWords) {
    sentence += ' ' + word;
  };

  return sentence;
}


// console.log(sentenceMaker('hello', 'world'));
// console.log(sentenceMaker('taking','in','three arguemnts'));
// console.log(sentenceMaker('hello'));

// num1 = 10
// num2 = 10

//num1 = 10
//restOfNumbers = [10]

//num1 = 10
//restOfNumbers = [2, 3]
function product(num1, ...restOfNumbers) {
  // console.log(num1,restOfNumbers)
  // return num1 * num2;
  return restOfNumbers.reduce((acc, num) => acc *= num ,num1)
}


console.log(product(10, 10));//100
console.log(product(10, 2, 3));//
