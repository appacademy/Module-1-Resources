// let car = "vroom";

// console.log(cow);
// let makeSounds = function(dog) {
//   let cow = "moo";

//   if (true) {
//     let turkey = "gobble";

//     for (let i = 0; i < 2; i++) {
//     }
//   }
// }

// makeSounds("woof");


// let hungry = false;


// function sayHungry() {
//   // let hungry = true;
//   if (hungry) console.log("Im hungry")
//   else console.log("Im busy coding")
// }

// sayHungry()
// hungry = true
// console.log(hungry)


// function blockScope() {
//   const test = "upper scope";

//   if (true) {
//     const test = "lower scope";
//     console.log(test);
//   }

//   console.log(test);
// }

// blockScope()

// function varScope() {
//   // var test;
//   console.log(test)
//   // var test = "upper scope";
//   // var test = "whoops";

//   if (true) {
//     var test = "lower scope"
//     console.log(test);
//   }
//   console.log(test);
// }

// varScope()

// let joon = "Joon";
// console.log(joon)




// Fat arrows
// const arrSum = function(arr) {
//   return arr.reduce(function (sum, num) {
//     return sum + num;
//   });
// };

// const arrSum = arr => {
//   return arr.reduce((sum, num) => {
//     return sum + num;
//   });
// };

// const arrSum = arr => arr.reduce((sum, num) => sum + num);


// console.log(arrSum([1,2,3]));



// Closure

const bankAccount = (name, balance) => {
  return (transactionType, amount) => {
    if (transactionType.toLowerCase() === "withdraw") balance -= amount
    else if (transactionType.toLowerCase() === "deposit") balance += amount
    else console.log("You did not choose a valid transaction type.");

    console.log(name + "'s balance is: $" + balance);
  };
};

const jeff = bankAccount("Jeff", 9000);
console.log(jeff)
const brad = bankAccount("Brad", 9000);
const caleb = bankAccount("Caleb", 100);

// console.log(brad === jeff)

jeff("deposit", 1000);
brad("withdraw", 1000);
caleb("deposit", 15000);

jeff("withdraw", 500);
brad("deposit", 0);