 // Create an array
let fruits = ["Apple", "Banana", "Cherry"];

console.log("Original Array:", fruits);

fruits.push("Mango");
console.log("After push:", fruits);


fruits.pop();
console.log("After pop:", fruits);

//Add element at the beginning
fruits.unshift("Orange");
console.log("After unshift:", fruits);

//Remove first element
fruits.shift();
console.log("After shift:", fruits);

//Extract a portion of the array
//(not including 2)
let slicedFruits = fruits.slice(0, 2);
console.log("Sliced Array (0 to 2):", slicedFruits);

// Original array remains unchanged
console.log("Original Array after slice:", fruits);
