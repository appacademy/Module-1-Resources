// Scope

// Finally! We get answers for why let is important, what we mean by global 
// scope and how we can manage our variables within our functions.

//Global
//  Stuff outside of any function, just hanging out in your file
//    -also happens if you don't let your variable : name = 'Bill'
//  Best avoided
//    -reduces "security" of your code -- variable may be accessible when you 
//     don't want it to be
//    -increases risk of namespace collisions - may accidentally overwrite its 
//     value

//Local/Function
//  The scope of a function is the set of variables that are available for use 
//  within that function
//    -The function's arguments/parameters
//    -Any local variables declared within the function
//    - _any variables that were already defined where the function was defined_

//Block
//  A block in JS is denoted by a pair of curly braces {}
//    -You've used these when writing loops and if statements

// Using keywords let or const will create a new block scoped variable inside 
// your loop/if statement
//   -even if its using the same name as something before, you create a new (yet
//    similarly named) variable
//   -without using let, you're accessing the variable through our _next_ 
//    concept...

// Scope Chaining
//  Any nested inner scope will have access to any variables that exist in the 
//  outer scope
//   -think about how we've been writing loops -- you've often had total, sum, 
//    arr, etc that exist outside of the loop
//   -functions that use variables from an outer functions scope are called 
//    closures -- we'll get there soon though

// Lexical Scope
//  Scope is determined at lexing time and not dynamically considered. By 
//  looking at the code, we can determine its scope

// Let's explore a bit with some code:

let pensGoat = "lemieux"; // Globally scoped variable

function letsGoPens(cap) { // function that creates local scope
  let alt = "jagr";
  if (true) { // if statement creates block scope
    let alt = "letang"
    for (let i = 0; i < 5; i += 5) { // for loop creats another block scope
      let pensGoat = cap;
      let alt = "malkin"
    }
  }
  console.log(pensGoat, cap, alt)
}
letsGoPens("crosby")

// let mod = "bill"; // Globally scoped variable

// function letsGoApp(cohort) { // function that creates local scope
//   let circle = "jojo";
//   if (true) { // if statement creates block scope
//     let circle = "peter"
//     for (let i = 0; i < 5; i += 5) { // for loop creats another block scope
//       let mod = cap;
//       let circle = "braxton"
//     }
//   }
//   console.log(mod, cohort, circle)
// }
// letsGoApp("david")

// Try moving around some of the statements to different blocks, and taking out 
// keyword let

// Scope Chaining

// JS will let us chain upwards out of our scope. We can reach from a nested
// block of scope to an outer block, but not vice versa. 

// Without running the code, predict the result. Try taking out the curly braces
// to see if you get a different result. What happens if we remove keyword let?
let hungry = false;

function sayHungry() {
  {let hungry = true;}
  if (hungry) {
    console.log("I'm hungry!")
  } else {
    console.log("I'm coding!")
  }
}
sayHungry();
console.log("Value of hungry:", hungry)

//const
// const shares scoping properties with let, meaning that it is block scoped. 
// Unlike let, anything declared with const _cannot_ be reassigned. 
function windRunners() {
    const captain = "kaladin"
    captain = "moash" //can't do, moash will never be captain of the windrunners
    if (true) {
      const captain = "sigzil" //even the best captains needs a break, sigzil can fill in
      console.log(captain)
    }
    console.log(captain)
  }
  
  windRunners();
  
  
  //var
  // function windRunners() {
  //   var captain = "kaladin"
  //   var captain = "moash"
  //   if (true) {
  //     var captain = "sigzil"
  //     console.log(captain)
  //   }
  //   console.log(captain)
  // }
  
  // windRunners();