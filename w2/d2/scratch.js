function sentenceMaker(word1, ...words) {
  console.log(word1, words);
  let res = [];
  for (let word of words) {
    res.push(word);
  }

  return res.join(" ");
}

// console.log(sentenceMaker("hello", "world"));

// console.log(sentenceMaker("hello"));

// console.log(sentenceMaker("hello", "awesome", "world"));

function product(...numbers) {
  console.log(numbers);
  let product = 1;
  for (let number of numbers) {
    if (typeof number !== "number") {
      // skip the current the current iteration and move to the next
      continue;
    }
    product *= number;
  }

  return product;
}

// let productRest = (...numbers) => numbers.reduce((pro, num) => pro * num, 1);

// let filterNums = (...numbers) => numbers.filter(num => num > 3);

// console.log(filterNums(3,4,5));
// console.log(product(3,2));
// console.log(product(3));

let names1 = ["brandon", "maica"];
let names2 = ["trevor", "charles"];

// console.log(names1.concat(names2));

let allNames = [...names1, ...names2, "Caleb"];
// ['brandon', 'maica', 'trevor', 'charles'];
// console.log(allNames);

let copy = allNames.slice();
// console.log(copy);

// let copy2 = [...allNames];
// console.log(copy2)

// let batman = {
//   name: "batman",
//   location: "gotham",
// };

let bruce = {
  name: "bruce",
  location: "gotham",
};

// let batmanCopy = {...batman}
// console.log(batmanCopy)

// let batmanBruce = { ...bruce, ...batman, sidekick: "robin", realName: bruce.name };

// console.log(batmanBruce);

let array = [1, true, "hello world"];

let [first, sec, third] = array;

// console.log(first, sec, third)

let firstName = "wayne";
let lastName = "bruce";

// console.log(firstName, lastName);

[firstName, lastName] = [lastName, firstName];

// console.log(firstName, lastName);// bruce wayne

let strings = ["i", "batman", "am"];

[strings[1], strings[2]] = [strings[2], strings[1]];

// console.log(strings);

let numbers = [1, 2, 3];
[number1, ...otherNums] = numbers;

// [number1, ...otherNums] = numbers;

// console.log(number1, otherNums)

[num1, num2, ...rest] = [1, 2, 3, 4];

//[num1, num2, ...rest] = [1,2,3,4];
// let num1 = 1
// let num2 = 2
// let rest = [3,4]
// console.log(num1, rest);
//1 [ 2, 3, 4 ]

let batmanObj = {
  name: "batman",
  location: {
    city: "gotham",
    state: "NY",
  },
  age: 40,
};

// console.log(batman)


// let name = batman.name;
// let age = batman.age;
// let state = batman.location.state



let {
  name,
  age,
  middleName,
  location: { city, state },
} = {...batmanObj, name:'bruce'};

// let {
//   name,
//   age,
//   middleName,
//   location: { city, state },
// } = {
//   name: "batman",location: {city: "gotham",state: "NY",}, age: 40, name:'bruce'};
/*
name = batman
age = 40
middleName = undefined
city = gotham
state = NY
*/


//{ sidekick: 'robin' }
// console.log(name)

// console.log(name, age, city, state); // batmanObj
//batmanObj 40 gotham NY

// console.log(batmanObj);

// console.log(city, middleName);// gotham
