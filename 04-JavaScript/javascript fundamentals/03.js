function searchCharacterClasses(string) {
    let digits = string.match(/\d/g); // matches digits
    let upperCase = string.match(/[A-Z]/g); // matches uppercase letters
    let lowerCase = string.match(/[a-z]/g); // matches lowercase letters
    let specialChars = string.match(/[^a-zA-Z0-9]/g); // matches special characters

    return {
        digits: digits || [],
        upperCase: upperCase || [],
        lowerCase: lowerCase || [],
        specialChars: specialChars || []
    };
}

console.log(searchCharacterClasses("Hello123!@#World"));
