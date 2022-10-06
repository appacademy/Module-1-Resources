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

// With Starting Accumulator
const totalYears = friends.reduce((acc, friend) => {
    // Write your solution here.
    console.log("acc", acc, "|", "friend", friend)
    return acc + friend.yearsOfFriendship
    // return undefined
}, 0);

// Without Starting Accumulator
// const totalYears = friends.reduce((acc, friend) => {
//     console.log("acc", acc, "|", "friend", friend)
//     if(acc.yearsOfFriendship){  // return a number or undefined
//                                 //          ^ truthy    ^ falsey
//         return acc.yearsOfFriendship + friend.yearsOfFriendship
//     }
//     return acc + friend.yearsOfFriendship
// });

console.log("totalYears:", totalYears);                        // 19