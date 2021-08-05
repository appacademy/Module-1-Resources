// 1. Stored in a variable

let func = function() {
    console.log('I am stored in a variable');
};

func();


// 2. Pass as an argument to a function

let higherOrderFunction = function(jeff) {
    jeff();
};

let intoAFunction = function() {
    console.log('I am being passed into a func');
};

higherOrderFunction(intoAFunction);

// 3. Returned from a function
function HOF () {
    return function() {
        console.log('I am being returned from a function');
    };
};

HOF()();




let people = ['Jeff', 'Thanh', 'Mylo', 'Drew', 'Schuler', 'Bill', 'Adam'];

// Regular For Each Loop
people.forEach(function (el, i, arr) {
    console.log(el + ' is at idx ' + i);
    console.log(arr)
});

// Custom For Each Loop
let myForEach = function(arr, cb) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let el = arr[i];
        cb(el, i, arr);
    };
};

let func = function(el, i, arr) {
    console.log(el + ' is at idx ' + i)
    // console.log(arr)
};

myForEach(people, func)