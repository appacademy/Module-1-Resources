





let brandon = {
  name: 'brandon',
  age: 27,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: { city: "Tampa", state: "Florida" },
  sayHello: function(name) {
    return 'Hello ' + name;
  }
}


// console.log(brandon);
// console.log(brandon.name);
// console.log(brandon['name']);

// let example = 'na';
// let example2 = 'me'

// console.log(brandon[example + example2]);

// console.log(brandon.age); // 27
// console.log(brandon["age"]); // 27

console.log(brandon.favoriteBands); // ["Joyce Manor", "Neck Deep", "Idles"]
let favBands = brandon.favoriteBands;

console.log(favoriteBands[0]);
// console.log(brandon["favoriteBands"]);
