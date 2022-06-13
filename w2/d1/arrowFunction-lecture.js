// Arrow Functions //

function sum(a, b) {
    return a + b;
};

let sum2 = (a, b) => a + b;

let sum3 = (a, b) => {
    let result = a + b;
    return result;
}

function isPositive(number) {
    return number >= 0;
};

let isPositive2 = number => number >= 0;

function randomNumber() {
    return Math.random();
};

let randomNumber2 = () => Math.random();

document.addEventListener("click", function () {
    console.log("Clicked!");
});

document.addEventListener("click", () => console.log("Clicked!"));

const duplicateCharMinCount = (string, minCount) => Object.entries(string.split("").reduce((accum, char) => Object.assign(accum, accum[char] ? {[char]: accum[char] + 1} : {[char] : 1}),{})).reduce((accum, ele) => accum.concat(ele[1] >= minCount ? ele[0] : []), [])

const duplicateCharMinCount2 = (string, minCount) => {
    const result = []
    const count = {}
    for (let i = 0; i < string.length; i++){
        const currentChar = string[i]
        if (currentChar in count) count[currentChar]++
        else count[currentChar] = 1
    }
    for (let key in count){
        if (count[key] >= minCount) result.push(key)
    }
    return result
}
