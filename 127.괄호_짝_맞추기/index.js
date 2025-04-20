const solution = (s) => {
  let result = true;
  const stack = [];
  for (const char of s) {
    if (char === '(') {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== '(') {
        return false;
      }
    }
    // console.log(stack);
  }

  return stack.length === 0;
};

console.log(solution('(())()'));
console.log(solution('((())()'));
console.log(solution(')'));
console.log(solution('('));
