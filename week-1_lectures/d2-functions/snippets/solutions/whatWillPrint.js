/* 
Instructions:
Next to each function call write what you 
think will print to the console.

Some function calls may not print anything, you can leave
those blank
*/

function printAString(str) {
    console.log(str);
}

function aString(str) {
    return str;
}

// Code below this line
/************************************************/

console.log('Problem 1');
printAString('coffee'); // prints: 'coffee'

/************************************************/

console.log('Problem 2');
aString('bananas'); // prints:

/************************************************/

console.log('Problem 3');
console.log(aString('milk')); // prints: "milk"

/************************************************/

console.log('Problem 4');
console.log(aString()); // prints: undefined

/************************************************/

console.log('Problem 5');
printAString; /* prints: 
    printAString(str) {
        console.log(str);
    }
*************************************************/
