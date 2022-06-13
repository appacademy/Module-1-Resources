/*
.map and .filter provide another similar iterative structure. It will take each
element, its index and the array we call it on and pass that into the provided 
function. However, both .map and .filter will return new arrays. We'll control
what's in the result arrays by determining what should get returned by the
function we provide to our method call
*/

// Let's write a function that will double words or numbers using .map!

function doubler(arr) {
    let doubled = arr.map((element, index, array) => { // call map on our array
        return element + element // add element to itself, doubling it.
        // our return statement inside of map says that at this current index,
        // this return value wil exist in our result array
    })
    return doubled
}

// by using the additon operator, we allow our function to make use of either
// numbers or strings.

// Let's build the same function using a for loop:

function doublerLoop(arr) {
    let doubled = []
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        doubled.push(element + element)
    }
    return doubled
}

// Let's see if our functions perform the same work:
let nums = [1, 2, 3, 4, 5] 
let strings = ["hello", "world", "goodbye", "moon"]

console.log(doubler(nums))
console.log(doublerLoop(nums))

console.log(doubler(strings))
console.log(doublerLoop(strings))

// .filter gives us a means to create a new array from an original array keeping
// only the elements that meet a certain conditions. Let's build a function that 
// will keep only the odd numbers from a given array

let onlyOdds = (nums) => {
    let odds = nums.filter((number, index, arr) => { // setup filter function
        if (num % 2 === 0) return false // filter is expecting a boolean value
        // to be returned. If true is returned, the current value is added to
        // the result array. If false is returned, the element will not be. 
        return true
    })
    return odds
}

function onlyOddsLoop(nums){
    let odds = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (nums % 2 !== 0) odds.push(num)
    }
    return odds
}

console.log(onlyOdds(nums))
console.log(onlyOddsLoop(nums))
