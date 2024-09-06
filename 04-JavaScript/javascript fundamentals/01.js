function outerFunction(param) {
    let outerVar = "Outer variable value";

    return function innerFunction() {
        console.log("Parameter from outerFunction: " + param);
        console.log("Variable from outerFunction: " + outerVar);
    };
}

let innerFunc = outerFunction("Hello");
innerFunc(); // Even after outerFunction has finished, innerFunction can access both 'param' and 'outerVar'
