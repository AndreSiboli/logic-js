function doesCargoFit(boxVolume, cargoLength, cargoWidth, cargoHeight) {
  const cargoVolume = cargoLength * cargoWidth * cargoHeight;
  return boxVolume >= cargoVolume;
}

console.log(doesCargoFit(120, 4, 5, 6));
console.log(doesCargoFit(500, 10, 5, 10));
console.log(doesCargoFit(100, 4, 5, 6));

// Write a function to check if the cargo can fit into the box.

// Instructions
// Given the dimensions of a cargo and the volume of a box, check if it fits in a box.

// A cargo fits in a box if its volume is less than or equal to the volume of the box.

// The formula to find volume is: volume = length x breadth x height.

// For example, if the box volume = 500 and the cargo dimensions are length = 10, width = 5, height = 10, the cargo volume is calculated as 10 * 5 * 10 = 500. Since the cargo volume equals the box volume, the function returns true.

// However, if the box volume = 100 and the cargo dimensions are length = 4, width = 5, height = 6, the cargo volume is calculated as 4 * 5 * 6 = 120. Since the cargo volume 120 is greater than the box volume 100, the function returns false.

// If the cargo fits, return true. Otherwise, return false.

// Example
// For this input
// boxVolume = 120
// cargoLength = 4
// cargoWidth = 5
// cargoHeight = 6

// the result should be:
// true

// Reason: The volume of the cargo (4 x 5 x 6 = 120) is equal to the volume of the box (120). So, the cargo fits.
