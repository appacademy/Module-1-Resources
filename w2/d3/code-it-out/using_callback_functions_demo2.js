let superAdd = function (num1, num2, cb) {
    let sum = num1 + num2;
    let res = cb(sum);
    return res;
};

console.log(superAdd(6, 3, Math.sqrt));

//---------------------------------------------
// exploring how flexible javascript functions are
let foo = function (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
};

foo('alpha', 'bravo', 'charlie'); // ?
foo('alpha', 'bravo'); // ?
foo('alpha', 'bravo', 'charlie', 'delta'); // ?


//---------------------------------------------
// superAdd refactor
let superAdd2 = function (num1, num2, cb) {
    if (cb === undefined) {
        return num1 + num2;
    }
    let sum = num1 + num2;
    let res = cb(sum);
    return res;
};

console.log(superAdd2(6, 3, Math.sqrt));
console.log(superAdd2(80, 1));
