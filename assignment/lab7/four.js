//built-in objects of js

// Math Object
// Provides mathematical constants and functions
console.log("PI value:", Math.PI);
console.log("Square root of 16:", Math.sqrt(16));
console.log("Random number (0-1):", Math.random());

// Date Object
// Used to work with dates and times
let today = new Date();
console.log("Current Date:", today);
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() +1); // Months are 0-based

//String Object
// Provides methods to manipulate text
let str = "Hello JavaScript";
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Substring:", str.substring(0, 5));

//Number Object
// Useful for number conversions and properties
let num = 123.456;
console.log("Fixed to 2 decimals:", num.toFixed(2));
console.log("Is Integer?", Number.isInteger(num));
