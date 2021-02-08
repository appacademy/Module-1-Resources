/* 
Instructions:
  Next to each invocation of the ifElsePrint Function
  write what will print to the console
*/

function ifElsePrint(num) {
    if (num <= 0) {
        console.log('banana');
    } else if (num <= 5) {
        console.log('apple');
    } else if (num <= 9) {
        console.log('pear');
    } else {
        console.log('durian');
    }

    if (num === 10) {
        console.log('YUM');
    }
}

// Code below this line
ifElsePrint(1); // prints:
ifElsePrint(0); // prints:
ifElsePrint(10); // prints:
ifElsePrint(6); // prints:
ifElsePrint('Pear'); // prints:
ifElsePrint(); // prints:
ifElsePrint(-1); // prints:
