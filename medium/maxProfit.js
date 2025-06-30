function maxProfit(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
}

console.log(maxProfit([20, 50, 70, 10, 60]));
console.log(maxProfit([70, 10, 50, 30, 60, 40]));

// Write a function to find the maximum profit that can be made by buying and selling stocks.

// Instructions
// Given an array prices, representing the price of a stock each day, return the maximum profit that can be made by buying and selling the stock multiple times based on these rules:

// Buy or sell stock any day.
// Only one transaction per day.
// Only hold one stock at a time (sell before buying again).
// For example, given the prices [20, 50, 70, 10, 60]:

// On the 1st day, the stock price is 20. We buy it.
// On the 3rd day, the price is 70. We sell it, gaining a profit of 50 (70 - 20).
// On the 4th day, the price is 10. We buy it again.
// On the 5th day, the price is 60. We sell it, gaining an additional profit of 50 (60 - 10).
// Hence, the profit is 100 because the function calculates the total profit by summing up the differences between consecutive days where the price increases: (50-20) + (70-50) + (60-10) = 30 + 20 + 50 = 100.

// Example
// For this input
// prices[] = [70, 10, 50, 30, 60, 40]

// the result should be:
// 70

// Reason: Here,
// We don't buy stock on the 1st day as the price is too high.
// On the 2nd day, price of stock is 10. Buying it leaves us with a loss of -10.
// We immediately sell the stock on 3rd day to gain a profit of 50 - 10 = 40.
// On the 4th day, we buy stock again to have a profit of 40 - 30 = 10.
// Since the 5th day has a better price than the 6th day, we sell the stock on the 5th day to gain a profit of 10 + 60 = 70.
