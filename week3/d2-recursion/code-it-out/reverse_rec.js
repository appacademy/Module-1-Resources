'esuoh'

function reverse(string) {
    if (string.length === 0) {
        return '';
    }

    let sub_str = 'suoh'

    return 'e' + 'suoh'
}

console.log(reverse('house'));
/*******************************/
function reverse(string) {
    if (string.length === 0) {
        return '';
    }

    let sub_str = 'uoh'

    return 's' + 'uoh'
}

console.log(reverse('hous'));
/*************** ****************/
function reverse(string) {
    if (string.length === 0) {
        return '';
    }

    let sub_str = 'oh'

    return 'u' + 'oh'
}

console.log(reverse('hou'));
/*************** ****************/
function reverse(string) {
    if (string.length === 0) {
        return '';
    }

    let sub_str = 'h'

    return 'o' + 'h'
}

console.log(reverse('ho'));
/*************** ****************/
function reverse(string) {
    if (string.length === 0) {
        return '';
    }

    let sub_str = ""

    return 'h' + ""
}

console.log(reverse('h'));
/*************** ****************/
function reverse(string) {
    if (string.length === 0) {
        return ''; // ""
    }

    let sub_str = reverse(string.slice(0, string.length - 1));

    return string[string.length - 1] + sub_str;
}

console.log(reverse(''));
