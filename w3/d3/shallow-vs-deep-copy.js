//shallow vs deep copy
const avenger = {
  name: "Thor",
  alias: "God of Thunder",
  team: "The Avengers",
  powers: [
    "Superhuman strength",
    "Durability",
    "Flight",
    "Electric manipulation",
  ],
  weapon: "Mjolnir",
  abilities: {
    lightning: true,
    superStrength: true,
    flight: true,
    weatherManipulation: true,
    immortality: false,
  },
};

console.log("original copy: ", avenger); //avenger -> <ref1>

// were gonna make a copy
// we will point another variable at the same reference in memory
let avenger2 = avenger; //two reference pointing at the same variable
//avenger2 -> <ref1>

//compare references
//are they the same reference?
console.log("copy vs og", avenger2 === avenger); //true - same reference in memory
//<ref1> === <ref1>

//reminder when comparing objects, we are comparing references, tho they may look the same they are not. Observe.
const fakeAvenger = {
  name: "Thor",
  alias: "God of Thunder",
  team: "The Avengers",
  powers: [
    "Superhuman strength",
    "Durability",
    "Flight",
    "Electric manipulation",
  ],
  weapon: "Mjolnir",
  abilities: {
    lightning: true,
    superStrength: true,
    flight: true,
    weatherManipulation: true,
    immortality: false,
  },
};

//fakeAvenger -> <ref2>
//is the fake avenger the same reference as the avenger?
//no - not the same reference in memory
console.log("fake vs og", fakeAvenger === avenger); //false
//<ref1> === <ref2> false

//need to get some terms out the way
//shallow copy - a shallow copy is a new object/array that is created to reference the same elements as an existing object/array. However with a shallow copy, if the object/array contains nested objects/arrays, a shallow copy will keep a reference to the old objects/array
//observe

//ways to create shallow copy
//.slice()
//spread - [...arr] - easiest way

let shallowAvenger = { ...avenger };
//shallow avenger -> <ref3>

// console.log(shallowAvenger);//contains same key:values

//is the shallow avenger the same reference as the avenger?
//no - a shallow copy was made with spread
console.log("shallow vs og", shallowAvenger === avenger); //false
//<ref1> === <ref2> false

//but a shallow copy will keep a reference to any nested object/arrays
//observe
//we know these are not the same references when we compared them
console.log("shallow vs og", shallowAvenger === avenger); //false
//however it is only a SHALLOW COPY
//lets demonstrate what a shallow copy is

//comparing a nested arrays reference
console.log(shallowAvenger.powers === avenger.powers); //true
//<ref1:[ <refA>, <refB> ]> === <ref3:[ <refA>, <refB> ]>
//          ^        ^                    ^       ^
//        powers            ===         powers
//                  same nested reference

//comparing a nested objects reference
console.log(shallowAvenger.abilities === avenger.abilities); //true

//how do we fix this?
//how do create an entirely new copy
//We can create a deep copy
//what is a deep copy?
//a deep copy

let deepAvenger = JSON.parse(JSON.stringify(avenger));

//lets check if the deepAvenger is a copy one level deep
console.log(deepAvenger === avenger); //false

//lets check two deep
console.log(deepAvenger.powers === avenger.powers); //false
//notice it is no longer the same reference in memory
//<ref1:[ <refA>, <refB> ]> === <ref3:[ <refC>, <refD> ]>
//          ^        ^                    ^       ^
//        powers            ===         powers
//              different nested reference

