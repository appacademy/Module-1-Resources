// // // function outer(){

// // //     function inner(arg){
// // //         console.log(arg)
// // //     }

// // //     return inner 
// // // }
// // // let result = outer("Hello!")
// // // console.log(result)
// // // result("Inner Arg!")
// // // let result2 = outer("Different stuff!")
// // // result2("Is it the same?")

// // function treeMaker() {
// //     let trees = [];

// //     function addTree(tree) {
// //         trees.push(tree);
// //         return trees;
// //     }

// //     return addTree; // remember, we are returning a function here
// // }

// // const treeFunc = treeMaker();
// // console.log(treeFunc);
// // console.log(treeFunc('Pine'));
// // console.log(treeFunc('Fir'));
// // console.log(treeFunc('Maple'));
// // const treeFunc2 = treeMaker();
// // console.log(treeFunc2("Alder"))
// // console.log(treeFunc('Maple'));

// // function parrotFunc(){

// //     console.log(parrot);
// //     var parrot = "Hello!";
// //     console.log(parrot)
// // }

// // parrotFunc()

// function dogParty() {
//     var dog = "Rupert";

//     if (true) {
//         var dog = "Fluffy";
//         {
//             var dog = "Spot"
//             {
//                 var dog = "Rover";
//                 {
//                     var dog = "Luke"
//                     {
//                         var dog = "Jack"
//                         // console.log(dog)
//                     }
//                 }
//             }
//         };
//         // return dog
//     }

//     return dog;
// }

// console.log(dogParty()); // ???

function sundaeOrder() {
    // your code here
  let toppings = ["hot fudge"] 
  return function (topping) {
      // your code here
      toppings.push(topping)
	  let bowl = "A bowl of ice cream with "
      return bowl + toppings.join(" and ")
  };
}

let sundae = sundaeOrder(); // => returns a function
console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"

console.log(sundae("strawberries"))