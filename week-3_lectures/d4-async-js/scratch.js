function blockingTheThread() {
    while (true) {}
}

setTimeout(function () {
    console.log('times up!');
}, 1000);

blockingTheThread(); // prints:

