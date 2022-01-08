function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      if (stack[stack.length - 1] === '(') {
        // stack.splice(stack.length - 1, 1);
        stack.pop();
      }
    }
  }
  // console.log(stack);
  return stack.length === 0 ? 'YES' : 'NO';
}

// 선생님 풀이 
const solution1 = s => {
  let answer = 'YES';
  const stack = [];

  for (const x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO'; // 짝이 안맞을 경우, early return 'NO'
      stack.pop();
    }
  }
  if (stack.length > 0) {
    answer = 'NO';
  }

  return answer;
};

// let a = '(()(()))(()'; // NO
let a = '(())()'; // YES
console.log(solution1(a));
