function countdown(num) {
    debugger;
    if (num === 0) {
        // base case - num === 0
        return;
    }
    console.log(num);
    countdown(num - 1); // recursive step - num - 1
    // recursive case - num > 0
    debugger;
}

countdown(2);

debugger;
