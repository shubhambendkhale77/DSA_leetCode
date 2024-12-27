var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let profit = 0;
  for (i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else {
      let result = prices[i] - buyPrice;

      profit = Math.max(result, profit);
    }
  }
  console.log(profit);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
