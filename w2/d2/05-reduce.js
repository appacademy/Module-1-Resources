/*
.reduce allows us to return whatever we want, however it can be the most 
complicated of the array methods to get our minds around. The function that we
supply it will be passed an additional argument, the accumulator. The 
accumulator will hold onto whatever was returned from our previous iteration.

** IMPORANT NOTE ** We must return inside of our supplied function in order for
our accumulator to always have a good value. 

.reduce will also take two arguments, rather than just the function we want it
to call with each element. We can also optionally supply an intial value for our
accumulator. If no value is supplied, our accumulator will start as the first
element in our array and the iterative structure will begin with the element at
index 1. 

Let's look at a few examples
*/

// Here we'll write a function that takes the sum of an array:
let numbers = [1, 49, 24, 55, 9, 58, 1320, 181]

let sum = (nums) => {
    // call reduce on input array and establish function inline for argument
    let sum = nums.reduce((acc, el, i, arr) => { // function takes acc el i arr
        // in order to build our sum, we'll add each number to the accumulator. 
        // We then need to return that result so it stands in as the accumulator 
        // in our next iteration
        return acc + el 

    }) // no default accumulator supplied, function takes first element of arr
       // as initial accumulator
    return sum
}

console.log(sum(nums))

// Let's build a function that will find the largest number in our array:
let maximum = nums => nums.reduce((acc, el) => {
    if (acc > el) return acc
    else return el
})

console.log(maximum(numbers))


// Lastly, let's get whacky. We'll build a function that sorts evens and odds
// into different arrays:

let sortEvensOdds = nums => {
    return nums.reduce((accum, el)=>{
        if (el % 2 === 0) accum[0].push(el)
        else accum[1].push(el)
        return accum
    }, [[],[]])
}

console.log(sortEvensOdds(numbers))

