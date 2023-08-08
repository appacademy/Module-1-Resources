/*

Loops Demo
    Loops provide a way to repeat behavior a set number of times. We can use
    that behavior to progress through data structures and take a look at individual elements.
    Loops contain 3 main elements:
        1. Initial Expression (Starting point)
        2. Expression for which we keep looping (Ending point)
        3. Step toward completing the loop (Path to get to ending point)

    2 Types of Loops:
        1. For Loops
        2. While Loops


*/

// While loops will execute WHILE their condition is true. You'll want to make
// sure the expression steps your loop towards completion. This should be
// embedded within the loop.

// Components of a while loop
// let i = 0; // a condition where to start
// // while this condition is true, execute the code within the block
// while (i <= 5) {
//     console.log(i); // print the values to the console
//     // is inside the while loop - Step towards completion
//     i++ // i += 1 || i = i + 1
// };

// Components of a for loop
// Do I need the let keyword??????
// for(let i = 0; i <= 5; i -= 2){
//     console.log(i);
// };

// iterate through a word
function iterateThroughWord(word) {
    // we want to start at the first index => 0
    // iterate up to the word.length
        // technically were saying while i < length
    // increment in steps of 1

    // for (let i = 0; i <= word.length - 1; i++) {
    //     // console.log('index', i);
    //     // console.log('letter', word[i]);
    //     let letter = word[i];
    //     console.log('letter variable', letter)
    // }
    let i = 0;
    while (i < word.length) {
        console.log('index', i);
        console.log('letter', word[i]);
        let letter = word[i];
        console.log('letter variable', letter);
        i++;
    }
}

// iterateThroughWord('banana')

function evenLogger(number) {
    let i = 0;
    while (i <= number) {
        if (i % 2 === 0) {
            console.log(i);
        };
        i++;
    }
}

// evenLogger(10)

// these variables can be anything
// as long as you know what the variables evaluate to

function characterLogger(string) {
    let end = string.length;
    for (let start = 0; start < end; start++) {
        console.log(string[start]);
    };
};

// characterLogger('brandon');

// iterate backwards
function reverseName(name) {
    //create a tracking variable
    let newName = '';
    //starting point => name.length - 1
    //ending point => 0
    //path to the end => i--
    for (let i = name.length - 1; i >= 0; i--) {
        let letter = name[i];
        newName += letter; // could also use .concat()
    }

    return newName;
}

// console.log(reverseName('trevor'));