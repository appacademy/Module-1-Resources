let myEvery = function(arr, cb) {
    for (let element of arr){
        if (!cb(element)) return false
    }
    return true
};

// let suffixCipher = function (sentence, cipher) {
//     let res = []
//     let words = sentence.split(" ")
//     words.forEach(function (word) {
//         for (let suffix in cipher) {
//             if (word.endsWith(suffix)) {
//                 res.push(cipher[suffix](word))
//                 return
//             }
//         }
//         res.push(word)
//     })
//     return res.join(" ")
// };

let suffixCipher = function(sentence, cipher) {
    let res = [];

    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let isSuffix = false;
        for (let suffix in cipher) {
            if (word.endsWith(suffix)) {
                res.push(cipher[suffix](word))
                isSuffix = true;
                console.log(res);
                break;
            }
        }
        if (!isSuffix) {
            res.push(word)
        }
    }

    return res.join(' ')
};

let minValueCallback = function (nums, callback) {
    return nums.reduce(function (lowest, current) {
        if (callback) {
            if (lowest > callback(current)) return callback(current)
            return lowest
        } else {
            if (lowest > current) return current
            return lowest
        }
    }, Infinity)
};