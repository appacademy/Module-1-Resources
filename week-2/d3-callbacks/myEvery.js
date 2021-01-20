let veggies = ['lettuce', 'celery', 'cabbage', 'watercress'];

// Does `every` ele in veggies array have an `e` ?
let result = veggies.every( function(ele) {
    return ele.includes('e');
})

console.log(result);

function myEvery(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i]) === false){
            return false
        }
    }
    return true;
}

let result2 = myEvery(veggies, function containsA(ele) {
    return ele.includes("a");
});

function containsA(ele) {
    return ele.includes("a");
}

let result2 = myEvery(veggies, containsA);