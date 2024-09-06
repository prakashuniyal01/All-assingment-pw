Array.prototype.customIncludes = function(value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};

// Usage:
const arr = [1, 2, 3];
console.log(arr.customIncludes(2));  // true
console.log(arr.customIncludes(4));  // false
