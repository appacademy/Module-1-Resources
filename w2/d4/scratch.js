// Scope

// Types of Scope

// let gondor = "Minas Tirith"; // global scope

// function middleEarthCities (rohan) { // function scope
//     let shire = "Hobbiton"; // function scope 

    
//     if (true) {
//         let mordor = "Minas Morgul"; // block scope
        
//         for (let i = 0; i < 2; i++) { // i is block scope
//             // let mordor = "Hello"
//             console.log(gondor, rohan, shire, mordor, i); // move around to demo scope
//         };
//     };
// };

// middleEarthCities("Helms Deep");


// Scope Chaining
// let myPrecious = false;

// function isMyPrecious() {
//     let myPrecious = true;

//     if (true) {
//         myPrecious = "O MY GOD"
//         console.log("My Precious!");
//         console.log(myPrecious)
//     } else {
//         console.log("I am Tom Bombadil");
//     }
// };

// isMyPrecious()
// console.log(myPrecious);


// Const
// function constScope() {
//     const king = "Theoden";
//     // king = "Sam"; // Sam is not a king, so this won't work - can't reassign
//     if (true) {
//         const king = "Aragorn";
//         console.log(king);
//     };
//     console.log(king);
// };

// constScope();

// function varScope() {
//     var king = "Theoden";
//     var king = "Sam";
//     console.log(king)
//     if (true) {
//         var king = "Aragorn";
//         console.log(king);
//     }
//     console.log(king);
// };

// varScope();

// Mutable
// const arr = [1,2,3];
// arr.push(4);
// arr.push(5);

// console.log(arr);

// const obj = {};
// obj.name = "Jeff";

// console.log(obj);



// Fat Arrow Functions
// const names = ['Bilbo', 'Elrond', 'Eomer', 'Eowyn', 'Faramir'];

// const eNames1 = function (names) {
//     return names.filter(function (name) {
//         return name[0] === 'E';
//     });
// };

// const eNames2 = names => {
//     return names.filter(name => {
//         return name[0] === 'E';
//     });
// };

// const eNames3 = names => names.filter(name => name[0] === 'E');

// console.log(eNames1(names));
// console.log(eNames2(names));
// console.log(eNames3(names));


// Closures
/* 
We are at the battle of Helms Deep. It seems as if Gimli and Legolas
are having some type of challenge to see who has "beaten" more Uruk-hai.

I want to create a function that can say who beat the Uruk-hai, how 
they "beat" the Uruk-hai and how many they have "beaten" up until 
that point. 
*/

const urkuHaiBeater = name => {
    let count = 0;
    return function (tool) {
        count++;
        console.log(name + " beat number " + count + " Uruk-hai with " + tool);
    };
};

const legolas = urkuHaiBeater("Legolas");
const gimli = urkuHaiBeater("Gimli");

console.log(legolas);
console.log(legolas === gimli);

legolas("Arrow");
legolas("Arrow");
gimli("Axe");
legolas("Sword");
gimli("Axe");
legolas("Some really cool looking move that wouldnt happen in real life");
gimli("Pure Dumb Luck")
