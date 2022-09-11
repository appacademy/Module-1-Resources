let arr = [1, 1, 3, 2, 2, 1]; // establish array

const result = arr.reduce(function(acc, num) { // calling reduce, and supply anonymous function as arg, as well as 
                                                // default acccumulator value
  console.log("acc", acc)
  console.log("num", num)
  if (acc[num]) { // attempt to key into our acc at value, and if we get something truthy 
    acc[num] = acc[num] + 1; // increment the associated value
  } else {
    acc[num] = 1; // else, establish that key with a value of 1
  }
   return acc; // return acc so it persists into next iteration
}, {});

console.log(result)