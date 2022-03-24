//no return 
function printSum(a, b) {
    console.log(a + b);
}
// with return
function sum(a, b = 0) {
    return a + b;
}
// storing function in variable
const storedPrintSum = function (a, b = 0) {
    console.log(a + b);
}
// storing arrow function in variable
const arrowSum = (a, b = 0) => {
    console.log(a + b);
}
// storing arrow function in variable with implicit return
const arrowSumPlus = (a, b = 0) => a + b;


printSum(2, 3);
console.log(sum(1, 2));
storedPrintSum(1, 3);
arrowSum(3, 3);
console.log(arrowSumPlus(3, 7));