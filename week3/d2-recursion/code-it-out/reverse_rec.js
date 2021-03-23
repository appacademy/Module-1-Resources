function reverse_rec(string) {
    if (string.length === 0) {
        return '';
    }

    let sub_str = reverse_rec(string.slice(0, string.length - 1));

    return string[string.length - 1] + sub_str;
}

reverse_rec('lr');
