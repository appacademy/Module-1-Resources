// // definition syntax
// function namedFunc () {

// }

// // declaration syntax
// let namedFunc2 = function () {

// }

// // Fatarrow syntax
// let namedFunc3 = (num) => {

// }

let avgVal = (arr) => {
    if (arr.length === 0) return null;
    let sum = 0;

    arr.forEach((num) => {

        sum += num;
        // console.log(sum);
    })
    console.log(sum);
    return sum / arr.length
}


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null


let removeEWords = (sentence) => {

    return sentence.split(' ').filter((word) => !word.includes('e')).join(' ');
}
