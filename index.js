// EXAMPLE 1 - Convert a number to Hexadecimal in JavaScript

const num = 42;

// ✅ Convert to Hex
const hex = num.toString(16);
console.log(hex); // 👉️ "2a"

// ✅ Use parentheses when calling toString directly
const hex2 = (42).toString(16);
console.log(hex2); // 👉️ "2a"

// ✅ Parse back to number
const parsed = parseInt(hex, 16);
console.log(parsed); // 👉️ 42

// ------------------------------------------------------------------

// // EXAMPLE 2 - Calling `Number.toString()` on a number literal

// // ✅ Use parentheses when calling toString directly
// const hex2 = (42).toString(16);
// console.log(hex2); // 👉️ "2a"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Parsing the hexadecimal value back to a number

// const num = 42;

// // ✅ Convert to Hex
// const hex = num.toString(16);
// console.log(hex); // 👉️ "2a"

// // ✅ Parse back to number
// const parsed = parseInt(hex, 16);
// console.log(parsed); // 👉️ 42
