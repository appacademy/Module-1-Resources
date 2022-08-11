/*
console.log(myFunc)

const anagrams = (word1, word2) => {
    let result = true
    
    if (word1.length !== word2.length) {
        result = false;
        return result;
    }

    const count = {};

    for (let i = 0; i < word1.length; i++) {
        if (count[word1[i]]) {
            count[word1[i]]++;
        } else {
            count[word1[i]] = 1;
        }
    }
  
	// console.log("Outside of loop i:", i)
  
    for (let i = 0; i < word2.length; i++) {
        if (count[word2[i]]) {
            count[word2[i]]--;
        } else {
            count[word2[i]] = 1;
        }
    }

    for (const char in count) {
        if (count[char] !== 0) {
            result = false;
            return result;
        }
    }
    return result;
}

const wordA = "restful"
const wordB = "fluster"

const wordC = "cat"
const wordD = "dog"

console.log(anagrams(wordA, wordB));          // true
console.log(anagrams(wordC, wordD));          // false
console.log(anagrams("cat", "act"));          // true
console.log(anagrams("boot", "bootcamp"));    // false

function myFunc(){console.log("Hello!")}
*/

/*
<!-- -----EXAMPLE 1----- -->
// let counter1 = 0;

// function incrementCounter1() {
	
//     let counter2 = 1;
//     console.log(counter1);
//     console.log(counter2);
//     return counter2
// }
// // console.log(counter2)

// console.log("*****Example 1: Your Code*****")

// incrementCounter1(function(){"Anonymous function!"})
// console.log(incrementCounter1());   // ?
// console.log(`First counter value:  ${counter1}`)    // ?

// incrementCounter1(increment1());   // ?
// console.log(`Second counter value:  ${counter1}`)    // ?

// incrementCounter1(counter1);   // ?
// console.log(`Third counter value:  ${counter1}`)    // ?


<!-- -----EXAMPLE 2----- -->

let counter2 = 0;

function incrementCounter2(counter2) {
    counter2 += 1;
    console.log(counter2);
    return counter2
}

console.log("*****Example 2: Your Friend's Code*****")

counter2 = incrementCounter2(counter2);    // ?
console.log(`First counter value:  ${counter2}`)    // ?

counter2 = incrementCounter2(counter2);    // ?
console.log(`Second counter value:  ${counter2}`)    // ?

counter2 = incrementCounter2(counter2);    // ?
console.log(`Third counter value:  ${counter2}`)    // ?
*/

/*
function sundaeOrder() {
    // your code here
	let order = "A bowl of ice cream with hot fudge"

    function closureFunction(topping) {
      // your code here

      return order = order + " and " + topping
    };
  
    return closureFunction
}

console.log(sundaeOrder)
let sundae = sundaeOrder();// => returns a function
console.log(sundae)
console.log(sundaeOrder()("Dave's favorite topping"))
console.log(sundaeOrder()("not nuts"))
console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"
console.log(sundae("strawberries"))
console.log(sundae("marshmallows"))
let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"
console.log(sundae2("papaya"))
console.log(sundae("mango"))


//Box 1 = holds the scope for sundaeOrder() -> add more things to scope
//Box 2 = holds the scope for SundaeOrder() -> add different thigns to scope!
*/