let arr = [1, 2, 3];
// console.log(arr[0]);// 1
// console.log(arr[1]);// 2
// console.log(arr[2]);// 3

for (let i = 0; i < arr.length; i++) {
  let ele = arr[i];
  // console.log(ele);
}

// console.log(people)

// console.log(people.person1);
// console.log(people.person2);
// console.log(people.person3);
// console.log(people.person4);
// console.log(people.length);

// for(let i = 0; i < people.length; i++){
//   console.log('==>',i);
// }

// for in
// for(let key in people){
//   console.log('key',key);

//   let personObj = people[key];
//   console.log('name: ', personObj.name);

//   // console.log(people.key);
//   // console.log(people['key'])

// }

// console.log(people.person1);

// console.log(people);

let keysArr = Object.keys(people);
console.log(keysArr);
[ 'person1', 'person2', 'person3', 'person4' ]

for (let i = 0; i < keysArr.length; i++) {
  let key = keysArr[i];
  // console.log(key)
  let value = people[key];
  // console.log(value); // { name: 'brandon' }
};

// for of loop only used to on arrays
// let ele = keysArr[i];
// for(let key of keysArr) {
//   console.log(key);
//   let value = people[key];
//   console.log(value);
// }

// console.log(people);

let people = {
  person1: {
    name: "brandon",
  },
  person2: {
    name: "maica",
  },
  person3: {
    name: "charles",
  },
  person4: {
    name: "trevor",
  },
};

let valuesArr = Object.values(people);

// console.log(valuesArr);
/*
[
  { name: 'brandon' },
  { name: 'maica' },
  { name: 'charles' },
  { name: 'trevor' }
]
*/

let entriesArr = Object.entries(people);
console.log(entriesArr);

for (let entry of entriesArr) {
  console.log("key", entry[0], "value", entry[1]);
}
