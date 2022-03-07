// 내 풀이
function solution(s) {
  const stack = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === '(') {
        result += stack.length;
      } else {
        result += 1;
      }
    }
  }
  return result;
}

// 선생님 풀이
function solution1(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length;
      else answer += 1;
    }
  }
  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution1(a));
