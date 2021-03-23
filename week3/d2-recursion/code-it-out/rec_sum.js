function rec_sum(n) {
    debugger;
    if (n === 1) {
        // base case - n === 1
        return 1;
    }

    let sum = rec_sum(n - 1); // recursive case - n > 1
    // recursive step - n - 1
    debugger;
    return sum + n;
}

console.log(rec_sum(3));
