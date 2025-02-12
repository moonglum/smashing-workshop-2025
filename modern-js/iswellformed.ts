
// Example of toWellFormed() method
const malformedString = "Hello\uD800World";
console.log("Here's a string:", malformedString);
console.log("Is it well formed?", malformedString.isWellFormed());
console.log("Well formed version:", malformedString.toWellFormed());
console.log("Is the new one well formed?", malformedString.toWellFormed().isWellFormed());
