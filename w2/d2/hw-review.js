const friends = [
  {
      name: "Albert",
      yearsOfFriendship: 3
  },
  {
      name: "Angela",
      yearsOfFriendship: 2
  },
  {
      name: "Freddy",
      yearsOfFriendship: 8
  },
  {
      name: "Agatha",
      yearsOfFriendship: 6
  }
];

// for(let i = 0; i < friends.length; i++) {
//  let friend = friends[i];
//   // console.log(friend)
//   // console.log(Albert: 3 years)
//   console.log(friend.name + ': ' + friend.yearsOfFriendship + ' years')
// }

// console.log(friends);

// (friend, i, arr ) => {
//    console.log(friend.name + ': ' + friend.yearsOfFriendship + ' years')
// }

friends.forEach((friend) => console.log(friend.name + ': ' + friend.yearsOfFriendship + ' years'))

/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/


// const friends = [
//   {
//       name: "Albert",
//       yearsOfFriendship: 3
//   },
//   {
//       name: "Angela",
//       yearsOfFriendship: 2
//   },
//   {
//       name: "Freddy",
//       yearsOfFriendship: 8
//   },
//   {
//       name: "Agatha",
//       yearsOfFriendship: 6
//   }
// ];

const goodFriendsOrNot = friends.map(friend => friend.yearsOfFriendship > 5)

console.log(friends.map(function functionName(friend) {
                      return friend.yearsOfFriendship > 5
                      }));
  // console.log(friend.yearsOfFriendship)
// if(friend.yearsOfFriendship > 5) {
// return true;
// } else {
// return false;
// }
console.log(goodFriendsOrNot);          // [false, false, true, true];



const filteredResult = friends.filter(friend => friend.yearsOfFriendship > 5 && friend.name[0] === 'A')
  // Write your solution here.
// console.log(friend)
// console.log(friend.name[0] === 'A')
// if(friend.yearsOfFriendship > 5 && friend.name[0] === 'A') {
//  return true;
// }
//  return false;
// return friend.yearsOfFriendship > 5 && friend.name[0] === 'A'

// })

console.log(filteredResult);
/*
Should print:
[
  {
      name: "Agatha",
      yearsOfFriendship: 6
  }
];
*/



// Hint: create an array of vowels to use in your solution.
let vowels = 'aeiouAEIOU';
const threeVowelFriend = friends.reverse().find(friend => {
  // Write your solution here.
  // console.log(friend);

  let count = 0;
  for(let letter of friend.name) {
   // console.log(friend.name[i])
    if(vowels.includes(letter.toLowerCase())){
      count++;
    }
  }
  // console.log(friend.name, count)
// if(count >= 3) return true;

return count >= 3

});
console.log(threeVowelFriend);             // Angela

// console.log(friends.find(friend => {
//     // Write your solution here.
//   	console.log(friend);

//   	let count = 0;
//   	for(let i = 0; i < friend.name.length; i++) {
//      // console.log(friend.name[i])
//       let letter = friend.name[i];
//       if(vowels.includes(letter.toLowerCase())){
//       	count++;
//       }
//     }
//   	// console.log(friend.name, count)
//   // if(count >= 3) return true;

//   return count >= 3


// const friends = [
//   {
//       name: "Albert",
//       yearsOfFriendship: 3
//   },
//   {
//       name: "Angela",
//       yearsOfFriendship: 2
//   },
//   {
//       name: "Freddy",
//       yearsOfFriendship: 8
//   },
//   {
//       name: "Agatha",
//       yearsOfFriendship: 6
//   }
// ];

const totalYears = friends.reduce((acc, friend) => acc + friend.yearsOfFriendship,0);
console.log(totalYears);                        // 19
