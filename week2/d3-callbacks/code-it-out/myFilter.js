// The `filter` method takes in a callback, and returns only the elements 
//      from the original array where the callback evaluated to true.

//
let veggies = ['lettuce', 'celery', 'cabbage', 'watercress'];

//This is how we've been using map
let result = veggies.filter( function(ele) {
    return ele.includes('a');
})

console.log(result);


//Now we're going to make our own
let myFilter = function(array, cb) {
    let selectedItems = [];
    for (let i = 0; i < array.length; i++) {
        if(cb(el,inde,array) === true){
            selectedItems.push(el);
        }
    }
    
    return selectedItems;
};

let result2 = myFilter(veggies, function(ele) {
    return ele.includes('a');
}); 

func = function(ele) {
    return ele.includes('a');
}

let result2 = myFilter(veggies, func);