
// turn a string into an array
function stringToArr(string) {
  //base case
  if (!string.length) return [];

  // let firstLetter = string[0];

  // console.log(firstLetter)
  // let letters = [];
  // letters.push(firstLetter);
  // let res = stringToArr(string.slice(1)).concat([firstLetter]);

  // return letters.concat(stringToArr(string.slice(1)))
  // console.log(res);

  let [first, ...rest] = string;
  return [first, ...stringToArr(rest)];
}

// console.log(stringToArr("hello")); //[h e l l o]
