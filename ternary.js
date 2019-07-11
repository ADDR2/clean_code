// Bad
let myVar = 3 + 4 > 8 ? 2 : 5 - 2 === 4 ? 3 : 5; 

// Good
if (3 + 4 > 8) myVar = 2;
else myVar = (5 - 2 === 4)? 3 : 5;