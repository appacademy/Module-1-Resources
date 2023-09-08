/* GUIDED PRACTICE */

/* 1. Declare a function:
- with no parameters
- with multiple parameters */
function noParamaters(){}

function multiParams(param1, param2, param3) {}

/* 2. Declare a function that:
- returns a value
- logs a value to the console */
// let string = value
function returnValue(string){
 console.log(string)
 return string
}



/* 3. Invoke each of the functions declared above. */
noParamaters()
multiParams('arg1','arg2','arg3')
console.log(returnValue('value'))
/* 4. Create a variable that stores the return value of an invoked function. */

let result = returnValue('apple');
console.log(result)


/* 5. Create a function that compares booleans. */
function compareBooleans(bool1, bool2){
	console.log(bool1, bool2);
  	return bool1 || bool2
}
console.log(compareBooleans(true, false));// true


/* 6. Create a function that completes a math operation. */
function math (nums, nums2, nums3) {
	return nums + nums2 * nums3
};
console.log(math(1,2,3))


/* 7. Create a function that returns a sentence when given multiple parameters (such as a noun, a verb, and an adjective). */
function favBook(noun, verb, book) {
return console.log(noun + " " + verb + " " + book);

};

console.log(favBook("I", "love", "pride and prejudice"));

let res2 = favBook("I", "love", "pride and prejudice")
console.log(res2)
