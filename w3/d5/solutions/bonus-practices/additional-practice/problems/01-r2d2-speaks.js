/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.
    
    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
    //!!START
    // Base case: check if array is empty then return 
    if (code.length === 0) {
        return
    }
    // Recursive step: Get the first element in the array maybe use Array#slice or Array#pop or Array#shift, or destructing the array
    let firstElement = code.shift()
    // Check if first element is a 0 or 1
    if (firstElement === 0) {
        // print beep and use a setTimeout of 400ms
        console.log('beep')
        setTimeout(function () { r2d2Speaks(code) }, 400)
    } else {
        // print boop and use a setTimeout of 800ms
        console.log('boop')
        setTimeout(function () { r2d2Speaks(code) }, 800)
    }
    //!!END
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}

