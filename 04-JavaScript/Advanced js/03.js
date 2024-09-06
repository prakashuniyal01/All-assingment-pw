const Calculator = {
    result: 0,

    add(value) {
        this.result += value;
        return this;
    },

    subtract(value) {
        this.result -= value;
        return this;
    },

    multiply(value) {
        this.result *= value;
        return this;
    },

    divide(value) {
        this.result /= value;
        return this;
    }
};

// Usage:
Calculator.add(10).subtract(2).multiply(3).divide(4);
console.log(Calculator.result);
