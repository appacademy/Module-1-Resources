/* FOR EACH
.forEach allows us to set up an iterative structure that will call some 
specified function forEach element in the array. JS will automatically pass in
the current element, the index of that element, and the array that we're calling
the .forEach method from. Let's take a look
*/

// We have an array of words and want to print each word:
let words = ['rectangle', 'America', 'megaphone', 'Monday']

// Here's how we'd set up a standard forLoop
for (let i = 0; i < words.length; i++) {
    let word = words[i]
    console.log(word)
}

// Here's how we'd set the same process up using for each:
words.forEach( //specify arrow function to call with each element
    (el, i, arr) => {  //JS automatically provides the element, index and arr
        console.log(el) // Just logging the element.
    }
)


// Let's see it again, but use it to solve a problem:
// We want to build a function that will look at an array and tell us if it 
// contains the number 2
let nums = [1, 49, 24, 55, 2, 9, 58, 132, 181]
let includesTwo = (arr) => { //Iterative approach
    for (let i = 0; i < arr.length; i++) { //For loop bound to array
        let el = arr[i] //key into current element
        if (el === 2) { // check if element is 2
            return true // return true if 2 is found
        }
    }
    return false // otherwise return false
}




let includesTwoAgain = (arr) => { // Here we have it with forEach
    let haveWeFoundATwoYet = false // remember that forEach will not return
    // anything, in order to use forEach to solve this problem, we need to give
    // ourselves a variable to manipulate to track our result.

    arr.forEach((num, i, arr) => { // call forEach on the array, define function
        if (num === 2) { // if our current num is 2
            haveWeFoundATwoYet = true // update tracking variable
        }
    }
    )
    return haveWeFoundATwoYet // return tracking variable after function finishes

}

console.log(includesTwoAgain(nums))


// Let's take a look at our words array again
words = ['rectangle', 'America', 'megaphone', 'Monday'] 
// We want to build a function that will look at an array, and return only the
// words that have a length of 8 or higher
let onlyEightLettersOrLonger = (arr) => {
    let longerWords = [] // create array to hold words longer than 8 characters

    arr.forEach((word) => { // use forEach to set up iterative structure
        if (word.length >= 8) {  // check if word's length is greater than or 
                                 // equal to 8
            longerWords.push(word) // if so, push into array
        }
    })

    return longerWords // return array
}

console.log(onlyEightLettersOrLonger(words))



// Let's take a at this function:
let keepEvenNumbers = (arr) => {
    let evenNumbers = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num % 2 === 0) {
            evenNumbers.push(num)
        }
    }
    return evenNumbers
}
// How can we rewrite it using .forEach?

console.log(keepEvenNumbers(nums))
