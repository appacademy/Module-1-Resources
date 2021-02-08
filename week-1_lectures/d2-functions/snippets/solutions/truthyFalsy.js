/* 
Instructions:
Level up! 
Next to each invocation of the ifElsePrint Function
write what will print to the console
*/

function truthyFalsy(condition) {
    if (condition) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Code below this line
truthyFalsy(0); // prints: false
truthyFalsy(-1); // prints: true
truthyFalsy(100); // prints: true
truthyFalsy(NaN); // prints: false
truthyFalsy('false'); // prints: true
truthyFalsy(null); // prints: false
truthyFalsy(''); // prints: false
truthyFalsy(false); // prints: false
