let peeps = ['kafele', 'cindy', 'jon', 'paloma'];

peeps.forEach( function(el, i, array) {
    console.log(el + 'is at idx ' + i);
    console.log(array);
})

let myForEach = function (array, cb) {
    /** your code here */
}

myForEach( peeps, function(el, i) { 
        console.log(el + 'is at idx ' + i)
    });     