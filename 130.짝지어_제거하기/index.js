const solution = (s) => {
  const stack = [];
  for (const c of s) {
    if (stack.length === 0 || stack[stack.length - 1] !== c) {
      stack.push(c);
    } else if (stack[stack.length - 1] === c) {
      stack.pop();
    }
    // console.log(stack);
  }
  return stack.length === 0 ? 1 : 0;
};

console.log(solution('baabaa'));
console.log(solution('cdcd'));
