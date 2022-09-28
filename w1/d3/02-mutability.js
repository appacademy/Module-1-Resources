// Mutability
// Mutability is the concept of certain pieces of data being able to changed or 
// mutated. Of the datatypes that we've seen so far, only arrays are mutable

let nums = [1, 2, 3];
console.log(nums);
nums[1] = 5;
console.log(nums);
// We're able to modify or mutate the array by keying into its index and
// altering what's there.

// Everything else we've seen so far are immutable data types. Strings will at 
// first feel as if they should obey the same rules as arrays, however, strings
// are immutable in JavaScript and will not behave like arrays. Consider:

let name1 = "Biff";
console.log(name1);
name1[2] = "l"
name1[3] = "l"; // This will not work
console.log(name1);
// We can see by the console.log statement that we're unable to mutate or change
// individual characters in our string. Instead, we'll have to reassign our
// variable to a new string in order to see the change.


let name2 = "Biff"; // Must reassign to change
console.log(name2);
name2 = "Bill"
console.log(name2);
// The final console.log statement shows that our variable has been reassigned 
// and now holds the data that we expect.

// Later on we'll explore some more advanced ways of achieving this behavior
// programmatically. 