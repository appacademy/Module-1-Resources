/* 4. Create a variable that stores the return value of an invoked function. */
function multiply(num1, num2){
  return num1 * num2;
 }

 // console.log(multiply(10, 12));//120

 let returnOfMultply = multiply(10, 12)
 console.log(returnOfMultply);//stored return value in a variable

 /* 5. Create a function that compares booleans. */
 function comparesBooleans(bool1, bool2){

     return bool1 || !bool2

 }

 console.log(comparesBooleans(true, false))

 /* 6. Create a function that completes a math operation. */



 /* 7. Create a function that returns a sentence when given multiple parameters (such as a noun, a verb, and an adjective). */
 function createSentence(noun, adj, verb) {
   let sentence = 'The ' + adj + ' ' + noun + ' likes to ' + verb;
   return sentence;
 }

 console.log(createSentence('horse','crazy','dance'))
