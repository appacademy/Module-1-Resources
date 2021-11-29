// Scope and Variables

// let car = "vroom";

// console.log(car);
// function makeSounds(ani) {
//   let cow = "moo";
  
//   if (true) {
//     let turkey = "gobble";

//     for (let i = 0; i < 2; i++) {
//     }
//   }
// }; 

// makeSounds("AHHHHHHHHHHHH");

// let hungry = false;

// function sayHungry() {
//   let hungry = true;

//   if (hungry) {
//     console.log("Im hungry");
//   } else {
//     console.log("Im busy coding");
//   }
// };

// sayHungry();
// console.log(hungry);

// function constScope () {
//   const test = "upper scope";
//   // test = "whoops";

//   if (true) {
//     const test = "lower scope";
//     console.log(test);
//   }
//   console.log(test);
// };

// constScope();


// function varScope() {
//   // console.log(test);
//   var test = "upper scope";
//   // var test = "whoops";

//   if (true) {
//     var test = "lower scope";
//     // console.log(test);
//   }

//   // console.log(test);
// }

// varScope();
// console.log(nick)



// Fat Arrows
// const arrSum = function (arr) {
//   return arr.reduce(function (sum, num) {
//     return num + sum;
//   });
// };

// const arrSum = arr => {
//   return arr.reduce((sum, num) => {
//     return sum + num;
//   });
// };

// const arrSum = arr => arr.reduce((sum, num) => sum + num);

// console.log(arrSum([1,2,3,4]));



class Animal {
  constructor(type, noise) {
    this.type = type;
    this.noise = noise;
    this.count = 0;
  }

  makeNoise() {
    this.count++;
    return "The " + this.type + " says " + this.noise + " " + this.count + " times";
  };
}

let dog = new Animal("dog", "bark");
console.log(dog.makeNoise())
console.log(dog.makeNoise())
console.log(dog.makeNoise())


const recordMaker = team => {
  let wins = 0;
  let losses = 0;

  return (...outcomes) => {
    outcomes.forEach(outcome => {
      if (outcome.toLowerCase() === 'win') {
        wins++;
      } else {
        losses++;
      }
  
    });
    console.log("The " + team + " are " + wins + "-" + losses + ".")
  }
};

const pack = recordMaker("Green Bay Packers");
// console.log(pack);

const bears = recordMaker("Bears");

// console.log(pack === bears);

pack("win", "win", "win");
pack("win");
bears("loss");
pack("win");
bears("loss");
bears("win");