// your code here
// identify last vowel in word, remove that vowel, and return word without that vowel
// how to approach
// -- find a way to identify if some character is a vowel
// -- aeiouAEIOU -> working!
// -- how do we find the last vowel?
// 

function isVowel(char) {
    let vowels = "aeiouAEIOU"
    return vowels.includes(char)
}

function indexRemover(arr, index) {
    return arr.splice(index, 1)
}

let removeLastVowel = (word) => {
    let wordArr = word.split("")
    // console.log("Words in array at start:", wordArr)
    for (let i = wordArr.length - 1; i >= 0; i--) {
        let currentChar = wordArr[i]
        // console.log("current character:", currentChar)
        if (isVowel(currentChar)) {
            indexRemover(wordArr, i)
            // console.log("Words array after splicing out last vowel:", wordArr)
            let joined = wordArr.join("")
            // console.log("joined word:", joined)
            return joined
        }
    }
    return word
    // for (let i = word.length -1; i >= 0; i--){
    //   // console.log("in loop")
    // 	let currentChar = word[i]
    //     if (isVowel(currentChar)){
    //     	return word.slice(0,i) + word.slice(i + 1)
    //     }
    // }
    return word
}



console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
console.log(removeLastVowel("adz")) //dz