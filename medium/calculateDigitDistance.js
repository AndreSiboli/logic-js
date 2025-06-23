function calculateDigitDistance(num1, num2) {
  const formating = (num) => String(num).split("").map(Number);
  const firstArr = formating(num1);
  const secondArr = formating(num2);

  return firstArr.reduce((prev, curr, i)=> prev + Math.abs(curr - secondArr[i]), 0)
}

console.log(calculateDigitDistance(111, 222));
