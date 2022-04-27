// A closure is created when a higher order function (a parent or outer 
// function) returns a lower order function. This lower order function still has
// access to the higher order functions variables and parameters. The returned 
// function can be understood to have three scopes: 
// Local Scope
//    - the scope of the function being returned
//    - this includes any parameters for this function or variables declared 
//      inside of it
// Outer Functions Scope
//    - Everything the outer function was scoped into, including such as its
//      variables and parameters
// Global Scope
//    - Anything that exists in the global scope will be accessible by the 
//      returned function.


// Let's see it in practice.

// Here we have a function that accepts a parameter, and returns a function that
// accepts a name. 
function buttonMaker(color) {
    let count = 0
    function pushTheButton(name) {
      count++
      console.log(name + " pushed the " + color + " button. It has now been pushed " + count + " times")
    }
    return pushTheButton
  }
  // Notice the count variable, we'll see it come into play.

  // We invoke our buttonMaker function, storing the return value in the 
  // redButton variable. 
  const redButton = buttonMaker("red")

  // And again, this time in green.
  const greenButton = buttonMaker("green")
  // remember, the return value of our button maker is a function, and that
  // function accepts a name as an argument. Let's see what happens when we 
  // invoke:

  redButton("Bill")
  redButton("Bill")
  greenButton("Jojo")
  redButton("Cam")
  greenButton("Peter")
  redButton("Cody")
  redButton("David")
  redButton("Bill")
  greenButton("Peter")
  redButton("David")
  greenButton("Cam")
  greenButton("Jojo")
  

// Here's a much more complicated example: 
  function darkSouls(name) {
    const deaths = {total : 0}
    return function (boss) {
      if (deaths[boss]) deaths[boss]++
      else deaths[boss] = 1
      deaths.total++
      console.log("You Have Died. ", name, " has died", deaths.total, "times")
      for (let boss in deaths) {
        if (boss !== "total") console.log(boss, "has killed you", deaths[boss], "time(s)")
      }
    }
  }
// Let's think about what this code is doing for a bit.
// What have we created a closure around?
// What does our return function take as an argument? And what do we do with it?

  
  
  const currentRun = darkSouls("Rill Padilpa")
  
  currentRun("Capra Demon")
  currentRun("Capra Demon")
  currentRun("Capra Demon")
  currentRun("Gaping Dragon")
  currentRun("Moonlight Butterfly")
  currentRun("Quelaag")
  currentRun("Quelaag")
  currentRun("Quelaag")
  currentRun("Quelaag")
  currentRun("Quelaag")
  currentRun("Quelaag")
  currentRun("Ornstein")
  currentRun("Smough")
  currentRun("Ornstein")
  currentRun("Smough")
  currentRun("Ornstein")
  currentRun("Smough")
  currentRun("Ornstein")
  currentRun("Smough")
  currentRun("Ornstein")
  currentRun("Smough")
  currentRun("Seath")
  currentRun("Seath")
  currentRun("Seath")
  currentRun("Seath")
  currentRun("Nito")
  currentRun("Nito")
  currentRun("Nito")
  currentRun("Nito")
  currentRun("Nito")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")
  currentRun("Gwyn")