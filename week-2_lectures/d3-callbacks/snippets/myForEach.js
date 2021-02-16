// An array of composers
let composers = ['Bach', 'Hayden', 'Mozart', 'Beethoven', 'Chopin'];

// Built in forEach
composers.forEach(function (composer, i) {
    console.log(composer + ' is at idx ' + i);
});

// my forEach
let myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};

composers.myForEach = myForEach;
console.log(composers.forEach)

composers.myForEach(function (composer, i) {
    console.log(composer + ' is at idx ' + i);
});

let callback = function (composer, i) {
    console.log(composer + ' is at idx ' + i);
};

composers.myForEach(callback);
