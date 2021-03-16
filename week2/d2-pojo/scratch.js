let arrUser = ['Mylo', 7000, 'Module Instructor', 'Rural America'];

let arrAge;

for (let i = 0; i < arrUser.length; i++) {
    let ele = arrUser[i];
    if (typeof ele === 'number') {
        arrAge = ele;
    }
}
console.log(arrAge);

let user = {
    name: 'Mylo',
    age: 7000,
    job: 'Module Instructor',
    address: 'Rural America',
};

console.log(user.age);
