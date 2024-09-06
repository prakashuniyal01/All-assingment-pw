function extractDateParts(pattern, string) {
    let regex = new RegExp(pattern);
    let match = regex.exec(string);
    if (match) {
        return {
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return "No match found";
    }
}

console.log(extractDateParts("(\\d{2})-(\\d{2})-(\\d{4})", "Date: 15-08-2023"));
