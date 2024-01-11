// Your code here
/*

	POLYAS FRAMEWORK
    UNDERSTAND THE PROBLEM
    Input: snakes_go_hiss
    Output: SnakesGoHiss

    MAKE A PLAN
    EXECUTE THE PLAN
    REFACTOR
*/

//   define function snaketocamel
let snakeToCamel = (string) => string.split('_').map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join('');
// console.log(snakeToCamel)
function snakeToCamel(string) {
//    seperate words from each other - split
  let words = string.split('_');// [ 'snakes', 'go', 'hiss' ]
//    create array to hold capitlized words
  // let capitializedWords = [];
  let capitializedWords = '';
//    iterate through the words
  for(let word of words) {
//    capitalize the first letter of the word
    // console.log(word[0].toUpperCase())
    // console.log(word.slice(1).toLowerCase());
    let newWord = `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
//     push that word into our new array
    // capitializedWords.push(newWord)
    capitializedWords += newWord
  };
//    join back the words together and return the new string
    return capitializedWords;
	// return capitializedWords.join('')

}


console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'~
