/*
Cat Builder
Write a function catBuilder(name, color, toys) that returns a cat object object with the corresponding properties.
*/

function catBuilder(name, color, toys) {
  // your code here...

  /*

    Shout out to Varun and Finn! 😎 😎

    1 liner:
        return name === 'Whiskers' || name === 'Nyan' ? { name:name, color:color, toys:toys } : false;

    returning the object setting key val pairs at the same time:

        return {
        name: name,
        color: color,
        toys: toys
        };
    */

  const cat = {};

  //dot notation
  // cat.name = name
  // cat.color = color
  // cat.toys = toys

  // bracket notation
  cat[name] = name;
  cat[color] = color;
  cat[toys] = toys;

  return cat;
}

console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
