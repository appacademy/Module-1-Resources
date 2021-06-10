let car = "vroom";

function makeSounds(dogSound) {
  let cow = "moo";

  if (true) {
    let turkey = "gobble";

    for (let i = 0; i < 2; i++) {
      //this is empty
    }
  }
}

makeSounds("woof");

// let hungry = false;

function sayHungry() {
  // let hungry = true;
  if (hungry) {
    console.log("I'm hungry!");
  } else {
    console.log("I'm coding");
  }
}

// sayHungry();

function letBlockScoped() {
  let test = "upper scope";
  // let test = "whoops";
  test = "whoops";
  if (true) {
    let test = "lower scope";
    console.log(test); // 'lower scope'
  }

  console.log(test); // 'whoops'
}
// letBlockScoped();

function constBlockScoped() {
  const test = "upper scope";
  // const test = "whoops";
  // test = "whoops";
  if (true) {
    const test = ["dog"];
    test.push("cat");
    console.log(test); // 'lower scope'
  }

  console.log(test); // 'upper scope'
}
// constBlockScoped();

function varBlockScoped() {
  var test = "upper scope";
  var test = "whoops";
  test = "whoops";
  if (true) {
    var test = "lower scope";
    console.log(test); // 'lower scope'
  }

  console.log(test); // 'lower scope'
}
// varBlockScoped();

function hoistLetAndConst() {
  console.log(cat.toUpperCase());
  var cat = "cat";
}

// hoistLetAndConst()

// function reduceSum(arr) {
//   return arr.reduce(function (sum, num) {
//     return sum + num;
//   })
// }

// const reduceSum = (arr) => arr.reduce((sum, num) => sum + num);

// const arr = [1, 2, 3, 4, 5, 6];

// console.log(reduceSum(arr));

const roboBuilder = function (initString, initNum) {
  const num = initNum;
  console.log("Hey, I'm building a robot with the initSting of " + initString + num);
  return function innerRobo() {
    console.log(initString + ", I'm a inner robot" + num);
  };
};

const robo1 = roboBuilder("Hello", 1);
const robo2 = roboBuilder("Yoo", 2);

console.log(robo1 === robo2);

robo1();
robo2();
