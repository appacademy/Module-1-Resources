// Build a function, that accepts an array of words and returns a new array
// containing any words that contain the letter e from the given input

// 1. Define my parent function that accepts an array and returns a new one
// 2. Iterate accross my array, and see which words contain e
// 3. Build a helper function that will check each word, and return true or false
//    depending on whether that word contains the letter e
// 4. If true, add word to array, if false, do not
// 5. after loop finishes, return array of words with e
//             x                                   x        x      x                  x

function eWords(array){
    let pickedWord = []
    for (let i = 0; i < array.length; i++){
        let currentWord = array[i]
        if (containsE(currentWord) === true){
            pickedWord.push(currentWord)
        }
    }
    return pickedWord;
}

let containsE = function(word){
    for (let i = 0; i < word.length; i++){
        let currentChar = word[i]
        if (currentChar === 'e' || currentChar === 'E'){
            return true
        }
    }
    return false
}
let test1 = "test"
let test2 = "test again"
// let words = ['elephant', 'bird', 'cat', 'dog', 'excited', 'egg','bread','potato', 'potatoes']
console.log(eWords(['elephant', 'bird', 'cat', 'dog', 'excited', 'egg','bread','potato', 'potatoes']))
