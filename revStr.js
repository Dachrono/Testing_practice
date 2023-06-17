function reverseString(string) {
    const revStr = [...string].reverse().join('');
    return revStr;
}

module.exports = reverseString