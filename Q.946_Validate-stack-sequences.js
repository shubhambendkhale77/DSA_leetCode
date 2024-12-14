var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let j = 0;
  let n = popped.length;

  for (i = 0; i < n; i++) {
    stack.push(pushed[i]);
    while (stack.length > 0 && stack[stack.length - 1] == popped[j]) {
      stack.pop();
      j++;
    }
  }
  return stack.length === 0;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
