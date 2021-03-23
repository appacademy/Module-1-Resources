function countdown(num) {
    if (num === 0) {
        return num;
    }

    countdownReturn = countdown(num - 1);

    return num;
}

console.log(countdown(2));
