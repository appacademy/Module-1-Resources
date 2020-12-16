// The `filter` method takes in a callback, and returns only the elements 
//      from the original array where the callback evaluated to true.

let veggies = ['lettuce', 'celery', 'cabbage', 'watercress'];

let result = veggies.filter( function(ele) {
    return ele.includes('a');
})

console.log(result);



let myFilter = function(array, cb) {
    let selectedItems = [];
    for (let i = 0; i < array.length; i++) {
        /* your code here */        
    }
    
    return selectedItems;
};

let result2 = myFilter(veggies, function(ele) {
    return ele.includes('a');
}); 

console.log(result2);