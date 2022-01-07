function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.splice(stack.length - 1, 1);
      }
    }
  }
  console.log(stack);
  return stack.length === 0 ? 'YES' : 'NO';
}

let a = '(()(()))(()'; // NO
// let a = '(())()'; // YES
console.log(solution(a));
