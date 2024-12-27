var evalRPN = function (tokens) {
  function cal(a, b, op) {
    if (op == "+") {
      return a + b;
    }
    if (op == "-") {
      return a - b;
    }
    if (op == "/") {
      return Math.trunc(a / b);
    }
    if (op == "*") {
      return a * b;
    }
  }
  let stack = [];

  for (token of tokens) {
    if (token == "+" || token == "-" || token == "/" || token == "*") {
      let b = stack.pop();
      let a = stack.pop();

      let result = cal(a, b, token);

      stack.push(result);
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));