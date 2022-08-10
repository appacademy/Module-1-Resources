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

friends.forEach(friend => console.log(friend.name + ": " + friend.yearsOfFriendship + " years"))
/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/


const goodFriendsOrNot = friends.map(friend => {
    return friend.yearsOfFriendship > 5
});
console.log(goodFriendsOrNot);          // [false, false, true, true];


const filteredResult = friends.filter(friend => friend.name.toLowerCase().startsWith("a") && friend.yearsOfFriendship > 5)
console.log(filteredResult)
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
const threeVowelFriend = friends.find(friend => {
    // Write your solution here.
  const vowels = "aeiouAEIOU"
  let count = 0
  for (const char of friend.name) if (vowels.includes(char)) count++;
  return count >= 3
});
console.log(threeVowelFriend.name);

const totalYears = friends.reduce((acc, friend) => {
    // Write your solution here.
   return acc + friend.yearsOfFriendship
}, 0);
console.log(totalYears);                        // 19
