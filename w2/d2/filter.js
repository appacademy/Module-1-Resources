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

const filteredResult = friends.filter(friend => {
    if(friend.name[0] === "A" && friend.yearsOfFriendship > 5){
        return true
    }
    return false
})

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
