/*
1. Declare a function
2. Use immediately after
3. Never going to use the function again.
*/

var colors = [];

var choice = (()=> {
  var colors = ['red','orange','yellow','green','blue','indigo','violet']
  var color = colors[Math.floor(Math.random() * 100) % colors.length]
  console.log('the color is:', color)
  return color
})()

console.log("wow it really is", choice)
console.log(colors)