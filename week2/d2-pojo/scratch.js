let obj = {
  name: "Mylo",
  age: 1000,
  game: {
    name: "Dota 2",
    position: 5,
    favHero: "Dazzle",
  },
};

// //How would I print Mylo's name from the object?
// console.log(obj["name"]);
// //How would I add his location, Chicago?
// obj["location"] = "Chicago";
// console.log(obj);
// //How would I change his age to 1001?
// obj["age"]++;
// console.log(obj);

let obj2 = {
  first: "a",
  second: "b",
  third: "c",
};

// console.log(obj2.first, obj2['first'])

let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj3 = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

// console.log(some + variable)
// console.log(obj3[someVariable]); // Oscar
// console.log(obj3[some + variable]); // Mayer
// console.log(obj3[time.toLowerCase()]);

let obj4 = {
  name: undefined,
  age: 1000,
  game: {
    name: "Dota 2",
    position: 5,
    favHero: "Dazzle",
  },
};

let arr = [
  [1, 2, 3],
  [4, 5, 6],
];
// console.log(arr[1][0])
// console.log(obj4.game.name)

// console.log(obj4.name !== undefined);
// console.log("name" in obj4);
let innerObj = obj4.game;
// for (let key in obj4.game) {
//   console.log(key, "KEY");
//   console.log(innerObj[key], "VALUE");
// }

let keyArr = Object.keys(obj4.game);

let res = keyArr.map(function (ele) {
  return ele.toUpperCase();
});

// console.log(res);

let valueArr = Object.values(obj4);

// console.log(valueArr);

let entriesArr = Object.entries(obj4);

// console.log(entriesArr);

let age = 10;
let numberOfFingers = age;
age = numberOfFingers + 1;
console.log(age, numberOfFingers);

let biff = {
  type: "dog",
  age: 10,
};

let buster = biff;
buster.age = 0;

// console.log(biff === buster);
let animal = "dog";
let user = {
  person: "Mylo",
  animal: "elephant",
  taco: "coffee",
  juice: "orange",
};

let { juice, animal: animal2, taco, person } = user;
// let person = (the Object).person
// let animal = (the Object).animal

// console.log(person, animal2, juice, taco);

let [_game, _player, char] = ["Dota 2", "Austin", "Dazzle", "Mylo"];

// let game = (the Array)[0]
// let player = (the Array)[1]
// console.log(_game);

let makeThemBig = function (greeting, ...strings) {
  console.log(greeting, "greeting");
  console.log(strings, "strings");
  let result = strings.map(function (string) {
    return string.toUpperCase();
  });
  return result.join(" ");
};

// console.log(makeThemBig("hello", "world"));
// console.log(makeThemBig("hello"));
// console.log(makeThemBig("Hello", "world,", "how's", "it", "going", "today?"));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// let arr4 = [...arr1, 0, ...arr2, ...arr1];
// // console.log(arr3);
// console.log(arr4);

let obj5 = { name: "Mylo" };
let obj6 = { animal: "elephant", game: "Dota 2" };
let obj7 = { obj5, obj6, cup, movie: "Fantastic Mr. Fox" };
let obj8 = { ...obj5, ...obj6, movie: "Fantastic Mr. Fox" };
console.log(obj7);
// console.log(obj8);

a;lksdjf;laksjdf
