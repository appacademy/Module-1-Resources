




let arr = [1, 1, 3, 2, 2, 1];
let tracker = 0;
const result = arr.reduce(function(obj, key) {
  tracker++;
  console.log(` Iteration ${tracker} current num: ${key}`, 'obj/acc:', obj );
  if (obj[key]) {
    obj[key]++;
  } else {
    obj[key] = 1;
  }
  return obj;
},{});


console.log(result);
let obj2 = {};
obj2[1] = 1;
console.log(obj2);
obj2[1]++
console.log(obj2);
