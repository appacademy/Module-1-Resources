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


// console.log('og object',avenger);

let avenger2 = avenger;
// avenger  -> <ref1>
// avenger2 -> <ref1>
console.log(avenger === avenger2);// true
// <ref1> === <ref1>  same reference in memory


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
console.log(avenger === fakeAvenger);// false
// <ref2> === <ref1>

// we may make a copy
let shallowAvenger = {...avenger};

// shallowAvenger -> <ref3>
console.log(shallowAvenger === avenger);// false
// <ref3> === <ref1> false

console.log(shallowAvenger.powers === avenger.powers);// true
// <ref1>      ===    <ref3> ---> false
//   ^                  ^
// <powersRef>  ===  <powersRef>  --> true

let deepAvenger = JSON.parse((JSON.stringify(avenger)));

// deepAvenger -> <ref4>
//                  ^
//             <powersRef2>

console.log(deepAvenger === avenger);// false
console.log(deepAvenger.abilities === avenger.abilities);//false
// deepAvenger -> <ref4>   ===  <ref1>  - false
//                  ^             ^
//            <powersRef2>  ===  <powersRef> - false
