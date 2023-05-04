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

// console.log('og avenger',avenger);
// avenger -> <ref1>
//we have the avenger variable pointing at ref1 in memory

// were gonna make a copy
// pointing another variable at the same reference
let avenger2 = avenger;
// avenger2 -> <ref1>

//compare reference
//are they the same?
console.log("copy vs og", avenger === avenger2); //true - same reference in memory
// <ref1> === <ref1>

//reminder when comparing objects, we are comparing references, tho they may look the same, they are not.
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
// fakeAvenger -> <ref2>
console.log("fake vs og", fakeAvenger === avenger); //false
// <ref2> === <ref1> not true!

//needs to get some terms out the way
//shallow copy - a shallow copy is a new object that is created to reference the same elements as an existing object. However with a shallow copy, if the object contains nested objects, a shallow copy will keep a reference to the old nested objects

//ways to create shallow copies
// .slice()
// [...arr];

let shallowAvenger = { ...avenger };
//shallowAvenger -> <ref3>
// console.log(shallowAvenger);
//we see the shallow looks the same, but it is a different reference

console.log('shallow vs og', shallowAvenger === avenger);//false
// <ref3> === <ref1>

//BUT BUT a shallow copy will keep a reference to any nested objects

//compare a nested array
console.log('shallow vs og nested', shallowAvenger.powers === avenger.powers);//true
//<ref3:[ <refA>, <refB> ]> === <ref1:[ <refA>, <refB> ]>
//          ^        ^                    ^       ^
//        powers            ===         powers
//                  same nested reference
console.log(shallowAvenger.abilities === avenger.abilities);//true


//how do we fix this?
//what if we dont want to keep references?

//deep copy!
//we want no nested references

let deepAvenger = JSON.parse(JSON.stringify(avenger));

//lets check
console.log(deepAvenger === avenger);///false

//lets check nested
console.log(deepAvenger.abilities === avenger.abilities);//false


//deepDup
