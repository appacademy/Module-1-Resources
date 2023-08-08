/* 4. Create a variable that stores the return value of an invoked function. */
function myFunc() {
  let value = 122323
  return value;
 }

 // function call
 myFunc();
 console.log('the return value of myFunc is: ', myFunc());// value
 // storing return value of a function in a variable: result
 let result = myFunc();
 console.log('the result variable: ', result);


 /* 5. Create a function that compares booleans. */
 function checkBoolean(bool1, bool2) {
   console.log(bool1, bool2);
   return bool1 || bool2;
 };

 console.log('return value of checkBoolean: ', checkBoolean(true, false));

/* 7. Create a function that returns a sentence when given multiple parameters (such as a noun, a verb, and an adjective). */

// using + concat - Bixby
 function sentence(noun, verb, location) {
  console.log(noun, verb, location);// use console.logs to confirm your data!
   return "I had " + noun + " " + verb + " to the " + location
 };


 console.log(sentence("Jill", "run", "bank"));

 // Using template literal - Siamak
 function sentence (adjective,noun,verb){
   return `${adjective} ${noun} is ${verb}`


 }
 console.log(sentence("bad","weather", "damading"));

 // using rest + join - Ava
 function multipleStrings(...words) {
  return words.join(' ')
}

console.log(multipleStrings("Where", "do", "we go", `from here?`))
