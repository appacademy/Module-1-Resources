// * 1. Declare Keys/Values Solution
const obj = {};
obj["firstKey"] = "firstValue";
obj["numeric"] = 2;
obj["boolean"] = false;
let variable3 = "object";
obj[variable3] = {};

// * 2. Delete Keys/Values Solution
const obj22 = {
  first: "1",
};

// Do deletion here
delete obj22.first;

// * 3. Using Variables as keys Solution
const obj3 = {
  first: "1",
  second: 2,
  third: "three",
};

const str = "first";

const variableAsKey = (obj, str) => {
  console.log(obj[str]);
};

// * 4. Dot vs Bracket Notation Solution
const obj4 = {
  "first key": "1",
  second: 2,
  third_key: "three",
};

console.log(obj4["first key"]);
console.log(obj4.second);
console.log(obj4["second"]);
console.log(obj4.third_key);
console.log(obj4["third_key"]);

// * 5. Cat Builder Solution
function catBuilder(name, color, toys) {
  let newObj = {};
  newObj.name = name;
  newObj.color = color;
  newObj.toys = toys;

  // OR
  // newObj['name'] = name
  // newObj['color'] = color
  // newObj['toys'] = toys

  // let newObj = {
  //    	name: name, color: color, toys: toys
  //    };

  return newObj;
}

//or let catBuilder = (name, color, toys) => ({ name, color, toys })

// * 6. Array of Objects Solution
const users = [
  {
    name: "Gerald",
    age: 23,
    height: 68,
  },
  {
    name: "Winnie",
    age: 35,
    height: 62,
  },
  {
    name: "Peter",
    age: 61,
    height: 72,
  },
];

const printNames = (users) => {
  for (let i = 0; i < users.length; i++) {
    let currObj = users[i];
    console.log(currObj["name"]);
    //console.log(currObj.name)
  }
  // OR
  // for(let i=0;i<users.length;i++){
  //     console.log(users[i]['name'])
  //console.log(users[i].name)
  // }
};


const nestedArr = [
  [
      { a: 1 },
      { b: 2 }
  ],
  [
      { c: 3 },
      { d: 4 },
      { e: 5 }
  ],
  [
      { f: 6 }
  ],
  [
      { g: 7 },
      { h: 8 }
  ]
];


// * 9. Check if key is on Object Solution

const obj = {
  first: "1",
  second: 2,
  third: "three"
}

const includedInObject = (obj, key) => {
if (obj[key] !== undefined) return true;
return false;

//return key in obj
//return Object.keys(obj).includes(key);
};

console.log(includedInObject(obj, 'first'));      // true
console.log(includedInObject(obj, 'second'));     // true
console.log(includedInObject(obj, 'fourth'));     // false

// * 9. Array of Objects Solution
const getSecondObjValues = arr => {

// iterate through the array
for(let i = 0; i < arr.length; i++) {
  let nestedArr = arr[i];

  // this is grabbing the element at the second position in the nested arr
  let obj = nestedArr[1]

  // is the ele defined?
  if(obj) {

    // if it is; were going to loop through the object get the keys
    for(let key in obj) {
      console.log(obj[key]);// use the key to to key and get the value and print it
    };

  } else {
    // if there is second value in the nestedarr log null
   console.log(null)
  }
}
}

getSecondObjValues(nestedArr);               // 2 4 null 8
