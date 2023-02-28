const obj = {
  item1: "jar",
  item2: "pot",
  item3: "spatula",
  item3: "whisk"
}

const valInObject = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) return true
  }
  return false
}

console.log(valInObject(obj, "jar"));             // true
console.log(valInObject(obj, "pot"));             // true
console.log(valInObject(obj, "cup"));             // false
console.log(valInObject(obj, "fork"));            // false