// Arrow functions
// Arrow syntax for functions provides us with another way to declare functions.
// This method is very similar to the function expression syntax that we saw in
// week 1 and have been using. 

// First let's a look at a function written with function expression syntax:
const arrSum = function (arr){
  return arr.reduce(function(sum, num){
    return num + sum;
  })
}

// Rewritten with arrow functions, would look something like this:
const arrSum2 = arr => {
    return arr.reduce((sum, num)=>{
        return num + sum
    })
}

// Arrow functions give us something else that makes them very handy. If we only
// have a single statement for our function to interpret, arrow functions will
// make use of an implicit return. We'll start by removing our curly braces, and
// condensing our code onto a single line: 
const arrSum3 = arr => {
    return arr.reduce((sum, num)=> num + sum)
}
// Callback is looking a little cleaner, but we can take it a step further:
const arrSum4 = arr => arr.reduce((sum, num) => sum + num)

// Here we have a nice clean expression that will assess each member of our
// array and generate a total sum of all numbers in our array

const arr1 = [2, 3, 4, 5, 6]


// Another example with map:
const squared = nums => nums.map(num => num ** 2)

console.log(squared(arr1))

// You'll see arrow functions all over the documentation on MDN. Play around
// with them! You may find that once you write an arrow function you'll never 
// want to use the old ways. 