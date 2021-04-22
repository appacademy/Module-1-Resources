

/*******************************/
function range(start, end) {
    if (end <= start) {
        return [];
    }
    return [start].concat(range(start + 1, end))
}

//range(1, 1) === []
console.log(range(1,20))