function sundaeOrder() {
  // your code here
let start = ['A bowl of ice cream with hot fudge'];

return function (topping) {
    // your code here
  start.push('and ' + topping);
  return start.join(' ');
};
};

function sundaeOrder() {
  // your code here
let start = ['hot fudge'];

return function (topping) {
  start.push(topping)
  let bowl = 'A bowl of ice cream with '
  return bowl + start.join(' and ');
};
};


let triple = n => n2 => n3 => n + n2 + n3;
console.log(triple(3)(4)(2))


function sundaeOrder() {
  // your code here
let sundae = 'A bowl of ice cream with hot fudge';

return function(topping){
   sundae +=  " and " + topping;

  return sundae;
}
};

let sundae = sundaeOrder(); // => returns a function
console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"
