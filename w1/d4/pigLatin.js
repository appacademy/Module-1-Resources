/*
Pig Latin Recall
Pig Latin is a fun take on the English language where you move any consonant 
cluster from the start of the word to the end of the word; when words begin on a 
vowel, you simply add "-yay". Vowels are "aeiou". 

Write a function pigLatinWord that takes in a word string and translates the 
word into Pig Latin. For this problem use the String's slice() method. The 
slice() method extracts a section of a string and returns it as a string. 

Hint: Remember the String.includes method!
*/

/*
-- When a word begins with a consonant cluster, remove that cluster, append to 
   end and add -ay
   ex - baseball -> aseballbay, 
-- When a word begins with a vowel, we will just append -yay to the end
-- use a for loop to iterate over our string
-- define all of our vowels in some data structure. array? string?
-- setup conditional to begin work
    -- setup edgecase for when word begins with vowel, append -yay to word
    -- iterate until we find a vowel. When vowel is found, slice out vowel ->
       to end of word and append earlier consonants with ay to that slice.
*/

function isVowel(char) {
    let vowels = "aeiou"
    // if (vowels.includes(char) === true) return true
    // return false
    return vowels.includes(char.toLowerCase())
}

function pigLatinWord(word) {
    let vowels = "aeiou"
    for (let i = 0; i < vowels.length; i++){
        let currentVowel = vowels[i]
        if (word.startsWith(currentVowel)) return word + "yay"
    }
    // if (isVowel(word[0])) return word + "yay"
    for (let i = 1; i < word.length; i++) {
        let currentChar = word[i]
        if (isVowel(currentChar) === true){
            let consonants = word.slice(0, i)
            let restOfWord = word.slice(i)
            return restOfWord + consonants + "ay"
        }
    }

}

// console.log(isVowel("o"))

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"