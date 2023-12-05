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
