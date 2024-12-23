var finalPrices = function (prices) {
  let stack = [];
  let result = [...prices];
  let n = prices.length;

  for (i = 0; i < n; i++) {
    while (stack.lenth != 0 && prices[i] <= prices[stack[stack.length - 1]]) {
      result[stack[stack.length - 1]] -= prices[i];
      stack.pop();
    }
    stack.push(i);
  }
  return result;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
