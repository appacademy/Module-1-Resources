let peeps = ['kafele', 'cindy', 'jon', 'paloma'];

//This is how we've been using map
let newPeeps = peeps.map(function (el) {
    return el.toUpperCase() + '!!!!';
});

console.log(newPeeps);

//Now we're going to make our own
let myMap = function (array, cb) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        let res = cb(el, i, array);
        newArray.push(res);
    }

    return newArray;
};

let upper = function (el) {
    return el.toUpperCase() + '!!!!';
};

let newPeeps2 = myMap(peeps, upper);

console.log(newPeeps2);

let upperCaseFunc = function (el) {
    return el.toUpperCase() + '!!!!';
};

let newPeeps3 = myMap(peeps, upperCaseFunc);
