// Scope

// let gondor = "Minas Tirith";

// console.log(gondor);
// function middleEarthCities (rohan) {
//   let shire = "Hobbiton";
  
//   if (true) {
//     let mordor = "Minas Morgul";
    
//     for (let i = 0; i < 2; i++) {
//     }
//   }
// }

// middleEarthCities("Helms Deep");


// // Scope Chaining
// let myPrecious = false;

// function isMyPrecious() {
//   let myPrecious = true;

//   if (myPrecious) console.log("Gollum")
//   else console.log("Tom Bombadil")
// }

// isMyPrecious();


// Const
// const jeff = "Jeff";
// jeff = "Matt" // CANNOT REASSIGN CONST VARIABLES

// function constScope () {
//   const king = "Theoden";
//   // const king = "Sam"; // CANNOT REDECLARE

//   if (true) {
//     const king = "Aragorn";
//     console.log(king);
//   }

//   console.log(king);
// }

// constScope();


// function varScope() {
//   var king = "Theoden";
//   var king = "Sam";

//   if (true) {
//     // var king = "Aragorn";
//     console.log(king);
//   }

//   console.log(king);
// }

// varScope();


// Var is function scoped, while let and const are block scoped
// Can redeclare Var, cant with let and const
// cannot reassign with const - but can mutate



// Fat Arrow Functions
// const names = ["Elrond", "Bilbo", "Eomer", "Faramir", "Eowyn"];

// const eNames1 = function (names) {
//   return names.filter(function (name) {
//     return name[0] === 'E';
//   });
// };

// const eNames2 = names => {
//   return names.filter(name => {
//     return name[0] === 'E';
//   });
// };

// const eNames3 = names => names.filter(name => name[0] === "E");

// console.log(eNames1(names));
// console.log(eNames2(names));
// console.log(eNames3(names));


// Closure
function bankAccount (name, balance) {
  return (transactionType, amount) => {
    if (transactionType.toLowerCase() === "withdraw") balance -= amount;
    else if (transactionType.toLowerCase() === "deposit") balance += amount;
    else console.log("You did not choose a valid transaction type.")

    console.log(name + "'s balance is: $" + balance);
  }
}

const jeff = bankAccount("Jeff", 1000);
// console.log(jeff); // Function (anonymous)

const caleb = bankAccount("Caleb", 20);

// console.log(jeff === caleb);

jeff("deposit", 100);
jeff("withdraw", 500);

caleb("deposit", 1300);
caleb("withdraw", 1100);



