"use strict";
// Function using a for-loop
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Function using a while-loop
function sumWhile(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
// Function using recursion
function sumRecursion(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers[0] + sumRecursion(numbers.slice(1));
}
// Function using array functional programming (reduce)
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}
// Testing the functions with template literals
console.log(`For-loop sum: ${sumFor([1, 2, 3, 4])}`); // Output: 10
console.log(`While-loop sum: ${sumWhile([1, 2, 3, 4])}`); // Output: 10
console.log(`Recursion sum: ${sumRecursion([1, 2, 3, 4])}`); // Output: 10
console.log(`Functional sum: ${sumTheFunctionalWay([1, 2, 3, 4])}`); // Output: 10
