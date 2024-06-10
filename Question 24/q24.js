// Tests for equality and inequality with strings.
console.log("Testing equality with strings:");
console.log('Pizza' === 'Pizza'); // True.
console.log('Pizza' !== 'Pizza'); // False.
// Tests using the lower case function.
console.log("Tests using the lower case function");
console.log("Pizza".toLowerCase() === "pizza"); // True.
console.log("Pizza".toLowerCase() !== "pizza"); // False.
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
console.log(" Numerical tests involving equality and inequality");
console.log(10 > 5); // True.
console.log(10 < 5); // False.
console.log(10 >= 5); // True.
console.log(10 <= 5); // False.
// Tests using "and" and "or" operators.
console.log("Tests with 'and' and 'or':");
var truee = 10 > 5;
var falsee = 5 > 10;
console.log(truee && falsee); // False.
console.log(truee || falsee); // True.
// Test whether an item is in a array.
var vegetables = ["Onion", "Lady Finger", "Tomoto"];
console.log("Test whether an item is in a array");
console.log(vegetables.includes("Tomoto")); // True.
console.log("Test whether an item is not in a array.");
console.log(vegetables.includes("Carrot")); // False.
