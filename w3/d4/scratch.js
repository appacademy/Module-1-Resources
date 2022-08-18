function somethingSlow2(n) {
    if (n <= 2) return 1
    return somethingSlow2(n-1) + somethingSlow2(n-2)
}

module.exports = somethingSlow2   