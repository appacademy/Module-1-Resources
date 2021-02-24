function intervalCount(cb, count, delay) {
    const intervalObj = setInterval(function () {
        cb();
        count--;

        if (count === 0) {
            clearInterval(intervalObj);
        }
    }, delay);
}

intervalCount(
    function () {
        console.log('hello');
    },
    5,
    1000
);
