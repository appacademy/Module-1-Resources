/*


  Function expression syntax!
    - just another a way to write a function
    - we learn about function declaration yesterday
    - storing an anonymous function in a variable therefore giving it a name

*/


// sayHello();
// sayHello2();//so you cant invoke your function expression before its defined, has to do with hoisting - learn week 3

//function declaration
function sayHello() {
  console.log('hello')
};


//function expression
//storing an anon function in a variable
let sayHello2 = function() {
  console.log('hello FROM SAY HELLO 2')
}

let sayHello3 = () => console.log('hello 3')

// console.log(sayHello);// [Function: sayHello]
// console.log(sayHello2);//[Function: sayHello2]



/*

	polyas framework!
    4 part process for problem solving!
    1. Define the problem -  what is the prompt asking?
    2. Make a plan
    3. Execute the plan
    4. Refactor

    1. Define the problem
    	* return true if either word passed in is found in the sentence
     	- Input: a sentence and two words - strings => "how now brown cow?", "panther", "cow"
        - Output: true - boolean => true
        * How do i get from my input to my output

    2. Make a plan
    	1. define a function that takes in sentence and two words
        2. create a conditional to check if the sentence containt word1 OR word2
        	- we can do this using .includes, .indexOf, loop
            - if the sentence includes the string return true
            - else return false
    3. Execute the plan
    4. refactor

*/

let eitherStringIncluded = function (sentence, word1, word2) {

  return (sentence.includes(word1) || sentence.includes(word2))

}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true

let sumArray = function(array) {
  // console.log(array);//[ 5, 6, 4 ]
  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    // console.log('index', i)
    let number = array[i];
    console.log('number', number)
    console.log('before sum', sum);
    sum += number
    console.log('after adding num', sum);
  }

return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log
