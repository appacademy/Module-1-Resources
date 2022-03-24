// Fat Arrows

// let names = ["Bilbo", "Elrond", "Eomer", "Faramir", "Eowyn"];

// let eNames1 = function (names) {
//   return names.filter(function (name) {
//     return name[0] === 'E';
//   });
// };

// let eNames2 = names => {
//   return names.filter(name => {
//     return name[0] === 'E';
//   });
// };

// let eNames3 = names => names.filter(name => name[0] === "E");

// console.log(eNames1(names));
// console.log(eNames2(names));
// console.log(eNames3(names));


// Scope

// Global Scope
// let gondor = "Minas Tirith";

// let middleEarthCities = rohan => {
//   let shire = "Hobbiton";
  
//   if (true) {
//     let mordor = "Minas Morgul";
    
//     for (let i = 0; i < 2; i++) {
      
//     }
//   }
// }

// middleEarthCities("Helms Deep");
// console.log(gondor);


// Scope Chaining
// var myPrecious = false;

// let isMyPrecious = () => {
//   let myPrecious = true;

//   if (myPrecious) console.log("Gollum");
//   else console.log("Tom Bombadil");
// }

// isMyPrecious()


// const
// const constScope = () => {
//   const king = ["Theoden"];
//   king.push("Sam");

//   if (true) {
//     const king = "Aragorn";
//     console.log(king);
//   }

//   console.log(king);
// }
// constScope()


// // Var

// const varScope = () => {
//   console.log(king);
//   var king = "Theoden";
//   var king = "Sam";

//   if (true) {
//     // var king = "Aragorn";
//     console.log(king);
//   }

// }

// varScope();


/* 
We are at the battle of Helms Deep. It seems as if Gimli and Legolas
are having some type of challenge to see who has "beaten" more Uruk-hai.

I want to create a function that can say who beat the Uruk-hai, how 
they "beat" the Uruk-hai and how many they have "beaten" up until 
that point. 
*/

const urukHaiBeater = name => {
  let count = 0;

  return tool => {
    count++;
    console.log(name + " beat number " + count  + " Uruk-hai with " + tool);
  };
};

const legolas = urukHaiBeater("Legolas"); // anonymous function
const gimli = urukHaiBeater("Gimli");
// console.log(legolas === gimli); // false

legolas("Arrow");
// legolas("Arrow");
// gimli("Axe");
// legolas("Sword");
// gimli("Axe");
// legolas("Some Super Dope Looking Move");
// gimli("Dumb Luck");
