let person = "Emily";
let { person: person2, animal } = { person: "Caleb", animal: "elephant" };
// let person = (the Object).person
// let animal = (the Object).animal
console.log(person, person2, animal);

let [game, player] = ["Dota 2", "Mylo"];
// let game = (the Array)[0]
// let player = (the Array)[1]
console.log(game, player);

[player, game] = [game, player];
console.log(game, player);
