let peeps = ['kafele', 'cindy', 'jon', 'paloma'];

//This is how we have been using forEach
peeps.forEach(function (el, i, array) {
    console.log(el + 'is at idx ' + i);
    console.log(array);
});

//Now we are going to create our own forEach
let myForEach = function (array, cb) {
    /** your code here */
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        cb(el, i, array);
    }
};

myForEach(peeps, function (el, i) {
    console.log(el + 'is at idx ' + i);
});

let func = function (el, i) {
    console.log(el + 'is at idx ' + i);
};

myForEach(peeps, func);
