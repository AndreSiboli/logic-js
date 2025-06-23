function checkPronic(num) {
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (i * (i + 1) === num) {
      return "Pronic";
    }
  }
  return "Not Pronic";
}

console.log(checkPronic(42));
console.log(checkPronic(12));
console.log(checkPronic(1));
