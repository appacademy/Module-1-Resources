let nums = [3, 7, 5, 9];

let sum = nums.reduce(function (accum, num) {
  return accum + num;
});

console.log(sum);

let sumAt100 = nums.reduce(function (accum, num) {
  return accum + num;
}, 100);

console.log(sumAt100);

let mult = nums.reduce(function (accum, num) {
  return accum * num;
});

console.log(mult);

let max = nums.reduce(function (accum, num) {
  if (num > accum) {
    return num;
  } else {
    return accum;
  }
});

console.log(max);
