function stringConverter(string) {
    // your code here
    let charCount = {};

    let strArr = string.split('');

    strArr.forEach((char) => {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
            console.log(charCount);
        } else {
            charCount[char]++;
            console.log(charCount);
        }
    });

    return charCount;

}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
function countScores(people) {
    let totalScores = {};

    people.forEach((player) => {
        if (totalScores[player.name] === undefined) {
            totalScores[player.name] = player.score;
            console.log(totalScores);
        } else {
            totalScores[player.name] += player.score;
            console.log(totalScores);
        }
    })

    return totalScores;
}


let peeps = [
    {name: "Anthony", score: 2},
    {name: "Winnie", score: 2},
    {name: "Fred", score: 2},
    {name: "Winnie", score: 2},
    {name: "Fred", score: 2},
    {name: "Anthony", score: 2},
    {name: "Winnie", score: 2}
  ];

console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }