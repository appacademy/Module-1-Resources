// Conditionals
// Conditional statements will act as control for the flow of our apps and
// functions. The basic structure of a conditional statement looks like:
// if (condition or comparison){
//   <run this code>    
// } else if (other condition or comparison) {
//   <run this code> 
// } else {
//   <do this code if none of the conditions are met>
// }
// Let's write a few in practice

let number = 5;


if (number > 5) { // check to see if our number is greater than 5
  console.log("The num is greater than 5");
} else if (number < 5) { // check to see if our number is less than 5
  console.log("The num is less than 5");
} else { // if neither of the above are true, our number must be 5
  console.log("It's 5");
}

let pet = 'cat'

if (pet === 'dog'){
    console.log("This pet is a dog!")
} else if (pet === 'cat') {
    console.log("This pet is a cat!")
} else {
    console.log("All I know for sure is that it's neither a dog nor a cat")
}
