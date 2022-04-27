// IIFE - Immediately Invoked Function Expressions

// IIFEs provide us with a way to immediately execute some complex code and
// keep our global namespace clean. 

/*
  1. Declare a function
  2. Use immediately after
  3. Never going to use the function again
*/

var choice = (() => {
    var colors = ["red","orange","yellow","green","blue","indigo","violet"]
    var color = colors[Math.floor(Math.random() * 100) % colors.length]
    console.log("the color is:", color)
    return color
  })();

console.log("It really is", choice)

// The above function defines an array of colors, chooses one at random, logs
// that color, and then JavaScript immediately forgets about any of it. This
// lets us be sure of a few things: 
// -- Our colors array _only_ exists during the run of our function
// -- We don't have to worry about our constants causing namespace issues
// -- Once we have our color, we can count on JS freeing up its resources to
//    be used elsewhere

// IIFEs were more common prior to let and const, however you still may see them
// used when looking at extant code bases. They provided developers a means of
// being sure that anything declared with var was no longer accessible in the
// global namespace. var did not provide a means of protected scope, however the
// more modern let and const have protected scope built in to how they function.
// As we progress in our development careers, we may find more compelling ways
// for using this syntax (perhaps with asynchronous code), but by and large let 
// and const have given us means of circumventing this need. 