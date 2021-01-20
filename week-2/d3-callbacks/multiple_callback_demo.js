let greaterResult = function (num, cb1, cb2) {
    let res1 = cb1(num)
    let res2 = cb2(num)

    if (res1 > res2){
      return cb1(num)
    }else{
      return cb2(num)
    }
}


let doubler = function (n) {
  return n * 2;
}

let squarer = function (n) {
  return n * n;
}

console.log(greaterResult(5, doubler, squarer));
console.log(greaterResult(1, doubler, squarer));

