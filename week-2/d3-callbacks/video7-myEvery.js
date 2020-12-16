let veggies = ['lettuce', 'celery', 'cabbage', 'watercress'];

// Does `every` ele in veggies array have an `e` ?
let result = veggies.every( function(ele) {
    return ele.includes('e');
})

console.log(result);



function myEvery(array, cb) {
    for (let i = 0; i < array.length; i++) {
        /* your code here*/        
    }
    return true;
}

let result2 = myEvery(veggies, containsA);

console.log(result2);