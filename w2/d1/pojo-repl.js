
// 1. Declare Keys/Values Solution
const obj = {};
obj["firstKey"] = "firstValue";
obj["numeric"] = 2;
obj["boolean"] = false;
let variable2 = "object";
obj[variable2] = {};

// 2. Delete Keys/Values Solution
const obj22 = {
  first: "1",
};

// Do deletion here
delete obj22.first;

//===================================================

// 3. Using Variables as keys Solution
const obj3 = {
  first: "1",
  second: 2,
  third: "three",
};

const str = "first";

const variableAsKey = (obj, str) => {
  console.log(obj[str]);
};

// 4. Dot vs Bracket Notation Solution
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

// 5. Cat Builder Solution
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


// 6. Array of Objects Solution
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
  //     //console.log(users[i].name)
  // }
};

