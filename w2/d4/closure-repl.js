function sundaeOrder() {
  // your code here
//   let sundae = "A bowl of ice cream with hot fudge";

//   return function (topping) {
//       // your code here
// 	sundae += ' and ' + topping;
//     return sundae;
//   };
 let arr = ["A bowl of ice cream with hot fudge"];

 return function(topping){
  arr.push(' and '+ topping);
  return arr.join('');

 };
};

let sundae = sundaeOrder(); // => returns a function
console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana";
