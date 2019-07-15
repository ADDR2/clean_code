// Bad
function doSomething(isValid, isComplex) {
    const myVar = isValid ? 1 : isComplex ? 2 : 0;

    // More code
}

// Good
function doSomethingElse(isValid, isComplex) {
    let myVar;
    
    if (isValid) myVar = 1;
    else myVar = isComplex? 2 : 0;

    // More code
}