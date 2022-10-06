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

// Given the array friends below, use the Array.map() method to map the
// current array to an array of booleans representing whether or not the friend
// has been friends with the user for more than 5 years. Then print the newly
// mapped array.


const goodFriendsOrNot = friends.map(
    (friendObj)=>{
        if(friendObj.yearsOfFriendship > 5){
            return true
        }
        return false
    }
    );

console.log(goodFriendsOrNot);          // [false, false, true, true];
