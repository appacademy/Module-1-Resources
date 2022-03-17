// let bads = ['Ozai', 'Azula', 'Zuko', 'Zhao', 'Long Feng']

let atla = [
  "Aang",
  "Katara",
  "Sokka",
  "Toph",
  "Momo",
  "Appa",
  "Ozai",
  "Azula",
  "Zuko",
  "Zhao",
  "Long Feng",
  "Suki"
];

// We want to return an array with all of the bad characters
// iterate through the array
// check the strings for a 'z' turn strings lowercase before we check
  // if it has a ' ' it is also a bad character
// push the strings with 'z' into a new array
// return the new array

let includesZ = function (str) {
  if (str.toLowerCase().includes('z')) {
    return true
  }
  return false
}

let includesSpace = function (str) {
  if (str.includes(' ')) {
    return true
  }
  return false
}

let isZuko = function (str) {
  return str.toLowerCase() === 'zuko'
}


let isolateBads = function (array) {
  let bads = [];
  for (let i = 0; i < array.length; i++) {
    let string = array[i];
    
    if (isZuko(string)) {
      // don't add to array
    } else if (includesZ(string) || includesSpace(string)) {
      bads.push(string)
    } 
  }
  return bads;
}

let bads = isolateBads(atla);

console.log(bads)




