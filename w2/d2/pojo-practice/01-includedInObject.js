const obj = {
  first: "1",
  second: 2,
  third: "three"
}

const includedInObject = (obj, key) => {
  //return obj[key] !== undefined
  return key in obj
}

console.log(includedInObject(obj, 'first'));      // true
console.log(includedInObject(obj, 'second'));     // true
console.log(includedInObject(obj, 'fourth'));     // false