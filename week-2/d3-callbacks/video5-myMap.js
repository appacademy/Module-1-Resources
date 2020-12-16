let peeps = ['kafele', 'cindy', 'jon', 'paloma'];

let newPeeps = peeps.map( function(el) {
    return el.toUpperCase() + '!!!!'
})

console.log(newPeeps);



let myMap = function(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        /** your code here */
    }
    return newArray;
}

let newPeeps2 = myMap( peeps, function(el) {
    return el.toUpperCase() + '!!!!'
});

console.log(newPeeps2);

let res = myMap([2, 4, 6], function(el) { return 2 * el });