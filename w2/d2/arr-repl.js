//forEach
friends.forEach((friend) => {
  console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
});

//map
const goodFriendsOrNot = friends.map((friend) => friend.yearsOfFriendship > 5);
console.log(goodFriendsOrNot);

//filter
const filteredResult = friends.filter((friend) => {
  return friend.name[0] === "A" && friend.yearsOfFriendship > 5;
});
console.log(filteredResult);

//find
const vowels = ["a", "e", "i", "o", "u"];
const threeVowelFriend = friends.find((friend) => {
  let count = 0;
  for (let char of friend.name) {

    if (vowels.includes(char.toLowerCase())) count += 1;
  }
  return count >= 3;
});
console.log(threeVowelFriend.name);

//reduce
const totalYears = friends.reduce(
  (acc, friend) => acc + friend.yearsOfFriendship,
  0
);
console.log(totalYears);
