function solution(s) {
  const stack = [];
  let answer = '';

  for (const c of s) {
    if (c === '(') stack.push(c);
    else if (c === ')') stack.pop();
    else {
      if (stack.length === 0) answer += c;
    }
  }
  return answer;
}

const solution1 = s => {
  const stack = [];
  for (const c of s) {
    if (c === ')') {
      while (stack.pop() !== '('); // 여는 괄호 만날 때까지 stack 위에서부터 pop
    } else {
      // 닫는 괄호를 제외한 나머지는 stack에 담기
      stack.push(c);
    }
  }

  return stack.join('');
};

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution1(str));
