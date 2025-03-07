var closestPrimes = function (left, right) {
  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let stack = [];

  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      stack.push(i);
    }
  }

  let closesPair = [-1, -1];
  let min = Infinity;
  for (let j = 1; j < stack.length; j++) {
    let minDistance = Math.abs(stack[j - 1] - stack[j]);
    if (min > minDistance) {
      min = minDistance;
      closesPair = [stack[j - 1], stack[j]];
    }
  }

  return closesPair;
};
console.log(closestPrimes(12854, 130337));

console.log(closestPrimes(4, 6));
