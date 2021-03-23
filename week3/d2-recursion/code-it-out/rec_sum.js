function rec_sum(n) {
    if (n === 1) {
        return 1;
    }

    let sum = rec_sum(n - 1);

    return sum + n;
}

rec_sum(3);
