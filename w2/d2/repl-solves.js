
//includedInObject
const includedInObject = (obj, key) => {
  if(obj[key] !== undefined) return true;
  return false;
}
// OR
// const includedInObject = (obj, key) => {
//   if(obj.hasOwnProperty(key)) return true;
//   return false;
// }

//valInObject
const valInObject = (obj, value) => {
  for(key in obj) {
      if(obj[key] === value) {
          return true;
      }
  }
  return false;
}

//mostCommonChar
const mostCommonChar = sentence => {
  let charMap = {};
  let max = 0;
  let maxChar = sentence[0];
  for(let char of sentence) {
      if(char === ' ') continue;
      char = char.toLowerCase();
      if(charMap[char]) {
          charMap[char]++;
      } else {
          charMap[char] = 1;
      }
      if(charMap[char] > max) {
          max = charMap[char];
          maxChar = char;
      } else if(charMap[char] === max) {
          maxChar = char < maxChar ? char : maxChar;
      }
  }
  return maxChar;
}

//getSecondObjValues
const getSecondObjValues = arr => {
  for(let nestedArr of arr) {
      if(nestedArr[1]) {
          for(let key in nestedArr[1]) {
              console.log(nestedArr[1][key])
          }
      } else {
          console.log(null);
      }
  }
}
//printDepthOfTwo
const printDepthOfTwo = obj => {
  for(let val of Object.values(obj)) {
      if(typeof val === 'object') {
          for(let nestedVal of Object.values(val)) {
              console.log(nestedVal)
          }
      }
  }
}

//isPalindrome
const isPalindrome = seq => {
  let map = {};
  for(let char of seq) {
      if(char === ' ') continue;
      if(map[char]) {
          delete map[char];
      } else {
          map[char] = 1;
      }
  }
  return Object.keys(map).length < 2;
}



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

//forEach
friends.forEach(friend => {
  console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
})

//map
const goodFriendsOrNot = friends.map(friend => friend.yearsOfFriendship > 5);
console.log(goodFriendsOrNot);

//filter
const filteredResult = friends.filter(friend => {
  return friend.name[0] === "A" && friend.yearsOfFriendship > 5;
});
console.log(filteredResult);


//find
const vowels = ['a', 'e', 'i', 'o', 'u'];
const threeVowelFriend = friends.find(friend => {
  let count = 0;
  for(let char of friend.name) {
      if(vowels.indexOf(char.toLowerCase()) > -1) count+=1;
  }
  return count >= 3;
})
console.log(threeVowelFriend.name);


//reduce
const totalYears = friends.reduce((acc, friend) => acc + friend.yearsOfFriendship, 0);
console.log(totalYears);
