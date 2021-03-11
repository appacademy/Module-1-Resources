/* 
Write a function that intakes a string and removes all words that are less
than 5 letters.
// Understand
  "hello world" => "hello world"
  "the cat is awesome" => "awesome"
  "" => ""
// Plan
	Define a results array
	Take the sentence and split it into words
	Iterate over the split sentence array for each word
    	check if the word is < 5 letters using the .length
        	Let's take this logic and put it in a helper function
        if the word is not less than 5 letters we'll push it to a results array
    return results in a joined string
*/
function isLessThanFive(word) {
    let lengthOfWord = word.length;
    return lengthOfWord < 5;
}

function removeSmallWords(str) {
    let results = [];
    let split = str.split(' ');
    // console.log(split, "<-- this is the split string");
    for (let i = 0; i < split.length; i++) {
        let word = split[i];
        if (!isLessThanFive(word)) {
            results.push(word);
        }
    }
    return results.join(' ');

    // let joined = split.join(' ')
    // console.log(joined, "<-- this is the joined string");
}

console.log(removeSmallWords('the cat is awesome'));
console.log(removeSmallWords('hello world'));
console.log(removeSmallWords(''));
