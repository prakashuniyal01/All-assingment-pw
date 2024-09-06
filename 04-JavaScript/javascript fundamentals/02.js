function regexMatch(pattern, string) {
    let regex = new RegExp(pattern);
    return regex.test(string);
}

console.log(regexMatch("\\d+", "123abc")); // true (matches digits)
console.log(regexMatch("\\d+", "abc"));    // false (no digits)
