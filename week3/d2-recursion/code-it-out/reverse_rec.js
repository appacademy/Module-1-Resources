function reverse_rec(string) {
    if (string.length === 0) {
        // base case - string.length === 0;
        return '';
    }

    let sub_str = reverse_rec(string.slice(0, string.length - 1));
    // recursive case - while string.length > 0
    // recursive step - string.slice(0, string.length - 1)

    return string[string.length - 1] + sub_str;
}

console.log(reverse_rec('lr'));
