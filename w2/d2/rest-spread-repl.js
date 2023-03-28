//destructure array
let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];
let [first, second, third, fourth, fifth, sixth] = bigArray;
console.log(second); // prints: 14
console.log(fifth); // prints: { name: "party" }
console.log(sixth); // prints: ["pineapple"]

//restSum
const restSum = (...otherNums) => {
  let sum = 0;
  for(let num of otherNums) {
      sum += num;
  }
  return sum;
}

//spreadItOut
const spreadItOut = (array1, array2) => {
  return [...array1, ...array2];
}
//breakDownObj
const breakDownObj = obj => {
  return [...Object.keys(obj), ...Object.values(obj)]
}

//=======================================
//ArrClone
const arrSpread = [...arr]//spreading elements into array literal
const [...arrRest] = arr;//gather the rest of the arguments in the arrRest variable
const objSpread = {
    ...obj
};
const { ...objRest } = obj;

//objClone
//on right spreading object adding new key-value pair
//on left destructuring out the object to the right with  and store it in ...objClone
//destructuring green out of the objClone
const {green, ...objClone} = { ...obj, yellow: "pentagon"}
