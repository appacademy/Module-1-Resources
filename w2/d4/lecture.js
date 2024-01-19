




let arr = ['a','e','i','a', 'o','u', 'z','y'];

let vowels = 'aeiou'
const result = arr.reduce((obj, letter) => {

  if(vowels.includes(letter)) {
  if (obj[letter]) {
    obj[letter]++;
  } else {
    obj[letter] = 1;
  }
}
  return obj;
},{});


console.log(result);
let obj2 = {};
obj2[1] = 1;
console.log(obj2);
obj2[1]++
console.log(obj2);
