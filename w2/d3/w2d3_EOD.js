function chainMap(val, ...callbacks) {

    // // forEach
    // callbacks.forEach(cb => {
    //   val = cb(val);
    // });
    // return val;

    // reduce
    return callbacks.reduce((acc, currCb) => acc = currCb(acc), val);
}

function suffixCipher(sentence, cipher) {
    // Your code here
    let newSentence = [];

    sentence.split(' ').forEach(word => {
        let usedCipher = false;

        for (let suffix in cipher) {
            if (word.endsWith(suffix)) {
                newSentence.push(cipher[suffix](word));
                usedCipher = true;
            }
        }

        if (!usedCipher) {
            newSentence.push(word);
        }
    })
    return newSentence.join(' ');
}
